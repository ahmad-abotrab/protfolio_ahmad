"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
}

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const styles = getComputedStyle(document.documentElement)
    const lineColor = styles.getPropertyValue("--muted-foreground").trim() || "rgba(148,163,184,0.35)"
    const dotColor = styles.getPropertyValue("--foreground").trim() || "rgba(255,255,255,0.8)"

    const isMobile = window.innerWidth < 768
    const count = isMobile ? 50 : 100
    const maxSpeed = isMobile ? 0.3 : 0.5
    const connectDist = isMobile ? 90 : 120
    const dotRadius = 1.4
    const pointerDist = connectDist * 1.4

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * maxSpeed,
      vy: (Math.random() - 0.5) * maxSpeed,
    }))

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.lineWidth = 0.75
      ctx.strokeStyle = `${lineColor}`
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectDist) {
            const alpha = 1 - dist / connectDist
            ctx.globalAlpha = alpha * 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      // Pointer connections and influence
      const mouse = mouseRef.current
      if (mouse.active) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < pointerDist) {
            const alpha = 1 - dist / pointerDist
            ctx.globalAlpha = alpha
            ctx.beginPath()
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = lineColor
            ctx.stroke()
            ctx.globalAlpha = 1
            const force = alpha * 0.03
            p.vx -= dx * force * 0.001
            p.vy -= dy * force * 0.001
            if (p.vx > maxSpeed) p.vx = maxSpeed
            if (p.vx < -maxSpeed) p.vx = -maxSpeed
            if (p.vy > maxSpeed) p.vy = maxSpeed
            if (p.vy < -maxSpeed) p.vy = -maxSpeed
          }
        }
      }
      ctx.globalAlpha = 1

      // Draw dots and update positions
      ctx.fillStyle = dotColor
      for (const p of particles) {
        const dxm = p.x - mouseRef.current.x
        const dym = p.y - mouseRef.current.y
        const dm = Math.sqrt(dxm * dxm + dym * dym)
        const nearMouse = mouseRef.current.active && dm < pointerDist
        const r = nearMouse ? dotRadius + (1 - dm / pointerDist) * 1.5 : dotRadius
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1
      }

      animationRef.current = requestAnimationFrame(step)
    }
    animationRef.current = requestAnimationFrame(step)

    const onResize = () => {
      resize()
    }
    window.addEventListener("resize", onResize)
    const onMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
      const xPct = (e.clientX / window.innerWidth) * 100
      const yPct = (e.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty("--mouse-x", `${xPct}%`)
      document.documentElement.style.setProperty("--mouse-y", `${yPct}%`)
    }
    const onLeave = () => {
      mouseRef.current.active = false
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerleave", onLeave)
    window.addEventListener("blur", onLeave)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
      window.removeEventListener("blur", onLeave)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(1200px circle at var(--mouse-x,10%) var(--mouse-y,10%), rgba(16,185,129,0.08), transparent 60%)",
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

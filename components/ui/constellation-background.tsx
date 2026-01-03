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

      // Draw dots and update positions
      ctx.fillStyle = dotColor
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2)
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

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ background: "radial-gradient(1200px circle at 10% 10%, rgba(16,185,129,0.08), transparent 60%)" }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}


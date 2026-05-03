"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Ahmad delivered a robust backend system that scaled seamlessly under high load. His attention to code quality and communication throughout the project was exceptional.",
    name: "Sarah Mitchell",
    role: "Product Manager",
    avatar: "/placeholder.jpg",
    initials: "SM",
    avatarBg: "#E8A030",
  },
  {
    id: 2,
    quote:
      "Working with Ahmad was a great experience. He built our data pipeline from scratch and the results have been transformative for our analytics team.",
    name: "James Holloway",
    role: "CTO, TechStart",
    avatar: "/placeholder.jpg",
    initials: "JH",
    avatarBg: "#2B6060",
  },
  {
    id: 3,
    quote:
      "Ahmad's full-stack expertise and problem-solving skills helped us launch our platform on time. He is reliable, skilled, and a pleasure to work with.",
    name: "Lina Kareem",
    role: "Startup Founder",
    avatar: "/placeholder.jpg",
    initials: "LK",
    avatarBg: "#E05025",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(1);

  const prev = () => setActiveIdx((i) => Math.max(0, i - 1));
  const next = () => setActiveIdx((i) => Math.min(testimonials.length - 1, i + 1));

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "#F4EFE3" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#1A2535" }}
          >
            People talk about us
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: "#7A8699" }}
          >
            I love solving real problems for clients. Here is what some of
            them have to say about working together.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative flex items-center justify-center gap-6">

          {/* Left ghost card */}
          {activeIdx > 0 && (
            <motion.div
              key={`left-${activeIdx}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden lg:block flex-shrink-0 w-72 rounded-2xl p-6 border"
              style={{ borderColor: "#D8D2C4", backgroundColor: "#ECE7D9" }}
            >
              <p
                className="text-sm italic leading-relaxed line-clamp-4"
                style={{ color: "#7A8699" }}
              >
                &ldquo;{testimonials[activeIdx - 1].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: testimonials[activeIdx - 1].avatarBg }}
                >
                  {testimonials[activeIdx - 1].initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#1A2535" }}>
                    {testimonials[activeIdx - 1].name}
                  </p>
                  <p className="text-xs" style={{ color: "#7A8699" }}>
                    {testimonials[activeIdx - 1].role}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Center active card */}
          <motion.div
            key={`center-${activeIdx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-shrink-0 w-full max-w-md rounded-2xl p-8 shadow-xl border"
            style={{ borderColor: "#D8D2C4", backgroundColor: "#ECE7D9" }}
          >
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
                style={{ backgroundColor: testimonials[activeIdx].avatarBg }}
              >
                {testimonials[activeIdx].initials}
              </div>
            </div>

            {/* Quote */}
            <p
              className="text-base italic leading-relaxed text-center mb-6"
              style={{ color: "#7A8699" }}
            >
              &ldquo;{testimonials[activeIdx].quote}&rdquo;
            </p>

            {/* Name & Role */}
            <div className="text-center">
              <p className="text-base font-bold" style={{ color: "#1A2535" }}>
                {testimonials[activeIdx].name}
              </p>
              <p className="text-sm" style={{ color: "#7A8699" }}>
                {testimonials[activeIdx].role}
              </p>
            </div>
          </motion.div>

          {/* Right ghost card */}
          {activeIdx < testimonials.length - 1 && (
            <motion.div
              key={`right-${activeIdx}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden lg:block flex-shrink-0 w-72 rounded-2xl p-6 border"
              style={{ borderColor: "#D8D2C4", backgroundColor: "#ECE7D9" }}
            >
              <p
                className="text-sm italic leading-relaxed line-clamp-4"
                style={{ color: "#7A8699" }}
              >
                &ldquo;{testimonials[activeIdx + 1].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: testimonials[activeIdx + 1].avatarBg }}
                >
                  {testimonials[activeIdx + 1].initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#1A2535" }}>
                    {testimonials[activeIdx + 1].name}
                  </p>
                  <p className="text-xs" style={{ color: "#7A8699" }}>
                    {testimonials[activeIdx + 1].role}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Pagination dots + arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            disabled={activeIdx === 0}
            className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-30 transition-all hover:bg-white"
            style={{ borderColor: "#D8D2C4" }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" style={{ color: "#1A2535" }} />
          </button>

          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="rounded-full transition-all"
              style={{
                width: i === activeIdx ? "28px" : "10px",
                height: "10px",
                backgroundColor: i === activeIdx ? "#1A2535" : "#D8D2C4",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}

          <button
            onClick={next}
            disabled={activeIdx === testimonials.length - 1}
            className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-30 transition-all hover:bg-white"
            style={{ borderColor: "#D8D2C4" }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" style={{ color: "#1A2535" }} />
          </button>
        </div>

      </div>
    </section>
  );
}

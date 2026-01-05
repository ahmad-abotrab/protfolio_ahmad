"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, ExternalLink, Award, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { educationConfig } from "@/config/education.config";
import type { Degree, Achievement, Certification } from "@/types";
import { toast } from "sonner";
import Image from "next/image";

function DegreeCard({ degree, index }: { degree: Degree; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors h-full">
        <div className="flex items-start gap-4">
          <div className="relative overflow-hidden w-18 h-18 rounded-lg bg-primary/10 border border-primary/30 shrink-0">
            <Image
              src={degree.logo}
              alt={`${degree.institution} logo`}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-foreground">{degree.degree}</h3>
              <Badge
                variant={
                  degree.status === "In Progress" ? "default" : "secondary"
                }
                className={
                  degree.status === "In Progress"
                    ? "bg-primary/10 text-primary border-primary/30 shrink-0"
                    : "shrink-0"
                }
              >
                {degree.status}
              </Badge>
            </div>

            <p className="text-primary text-sm font-medium mb-2">
              {degree.institution}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {degree.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {degree.startYear} — {degree.endYear}
              </span>
            </div>

            {degree.description && (
              <p className="text-muted-foreground text-sm mt-3">
                {degree.description}
              </p>
            )}
          </div>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </motion.div>
  );
}

function AchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {achievement.image ? (
        <a
          href={achievement.image}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors h-full">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                <Trophy className="h-5 w-5 text-amber-500" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {achievement.title}
                </h4>
                <Badge variant="outline" className="text-xs mb-2">
                  {achievement.position}
                </Badge>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{achievement.location}</span>
                  <span>•</span>
                  <span>{achievement.year}</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div
          className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors h-full cursor-pointer"
          onClick={() =>
            toast.info("Coming soon", {
              className:
                "bg-primary text-primary-foreground border border-primary/30",
              duration: 3000,
            })
          }
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
              <Trophy className="h-5 w-5 text-amber-500" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground text-sm mb-1">
                {achievement.title}
              </h4>
              <Badge variant="outline" className="text-xs mb-2">
                {achievement.position}
              </Badge>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{achievement.location}</span>
                <span>•</span>
                <span>{achievement.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function CertificationItem({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.a
      ref={ref}
      href={certification.url || "#"}
      target={certification.url ? "_blank" : undefined}
      rel={certification.url ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        if (!certification.url) {
          e.preventDefault();
          toast.info("Coming soon", {
            className:
              "bg-primary text-primary-foreground border border-primary/30",
            duration: 3000,
          });
        }
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.2, delay: index * 0.06 }}
      className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <Award className="h-5 w-5 text-primary" />
        <div>
          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {certification.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {certification.issuer} • {certification.date}
          </p>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </motion.a>
  );
}

export function EducationSection() {
  const { title, degrees, certifications, achievements } = educationConfig;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Degrees */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Academic Background
            </h3>
            {degrees.map((degree, index) => (
              <DegreeCard key={degree.id} degree={degree} index={index} />
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((certification, index) => (
                <CertificationItem
                  key={certification.name}
                  certification={certification}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

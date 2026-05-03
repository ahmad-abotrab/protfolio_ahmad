"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Apple, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsConfig } from "@/config/projects.config";
import type { Project } from "@/types";
import { SkillChip } from "@/components/ui/skill-chip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col min-h-[26rem] sm:min-h-[28rem] lg:min-h-[30rem]">
        {/* Project Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />

          {/* Featured Badge */}
          {/* {project.featured && (
            <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
              Featured
            </Badge>
          )} */}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <Badge variant="outline" className="text-xs shrink-0">
              {project.category}
            </Badge>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.technologies.slice(0, 6).map((tech) => (
              <SkillChip
                key={tech.name}
                label={tech.name}
                icon={tech.icon}
                className="px-2 py-1.5"
              />
            ))}
            {project.technologies.length > 6 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 6}
              </Badge>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-2 mt-auto">
            {project.links.website && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-1.5 bg-transparent"
              >
                <Link
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Visit
                </Link>
              </Button>
            )}
            {project.links.github && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-1.5 bg-transparent"
              >
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </Link>
              </Button>
            )}
            {project.links.appStore && (
              <Button asChild variant="ghost" size="sm" className="gap-1.5">
                <Link
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Apple className="h-3.5 w-3.5" />
                </Link>
              </Button>
            )}
            {project.links.playStore && (
              <Button asChild variant="ghost" size="sm" className="gap-1.5">
                <Link
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="h-3.5 w-3.5" />
                </Link>
              </Button>
            )}
          </div>

          {/* {project.screenshots && project.screenshots.length > 0 && (
            <div className="mt-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.screenshots.map((src, i) => (
                    <CarouselItem
                      key={`${project.id}-shot-${i}`}
                      className="basis-2/3 sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="relative h-28 sm:h-32 rounded-md overflow-hidden border border-border">
                        <Image
                          src={src}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill
                          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                          className="object-cover object-center"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-2" />
                <CarouselNext className="-right-2" />
              </Carousel>
            </div>
          )} */}

          {project.references && project.references.length > 0 && (
            <div className="mt-4">
              <div className="text-xs text-muted-foreground mb-1">
                References
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.references.map((ref) => (
                  <Badge key={ref.id} variant="outline" className="text-xs">
                    <Link
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {ref.name}
                    </Link>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const { title, subtitle, projects } = projectsConfig;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-[calc(1rem+4%)] sm:px-[calc(1.5rem+4%)] lg:px-[calc(2rem+4%)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 text-center"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0.7 }}
          animate={isInView ? { opacity: [0.7, 1, 0.7] } : {}}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
          className="text-center mt-6"
        ></motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

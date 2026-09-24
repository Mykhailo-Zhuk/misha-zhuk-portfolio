"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section
      id="projects" className="scroll-mt-24"
      className="border-b border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured projects
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#5B9CFF]" />
          <p className="mt-4 max-w-2xl text-muted-foreground">
            6 hand-picked case studies from 67+ shipped projects. Each one
            represents a different domain and a reusable pattern.
          </p>
        </Reveal>

        <div className="mt-12 space-y-16">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={Math.min(idx * 0.04, 0.2)}>
              <article
                className={`grid gap-6 md:grid-cols-2 md:items-center ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#7C5CFC]/0 via-transparent to-[#5B9CFF]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#7C5CFC]">
                      Project {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <dl className="grid grid-cols-3 gap-4 border-y border-border py-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="text-xs text-muted-foreground">
                          {metric.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-[#7C5CFC]"
                      >
                        <Github className="h-4 w-4" />
                        Source
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-[#5B9CFF]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                    {!project.github && !project.demo && (
                      <span className="text-sm italic text-muted-foreground">
                        NDA — case study available on request
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
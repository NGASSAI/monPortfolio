'use client';

// Section Projets affichant les réalisations avec image, technologies et liens GitHub/démo.
// Les projets sont fournis par data/portfolio.ts.
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const projectsData = projects;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Projets"
          subtitle="Découvrez mes réalisations récentes"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index: number) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full bg-sky-50">
                  <Image
                    src={project.image || '/placeholder.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        href={project.github}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        href={project.demo}
                        variant="primary"
                        size="sm"
                        className="flex-1"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Démo Live
                      </Button>
                    )}
                  </div>
                </motion.div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
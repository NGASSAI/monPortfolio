'use client';

// Section Certifications présentant les certificats obtenus et les formations complémentaires.
// Les informations proviennent du fichier data/portfolio.ts.
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  const certificationsData = certifications;

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Certifications"
          subtitle="Mes certifications et formations complémentaires"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {certificationsData.map((cert, index: number) => (
              <Card key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mb-4">
                    <Award className="text-sky-700" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {cert.issuer}
                  </Badge>
                  <p className="text-slate-600 text-sm">{cert.description}</p>
                </motion.div>
              </Card>
            ))} 
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

// Section Formation listant les diplômes et le parcours académique.
// Utilise les données stockées dans data/portfolio.ts.
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { education } from '@/data/portfolio';

export default function Experience() {
  const educationData = education;

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Formation"
          subtitle="Mon parcours académique et mes diplômes"
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {educationData.map((item, index: number) => (
              <Card key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="flex flex-col md:flex-row md:items-start gap-4"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-sky-700" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                    <p className="text-gray-600 mb-2">{item.institution}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="mr-2" size={16} />
                      {item.period}
                    </div>
                    <p className="text-gray-700">{item.description}</p>
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
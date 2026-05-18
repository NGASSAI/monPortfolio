'use client';

// Section Compétences affichant les catégories de technologies maîtrisées.
// Les données viennent du fichier data/portfolio.ts.
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import Badge from '@/components/ui/Badge';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  const categories = skillCategories;

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Compétences"
          subtitle="Les technologies et outils que je maîtrise"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex: number) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
              >
                <div className="bg-white rounded-xl shadow-sm border border-sky-50 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex: number) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
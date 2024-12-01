import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Smartphone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { AnimatedText } from './components/AnimatedText';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import { LoadingScreen } from './components/LoadingScreen';
import { useStore } from './store/useStore';
import { translations } from './data/translations';
import { projects } from './data/projects';
import clsx from 'clsx';

function App() {
  const { isDarkMode, language } = useStore();
  const t = translations[language];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className={clsx(
        'min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-dark-accent text-gray-900 dark:text-white transition-colors duration-300',
        { 'rtl:text-right': language === 'ar' }
      )}>
        <Navbar />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 dark:from-pink-900/20 dark:to-purple-900/20 animate-gradient" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <AnimatedText
                  text={t.hero.greeting}
                  className="text-5xl md:text-6xl font-bold mb-4"
                  delay={0.2}
                />
                <AnimatedText
                  text={t.hero.name}
                  className="text-5xl md:text-6xl font-bold text-pink-600 dark:text-pink-400 mb-6"
                  delay={0.4}
                />
                <AnimatedText
                  text={t.hero.role}
                  className="text-2xl md:text-3xl text-purple-600 dark:text-purple-400 mb-8"
                  delay={0.6}
                />
                <AnimatedText
                  text={t.hero.description}
                  className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                  delay={0.8}
                />
              </motion.div>
            </div>
          </section>

          {/* Rest of the sections */}
          <About />
          
          <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">{t.skills.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <SkillCard
                  icon={Code2}
                  title={t.skills.frontend.title}
                  description={t.skills.frontend.description}
                  delay={0.2}
                />
                <SkillCard
                  icon={Server}
                  title={t.skills.backend.title}
                  description={t.skills.backend.description}
                  delay={0.4}
                />
                <SkillCard
                  icon={Layout}
                  title={t.skills.design.title}
                  description={t.skills.design.description}
                  delay={0.6}
                />
                <SkillCard
                  icon={Smartphone}
                  title={t.skills.mobile.title}
                  description={t.skills.mobile.description}
                  delay={0.8}
                />
              </div>
            </div>
          </section>

          <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">{t.projects.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    delay={0.2 * index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">{t.contact.description}</p>
              </div>
              <ContactInfo />
              <ContactForm />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
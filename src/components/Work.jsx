import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';

const ExperienceCard = ({ title, content }) => (
  <motion.div
    className="bg-tertiary shadow-lg rounded-lg p-6 text-secondary flex flex-col gap-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <ul className="list-disc pl-5 text-sm leading-relaxed">
      {content.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </motion.div>
);

const SkillsList = ({ skills, title }) => (
  <div className="bg-secondary p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
    <ul className="grid grid-cols-2 gap-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-sm text-white">
          • {skill}
        </li>
      ))}
    </ul>
  </div>
);

const TechnicalSkills = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <SkillsList
      title="Frontend"
      skills={['React.js', 'JavaScript', 'HTML', 'CSS']}
    />
    <SkillsList
      title="Backend"
      skills={['Node.js', 'Express.js', 'Django', 'Golang']}
    />
    <SkillsList
      title="Databases"
      skills={['MongoDB', 'PostgreSQL', 'MySQL']}
    />
    <SkillsList
      title="Tools & Technologies"
      skills={['Git', 'Docker', 'REST APIs', 'GraphQL', 'Agile']}
    />
  </div>
);

const AboutSection = () => (
  <div className="bg-primary text-secondary px-6 py-16 flex justify-center">
    <div className="container mx-auto">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
      </motion.div>
      <div className="flex justify-center">
        <ExperienceCard
          title="Software Developer Intern – Eagle Eye Networks,  July 2024 - Jan 2025"
          content={[
            'Collaborated on 14+ microservices using Golang, Python (Django, DRF), and frontend technologies like Ractive.js and Bulma CSS, contributing to full-stack feature development and system improvements.',
            'Boosted unit and integration test coverage by 40%+ per service, mastering internal architectures, coding principles, and new programming languages.',
            'Designed and implemented a custom dashboard with Ractive.js, integrating 5+ APIs and managing backend data workflows using Django ORM.',
            'Optimized resource utilization by analyzing Grafana metrics, reducing memory and CPU usage by 30%+ through strategic scaling with Kubernetes and Concourse pipelines.',
            'Introduced robust logging practices by standardizing JSON log formats with unique request IDs, simplifying cross-service tracing and debugging. Logs were indexed into OpenSearch, enabling fast and precise filtering for improved operational insights, reducing troubleshooting time by 50%.',
            'Enhanced monitoring by deploying Prometheus on 5+ services, creating custom metrics, and visualizing critical performance indicators on Grafana dashboards.',
            'Streamlined service deployments by automating semantic versioning with Concourse pipelines, ensuring 100% consistency and reliability in releases.',
          ]}
        />
      </div>
    </div>
  </div>
);


const HeroBackground = () => (
  <div className="w-full flex justify-center items-center">
    <Canvas>
      {/* Three.js scene or custom components */}
    </Canvas>
  </div>
);

const Work = () => (
  <div className="relative flex flex-col justify-center items-center">
    {/* <HeroBackground /> */}
    <AboutSection />
  </div>
);

export default Work;

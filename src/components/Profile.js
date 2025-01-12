import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  const experiences = [
    {
      company: "ECS Limited",
      role: "Facilities Staff Project Manager",
      period: "August 2023 - Present",
      location: "Cleveland, Ohio",
      responsibilities: [
        "Building envelope commissioning process",
        "Performance of leak investigations",
        "Facade inspection and load testing",
        "Creating detailed drawings and specifications"
      ]
    },
    {
      company: "Bowling Green State University",
      role: "Graduate Assistant",
      period: "January 2022 - April 2023",
      location: "Bowling Green, Ohio",
      responsibilities: [
        "Assisting with presentations and models",
        "Design initiatives and research",
        "Software and equipment management"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Chandana Gutta
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Facilities Project Manager || Construction Management || Architect
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">AutoCAD</li>
                <li className="text-gray-600 dark:text-gray-300">Revit</li>
                <li className="text-gray-600 dark:text-gray-300">SketchUp</li>
                <li className="text-gray-600 dark:text-gray-300">Bluebeam</li>
                <li className="text-gray-600 dark:text-gray-300">Microsoft Office</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Professional Skills</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">Project Management</li>
                <li className="text-gray-600 dark:text-gray-300">Building Envelope Testing</li>
                <li className="text-gray-600 dark:text-gray-300">Construction Management</li>
                <li className="text-gray-600 dark:text-gray-300">Architectural Design</li>
                <li className="text-gray-600 dark:text-gray-300">Team Leadership</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Facilities Staff Project Manager",
      company: "ECS Limited",
      period: "August 2023 - Present",
      location: "Cleveland, Ohio",
      responsibilities: [
        "Building envelope commissioning process management",
        "Performance of leak investigations with spray testing",
        "Facade inspection and load testing",
        "Creating detailed drawings and specifications for bidding process",
        "Revitalizing exteriors of residential buildings"
      ]
    },
    {
      title: "Construction Materials Tester",
      company: "ECS Limited",
      period: "May 2023 - August 2023",
      location: "Cleveland, Ohio",
      responsibilities: [
        "Conducted testing of construction materials (soil, aggregate, asphalt, concrete, grout)",
        "Implemented quality assurance procedures",
        "Utilized various testing techniques and equipment",
        "Conducted proof roll tests for subgrade stability",
        "Maintained and calibrated testing equipment",
        "Collaborated with contractors and project managers"
      ]
    },
    {
      title: "Graduate Assistant",
      company: "Bowling Green State University",
      period: "January 2022 - April 2023",
      location: "Bowling Green, Ohio",
      responsibilities: [
        "Interacted with teachers and students in design sessions",
        "Assisted with presentations, drawings, and models",
        "Conducted research for design initiatives",
        "Managed design software and equipment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center"
        >
          Professional Experience
        </motion.h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-blue-600">{exp.company}</p>
                </div>
                <div className="text-gray-600">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AutoCAD",
                  "Revit",
                  "SketchUp",
                  "Bluebeam",
                  "Microsoft Office",
                  "Procore"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Project Management",
                  "Building Envelope Testing",
                  "Quality Control",
                  "Technical Documentation",
                  "Team Leadership",
                  "Problem Solving"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
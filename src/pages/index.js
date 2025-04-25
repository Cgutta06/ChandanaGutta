import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Head from 'next/head';
import { getImagePath, getDocumentPath } from '../utils/path-utils';
import SkillCategoryVisualization from '../components/charts/SkillCategoryVisualization';
import skillCategories from '../data/skillCategories';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef(null);
  // State for project visibility

  const [visibleProject, setVisibleProject] = useState(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideIn = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  });

  // Scroll progress animation for the progress indicator
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Professional experience data from resume
  const experiences = [
    {
      role: "Facilities Staff Project Manager",
      company: "ECS MIDWEST Limited",
      period: "Aug 2023 – Present",
      location: "Cleveland, OH",
      highlights: [
        "Managed multi-million-dollar projects focusing on structural rehabilitation and water infiltration remediation",
        "Coordinated complex projects ensuring compliance with ASTM standards and historical preservation requirements",
        "Specialized in building envelope systems and historic restoration",
        "Reduced project timelines by 15% through standardized testing protocols",
        "Implemented data-driven decision making with 12% improvement in diagnostic accuracy"
      ]
    },
    {
      role: "Construction Material Testing Intern",
      company: "ECS MIDWEST Limited",
      period: "May 2023 – Aug 2023",
      location: "Cleveland, OH",
      highlights: [
        "Executed ASTM standard testing protocols with 99% accuracy",
        "Analyzed testing results to identify material optimization opportunities",
        "Collaborated with project teams to implement field testing procedures",
        "Developed technical reports with actionable recommendations"
      ]
    },
    {
      role: "Junior Architect",
      company: "AN Architect",
      period: "Jan 2019 – Dec 2021",
      location: "Bengaluru, India",
      highlights: [
        "Simultaneously managed 3 two-story residential projects within budget and timeline",
        "Coordinated with cross-functional teams to resolve technical conflicts",
        "Implemented sustainable building features reducing energy consumption by 25%",
        "Conducted regular site inspections ensuring construction quality",
        "Delivered visualization and material specification for 20-story residential tower"
      ]
    }
  ];

  // Skills data updated from resume
  const skills = {
    technical: [
      {name: "Procore", level: 90},
      {name: "Primavera P6", level: 85},
      {name: "Bluebeam", level: 95},
      {name: "AutoCAD", level: 90},
      {name: "Revit", level: 85},
      {name: "Lumion", level: 80},
      {name: "SketchUp", level: 85}
    ],
    professional: [
      {name: "Building Envelope Performance", level: 95},
      {name: "Quality Control", level: 90},
      {name: "Project Lifecycle Management", level: 85},
      {name: "Sustainable Construction", level: 80},
      {name: "Team Leadership", level: 85},
      {name: "Budget Management", level: 90},
      {name: "Historic Restoration", level: 80},
      {name: "Property Condition Assessments", level: 85},
      {name: "ADA Compliance", level: 80}
    ],
    certifications: [
      {name: "Tremco's Elastomeric Sealant", level: 100},
      {name: "OSHA 30-Hour Construction", level: 100},
      {name: "Willseal SWRI Training Program", level: 100},
      {name: "Procore Certified: Student", level: 100}
    ]
  };

  // Projects data from resume
  const projects = [
    {
      name: "Hospital Tower Envelope Performance",
      description: "Comprehensive water infiltration testing at the MetroHealth Apex facility to validate the exterior envelope system, focusing on curtain wall assembly.",
      type: "Testing & Validation",
      image: "/images/portfolio/hospital-tower-1.jpg"
    },
    {
      name: "Building Envelope Air Leakage Testing",
      description: "Comprehensive air leakage testing at the Ashley Courthouse Annex building with preparations handled by the contractor and their subcontractors.",
      type: "Testing & Validation",
      image: "/images/portfolio/air-leakage-1.jpg"
    },
    {
      name: "Quality Assurance & Project Management",
      description: "Specialized construction quality assurance and comprehensive project management for condominium renovations and multiple construction projects.",
      type: "Project Management",
      image: "/images/portfolio/condo-qa-1.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Chandana Gutta | Facilities Project Manager | Architect</title>
        <meta name="description" content="Chandana Gutta - Facilities Project Manager with expertise in building envelope commissioning, project management, and architecture." />
      </Head>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section with Parallax Effect */}
      <section className="h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.5 }}
        />

        <motion.div
          style={{
            backgroundImage: `url('${getImagePath('/images/hero-bg.jpg')}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 mix-blend-overlay"
        />

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-white max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-100 to-white">
                Chandana Gutta
              </h1>
            </motion.div>

            <motion.h2
              className="text-xl md:text-3xl mb-6 text-blue-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="border-r-2 border-blue-400 pr-3 mr-3">Facilities Project Manager</span>
              <span className="border-r-2 border-blue-400 pr-3 mr-3">Building Envelope Commission</span>
              <span>Architect</span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Bridging architectural vision with practical execution.
              Specialized in building envelope systems and project delivery
              that balances form, function, and sustainability.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all text-lg"
                >
                  View Portfolio
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all text-lg"
              >
                Explore More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer"
          onClick={() => scrollRef.current?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <p className="mb-2 text-sm">Scroll Down</p>
          <ArrowDownIcon className="h-6 w-6" />
        </motion.div>
      </section>

      {/* About Me Section */}
      <section ref={scrollRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-6">
              A passionate architect turned facilities project manager, I bring together design vision and practical execution.
              With degrees in both Architecture and Construction Management, I specialize in building envelope systems and
              project delivery that prioritizes both form and function.
            </p>
            <p className="text-lg text-gray-700">
              My journey from architectural design to construction management has given me a unique perspective on how buildings come together -
              from concept to completion. I'm passionate about creating lasting impact through innovative construction solutions while
              maintaining the delicate balance between architectural aesthetics and technical performance.
            </p>
          </motion.div>

          {/* Experience Showcase with Timeline */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideIn('left')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={getImagePath('/images/profile.jpg')}
                  alt="Chandana Gutta"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-4 rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="font-bold">Master's in Construction Management</p>
                <p>BGSU, 4.0 GPA</p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideIn('right')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-blue-200 before:left-[7px]">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="pl-8 relative"
                  >
                    <div className="absolute left-0 top-0 w-3.5 h-3.5 rounded-full bg-blue-600"></div>
                    <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                    <p className="text-blue-600">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period} | {exp.location}</p>
                    <p className="text-gray-700">{exp.highlights[0]}</p>
                    <button
                      onClick={() => setVisibleProject(visibleProject === index ? null : index)}
                      className="text-blue-600 text-sm mt-1 flex items-center hover:underline"
                    >
                      {visibleProject === index ? 'Show less' : 'Show more'}
                      <ChevronRightIcon className={`h-4 w-4 ml-1 transition-transform ${visibleProject === index ? 'rotate-90' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {visibleProject === index && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-2 space-y-1 text-gray-600 overflow-hidden"
                        >
                          {exp.highlights.slice(1).map((point, i) => (
                            <li key={i} className="text-sm list-disc ml-4">
                              {point}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section with Advanced Animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              My diverse skill set spans technical tools, professional expertise, and industry certifications.
              Explore the interactive visualization below to see how my skills complement each other.
            </p>
          </motion.div>

          {/* Skill Category Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <SkillCategoryVisualization skills={skills} categories={skillCategories} />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Here are some of the significant projects I'm currently managing. Each project presents unique
              challenges requiring specialized solutions in building envelope systems and structural rehabilitation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-56 relative overflow-hidden">
                  <div
                    className="w-full h-full bg-blue-100 group-hover:scale-110 transition-transform duration-700"
                    style={{
                    backgroundImage: `url(${getImagePath(project.image)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Budget tag removed as requested */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                    <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      View Details
                      <ChevronRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all"
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm open to discussing project collaborations, construction technology,
              and sustainable building practices. Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-blue-50 transition-all text-lg font-medium"
                >
                  Contact Me
                </motion.button>
              </Link>
              <a href="https://cgutta06.github.io/ChandanaGutta_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all text-lg font-medium"
                >
                  Download Resume
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

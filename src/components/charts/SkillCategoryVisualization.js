import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillCategoryVisualization = ({ skills, categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  // Helper function to get color based on skill level and category
  const getColorForSkill = (level, categoryId) => {
    // Make sure categories is an array and not undefined
    if (!Array.isArray(categories)) {
      return 'rgba(59, 130, 246, 1)'; // Default blue color
    }

    const category = categories.find(cat => cat.id === categoryId);
    const color = category ? category.color : '59, 130, 246'; // Default to blue if category not found

    // Adjust opacity based on skill level
    const opacity = level >= 90 ? 1 : level >= 80 ? 0.85 : level >= 70 ? 0.7 : 0.55;
    return `rgba(${color}, ${opacity})`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-1 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              whileHover={{
                scale: activeCategory === category.id ? 1 : 1.02,
                boxShadow: activeCategory === category.id ? '' : '0 2px 4px rgba(0,0,0,0.05)'
              }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2 rounded-md transition-all ${
                activeCategory === category.id
                  ? 'text-white shadow-sm'
                  : 'text-gray-700'
              }`}
              style={{
                backgroundColor: activeCategory === category.id ? `rgba(${category.color}, 0.9)` : 'transparent'
              }}
            >
              <span className="font-medium">{category.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Skill Visualization */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory || 'all'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="min-h-[400px]"
        >
          {activeCategory ? (
            // Show skills for the active category
            <div>
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold mb-1" style={{ color: `rgba(${Array.isArray(categories) ? (categories.find(c => c.id === activeCategory)?.color || '59, 130, 246') : '59, 130, 246'}, 1)` }}>
                  {Array.isArray(categories) ? (categories.find(c => c.id === activeCategory)?.label || 'Skills') : 'Skills'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {Array.isArray(categories) ? (categories.find(c => c.id === activeCategory)?.description || 'Explore my skills in this category') : 'Explore my skills in this category'}
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {skills[activeCategory]?.map((skill, index) => {
                    const delay = index * 0.05;
                    const category = Array.isArray(categories) ? categories.find(c => c.id === activeCategory) : null;
                    const color = category ? category.color : '59, 130, 246';

                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        custom={index}
                        whileHover={{ y: -2, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 15,
                          delay: delay
                        }}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-3 flex flex-col h-full"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center flex-1 mr-2 overflow-hidden">
                            <div
                              className="w-1 h-full rounded-l-md mr-2 self-stretch"
                              style={{ backgroundColor: `rgba(${color}, 1)` }}
                            />
                            <h4 className="font-medium text-gray-800 text-sm truncate">{skill.name}</h4>
                          </div>
                          <div
                            className="text-xs font-bold min-w-[36px] h-[36px] rounded-full flex items-center justify-center text-white shrink-0"
                            style={{ backgroundColor: getColorForSkill(skill.level, activeCategory) }}
                          >
                            {skill.level}%
                          </div>
                        </div>

                        <div className="flex items-center mt-auto pt-2">
                          <div className="flex-grow relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: index * 0.05 }}
                              className="absolute top-0 left-0 h-full rounded-full"
                              style={{ backgroundColor: getColorForSkill(skill.level, activeCategory) }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            // Show all categories
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  variants={categoryVariants}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {/* Category header with color */}
                  <div
                    className="h-2"
                    style={{ backgroundColor: `rgba(${category.color}, 1)` }}
                  />

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold" style={{ color: `rgba(${category.color}, 1)` }}>
                        {category.label}
                      </h3>

                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm"
                        style={{ backgroundColor: `rgba(${category.color}, 1)` }}
                      >
                        <span className="text-xs font-medium">{skills[category.id]?.length || 0}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{category.description}</p>

                    {/* Skill preview bar chart */}
                    <div className="space-y-2 mb-4">
                      {skills[category.id]?.slice(0, 3).map((skill) => (
                        <div key={skill.name} className="w-full">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-600">{skill.name}</span>
                            <span className="text-gray-800 font-medium">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div
                              className="h-1.5 rounded-full"
                              style={{
                                width: `${skill.level}%`,
                                backgroundColor: getColorForSkill(skill.level, category.id)
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {skills[category.id]?.length > 3 && (
                      <div className="text-xs text-gray-500 mb-2">
                        +{skills[category.id].length - 3} more skills
                      </div>
                    )}

                    <button
                      className="mt-2 w-full py-2 text-sm font-medium text-white rounded-md flex items-center justify-center transition-colors"
                      style={{ backgroundColor: `rgba(${category.color}, 0.9)` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategory(category.id);
                      }}
                    >
                      View all skills
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Back button when viewing a category */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(null)}
              className="flex items-center px-5 py-2 bg-white text-gray-700 rounded-md transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to categories
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillCategoryVisualization;

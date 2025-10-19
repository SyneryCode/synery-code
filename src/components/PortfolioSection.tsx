import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowLeft, ExternalLink, Monitor, Smartphone, Palette, Filter, Sparkles, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from './ProjectDetail';
import { projects as projectsData } from '../data/projects';

interface PortfolioSectionProps {
  onBack: () => void;
  onProjectClick: (project: Project) => void;
}

export function PortfolioSection({ onBack, onProjectClick }: PortfolioSectionProps) {
  const { t, language } = useTranslation();
  const isRTL = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects = projectsData;

  const categories = [
    { key: 'all', icon: Filter },
    { key: 'web', icon: Monitor },
    { key: 'mobile', icon: Smartphone },
    { key: 'design', icon: Palette }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  // Get project count for each category
  const getCategoryCount = (categoryKey: string) => {
    if (categoryKey === 'all') return projects.length;
    return projects.filter(p => p.category === categoryKey).length;
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.key === category);
    return categoryData?.icon || Monitor;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#1a3a5a] to-[#0A1A2F] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#6EC1E4]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#6EC1E4]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#6EC1E4]/10 to-[#0A1A2F]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section with Beautiful Title */}
      <div className="relative">
        <div className="container mx-auto px-4 pt-8 pb-16 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Button
              onClick={onBack}
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180 ml-2' : 'mr-2'}`} />
              <span className="text-base">{t('portfolio.back')}</span>
            </Button>
          </motion.div>

          {/* Beautiful Title Section */}
          <div className="text-center mb-16 relative">
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#6EC1E4]" />
                <Star className="w-4 h-4 text-[#6EC1E4]/60" />
                <Sparkles className="w-5 h-5 text-[#6EC1E4]/80" />
              </div>
            </motion.div>

            {/* Main Title with Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#6EC1E4] to-white font-bold tracking-tight">
                  {t('portfolio.title')}
                </span>
                
                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6EC1E4] to-transparent"
                  style={{ transformOrigin: 'center' }}
                />
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t('portfolio.subtitle')}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mt-10"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6EC1E4] to-white">
                  10+
                </div>
                <div className="text-sm text-white/60 mt-2">
                  {t('portfolio.projectsCompleted')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#6EC1E4]">
                  💰
                </div>
                <div className="text-sm text-white/60 mt-2">
                  {t('about.stats.affordablePricing')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6EC1E4] to-white">
                  100%
                </div>
                <div className="text-sm text-white/60 mt-2">
                  {t('portfolio.successRate')}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="max-w-4xl mx-auto">
              <div className={`flex flex-wrap justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.key;
                  return (
                    <motion.button
                      key={category.key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.key)}
                      className={`relative group px-6 py-3 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#6EC1E4] to-[#4A9FCC] text-white shadow-xl shadow-[#6EC1E4]/50'
                          : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'
                      } ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-base">
                          {t(`portfolio.categories.${category.key}`)}
                        </span>
                        <Badge 
                          className={`${
                            isActive 
                              ? 'bg-white/30 text-white border-0' 
                              : 'bg-[#6EC1E4]/20 text-[#6EC1E4] border-0'
                          }`}
                        >
                          {getCategoryCount(category.key)}
                        </Badge>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeCategory"
                          className="absolute inset-0 rounded-2xl border-2 border-white/40"
                          transition={{ type: "spring", duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Projects Grid */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => onProjectClick(project)}
                >
                  <Card className="h-full overflow-hidden border-0 shadow-2xl hover:shadow-[#6EC1E4]/20 transition-all duration-500 bg-white/95 backdrop-blur-sm flex flex-col">
                    {/* Image Section */}
                    <div className="relative overflow-hidden h-56">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full"
                      >
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          className="absolute top-4 left-4"
                        >
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg px-3 py-1 flex items-center gap-1">
                            <Star className="w-3 h-3 fill-white" />
                            {t('portfolio.featured')}
                          </Badge>
                        </motion.div>
                      )}

                      {/* Category Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}
                      >
                        <div className="bg-white/95 backdrop-blur-md rounded-full p-3 shadow-lg">
                          <CategoryIcon className="w-5 h-5 text-[#0A1A2F]" />
                        </div>
                      </motion.div>

                      {/* View Details Button (on hover) */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      >
                        <Button
                          size="lg"
                          className="w-full bg-white text-[#0A1A2F] hover:bg-[#6EC1E4] hover:text-white transition-all duration-300 shadow-xl border-0"
                        >
                          <ExternalLink className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('portfolio.viewDetails')}
                        </Button>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className={`text-xl mb-3 text-[#0A1A2F] group-hover:text-[#6EC1E4] transition-colors duration-300 ${isRTL ? 'rtl:text-right' : ''}`}>
                        {project.title}
                      </h3>
                      
                      <p className={`text-gray-600 text-sm mb-4 flex-1 line-clamp-3 ${isRTL ? 'rtl:text-right' : ''}`}>
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-[#6EC1E4] hover:to-[#4A9FCC] hover:text-white transition-all duration-300 border-0 px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-[#0A1A2F] text-white border-0 px-3 py-1"
                            >
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Learn More */}
                        <div className={`flex items-center gap-2 text-[#6EC1E4] group-hover:gap-3 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className="text-sm font-medium">
                            {t('portfolio.learnMore')}
                          </span>
                          <ArrowLeft className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-md mx-auto border border-white/20">
              <Filter className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <p className="text-white text-xl mb-2">
                {t('portfolio.noProjects')}
              </p>
              <p className="text-white/60">
                {t('portfolio.noProjectsInCategory')}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

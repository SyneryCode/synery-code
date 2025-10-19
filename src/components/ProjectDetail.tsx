import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'web' | 'mobile' | 'design';
  technologies: string[];
  image: string;
  detailImage: string;
  liveDemo?: string;
  sourceCode?: string;
  featured: boolean;
  timeline?: string;
  teamSize?: string;
  achievements?: string[];
  designImages?: string[]; 
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const { t, language } = useTranslation();
  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0A1A2F] to-[#6EC1E4] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6EC1E4]/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className={`text-white hover:bg-white/20 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180 ml-2' : 'mr-2'}`} />
              {t('portfolio.backToPortfolio')}
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                {project.featured && (
                  <Badge className="mb-4 bg-white/20 text-white border-white/30">
                    <Award className="w-3 h-3 mr-1" />
                    {t('portfolio.featured')}
                  </Badge>
                )}
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl mb-4 ${isRTL ? 'rtl:text-right' : ''}`}>
                  {project.title}
                </h1>
                <p className={`text-lg sm:text-xl text-gray-200 mb-6 ${isRTL ? 'rtl:text-right' : ''}`}>
                  {project.description}
                </p>

                {project.category !== 'design' && (
                  <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {project.sourceCode && (
                      <Button
                        onClick={() => window.open(project.sourceCode, '_blank')}
                        className="bg-white text-[#0A1A2F] hover:bg-gray-100"
                      >
                        <Github className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {t('portfolio.viewCode')}
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button
                        onClick={() => window.open(project.liveDemo, '_blank')}
                        className="bg-white text-[#0A1A2F] hover:bg-gray-100 border-2 border-white"
                      >
                        <ExternalLink className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {t('portfolio.liveDemo')}
                      </Button>
                    )}
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <ImageWithFallback
                    src={project.detailImage}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="mb-8 border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className={`text-2xl text-[#0A1A2F] mb-4 ${isRTL ? 'rtl:text-right' : ''}`}>
                    {t('portfolio.projectOverview')}
                  </h2>
                  <p className={`text-gray-700 leading-relaxed text-lg ${isRTL ? 'rtl:text-right' : ''}`}>
                    {project.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {project.category === 'design' && project.designImages && project.designImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h2 className={`text-2xl text-[#0A1A2F] mb-6 ${isRTL ? 'rtl:text-right' : ''}`}>
                        {t('portfolio.designGallery')}
                      </h2>
                      <div className="grid grid-cols-1 gap-6">
                        {project.designImages.map((imageUrl, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                          >
                            <ImageWithFallback
                              src={imageUrl}
                              alt={`${project.title} design ${index + 1}`}
                              className="w-full h-auto"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {project.achievements && project.achievements.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h2 className={`text-2xl text-[#0A1A2F] mb-6 ${isRTL ? 'rtl:text-right' : ''}`}>
                        {t('portfolio.keyAchievements')}
                      </h2>
                      <div className="space-y-4">
                        {project.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                          >
                            <div className="mt-1 w-2 h-2 rounded-full bg-[#6EC1E4] flex-shrink-0"></div>
                            <p className={`text-gray-700 ${isRTL ? 'rtl:text-right' : ''}`}>{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>

          <div className="space-y-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className={`text-lg text-[#0A1A2F] mb-4 ${isRTL ? 'rtl:text-right' : ''}`}>
                    {t('portfolio.projectInfo')}
                  </h3>
                  
                  <div className="space-y-4">
                    {project.timeline && (
                      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-lg bg-[#6EC1E4]/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-[#6EC1E4]" />
                        </div>
                        <div className={isRTL ? 'rtl:text-right' : ''}>
                          <p className="text-sm text-gray-500">
                            {t('portfolio.timeline')}
                          </p>
                          <p className="text-[#0A1A2F]">{project.timeline}</p>
                        </div>
                      </div>
                    )}

                    {project.teamSize && (
                      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-lg bg-[#6EC1E4]/10 flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-[#6EC1E4]" />
                        </div>
                        <div className={isRTL ? 'rtl:text-right' : ''}>
                          <p className="text-sm text-gray-500">
                            {t('portfolio.teamSize')}
                          </p>
                          <p className="text-[#0A1A2F]">{project.teamSize}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className={`text-lg text-[#0A1A2F] mb-4 ${isRTL ? 'rtl:text-right' : ''}`}>
                    {t('portfolio.technologies')}
                  </h3>
                  <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-[#6EC1E4]/10 text-[#0A1A2F] hover:bg-[#6EC1E4] hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className={`text-lg text-[#0A1A2F] mb-4 ${isRTL ? 'rtl:text-right' : ''}`}>
                    {t('portfolio.category')}
                  </h3>
                  <Badge className="bg-gradient-to-r from-[#0A1A2F] to-[#6EC1E4] text-white">
                    {t(`portfolio.categories.${project.category}`)}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

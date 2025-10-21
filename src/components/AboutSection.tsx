import { motion } from 'motion/react';
import { Shield, Users, Zap, Target, CheckCircle, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';



export function AboutSection() {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      titleKey: 'about.expertise.title',
      descriptionKey: 'about.expertise.description',
      gradient: 'from-[#6EC1E4] to-[#4A9FD1]'
    },
    {
      icon: Users,
      titleKey: 'about.clientFocused.title',
      descriptionKey: 'about.clientFocused.description',
      gradient: 'from-[#4A9FD1] to-[#2E7DB3]'
    },
    {
      icon: Zap,
      titleKey: 'about.innovation.title',
      descriptionKey: 'about.innovation.description',
      gradient: 'from-[#2E7DB3] to-[#0A1A2F]'
    },
    {
      icon: Target,
      titleKey: 'about.support.title',
      descriptionKey: 'about.support.description',
      gradient: 'from-[#0A1A2F] to-[#6EC1E4]'
    }
  ];

  const stats = [
    { number: '3+', labelKey: 'about.stats.yearsExperience' },
    { number: '10+', labelKey: 'about.stats.projectsCompleted' },
    { number: '💰', labelKey: 'about.stats.affordablePricing' },
    { number: '100%', labelKey: 'about.stats.successRate' }
  ];

  const achievementKeys = [
    'about.achievements.award',
    'about.achievements.certified',
    'about.achievements.iso',
    'about.achievements.support',
    'about.achievements.agile',
    'about.achievements.maintenance'
  ];
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#6EC1E4]/10 to-[#0A1A2F]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0A1A2F]/5 to-[#6EC1E4]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#6EC1E4]/10 to-[#0A1A2F]/10 text-[#0A1A2F] rounded-full mb-4">
            {t('about.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0A1A2F] mb-6">
            {t('about.subtitle')}
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl sm:text-4xl text-[#0A1A2F] mb-2">{stat.number}</div>
              <div className="text-gray-600">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <h3 className="text-2xl sm:text-3xl text-[#0A1A2F] mb-8">
              {t('about.featuresTitle')}
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start gap-4 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-[#0A1A2F] mb-2 group-hover:text-[#2E7DB3] transition-colors duration-300">
                      {t(feature.titleKey)}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`bg-white rounded-2xl p-8 shadow-xl ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Award className="w-8 h-8 text-[#6EC1E4]" />
              <h3 className="text-2xl text-[#0A1A2F]">{t('about.achievementsTitle')}</h3>
            </div>
            
            <div className="space-y-4">
              {achievementKeys.map((achievementKey, index) => (
                <motion.div
                  key={achievementKey}
                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <CheckCircle className="w-5 h-5 text-[#6EC1E4] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 group-hover:text-[#0A1A2F] transition-colors duration-300">
                    {t(achievementKey)}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-[#6EC1E4]/10 to-[#0A1A2F]/10 rounded-xl"
            >
              <p className="text-[#0A1A2F] leading-relaxed">
                "{t('about.quote')}"
              </p>
              <div className="mt-4 text-sm text-gray-600">
                {t('about.quoteAuthor')}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#0A1A2F] to-[#6EC1E4] rounded-2xl p-8 sm:p-12 text-white"
        >
          <h3 className="text-2xl sm:text-3xl mb-4">
            {t('about.processTitle')}
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            {t('about.processSubtitle')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">1</span>
              </div>
              <h4 className="mb-2">{t('about.processSteps.consultation.title')}</h4>
              <p className="text-sm opacity-80">{t('about.processSteps.consultation.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">2</span>
              </div>
              <h4 className="mb-2">{t('about.processSteps.development.title')}</h4>
              <p className="text-sm opacity-80">{t('about.processSteps.development.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">3</span>
              </div>
              <h4 className="mb-2">{t('about.processSteps.launch.title')}</h4>
              <p className="text-sm opacity-80">{t('about.processSteps.launch.description')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
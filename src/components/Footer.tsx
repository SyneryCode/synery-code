import { motion } from 'motion/react';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

export function Footer() {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: 'Website Development', href: '#services' },
    { name: 'Mobile App Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'E-commerce Solutions', href: '#services' }
  ];

  const company = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.contact'), href: '#contact' },
    { name: 'Privacy Policy', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SyneryCode', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Synerycode?t=vGhl8uVi_YpIk-dE4P5cfw&s=09', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#0A1A2F] text-white relative overflow-hidden">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6EC1E4]/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className={`flex items-center gap-2 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6EC1E4] to-[#4A9FD1] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl">
                  Synery <span className="text-[#6EC1E4]">Code</span>
                </span>
              </div>
              <p className={`text-gray-300 leading-relaxed mb-6 max-w-md ${isRTL ? 'text-right' : ''}`}>
                {t('footer.description')}
              </p>
              

              <div className="space-y-3">
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Mail className="w-5 h-5 text-[#6EC1E4] flex-shrink-0" />
                  <span className="text-gray-300">{t('contact.info.email')}</span>
                </div>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="w-5 h-5 text-[#6EC1E4] flex-shrink-0" />
                  <span className="text-gray-300">{t('contact.info.phone')}</span>
                </div>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-5 h-5 text-[#6EC1E4] flex-shrink-0" />
                  <span className="text-gray-300">{t('contact.info.address')}</span>
                </div>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={isRTL ? 'text-right' : 'text-left'}
            >
              <h3 className="text-lg mb-6">{t('footer.services')}</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service.name}>
                    <motion.button
                      onClick={() => scrollToSection('services')}
                      whileHover={{ x: isRTL ? -5 : 5 }}
                      className="text-gray-300 hover:text-[#6EC1E4] transition-colors duration-200 block w-full"
                      style={{ textAlign: 'inherit' }}
                    >
                      {service.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={isRTL ? 'text-right' : 'text-left'}
            >
              <h3 className="text-lg mb-6">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={item.name}>
                    <motion.button
                      onClick={() => {
                        if (item.href.startsWith('#')) {
                          scrollToSection(item.href.substring(1));
                        }
                      }}
                      whileHover={{ x: isRTL ? -5 : 5 }}
                      className="text-gray-300 hover:text-[#6EC1E4] transition-colors duration-200 block w-full"
                      style={{ textAlign: 'inherit' }}
                    >
                      {item.name}
                    </motion.button>
                  </li>
                ))}
              </ul>


              <div className="mt-6">
                <h4 className="text-sm text-gray-400 mb-3">Follow Us</h4>
                <div className={`flex gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 hover:bg-[#6EC1E4]/20 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#6EC1E4] transition-colors duration-200" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`text-gray-400 text-sm ${isRTL ? 'text-right' : ''}`}>
              {t('footer.copyright')}
            </div>
            <div className={`flex flex-wrap items-center gap-6 text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-[#6EC1E4] transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-[#6EC1E4] transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-[#6EC1E4] transition-colors duration-200"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
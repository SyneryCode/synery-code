import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactSection() {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t('contact.validation.fullNameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.validation.emailInvalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('contact.validation.phoneRequired');
    } else if (!/^[\+]?[0-9\s\-\(\)]{8,}$/.test(formData.phone)) {
      newErrors.phone = t('contact.validation.phoneInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.validation.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.validation.messageTooShort');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) {
      console.log('❌ [FORM VALIDATION FAILED]', errors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const cleanedPhone = formData.phone.replace(/[^\d+]/g, '');
      
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: cleanedPhone,
        message: formData.message
      };


      const isDevelopment = import.meta.env.DEV;
      let apiUrl;

      if (isDevelopment) {        apiUrl = '/api/send';
        console.log('🔵 [DEVELOPMENT MODE] Using proxy:', apiUrl);
      } else {
 
        apiUrl = 'https://syniery-code.onrender.com/api/send';
        console.log('🟢 [PRODUCTION MODE] Using direct URL:', apiUrl);
      }
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        console.log('⏰ [REQUEST TIMEOUT]');
        controller.abort();
      }, 50000);

      console.log('🎯 [API REQUEST]', {
        environment: isDevelopment ? 'Development' : 'Production',
        url: apiUrl,
        payload: payload,
        timestamp: new Date().toISOString()
      });

      const startTime = Date.now();
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      const responseTime = Date.now() - startTime;
      clearTimeout(timeoutId);

      console.log('📨 [API RESPONSE]', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        responseTime: `${responseTime}ms`,
        headers: Object.fromEntries(response.headers.entries()),
        timestamp: new Date().toISOString()
      });

      if (!response.ok) {
        let errorMessage = `خطأ في الإرسال (${response.status})`;
        let errorDetails = {};
        
        try {
          const errorText = await response.text();
          console.error('❌ [API ERROR RESPONSE]', errorText);
          
          try {
            const errorData = JSON.parse(errorText);
            errorMessage = errorData.message || errorMessage;
            errorDetails = errorData;
          } catch {
            errorDetails = { rawError: errorText };
          }
        } catch (textError) {
          console.error('❌ [ERROR READING RESPONSE]', textError);
        }
        
        console.error('❌ [API ERROR DETAILS]', errorDetails);
        throw new Error(errorMessage);
      }

      // معالجة الرد الناجح
      const responseText = await response.text();
      console.log('📄 [RAW RESPONSE TEXT]', {
        text: responseText,
        length: responseText.length,
        timestamp: new Date().toISOString()
      });

      let result;
      try {
        result = JSON.parse(responseText);
        console.log('✅ [PARSED RESPONSE]', {
          result: result,
          timestamp: new Date().toISOString()
        });
      } catch (parseError) {
        console.error('❌ [JSON PARSE ERROR]', {
          error: parseError,
          responseText: responseText,
          timestamp: new Date().toISOString()
        });
        
        // إذا كان الرد HTML، فهذا يعني مشكلة في التوجيه
        if (responseText.includes('<!DOCTYPE html>') || responseText.includes('<html')) {
          throw new Error('الخادم يعيد صفحة HTML بدلاً من JSON. تأكد من صحة endpoint الـ API.');
        }
        
        throw new Error('رد غير صحيح من الخادم');
      }

      console.log('🎉 [FORM SUBMISSION SUCCESSFUL]', {
        result: result,
        responseTime: `${responseTime}ms`,
        timestamp: new Date().toISOString()
      });
      
      // نجاح الإرسال
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      setErrors({});
      
    } catch (error) {
      console.error('💥 [FORM SUBMISSION ERROR]', {
        error: error instanceof Error ? {
          name: error.name,
          message: error.message,
          stack: error.stack
        } : error,
        timestamp: new Date().toISOString()
      });
      
      let errorMessage = t('contact.form.submissionError');
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage = 'انتهت مهلة الاتصال بالخادم (15 ثانية)';
        } else if (error.message.includes('Failed to fetch')) {
          errorMessage = 'فشل في الاتصال بالخادم. تأكد من الاتصال بالإنترنت.';
        } else if (error.message.includes('CORS')) {
          errorMessage = 'مشكلة في صلاحيات CORS. يرجى التواصل مع الدعم.';
        } else {
          errorMessage = error.message;
        }
      }
      
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      titleKey: 'contact.info.emailLabel',
      details: t('contact.info.email'),
      descriptionKey: 'contact.info.emailDescription'
    },
    {
      icon: Phone,
      titleKey: 'contact.info.phoneLabel',
      details: t('contact.info.phone'),
      descriptionKey: 'contact.info.phoneDescription'
    },
    {
      icon: MapPin,
      titleKey: 'contact.info.addressLabel',
      details: t('contact.info.address'),
      descriptionKey: 'contact.info.addressDescription'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0A1A2F] via-[#1B2B4A] to-[#6EC1E4] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#6EC1E4]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg text-white rounded-full mb-4 border border-white/20">
            {t('contact.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            {t('contact.subtitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl sm:text-3xl text-white mb-6 ${isRTL ? 'rtl:text-right' : ''}`}>
                {t('contact.info.title')}
              </h3>
              <p className={`text-gray-300 leading-relaxed mb-8 ${isRTL ? 'rtl:text-right' : ''}`}>
                {t('contact.info.description')}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6EC1E4] to-[#4A9FD1] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg text-white mb-1 ${isRTL ? 'text-right' : ''}`}>
                        {t(info.titleKey)}
                      </h4>
                      <p className={`text-[#6EC1E4] mb-1 ${isRTL ? 'text-right' : ''}`}>
                        {info.details}
                      </p>
                      <p className={`text-sm text-gray-300 ${isRTL ? 'text-right' : ''}`}>
                        {t(info.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h4 className="text-lg text-white mb-4">{t('contact.whyChoose.title')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <CheckCircle className="w-4 h-4 text-[#6EC1E4] flex-shrink-0" />
                  <span>{t('contact.whyChoose.consultation')}</span>
                </li>
                <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <CheckCircle className="w-4 h-4 text-[#6EC1E4] flex-shrink-0" />
                  <span>{t('contact.whyChoose.pricing')}</span>
                </li>
                <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <CheckCircle className="w-4 h-4 text-[#6EC1E4] flex-shrink-0" />
                  <span>{t('contact.whyChoose.support')}</span>
                </li>
                <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <CheckCircle className="w-4 h-4 text-[#6EC1E4] flex-shrink-0" />
                  <span>{t('contact.whyChoose.guarantee')}</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader className={isRTL ? 'rtl:text-right' : ''}>
                <CardTitle className="text-2xl text-white">{t('contact.form.title')}</CardTitle>
                <CardDescription className="text-gray-300">
                  {t('contact.form.subtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl text-white mb-3 font-bold">
                      {t('contact.form.successTitle')}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {t('contact.form.successMessage')}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-white/10 text-white bg-white/10"
                      >
                        {t('contact.form.sendAnother')}
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className={`block text-sm text-gray-300 mb-2 ${isRTL ? 'rtl:text-right' : ''}`}>
                        {t('contact.form.fullName')} *
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder={t('contact.form.fullNamePlaceholder')}
                        className={`bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-[#6EC1E4] ${isRTL ? 'text-right' : ''} ${
                          errors.fullName ? 'border-red-400' : ''
                        }`}
                      />
                      {errors.fullName && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex items-center mt-1 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                        >
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          <span className="text-sm text-red-400">{errors.fullName}</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={`block text-sm text-gray-300 mb-2 ${isRTL ? 'rtl:text-right' : ''}`}>
                        {t('contact.form.email')} *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={t('contact.form.emailPlaceholder')}
                        className={`bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-[#6EC1E4] ${isRTL ? 'text-right' : ''} ${
                          errors.email ? 'border-red-400' : ''
                        }`}
                      />
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex items-center mt-1 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                        >
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          <span className="text-sm text-red-400">{errors.email}</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className={`block text-sm text-gray-300 mb-2 ${isRTL ? 'rtl:text-right' : ''}`}>
                        {t('contact.form.phone')} *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder={t('contact.form.phonePlaceholder')}
                        className={`bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-[#6EC1E4] ${isRTL ? 'text-right' : ''} ${
                          errors.phone ? 'border-red-400' : ''
                        }`}
                      />
                      {errors.phone && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex items-center mt-1 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                        >
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          <span className="text-sm text-red-400">{errors.phone}</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className={`block text-sm text-gray-300 mb-2 ${isRTL ? 'rtl:text-right' : ''}`}>
                        {t('contact.form.message')} *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={4}
                        className={`bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-[#6EC1E4] resize-none ${isRTL ? 'text-right' : ''} ${
                          errors.message ? 'border-red-400' : ''
                        }`}
                      />
                      {errors.message && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex items-center mt-1 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                        >
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          <span className="text-sm text-red-400">{errors.message}</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center p-4 bg-red-500/20 border border-red-400/30 rounded-lg ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                      >
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-red-400 text-sm">{submitError}</span>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#6EC1E4] to-[#4A9FD1] hover:from-[#5BADD8] hover:to-[#3A8FC5] text-white py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
                      >
                        {isSubmitting ? (
                          <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>{t('contact.form.sending')}</span>
                          </div>
                        ) : (
                          <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                            <span>{t('contact.form.submit')}</span>
                            <Send className="w-5 h-5" />
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card> 
          </motion.div>
        </div>
      </div>
    </section>
  );
}
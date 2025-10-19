// config.js - Application Configuration

// API Configuration
export const API_BASE_URL = 'http://syniery-code.onrender.com/api';

// Contact Form Configuration
export const CONTACT_FORM_CONFIG = {
  endpoint: `${API_BASE_URL}/send`,
  timeout: 10000, // 10 seconds
};

// Application Settings
export const APP_CONFIG = {
  name: 'Syniery Code',
  version: '1.0.0',
  environment: process.env.NODE_ENV || 'development',
};

// Form Validation Rules
export const VALIDATION_RULES = {
  phone: {
    pattern: /^[\+]?[0-9\s\-\(\)]{8,}$/,
    cleanPattern: /[^\d+]/g,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  message: {
    minLength: 10,
  }
};

// Export all configurations
export default {
  API_BASE_URL,
  CONTACT_FORM_CONFIG,
  APP_CONFIG,
  VALIDATION_RULES,
};
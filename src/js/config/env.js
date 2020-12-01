export default {
  apiLocation: process.env.API_LOCATION || '/',
  production: process.env.NODE_ENV === 'production',
  environment: process.env.NODE_ENV || 'development'
};

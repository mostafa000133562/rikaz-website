// إعداد ربط موقع ركاز مع نظام Rakayez ERP Lite v5
// للتجربة المحلية: شغل النظام على جهازك ثم افتح الموقع محليًا.
// عند رفع النظام على سيرفر غيّر endpoint إلى رابط السيرفر الحقيقي مثل: https://crm.yourdomain.com/api/public/leads
window.RAKAYEZ_CRM_CONFIG = {
  enabled: true,
  endpoint: 'http://127.0.0.1:8000/api/public/leads',
  apiKey: 'rakayez_website_2026',
  openWhatsappAfterSubmit: true,
  source: 'موقع إلكتروني'
};

// src/lib/email.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_8nk4pxv';
const TEMPLATE_ID = 'template_xfcmmdl';
const PUBLIC_KEY = '8qBOq0NcdC7QZ0SOd';

export const sendEmail = (formData) => {
  const templateParams = {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

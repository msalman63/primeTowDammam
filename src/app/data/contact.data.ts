import { ContactInfo }          from '../interfaces/contact-info';
import { PHONE_NUMBER, WHATSAPP_NUMBER, SOCIAL } from '../constants/app-constants';

export const CONTACT_DATA: ContactInfo[] = [
  {
    icon:  '📞',
    label: { ar: 'اتصل بنا مباشرة',  en: 'Call Us Directly' },
    value: { ar: PHONE_NUMBER,        en: PHONE_NUMBER       },
    href:  SOCIAL.callUrl,
  },
  {
    icon:  '💬',
    label: { ar: 'تواصل عبر واتساب', en: 'WhatsApp Us'      },
    value: { ar: WHATSAPP_NUMBER,     en: WHATSAPP_NUMBER    },
    href:  SOCIAL.whatsappUrl,
  },
  {
    icon:  '📍',
    label: { ar: 'موقعنا',            en: 'Our Location'     },
    value: { ar: 'جدة، المملكة العربية السعودية', en: 'Jeddah, Saudi Arabia' },
  },
  {
    icon:  '🕐',
    label: { ar: 'ساعات العمل',       en: 'Working Hours'    },
    value: { ar: 'متاح 24/7 — طوال الأسبوع', en: '24/7 — Every Day' },
  },
];
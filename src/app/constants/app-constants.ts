export const PHONE_NUMBER = '+966539330879';
export const WHATSAPP_NUMBER = '966539330879';

export const BRAND = {
  nameAr:      'سطحة برايم الدمام',
  nameArShort: 'برايم',
  nameEn:      'Prime Tow Dammam',
  tagEn:       'PRIME TOW DMM',
  legalAr:     'مؤسسة سلم العبور للنقليات',
  legalEn:     'Salam Al-Oboor Transport Establishment',
  crNumber:    '4030621465',
  cityAr:      'الدمام',
  cityEn:      'Dammam',
  countryAr:   'المملكة العربية السعودية',
  countryEn:   'Saudi Arabia',
} as const;

export const SOCIAL = {
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  callUrl:     `tel:${PHONE_NUMBER}`,
  // the client's own link, opens his exact pin in Google Maps
  mapsUrl:     'https://maps.app.goo.gl/tbqsgqo7EdJ6gfpU7',
} as const;

// used by the iframe in the Contact section
export const MAP_EMBED_URL =
  'https://www.google.com/maps?q=Al+Khodaryah,+Dammam&z=14&hl=ar&output=embed';
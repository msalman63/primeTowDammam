import { AboutFeature }  from "../interfaces/about-feature";
import { CoverageArea }  from "../interfaces/coverage-area";
import { GalleryItem }   from "../interfaces/gallery-item";
import { NavLink }       from "../interfaces/nav-link";
import { WhyItem }       from "../interfaces/why-item";
import { Translation }   from "../interfaces";
import { ContactInfo }   from "../interfaces/contact-info";
import { PHONE_NUMBER, SOCIAL } from "../constants/app-constants";

export interface HomeBadge {
  icon:  string;
  label: Translation;
}

export interface HomeStat {
  number: string;
  label:  Translation;
}

export const HOME_STATS: HomeStat[] = [
  { number: '500+', label: { ar: 'سيارة تم نقلها',       en: 'Vehicles Towed'    } },
  { number: '5+',   label: { ar: 'سنوات خبرة',            en: 'Years Experience'  } },
  { number: '24/7', label: { ar: 'متاح دائماً',           en: 'Always Available'  } },
  { number: '15',   label: { ar: 'دقيقة وقت الاستجابة',   en: 'Min Avg Response'  } },
];

export const HOME_BADGES: HomeBadge[] = [
  { icon: '✈️', label: { ar: 'مطار الملك فهد الدولي',    en: 'King Fahd Int\'l Airport' } },
  { icon: '⚡', label: { ar: 'وصول في 15 دقيقة',          en: '15-Min Response'          } },
  { icon: '🏭', label: { ar: 'أرامكو والمنطقة الشرقية',   en: 'Aramco & Eastern Province'} },
];

export const WHY_DATA: WhyItem[] = [
  { id: 1, icon: '🏆', stat: '#1',   unit: { ar: 'في الدمام',        en: 'In Dammam'      }, title: { ar: 'الخيار الأول في الدمام',      en: 'Dammam\'s Top Choice'      } },
  { id: 2, icon: '⚡', stat: '15',   unit: { ar: 'دقيقة استجابة',   en: 'Min Response'   }, title: { ar: 'أسرع استجابة في المنطقة',     en: 'Fastest in the Region'     } },
  { id: 3, icon: '🕐', stat: '24/7', unit: { ar: 'متاح دائماً',     en: 'Always Open'    }, title: { ar: 'خدمة مستمرة',                  en: 'Round-the-Clock Service'   } },
  { id: 4, icon: '🛣️',stat: '3',    unit: { ar: 'مدن رئيسية',      en: 'Major Cities'   }, title: { ar: 'الدمام، جدة، والرياض',         en: 'Dammam, Jeddah & Riyadh'   } },
  { id: 5, icon: '🛡️',stat: '100%', unit: { ar: 'ضمان السلامة',    en: 'Safety Promise' }, title: { ar: 'ضمان سلامة مركبتك',            en: 'Vehicle Safety Guaranteed' } },
];

// ── Dammam key locations (90%) + minor Jeddah & Riyadh mention (10%) ──
export const COVERAGE_DATA: CoverageArea[] = [
  // Dammam primary — airport + landmarks first
  { id: 1, pin: '✈️', name: { ar: 'مطار الملك فهد الدولي',     en: 'King Fahd Int\'l Airport'  }, coordinates: { lat: 26.4712, lng: 49.7979 } },
  { id: 2, pin: '🌊', name: { ar: 'كورنيش الدمام',              en: 'Dammam Corniche'            }, coordinates: { lat: 26.4367, lng: 50.1044 } },
  { id: 3, pin: '🏭', name: { ar: 'أرامكو والظهران',            en: 'Saudi Aramco & Dhahran'     }, coordinates: { lat: 26.3083, lng: 50.1233 } },
  { id: 4, pin: '🌊', name: { ar: 'كورنيش الخبر والخبر',        en: 'Al-Khobar & Corniche'       }, coordinates: { lat: 26.2172, lng: 50.1971 } },
  { id: 5, pin: '🏙️', name: { ar: 'حي الشاطئ والفيصلية',       en: 'Al-Shati & Al-Faisaliah'    }, coordinates: { lat: 26.4500, lng: 50.0900 } },
  { id: 6, pin: '🏢', name: { ar: 'حي الحمراء والروضة',         en: 'Al-Hamra & Al-Rawdah'       }, coordinates: { lat: 26.4200, lng: 50.0800 } },
  // Secondary cities — small mention
  { id: 7, pin: '🛣️', name: { ar: 'النقل لجدة والرياض',        en: 'Transport to Jeddah & Riyadh' } },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1, span: 'wide', emoji: '🚛',
    imageUrl: 'images/gallery/lamborghini-riyadh.jpeg',
    label: { ar: 'نقل لامبورغيني — الدمام', en: 'Lamborghini Transport — Dammam' }
  },
  {
    id: 2, span: 'single', emoji: '🚙',
    imageUrl: 'images/gallery/range-rover-loading.jpeg',
    label: { ar: 'رنج روفر — خدمة ليلية', en: 'Range Rover — Night Service' }
  },
  {
    id: 3, span: 'single', emoji: '🚗',
    imageUrl: 'images/gallery/camaro-mosque-night.jpeg',
    label: { ar: 'كامارو — استجابة فورية', en: 'Camaro — Immediate Response' }
  },
  {
    id: 4, span: 'single', emoji: '🚛',
    imageUrl: 'images/gallery/fleet-trucks-daytime.jpeg',
    label: { ar: 'أسطول برايم — جاهزون دائماً', en: 'Prime Fleet — Always Ready' }
  },
  {
    id: 5, span: 'single', emoji: '🏎️',
    imageUrl: 'images/gallery/rollsroyce-showroom-delivery.jpeg',
    label: { ar: 'رولز رويس — تسليم احترافي', en: 'Rolls Royce — Professional Delivery' }
  },
];

export const ABOUT_FEATURES: AboutFeature[] = [
  { id: 1, icon: '🏆', title: { ar: 'الأول في الدمام',    en: 'Dammam\'s Best'   }, description: { ar: 'سطحة برايم هي الخيار الأول لسكان الدمام والمنطقة الشرقية — سمعة بنيناها بالخدمة الاحترافية والوصول السريع',              en: 'Prime Tow is the first choice for Dammam and Eastern Province residents — a reputation built on professional service and fast arrival'      } },
  { id: 2, icon: '⚡',  title: { ar: 'استجابة فورية',    en: 'Instant Response' }, description: { ar: 'نصل إليك في 15 دقيقة أو أقل في أي مكان بالدمام — من مطار الملك فهد إلى كورنيش الدمام والخبر والظهران',                   en: 'We reach you in 15 minutes or less anywhere in Dammam — from King Fahd Airport to Dammam Corniche, Al-Khobar and Dhahran'                 } },
  { id: 3, icon: '🔧',  title: { ar: 'أسطول متطور',      en: 'Modern Fleet'     }, description: { ar: 'أسطول من السطحات الهيدروليكية الحديثة يغطي الدمام والمنطقة الشرقية — مجهز لنقل جميع أنواع المركبات بأمان تام',              en: 'A modern hydraulic fleet covering Dammam and the Eastern Province — equipped for safe transport of all vehicle types'                       } },
];

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
    value: { ar: PHONE_NUMBER,        en: PHONE_NUMBER       },
    href:  SOCIAL.whatsappUrl,
  },
  {
    icon:  '📍',
    label: { ar: 'موقعنا',            en: 'Our Location'     },
    value: { ar: 'الدمام — المنطقة الشرقية، المملكة العربية السعودية', en: 'Dammam — Eastern Province, Saudi Arabia' },
  },
  {
    icon:  '🕐',
    label: { ar: 'ساعات العمل',       en: 'Working Hours'    },
    value: { ar: 'متاح 24/7 — طوال الأسبوع', en: '24/7 — Every Day' },
  },
];

export const NAV_LINKS: NavLink[] = [
  { id: 'home',     label: { ar: 'الرئيسية',      en: 'Home'     }, fragment: 'home'     },
  { id: 'services', label: { ar: 'الخدمات',       en: 'Services' }, fragment: 'services' },
  { id: 'about',    label: { ar: 'من نحن',        en: 'About'    }, fragment: 'about'    },
  { id: 'coverage', label: { ar: 'مناطق التغطية', en: 'Coverage' }, fragment: 'coverage' },
  { id: 'gallery',  label: { ar: 'معرض الصور',    en: 'Gallery'  }, fragment: 'gallery'  },
  { id: 'contact',  label: { ar: 'تواصل معنا',    en: 'Contact'  }, fragment: 'contact'  },
];
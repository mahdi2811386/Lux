import { Camera, Heart, Crown, Award, ShieldCheck, Clock, Aperture } from 'lucide-react';
import { NavItem, ServiceItem, PortfolioItem, Testimonial, TrustFactor } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'خانه', href: '/' },
  { label: 'نمونه کارها', href: '/portfolio' },
  { label: 'خدمات', href: '/services' },
  { label: 'درباره ما', href: '/about' },
  { label: 'تماس با ما', href: '/contact' },
  { label: 'پنل مشتریان', href: '/client-panel' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'عکاسی عروسی و فرمالیته',
    description: 'ثبت عاشقانه‌ترین لحظات زندگی شما با دیدی هنری و سینمایی.',
    icon: Heart,
    link: '/services'
  },
  {
    id: 2,
    title: 'پرتره و مدلینگ',
    description: 'عکاسی تخصصی مد و فشن با تجهیزات نورپردازی استودیویی پیشرفته.',
    icon: Camera,
    link: '/services'
  },
  {
    id: 3,
    title: 'تبلیغاتی و صنعتی',
    description: 'نمایش محصولات و خدمات برند شما با بالاترین کیفیت بصری.',
    icon: Aperture,
    link: '/services'
  },
  {
    id: 4,
    title: 'کودک و نوزاد',
    description: 'ثبت شیرین‌ترین دوران رشد فرزند دلبندتان در محیطی آرام.',
    icon: Crown,
    link: '/services'
  }
];

export const TRUST_FACTORS: TrustFactor[] = [
  {
    id: 1,
    title: 'تجهیزات روز دنیا',
    description: 'استفاده از دوربین‌های مدیوم فرمت و لنزهای سری G-Master سونی.',
    icon: Camera
  },
  {
    id: 2,
    title: 'تیم برنده جوایز',
    description: 'عکاسان ما برنده تندیس طلایی جشنواره عکس تهران هستند.',
    icon: Award
  },
  {
    id: 3,
    title: 'گارانتی رضایت',
    description: 'در صورت عدم رضایت از ادیت عکس‌ها، بازبینی رایگان انجام می‌شود.',
    icon: ShieldCheck
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'طلوع عشق',
    category: 'عروسی',
    image: 'https://picsum.photos/800/1200?random=1',
    size: 'tall'
  },
  {
    id: 2,
    title: 'سکوت کویر',
    category: 'مدلینگ',
    image: 'https://picsum.photos/800/600?random=2',
    size: 'small'
  },
  {
    id: 3,
    title: 'شکوه جواهرات',
    category: 'صنعتی',
    image: 'https://picsum.photos/800/800?random=3',
    size: 'small'
  },
  {
    id: 4,
    title: 'لبخند فرشته',
    category: 'کودک',
    image: 'https://picsum.photos/800/600?random=4',
    size: 'small'
  },
  {
    id: 5,
    title: 'سایه و روشن',
    category: 'پرتره',
    image: 'https://picsum.photos/800/1200?random=5',
    size: 'tall'
  },
  {
    id: 6,
    title: 'رقص لباس',
    category: 'مدلینگ',
    image: 'https://picsum.photos/800/800?random=6',
    size: 'large'
  },
  {
    id: 7,
    title: 'عمارت قدیمی',
    category: 'عروسی',
    image: 'https://picsum.photos/800/600?random=7',
    size: 'small'
  },
  {
    id: 8,
    title: 'نگاه عمیق',
    category: 'پرتره',
    image: 'https://picsum.photos/800/800?random=8',
    size: 'small'
  },
  {
    id: 9,
    title: 'محصول لوکس',
    category: 'صنعتی',
    image: 'https://picsum.photos/800/1200?random=9',
    size: 'tall'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'سارا و محمد',
    role: 'عروس و داماد',
    text: 'تیم عکاسی واقعاً حرفه‌ای بود. لحظاتی رو ثبت کردند که ما اصلاً متوجه نبودیم. آلبوم نهایی فراتر از انتظار ما بود.',
    date: '۱۴۰۲/۰۸/۱۵'
  },
  {
    id: 2,
    name: 'شرکت معماری آراد',
    role: 'مدیر مارکتینگ',
    text: 'برای عکاسی از پروژه‌های ساختمانی خود به دنبال تیمی بودیم که نور را بشناسد. نتیجه کار فوق‌العاده بود.',
    date: '۱۴۰۲/۱۰/۰۲'
  },
  {
    id: 3,
    name: 'مهسا امینی',
    role: 'مدل فریلنسر',
    text: 'فضای استودیو بسیار آرامش‌بخش بود و عکاس با حوصله تمام ژست‌ها را راهنمایی می‌کرد. بهترین تجربه پرتره من.',
    date: '۱۴۰۲/۰۹/۲۰'
  }
];
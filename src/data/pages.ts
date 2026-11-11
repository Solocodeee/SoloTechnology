import {
  Settings, ShieldCheck, Headphones, BadgeCheck, Timer, Users, Handshake, Rocket, Clock, Lock,
  Banknote, Ban, Code2, Target, Flag, Eye,
} from "lucide-react";
import type { IconComponent } from "@/types";
import type { Locale } from "@/i18n/config";

export interface Highlight { icon: IconComponent; title: string; text: string }

/** Pairs a list of icons with a list of {title, text} per language. */
function withIcons(icons: IconComponent[], items: Record<Locale, { title: string; text: string }[]>) {
  return (locale: Locale): Highlight[] => items[locale].map((it, i) => ({ icon: icons[i], ...it }));
}

export const getServicesHeroHighlights = withIcons([Settings, ShieldCheck, Headphones], {
  en: [
    { title: "Custom Solutions", text: "Tailored to your needs" },
    { title: "Quality Focused", text: "We deliver excellence" },
    { title: "Reliable Support", text: "We're with you always" },
  ],
  ar: [
    { title: "حلول مخصوصة", text: "على مقاس احتياجك" },
    { title: "تركيز على الجودة", text: "بنقدم الأفضل" },
    { title: "دعم موثوق", text: "معاك في كل خطوة" },
  ],
});

export const getPricingHeroHighlights = withIcons([Banknote, Ban, Headphones, Rocket], {
  en: [
    { title: "One-Time Payment", text: "No recurring fees" },
    { title: "No Hidden Costs", text: "100% transparent" },
    { title: "Dedicated Support", text: "We're here for you" },
    { title: "On-Time Delivery", text: "Quality on time" },
  ],
  ar: [
    { title: "دفع مرة واحدة", text: "من غير اشتراكات" },
    { title: "من غير تكاليف مخفية", text: "شفافية 100%" },
    { title: "دعم مخصوص", text: "جنبك دايمًا" },
    { title: "تسليم في الميعاد", text: "جودة في وقتها" },
  ],
});

export const getContactHeroHighlights = withIcons([Clock, Lock, Users], {
  en: [
    { title: "Fast Response", text: "We reply within 24h" },
    { title: "Secure & Confidential", text: "Your information is safe" },
    { title: "Expert Support", text: "We're here to help" },
  ],
  ar: [
    { title: "رد سريع", text: "بنرد خلال 24 ساعة" },
    { title: "آمن وسري", text: "بياناتك في أمان" },
    { title: "دعم متخصص", text: "موجودين نساعدك" },
  ],
});

/** "Why Choose Us" on the Services page. */
export const getWhyChooseUs = withIcons([ShieldCheck, BadgeCheck, Timer, Users], {
  en: [
    { title: "Experienced Team", text: "Skilled professionals with hands-on experience in multiple technologies." },
    { title: "Quality Assurance", text: "We follow best practices to deliver secure and high-quality solutions." },
    { title: "On-Time Delivery", text: "We value your time and ensure projects are delivered on schedule." },
    { title: "Long-Term Partnership", text: "We believe in building long-term relationships and growing together." },
  ],
  ar: [
    { title: "فريق خبرة", text: "محترفين عندهم خبرة عملية في تقنيات كتيرة." },
    { title: "ضمان الجودة", text: "بنمشي على أفضل الممارسات عشان نسلّم حلول آمنة وعالية الجودة." },
    { title: "تسليم في الميعاد", text: "وقتك مهم عندنا، وبنسلّم المشاريع في مواعيدها." },
    { title: "شراكة طويلة المدى", text: "بنؤمن بالعلاقات اللي بتكمل، وبننمو فيها مع بعض." },
  ],
});

/** "Why Choose Solo Technology?" strip on the Pricing page. */
export const getPricingWhy = withIcons([Users, Code2, BadgeCheck, Handshake], {
  en: [
    { title: "Experienced Team", text: "Skilled professionals with years of experience." },
    { title: "Modern Technologies", text: "We use the latest tools and technologies." },
    { title: "Quality Assured", text: "We follow best practices to ensure quality." },
    { title: "Client Satisfaction", text: "We focus on building long-term relationships." },
  ],
  ar: [
    { title: "فريق خبرة", text: "محترفين بخبرة سنين." },
    { title: "تقنيات حديثة", text: "بنستخدم أحدث الأدوات والتقنيات." },
    { title: "جودة مضمونة", text: "بنمشي على أفضل الممارسات عشان نضمن الجودة." },
    { title: "رضا العميل", text: "بنركّز على بناء علاقات طويلة المدى." },
  ],
});

export const getPrinciples = withIcons([Rocket, ShieldCheck, Users, Target], {
  en: [
    { title: "Innovation", text: "We embrace new ideas and technologies to build solutions that are modern and future-ready." },
    { title: "Integrity", text: "We believe in transparency, honesty and doing the right thing for our clients." },
    { title: "Collaboration", text: "We work closely with our clients as partners, not just service providers." },
    { title: "Excellence", text: "We are committed to delivering high-quality products that exceed expectations." },
  ],
  ar: [
    { title: "الابتكار", text: "بنرحّب بالأفكار والتقنيات الجديدة عشان نبني حلول حديثة وجاهزة للمستقبل." },
    { title: "الأمانة", text: "بنؤمن بالشفافية والصدق، وبنعمل الصح مع عملائنا دايمًا." },
    { title: "التعاون", text: "بنشتغل مع عملائنا كشركاء، مش مجرد مقدّمي خدمة." },
    { title: "التميّز", text: "ملتزمين نقدّم منتجات عالية الجودة تفوق التوقعات." },
  ],
});

export const missionIcon = Flag;
export const visionIcon = Eye;

export const aboutClients = ["Bonita Cosmetics", "TikTour Egypt", "Unique DP", "Boutique Yoka"];

const timelines: Record<Locale, string[]> = {
  en: ["ASAP", "1 - 3 months", "3 - 6 months", "Flexible"],
  ar: ["في أسرع وقت", "من شهر لـ 3 شهور", "من 3 لـ 6 شهور", "مرن"],
};
export const getTimelineOptions = (locale: Locale) => timelines[locale];

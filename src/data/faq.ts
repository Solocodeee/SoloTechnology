import type { FAQItem } from "@/types";
import type { Locale } from "@/i18n/config";

const faqs: Record<Locale, FAQItem[]> = {
  en: [
    { question: "How long does it take to start a project?", answer: "Most projects kick off within 3-5 business days of signing. After our discovery call we send a proposal and timeline, and once approved, our team gets started right away." },
    { question: "Do you provide ongoing support?", answer: "Yes. Every package includes a support window after launch, and we offer extended maintenance plans for continuous updates, monitoring and improvements." },
    { question: "What is your typical project timeline?", answer: "A marketing website typically takes 2-4 weeks, while custom software or mobile apps can take 6-12 weeks. We share a detailed timeline during planning." },
    { question: "How do you ensure the security of my project?", answer: "We follow industry best practices for authentication, data handling and hosting, run regular security reviews, and keep dependencies patched." },
  ],
  ar: [
    { question: "المشروع بيبدأ بعد قد إيه؟", answer: "أغلب المشاريع بتبدأ خلال 3 لـ 5 أيام شغل من التعاقد. بعد مكالمة الاستكشاف بنبعتلك عرض وجدول زمني، ولما توافق فريقنا بيبدأ على طول." },
    { question: "بتقدموا دعم بعد التسليم؟", answer: "أكيد. كل باقة فيها فترة دعم بعد الإطلاق، وعندنا خطط صيانة ممتدة لو عايز تحديثات ومتابعة وتحسينات مستمرة." },
    { question: "المشروع عادةً بياخد قد إيه؟", answer: "الموقع التسويقي غالبًا بياخد من أسبوعين لـ 4 أسابيع، أما البرمجيات المخصصة أو تطبيقات الموبايل ممكن تاخد من 6 لـ 12 أسبوع. وبنديك جدول زمني تفصيلي وقت التخطيط." },
    { question: "إزاي بتضمنوا أمان مشروعي؟", answer: "بنمشي على أفضل ممارسات الأمان في تسجيل الدخول والتعامل مع البيانات والاستضافة، وبنعمل مراجعات أمنية بانتظام، وبنحدّث كل المكتبات أول بأول." },
  ],
};

export const getFaqs = (locale: Locale): FAQItem[] => faqs[locale];

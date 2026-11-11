import type { ContentSection } from "@/types";
import type { Locale } from "@/i18n/config";

/**
 * Starter legal text. This is a general template, not legal advice:
 * have it reviewed by a qualified lawyer for your jurisdiction before launch.
 */
const privacy: Record<Locale, ContentSection[]> = {
  en: [
    { paragraphs: ["This policy explains what personal information Solo Technology collects through this website, how we use it and the choices you have."] },
    { heading: "Information we collect", paragraphs: ["We collect information you give us directly, mainly through the contact form:"], bullets: ["Your name and phone number", "Your company name, if you provide it", "Details about your project and timeline"] },
    { heading: "How we use it", paragraphs: ["We use this information to respond to your enquiry, prepare proposals and communicate about your project. We do not sell your personal information."] },
    { heading: "Sharing", paragraphs: ["We share information only with service providers who help us operate the website and handle enquiries, and when the law requires it."] },
    { heading: "Retention and security", paragraphs: ["We keep enquiry details only as long as needed to handle your request and for reasonable business records. We use reasonable technical and organisational measures to protect your information."] },
    { heading: "Your choices", paragraphs: ["You can ask us to access, correct or delete the personal information we hold about you by contacting us on WhatsApp using the number on the contact page."] },
    { heading: "Changes", paragraphs: ["We may update this policy from time to time. The latest version will always be available on this page."] },
  ],
  ar: [
    { paragraphs: ["السياسة دي بتوضح إيه المعلومات الشخصية اللي Solo Technology بتجمعها من خلال الموقع، وبنستخدمها إزاي، وإيه اختياراتك."] },
    { heading: "المعلومات اللي بنجمعها", paragraphs: ["بنجمع المعلومات اللي بتديهالنا بنفسك، وغالبًا من خلال فورم التواصل:"], bullets: ["اسمك ورقم تليفونك", "اسم شركتك لو كتبته", "تفاصيل مشروعك ومدته"] },
    { heading: "بنستخدمها في إيه", paragraphs: ["بنستخدم المعلومات دي عشان نرد على استفسارك ونجهّز العروض ونتواصل معاك بخصوص مشروعك. ومبنبيعش بياناتك الشخصية لأي حد."] },
    { heading: "المشاركة", paragraphs: ["بنشارك المعلومات بس مع مقدّمي الخدمات اللي بيساعدونا نشغّل الموقع ونتعامل مع الاستفسارات، ولما القانون يطلب ده."] },
    { heading: "الاحتفاظ والأمان", paragraphs: ["بنحتفظ بتفاصيل الاستفسار بس للمدة اللازمة للرد عليك وللسجلات التجارية المعقولة. وبنستخدم إجراءات تقنية وتنظيمية معقولة لحماية معلوماتك."] },
    { heading: "اختياراتك", paragraphs: ["تقدر تطلب مننا الاطلاع على بياناتك الشخصية اللي عندنا أو تصحيحها أو مسحها، بإنك تكلمنا على واتساب على الرقم الموجود في صفحة التواصل."] },
    { heading: "التغييرات", paragraphs: ["ممكن نحدّث السياسة دي من وقت للتاني. آخر نسخة هتلاقيها دايمًا في الصفحة دي."] },
  ],
};

const terms: Record<Locale, ContentSection[]> = {
  en: [
    { paragraphs: ["These terms apply to your use of this website. Services we provide to clients are governed by a separate written agreement or proposal."] },
    { heading: "Use of the website", paragraphs: ["You agree to use the website lawfully and not to attempt to disrupt it, gain unauthorised access or misuse its content."] },
    { heading: "Intellectual property", paragraphs: ["The content, design and code of this website belong to Solo Technology or its licensors. Project images are shown for portfolio purposes and remain the property of their respective owners."] },
    { heading: "Information on this site", paragraphs: ["We aim to keep the information accurate and current, but it is provided for general information and does not constitute a binding offer. Package contents and timelines are confirmed in your proposal."] },
    { heading: "Limitation of liability", paragraphs: ["To the extent permitted by law, Solo Technology is not liable for losses arising from your use of this website or reliance on its content."] },
    { heading: "Changes and contact", paragraphs: ["We may update these terms at any time. If you have questions, please contact us using the details on the contact page."] },
  ],
  ar: [
    { paragraphs: ["الشروط دي بتنطبق على استخدامك للموقع ده. الخدمات اللي بنقدمها للعملاء بتتحكم فيها اتفاقية مكتوبة أو عرض سعر منفصل."] },
    { heading: "استخدام الموقع", paragraphs: ["بتوافق إنك تستخدم الموقع بشكل قانوني، وما تحاولش تعطّله أو تدخل عليه من غير تصريح أو تسيء استخدام محتواه."] },
    { heading: "الملكية الفكرية", paragraphs: ["محتوى الموقع وتصميمه وكوده ملك لـ Solo Technology أو للجهات المرخّصة لها. صور المشاريع معروضة لأغراض عرض الأعمال، وبتفضل ملك أصحابها."] },
    { heading: "المعلومات في الموقع", paragraphs: ["بنحاول نخلّي المعلومات دقيقة ومحدّثة، بس هي معلومات عامة ومش عرض ملزم. محتوى الباقات والمدد الزمنية بيتأكد في عرض السعر الخاص بيك."] },
    { heading: "حدود المسؤولية", paragraphs: ["في الحدود اللي القانون بيسمح بيها، Solo Technology مش مسؤولة عن أي خسائر ناتجة عن استخدامك للموقع أو اعتمادك على محتواه."] },
    { heading: "التغييرات والتواصل", paragraphs: ["ممكن نحدّث الشروط دي في أي وقت. لو عندك أي سؤال، كلمنا من خلال بيانات التواصل الموجودة في صفحة التواصل."] },
  ],
};

export const getPrivacyPolicy = (l: Locale) => privacy[l];
export const getTerms = (l: Locale) => terms[l];

import { Search, FileText, PenTool, Code2, Rocket, Users, Trophy, Code } from "lucide-react";
import type { ProcessStep, Stat } from "@/types";
import type { Locale } from "@/i18n/config";

const stepBase = [
  { step: "1", icon: Search }, { step: "2", icon: FileText }, { step: "3", icon: PenTool },
  { step: "4", icon: Code2 }, { step: "5", icon: Rocket },
];

const stepText: Record<Locale, { title: string; description: string }[]> = {
  en: [
    { title: "Discover", description: "We understand your goals, requirements and target audience." },
    { title: "Plan", description: "We plan the project, define features and create a roadmap." },
    { title: "Design", description: "We design stunning UI/UX that is modern and user-friendly." },
    { title: "Develop", description: "We build clean, scalable and high-performance solutions." },
    { title: "Launch", description: "We test, deploy and launch your product successfully." },
  ],
  ar: [
    { title: "الاستكشاف", description: "بنفهم أهدافك ومتطلباتك والجمهور المستهدف." },
    { title: "التخطيط", description: "بنخطط للمشروع ونحدد المميزات ونرسم خطة الطريق." },
    { title: "التصميم", description: "بنصمم واجهات مبهرة وسهلة الاستخدام." },
    { title: "التطوير", description: "بنبني حلول نضيفة وقابلة للتوسع وعالية الأداء." },
    { title: "الإطلاق", description: "بنختبر وننشر وننطلق بمنتجك بنجاح." },
  ],
};

export function getProcessSteps(locale: Locale): ProcessStep[] {
  return stepBase.map((b, i) => ({ ...b, ...stepText[locale][i] }));
}

const statBase = [
  { icon: Rocket, value: "15+" }, { icon: Users, value: "120+" }, { icon: Trophy, value: "5+" }, { icon: Code, value: "99%" },
];
const statLabels: Record<Locale, string[]> = {
  en: ["Projects Completed", "Happy Clients", "Years Experience", "Client Satisfaction"],
  ar: ["مشروع اتسلّم", "عميل مبسوط", "سنين خبرة", "رضا العملاء"],
};

export function getStats(locale: Locale): Stat[] {
  return statBase.map((b, i) => ({ ...b, label: statLabels[locale][i] }));
}

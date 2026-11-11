import "server-only";
import type { Locale } from "../config";
import { en, type Messages } from "./en";
import { ar } from "./ar";
import { getLocale } from "../request";

export const messages: Record<Locale, Messages> = { en, ar };
export type { Messages, HighlightTitle } from "./en";

/** UI strings for the current request (Server Components only). */
export function getMessages(): Messages {
  return messages[getLocale()];
}

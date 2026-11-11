"use client";

import { Lock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FormField, Input, Select, Textarea } from "@/components/forms/form-field";
import { whatsappUrl } from "@/lib/whatsapp";

export interface ContactFormLabels {
  name: string; phone: string; company: string;
  service: string; selectService: string;
  timeline: string; selectTimeline: string; message: string; messagePlaceholder: string;
  send: string; privacy: string;
  /** First line(s) of the WhatsApp message. */
  waIntro: string;
  /** Heading above the project description in the WhatsApp message. */
  waDetails: string;
}

interface ContactFormProps {
  labels: ContactFormLabels;
  services: string[];
  timelines: string[];
}

/** Collects the visitor's details and opens WhatsApp with them as a ready-to-send message. */
export function ContactForm({ labels, services, timelines }: ContactFormProps) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [labels.waIntro, ""];
    const fields: [string, string][] = [
      [labels.name, get("name")],
      [labels.phone, get("phone")],
      [labels.company, get("company")],
      [labels.service, get("service")],
      [labels.timeline, get("timeline")],
    ];
    for (const [label, value] of fields) if (value) lines.push(`${label.replace(/\s*\(.*\)\s*$/, "")}: ${value}`);
    lines.push("", `${labels.waDetails}:`, get("message"));

    const url = whatsappUrl(lines.join("\n"));
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label={labels.name} htmlFor="name" required>
          <Input id="name" name="name" placeholder={labels.name} required autoComplete="name" />
        </FormField>
        <FormField label={labels.phone} htmlFor="phone">
          <Input id="phone" name="phone" type="tel" dir="ltr" className="text-start" placeholder={labels.phone} autoComplete="tel" />
        </FormField>
      </div>

      <FormField label={labels.company} htmlFor="company">
        <Input id="company" name="company" placeholder={labels.company} autoComplete="organization" />
      </FormField>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label={labels.service} htmlFor="service" required>
          <Select id="service" name="service" required defaultValue="">
            <option value="" disabled>{labels.selectService}</option>
            {services.map((s) => <option key={s}>{s}</option>)}
          </Select>
        </FormField>
        <FormField label={labels.timeline} htmlFor="timeline">
          <Select id="timeline" name="timeline" defaultValue="">
            <option value="" disabled>{labels.selectTimeline}</option>
            {timelines.map((t) => <option key={t}>{t}</option>)}
          </Select>
        </FormField>
      </div>

      <FormField label={labels.message} htmlFor="message" required>
        <Textarea id="message" name="message" required rows={5} placeholder={labels.messagePlaceholder} />
      </FormField>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" withArrow={false}>
          <FaWhatsapp className="size-5" aria-hidden="true" />
          {labels.send}
        </Button>
        <p className="flex items-center gap-2 text-xs text-ink-500">
          <Lock className="size-4 shrink-0" aria-hidden="true" />
          {labels.privacy}
        </p>
      </div>
    </form>
  );
}

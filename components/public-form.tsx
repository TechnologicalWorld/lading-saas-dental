"use client";

import type { FormEvent, ReactNode } from "react";
import {
  Building2,
  Mail,
  MessageCircle,
  MessageSquareText,
  Phone,
  UserRound,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function PublicForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Hola, quiero información sobre ${siteConfig.name}.`,
      "",
      `Nombre: ${data.get("name")}`,
      `Clínica: ${data.get("clinic")}`,
      `Teléfono: ${data.get("phone")}`,
      `Correo: ${data.get("email")}`,
      `Motivo: ${data.get("subject")}`,
      `Mensaje: ${data.get("message")}`,
    ].join("\n");

    window.open(
      `${siteConfig.routes.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
        <MessageCircle className="mt-0.5 size-5 shrink-0" />
        <p>
          Tu consulta se abrirá en WhatsApp para enviarla al{" "}
          <strong>+591 77793901</strong>.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Nombre completo"
          icon={<UserRound />}
          placeholder="Ej. María Fernández"
        />
        <Field
          id="clinic"
          label="Clínica o consultorio"
          icon={<Building2 />}
          placeholder="Ej. Clínica Dental Central"
        />
        <Field
          id="phone"
          label="Teléfono"
          type="tel"
          icon={<Phone />}
          placeholder="Ej. 70000000"
        />
        <Field
          id="email"
          label="Correo electrónico"
          type="email"
          icon={<Mail />}
          placeholder="nombre@clinica.com"
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-bold text-slate-800"
          >
            Motivo de contacto
          </label>
          <select
            id="subject"
            name="subject"
            className="field-control"
            defaultValue="Solicitar una demostración"
          >
            <option>Solicitar una demostración</option>
            <option>Planes y precios</option>
            <option>Consulta general</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-bold text-slate-800"
          >
            Mensaje
          </label>
          <div className="relative">
            <MessageSquareText aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3.5 z-10 size-4 text-slate-400" />
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="field-control field-with-icon resize-y"
              placeholder="Cuéntanos sobre tu clínica y lo que necesitas."
            />
          </div>
        </div>
        <button
          type="submit"
          className="button-base mt-1 w-full bg-teal-600 text-white hover:bg-teal-700 sm:col-span-2"
        >
          <MessageCircle className="size-4" />
          Enviar por WhatsApp
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  icon,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold text-slate-800"
      >
        {label}
      </label>
      <div className="relative">
        <span aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-slate-400 [&>svg]:size-4">
          {icon}
        </span>
        <input
          id={id}
          name={id}
          type={type}
          required
          className="field-control field-with-icon"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

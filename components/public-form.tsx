"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  LockKeyhole,
  Mail,
  MessageSquareText,
  UserRound,
} from "lucide-react";
import { siteConfig } from "@/config/site";

type FormType = "login" | "register" | "contact";

export function PublicForm({ type }: { type: FormType }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent)
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-center"
      >
        <CheckCircle2 className="mx-auto size-10 text-emerald-600" />
        <h2 className="mt-4 text-xl font-bold text-slate-900">
          {type === "contact" ? "Mensaje preparado" : "Formulario validado"}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
          {type === "contact"
            ? "El formulario está listo. El envío se habilitará cuando se configure el canal comercial definitivo."
            : "Esta pantalla está lista para conectarse al servicio de autenticación. Todavía no se enviaron datos al backend."}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="button-base mt-5 bg-teal-600 text-white"
        >
          Volver al formulario
        </button>
      </div>
    );

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-cyan-900">
        <LockKeyhole className="mt-0.5 size-5 shrink-0" />
        <p>
          Vista pública preparada para integración. Actualmente no guarda ni
          envía información al backend.
        </p>
      </div>
      <div className="grid gap-5">
        {type !== "login" && (
          <Field
            id="name"
            label={type === "contact" ? "Nombre completo" : "Tu nombre"}
            icon={<UserRound />}
            placeholder="Ej. María Fernández"
          />
        )}
        {type === "register" && (
          <Field
            id="clinic"
            label="Nombre de la clínica"
            icon={<UserRound />}
            placeholder="Ej. Clínica Dental Central"
          />
        )}
        <Field
          id="email"
          label="Correo electrónico"
          type="email"
          icon={<Mail />}
          placeholder="nombre@clinica.com"
        />
        {type !== "contact" && (
          <Field
            id="password"
            label="Contraseña"
            type="password"
            icon={<LockKeyhole />}
            placeholder="Mínimo 8 caracteres"
            minLength={8}
            autoComplete={
              type === "register" ? "new-password" : "current-password"
            }
          />
        )}
        {type === "contact" && (
          <>
            <div>
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
                defaultValue="demo"
              >
                <option value="demo">Solicitar una demostración</option>
                <option value="sales">Planes y precios</option>
                <option value="support">Consulta general</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                Mensaje
              </label>
              <div className="relative">
                <MessageSquareText className="absolute left-3.5 top-3.5 size-4 text-slate-400" />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="field-control resize-y pl-10"
                  placeholder="Cuéntanos sobre tu clínica y lo que necesitas."
                />
              </div>
            </div>
          </>
        )}
        <button
          type="submit"
          className="button-base mt-1 w-full bg-teal-600 text-white hover:bg-teal-700"
        >
          {type === "login"
            ? "Iniciar sesión"
            : type === "register"
              ? "Crear cuenta"
              : "Enviar consulta"}
        </button>
      </div>
      {type === "login" && (
        <p className="mt-5 text-center text-sm text-slate-600">
          ¿Aún no tienes cuenta?{" "}
          <Link
            className="font-bold text-teal-700 hover:underline"
            href={siteConfig.routes.register}
          >
            Regístrate gratis
          </Link>
        </p>
      )}
      {type === "register" && (
        <p className="mt-5 text-center text-sm text-slate-600">
          ¿Ya tienes cuenta?{" "}
          <Link
            className="font-bold text-teal-700 hover:underline"
            href={siteConfig.routes.login}
          >
            Inicia sesión
          </Link>
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  icon,
  type = "text",
  placeholder,
  minLength,
  autoComplete,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  type?: string;
  placeholder: string;
  minLength?: number;
  autoComplete?: string;
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
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 [&>svg]:size-4">
          {icon}
        </span>
        <input
          id={id}
          name={id}
          type={type}
          required
          minLength={minLength}
          autoComplete={autoComplete ?? (id === "email" ? "email" : "name")}
          className="field-control pl-10"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

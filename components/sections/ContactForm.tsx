"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { Button, Field, Input, Textarea } from "@/components/hg";

type Status = "idle" | "submitting" | "success" | "error";

/* Contact / quote-request form.
   Submits to /api/submit which appends a row to a Google Sheet. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = new FormData(event.currentTarget);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: form.get("name"),
          Email: form.get("email"),
          Company: form.get("company"),
          Phone: form.get("phone"),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? `Server error (${res.status})`);
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 18 }}
    >
      <div className="hg-grid-2" style={{ gap: 14 }}>
        <Field label="Nom complet" htmlFor="cf-name">
          <Input id="cf-name" name="name" autoComplete="name" required placeholder="Votre nom" />
        </Field>
        <Field label="Entreprise" htmlFor="cf-company">
          <Input id="cf-company" name="company" autoComplete="organization" placeholder="Nom de l'entreprise" />
        </Field>
      </div>

      <div className="hg-grid-2" style={{ gap: 14 }}>
        <Field label="E-mail professionnel" htmlFor="cf-email">
          <Input id="cf-email" name="email" type="email" autoComplete="email" required placeholder="adresse@entreprise.com" />
        </Field>
        <Field label="Téléphone" htmlFor="cf-phone">
          <Input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+212 ..." />
        </Field>
      </div>

      <Field
        label="Parlez-nous de votre projet"
        htmlFor="cf-message"
        hint="Ces informations suffisent pour préparer un premier échange."
      >
        <Textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Produit, quantité, origine, destination et échéance..."
        />
      </Field>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          iconAfter="arrowRight"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours\u2026" : "Envoyer la demande"}
        </Button>

        <p
          aria-live="polite"
          style={{
            font: "var(--type-caption)",
            color:
              status === "success"
                ? "var(--green-600, #16a34a)"
                : status === "error"
                  ? "var(--red-600, #dc2626)"
                  : "var(--text-muted)",
          }}
        >
          {status === "success" && "✓ Votre demande a bien été envoyée. Nous vous répondrons rapidement."}
          {status === "error" && "✗ Une erreur est survenue. Veuillez réessayer ou nous contacter par e-mail."}
          {(status === "idle" || status === "submitting") &&
            "Vos données sont envoyées de manière sécurisée."}
        </p>
      </div>
    </form>
  );
}

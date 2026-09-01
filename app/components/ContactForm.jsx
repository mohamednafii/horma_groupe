"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: fd.get("Name"),
          Email: fd.get("Email"),
          Company: fd.get("Company"),
          Phone: fd.get("Phone"),
        }),
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl space-y-5"
    >
      {/* ---- Name ---- */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="text-sm font-medium text-gray-700">
          Nom complet <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-name"
          name="Name"
          type="text"
          required
          autoComplete="name"
          placeholder="Votre nom"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900
                     shadow-sm transition focus:border-orange-500 focus:outline-none focus:ring-2
                     focus:ring-orange-500/30"
        />
      </div>

      {/* ---- Email ---- */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-sm font-medium text-gray-700">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-email"
          name="Email"
          type="email"
          required
          autoComplete="email"
          placeholder="adresse@entreprise.com"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900
                     shadow-sm transition focus:border-orange-500 focus:outline-none focus:ring-2
                     focus:ring-orange-500/30"
        />
      </div>

      {/* ---- Company ---- */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-company" className="text-sm font-medium text-gray-700">
          Entreprise
        </label>
        <input
          id="cf-company"
          name="Company"
          type="text"
          autoComplete="organization"
          placeholder="Nom de l'entreprise"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900
                     shadow-sm transition focus:border-orange-500 focus:outline-none focus:ring-2
                     focus:ring-orange-500/30"
        />
      </div>

      {/* ---- Phone ---- */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-phone" className="text-sm font-medium text-gray-700">
          Téléphone
        </label>
        <input
          id="cf-phone"
          name="Phone"
          type="tel"
          autoComplete="tel"
          placeholder="+212 ..."
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900
                     shadow-sm transition focus:border-orange-500 focus:outline-none focus:ring-2
                     focus:ring-orange-500/30"
        />
      </div>

      {/* ---- Submit button ---- */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white
                   shadow-md transition hover:bg-orange-700 focus:outline-none focus:ring-2
                   focus:ring-orange-500/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Envoi en cours\u2026" : "Envoyer"}
      </button>

      {/* ---- Status message ---- */}
      {status !== "idle" && status !== "submitting" && (
        <p
          aria-live="polite"
          className={`text-center text-sm font-medium ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status === "success" && "✓ Envoyé avec succès !"}
          {status === "error" && "✗ Une erreur est survenue. Veuillez réessayer."}
        </p>
      )}
    </form>
  );
}

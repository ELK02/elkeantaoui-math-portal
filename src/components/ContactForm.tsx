"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { canSubmit, recordSubmission, MAX_SUBMISSIONS_PER_WINDOW } from "@/lib/contact-rate-limit";

type Status = "idle" | "sending" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const MESSAGE_MAX_LENGTH = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMessage("Le formulaire de contact n'est pas encore configuré.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot : un vrai visiteur ne remplit jamais ce champ invisible. On fait
    // semblant d'avoir réussi pour ne pas indiquer au robot que son message est filtré.
    if (String(data.get("company") ?? "").trim() !== "") {
      form.reset();
      setStatus("success");
      return;
    }

    const email = String(data.get("email") ?? "").trim();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      setErrorMessage("Merci d'indiquer une adresse e-mail valide.");
      return;
    }

    const message = String(data.get("message") ?? "");
    if (message.length > MESSAGE_MAX_LENGTH) {
      setStatus("error");
      setErrorMessage(`Le message est trop long (maximum ${MESSAGE_MAX_LENGTH} caractères).`);
      return;
    }

    if (!canSubmit()) {
      setStatus("error");
      setErrorMessage(
        `Limite de ${MAX_SUBMISSIONS_PER_WINDOW} messages par heure atteinte. Réessayez un peu plus tard.`
      );
      return;
    }

    data.append("access_key", ACCESS_KEY);
    data.append("subject", `[Profdemath.com] ${String(data.get("subject") ?? "")}`);
    data.delete("company");

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = (await res.json()) as { success: boolean; message?: string };

      if (result.success) {
        recordSubmission();
        setStatus("success");
        form.reset();
        setMessageLength(0);
      } else {
        setStatus("error");
        setErrorMessage("L'envoi a échoué. Réessayez plus tard.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("L'envoi a échoué. Vérifiez votre connexion et réessayez.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-green-600/30 bg-green-100/50 px-6 py-12 text-center dark:border-green-500/30 dark:bg-green-950/20">
        <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-500" />
        <p className="font-display text-lg font-semibold text-foreground">
          Votre message a bien été envoyé.
        </p>
        <p className="text-sm text-foreground-muted">Je vous répondrai prochainement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot anti-robots : invisible et ignoré des lecteurs d'écran, jamais rempli par un humain. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Ne pas remplir ce champ</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-navy-400 focus:outline-none dark:focus:border-navy-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Adresse e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-navy-400 focus:outline-none dark:focus:border-navy-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          Sujet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={200}
          className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-navy-400 focus:outline-none dark:focus:border-navy-500"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message
          </label>
          <span className="font-mono text-[11px] text-foreground-muted">
            {messageLength}/{MESSAGE_MAX_LENGTH}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={MESSAGE_MAX_LENGTH}
          onChange={(e) => setMessageLength(e.target.value.length)}
          className="mt-1.5 w-full resize-none rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-navy-400 focus:outline-none dark:focus:border-navy-500"
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <TriangleAlert className="h-4 w-4 shrink-0" />
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800 disabled:opacity-60 dark:bg-white dark:text-navy-900 dark:hover:bg-navy-100"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "sending" ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}

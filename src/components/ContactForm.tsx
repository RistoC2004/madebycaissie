"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      businessName: formData.get("businessName"),
      email: formData.get("email"),
      website: formData.get("website"),
      message: formData.get("message"),
      companyWebsite: formData.get("companyWebsite"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] bg-white p-7 shadow-sm sm:p-9"
    >
      {/* Honeypot spam field */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Company website
          <input
            type="text"
            name="companyWebsite"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Your name
          <input
            required
            name="name"
            type="text"
            maxLength={100}
            placeholder="John Smith"
            className="mt-2 w-full rounded-xl border border-black/15 bg-[#fafaf8] px-4 py-4 font-normal outline-none transition focus:border-[#31594a]"
          />
        </label>

        <label className="text-sm font-semibold">
          Business name
          <input
            required
            name="businessName"
            type="text"
            maxLength={150}
            placeholder="Smith Roofing"
            className="mt-2 w-full rounded-xl border border-black/15 bg-[#fafaf8] px-4 py-4 font-normal outline-none transition focus:border-[#31594a]"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold">
        Email
        <input
          required
          name="email"
          type="email"
          maxLength={200}
          placeholder="john@business.ca"
          className="mt-2 w-full rounded-xl border border-black/15 bg-[#fafaf8] px-4 py-4 font-normal outline-none transition focus:border-[#31594a]"
        />
      </label>

      <label className="mt-5 block text-sm font-semibold">
        Current website
        <input
          required
          name="website"
          type="text"
          maxLength={500}
          placeholder="yourbusiness.ca"
          className="mt-2 w-full rounded-xl border border-black/15 bg-[#fafaf8] px-4 py-4 font-normal outline-none transition focus:border-[#31594a]"
        />
      </label>

      <label className="mt-5 block text-sm font-semibold">
        Anything we should know?
        <textarea
          name="message"
          rows={4}
          maxLength={3000}
          placeholder="Tell us a little about what you'd like to improve..."
          className="mt-2 w-full resize-none rounded-xl border border-black/15 bg-[#fafaf8] px-4 py-4 font-normal outline-none transition focus:border-[#31594a]"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-[#31594a] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#244438] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading"
          ? "Sending..."
          : "Request my free website review →"}
      </button>

      {status === "success" && (
        <div className="mt-5 rounded-xl bg-[#31594a]/10 px-4 py-4 text-center text-sm font-semibold text-[#31594a]">
          Got it — your website review request has been sent. We&apos;ll be in
          touch soon.
        </div>
      )}

      {status === "error" && (
        <div className="mt-5 rounded-xl bg-red-50 px-4 py-4 text-center text-sm font-semibold text-red-700">
          {errorMessage}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-black/40">
        No commitment. We&apos;ll personally review your current site.
      </p>
    </form>
  );
}
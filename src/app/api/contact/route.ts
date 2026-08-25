import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeWebsite(website: string) {
  const trimmed = website.trim();

  if (!trimmed) return "";

  const withProtocol =
    trimmed.startsWith("http://") || trimmed.startsWith("https://")
      ? trimmed
      : `https://${trimmed}`;

  try {
    return new URL(withProtocol).toString();
  } catch {
    return "";
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const businessName = String(body.businessName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const website = normalizeWebsite(String(body.website ?? ""));
    const message = String(body.message ?? "").trim();

    // Honeypot field — real visitors never fill this in.
    const companyWebsite = String(body.companyWebsite ?? "").trim();

    if (companyWebsite) {
      return NextResponse.json({ success: true });
    }

    if (!name || !businessName || !email || !website) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      businessName.length > 150 ||
      email.length > 200 ||
      website.length > 500 ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeBusinessName = escapeHtml(businessName);
    const safeEmail = escapeHtml(email);
    const safeWebsite = escapeHtml(website);
    const safeMessage = escapeHtml(message || "No additional message provided.");

    const { error } = await resend.emails.send({
      from: "Made by Caissie Website <website@madebycaissie.com>",
      to: ["hello@madebycaissie.com"],
      replyTo: email,
      subject: `New website review request — ${businessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #111111;">
          <div style="background:#31594a; padding:28px; border-radius:16px 16px 0 0;">
            <h1 style="color:white; margin:0; font-size:24px;">
              New Website Review Request
            </h1>
          </div>

          <div style="border:1px solid #e4e4df; border-top:0; padding:28px; border-radius:0 0 16px 16px;">
            <p><strong>Name:</strong><br />${safeName}</p>

            <p><strong>Business:</strong><br />${safeBusinessName}</p>

            <p><strong>Email:</strong><br />
              <a href="mailto:${safeEmail}">${safeEmail}</a>
            </p>

            <p><strong>Current website:</strong><br />
              <a href="${safeWebsite}">${safeWebsite}</a>
            </p>

            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap;">${safeMessage}</p>

            <hr style="border:none; border-top:1px solid #e4e4df; margin:28px 0;" />

            <p style="font-size:12px; color:#777;">
              Submitted through madebycaissie.com
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your request right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedFormTypes = new Set(["Homepage Lead", "Contact Page"]);

function clean(value, maxLength = 5000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request) {
  try {
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured.");
      return NextResponse.json(
        { success: false, message: "Form service is not configured." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const formType = clean(body.formType, 100);
    const name = clean(body.name, 150);
    const email = clean(body.email, 254);
    const phone = clean(body.phone, 50);
    const interest = clean(body.interest, 200);
    const subject = clean(body.subject, 200);
    const message = clean(body.message, 5000);
    const marketingConsent = body.marketingConsent === true;

    if (!allowedFormTypes.has(formType)) {
      return NextResponse.json(
        { success: false, message: "Invalid form type." },
        { status: 400 },
      );
    }

    if (!name || !email || !message || !marketingConsent) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (formType === "Homepage Lead" && (!phone || !interest)) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (formType === "Contact Page" && !subject) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: webhookSecret || "",
        formType,
        name,
        email,
        phone,
        interest,
        subject,
        message,
        marketingConsent: marketingConsent ? "Agreed" : "Not Agreed",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error("Google Sheets webhook failed:", response.status, responseText);
      return NextResponse.json(
        { success: false, message: "Unable to submit the form right now." },
        { status: 502 },
      );
    }

    let webhookResult = null;
    try {
      webhookResult = JSON.parse(responseText);
    } catch {
      // Apps Script can still return a successful non-JSON response.
    }

    if (webhookResult?.success === false) {
      console.error("Google Sheets webhook rejected request:", webhookResult);
      return NextResponse.json(
        { success: false, message: "Unable to submit the form right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, message: "Submitted successfully." });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to submit the form right now." },
      { status: 500 },
    );
  }
}

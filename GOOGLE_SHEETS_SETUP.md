# Google Sheets Live Form Setup

Both website forms are already connected to the Next.js API endpoint `/api/submit-form`.
You only need to create the Google Apps Script webhook and add two environment variables.

## 1. Create the Google Sheet

1. Create a new Google Sheet.
2. Give it any name you like (for example `Waypoint Website Leads`).
3. Copy the **Sheet ID** from its URL.

Example:

`https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_SHEET_ID/edit`

4. In the Sheet, open **Extensions -> Apps Script**.

## 2. Add the Apps Script

1. Delete the default Apps Script code.
2. Copy all code from `docs/google-apps-script.gs` into the editor.
3. Replace `paste-your-google-sheet-id-here` with the Sheet ID copied above.
4. Replace `replace-with-the-same-long-random-secret` with your own long secret string.
5. Click **Save**.

The script automatically creates a tab called `Form Submissions` and these columns:

`Timestamp | Form Type | Name | Email | Phone | Interest / Subject | Message | Marketing Consent`

## 3. Deploy as Web App

1. In Apps Script click **Deploy -> New deployment**.
2. Choose **Web app**.
3. Execute as: **Me**.
4. Who has access: **Anyone**.
5. Click **Deploy** and authorize it.
6. Copy the Web App URL ending in `/exec`.

Important: if you later change the Apps Script code, deploy a **new version** from **Deploy -> Manage deployments -> Edit** so the live webhook receives the updated code.

## 4. Configure the Next.js project

Create `.env.local` in the project root using `.env.example`:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=YOUR_SAME_SECRET_FROM_APPS_SCRIPT
```

The secret must exactly match `SCRIPT_SECRET` in the Apps Script.

## 5. Configure production hosting

If deploying on Vercel, Netlify, or another host, add both environment variables in the hosting dashboard as production environment variables, then redeploy.

Do not expose these values with a `NEXT_PUBLIC_` prefix.

## 6. Test

Submit each form once:

- Homepage form -> row should show `Homepage Lead`
- Contact page form -> row should show `Contact Page`

A successful submission shows a toast and resets the form. If the Google Sheet webhook fails, the user sees an error and the form stays filled so they can retry.

/**
 * Google Apps Script webhook for Waypoint Assets website forms.
 *
 * Sheet columns created automatically:
 * Timestamp | Form Type | Name | Email | Phone | Interest / Subject | Message | Marketing Consent
 */

const SPREADSHEET_ID = 'paste-your-google-sheet-id-here';
const SHEET_NAME = 'Form Submissions';
const SCRIPT_SECRET = 'replace-with-the-same-long-random-secret';

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    if (SCRIPT_SECRET && data.secret !== SCRIPT_SECRET) {
      return jsonResponse({ success: false, message: 'Unauthorized' });
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    const headers = [
      'Timestamp',
      'Form Type',
      'Name',
      'Email',
      'Phone',
      'Interest / Subject',
      'Message',
      'Marketing Consent',
    ];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    const interestOrSubject = data.interest || data.subject || '';
    const submittedAt = data.submittedAt ? new Date(data.submittedAt) : new Date();

    sheet.appendRow([
      submittedAt,
      safeCell(data.formType),
      safeCell(data.name),
      safeCell(data.email),
      safeCell(data.phone),
      safeCell(interestOrSubject),
      safeCell(data.message),
      safeCell(data.marketingConsent),
    ]);

    return jsonResponse({ success: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false, message: String(error) });
  }
}

// Prevent user-entered text beginning with =, +, -, or @ from becoming a formula.
function safeCell(value) {
  const text = String(value || '');
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

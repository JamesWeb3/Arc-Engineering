import { google } from 'googleapis';

export default async function handler(req, res) {
  const calendar = google.calendar('v3');
  const auth = new google.auth.GoogleAuth({
    keyFile: 'path-to-your-service-account-file.json', // replace with your key file
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  const calendarId = 'james.oldham0604@gmail.com'; // replace with your calendar ID

  try {
    const response = await calendar.events.list({
      auth: auth,
      calendarId: calendarId,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items;
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

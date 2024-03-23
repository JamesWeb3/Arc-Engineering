export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
      try {
        const { transcript } = req.body;
  
        // Define your Make.com webhook URL here
        const makeRequestUrl = 'https://hook.eu2.make.com/epadilhvr6cy3pbt7d77fhp9k5klhkxk';
  
        // Send the transcript to Make.com
        const response = await fetch(makeRequestUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Include any other headers required by Make.com
          },
          body: JSON.stringify({
            transcript, // Adjust this payload according to what Make.com expects
          }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to send transcript to Make.com');
        }
  
        // Handle success
        const data = await response.json();
        res.status(200).json({ message: 'Transcript sent successfully', data });
      } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send transcript', error: error.message });
      }
    } else {
      // Handle any other HTTP methods
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
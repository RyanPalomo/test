import emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const result = await emailjs.send(
      'service_3s0z07c',     // Your EmailJS service ID
      'template_6lfy60f',    // Your EmailJS template ID
      {
        from_name: name,
        reply_to: email,
        message,
      },
      {
        publicKey: 'RdPBBrS5KnMImRkiW',                     // Your EmailJS Public Key
        privateKey: process.env.EMAILJS_PRIVATE_KEY        // Private key stored securely in Vercel
      }
    );

    return res.status(200).json({ message: 'Email sent!', result });
  } catch (err) {
    console.error('Email sending failed:', err);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}

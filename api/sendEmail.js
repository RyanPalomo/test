import emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const result = await emailjs.send(
      'service_3s0z07c',
      'template_6lfy60f',
      {
        from_name: name,
        reply_to: email,
        message,
      },
      {
        publicKey: 'RdPBBrS5KnMImRkiW', // EmailJS public key
        privateKey: process.env.EMAILJS_PRIVATE_KEY // Securely stored in Vercel
      }
    );

    return res.status(200).json({ message: 'Email sent!', result });
  } catch (err) {
    console.error('Email sending failed:', err);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}

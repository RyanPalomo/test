import emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { name, email, message } = req.body;

  try {
    await emailjs.send(
      'service_3s0z07c',
      'template_6lfy60f',
      { from_name: name, reply_to: email, message },
      {
        publicKey: 'RdPBBrS5KnMImRkiW',
        privateKey: process.env.EMAILJS_PRIVATE_KEY
      }
    );
    res.status(200).json({ message: 'Email sent!' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Failed to send email' });
  }
}

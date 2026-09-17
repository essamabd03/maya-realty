import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, type } = await req.json() as {
      name: string; email: string; phone?: string; message?: string; type: string;
    };

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email required' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Maya Ramadan Website <noreply@mayaramadan.com>',
      to: ['Maya@golddoorrealty.com'],
      reply_to: email,
      subject: `New ${type === 'buy' ? 'Buyer' : type === 'sell' ? 'Seller' : 'Rental'} Inquiry — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAF8F5; border-top: 4px solid #C9A84C;">
          <h1 style="font-size: 22px; font-weight: bold; color: #1A1A1A; margin: 0 0 8px;">New Website Inquiry</h1>
          <p style="color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 3px; margin: 0 0 24px;">Looking to ${type}</p>
          <table style="width: 100%; border-collapse: collapse; background: white;">
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 100px;">Name</td><td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0;">${name}</td></tr>
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email</td><td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Phone</td><td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0;">${phone || '—'}</td></tr>
          </table>
          ${message ? `<div style="margin-top: 20px; background: white; padding: 16px; border-left: 3px solid #C9A84C;"><p style="font-weight: bold; color: #555; margin: 0 0 8px;">Message:</p><p style="margin: 0; color: #1A1A1A; line-height: 1.7;">${message}</p></div>` : ''}
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}

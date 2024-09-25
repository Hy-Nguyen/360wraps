import BusinessNotification from '@/components/Contact/Email/BusinessNotification';
import CustomerConfirmation from '@/components/Contact/Email/CustomerConfirmation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    console.log(formData);
    const { data, error } = await resend.batch.send([
      {
        from: '360 Auto Concepts <contact@hy-nguyen.com>',
        to: [formData.email],
        subject: 'Message Confirmation',
        react: CustomerConfirmation({ ...formData }),
      },
      {
        from: '360 Auto Concepts <contact@hy-nguyen.com>',
        to: ['giahy316@gmail.com', 'autoconcepts360@gmail.com'],
        subject: 'New Business Inquiry',
        react: BusinessNotification({ ...formData }),
      },
    ]);
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

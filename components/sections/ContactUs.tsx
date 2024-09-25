import Link from 'next/link';
import ContactForm from '../Contact/ContactForm';

export default function ContactUs() {
  return (
    <section id="contact" className="container flex min-h-[50dvh] w-full flex-col items-center justify-start gap-10">
      <div className="flex w-full justify-evenly">
        <div className="flex w-2/5 flex-col items-start justify-start gap-6">
          <h1 className="text-3xl font-bold">Ready to Book an Appointment?</h1>
          <p className="w-full text-start text-xl">
            Provide us with your contact information and a brief description of the services you are interested in, and
            we will get back to you to schedule an appointment.
          </p>
        </div>
        <div className="flex w-2/5 flex-col items-start justify-start gap-6">
          <h1 className="text-3xl font-bold">Have Any Questions?</h1>
          <p className="w-full text-start text-xl">
            Send us a message and we will get back to you as soon as possible. Whether you have a question about our
            services, or just want to say hi, we are always happy to hear from you.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

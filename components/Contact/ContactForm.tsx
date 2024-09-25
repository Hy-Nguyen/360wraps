'use client';

import { ContactFormData, contactFormSchema } from '@/lib/schema';
import { z } from 'zod';
import SampleFormImage from '@/public/img/samplewraps/wrap4.png';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import FormInput from './FormInput';
import { MAX_MESSAGE_LENGTH } from '@/lib/constants';
import { format, toZonedTime } from 'date-fns-tz';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    timeSent: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const now = new Date();
    const mstTime = toZonedTime(now, 'America/Phoenix');
    const formattedTime = format(mstTime, "MMM dd, yyyy - hh:mm a 'MST'");
    setFormData((prev) => ({ ...prev, timeSent: formattedTime }));

    try {
      contactFormSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.formErrors.fieldErrors);
        return;
      }
    }

    try {
      setSending(true);
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json();
        toast.success('Thank you for contacting us! We will get back to you as soon as possible.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        const error = await response.json();
        console.error('Failed to send email:', error);
        toast.error('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error sending email. Please try again later.');
    }
    setSending(false);
  }

  return (
    <div className="flex h-full w-full gap-6 rounded-lg border-2 border-gray-400 p-6">
      <div className="relative flex aspect-square w-1/2 grow flex-col gap-4 overflow-hidden rounded-lg bg-black">
        <Image src={SampleFormImage} alt="360 AZ Wraps" className="h-full w-full object-cover" />
        <div className="absolute bottom-0 left-0 flex h-fit w-full flex-col items-start justify-start bg-gradient-to-t from-black/75 to-transparent px-4 py-2 text-white backdrop-blur-sm">
          <h1 className="text-2xl font-bold">360 AZ Wraps</h1>
          <p className="text-gray-300">Open Monday - Friday</p>
          <p className="text-gray-300">10:00 AM - 6:00 PM</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex w-1/2 flex-col justify-evenly rounded-lg">
        <h1 className="text-4xl font-semibold">Contact Us!</h1>
        <p className="text-gray-500">We will get back to you as soon as possible.</p>
        <div className="flex w-full gap-4">
          <FormInput
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            autoComplete="given-name"
            error={errors.firstName}
          />
          <FormInput
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            autoComplete="family-name"
            error={errors.lastName}
          />
        </div>
        <FormInput
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          autoComplete="email"
          error={errors.email}
        />
        <FormInput
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          error={errors.phone}
        />
        <FormInput
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          placeholder="Service"
          error={errors.service}
        />
        <div>
          <div className="relative">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              maxLength={MAX_MESSAGE_LENGTH}
              onChange={handleChange}
              className="no-ring h-[8lh] w-full resize-none rounded-md border border-gray-400 bg-white/80 p-4 transition-colors duration-300 ease-in-out focus-visible:border-main-500"
              placeholder="Give us a brief description of your project and your budget!"
            ></textarea>
            <p className="absolute bottom-4 right-4 text-gray-400">
              {formData.message.length} / {MAX_MESSAGE_LENGTH}
            </p>
          </div>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="h-fit w-full rounded-full bg-black py-2 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black/60"
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
import { z } from 'zod';
import { MAX_MESSAGE_LENGTH } from '@/lib/constants';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  message: z
    .string()
    .min(2, 'Please give a short description of your project and your budget')
    .max(MAX_MESSAGE_LENGTH, `Please limit your message to ${MAX_MESSAGE_LENGTH} characters or less`),
  timeSent: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

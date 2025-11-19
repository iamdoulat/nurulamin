'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'There was an error with your submission.',
      success: false,
    };
  }

  // In a real application, you would send an email here.
  // For example, using Nodemailer or a service like Resend.
  console.log('Contact form submitted:');
  console.log(validatedFields.data);

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    success: true,
  };
}

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'name_required' }),
  company: z.string().min(2, { message: 'company_required' }),
  email: z.string().email({ message: 'email_invalid' }),
  vessel: z.string().optional(),
  message: z.string().min(10, { message: 'message_required' }),
  consent: z.boolean().refine((val) => val === true, {
    message: 'consent_required',
  }),
});

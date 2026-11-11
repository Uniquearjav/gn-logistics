'use server';

import { contactFormSchema } from '@/lib/validations';

/**
 * Server Action for handling marine spare parts inquiry submissions.
 * Validates input and logs payload on server.
 *
 * TODO: Integrate production email delivery provider (e.g., Resend, Postmark, or AWS SES)
 * Example with Resend:
 * await resend.emails.send({
 *   from: 'inquiries@gn-logistics.de',
 *   to: 'info@gn-logistics.de',
 *   subject: `Marine Parts Inquiry from ${data.company} - Vessel: ${data.vessel || 'N/A'}`,
 *   reply_to: data.email,
 *   text: data.message,
 * });
 */
export async function submitContactInquiry(prevState, formData) {
  try {
    const rawData = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      vessel: formData.get('vessel') || '',
      message: formData.get('message'),
      consent: formData.get('consent') === 'true' || formData.get('consent') === 'on',
    };

    const validated = contactFormSchema.safeParse(rawData);

    if (!validated.success) {
      const fieldErrors = {};
      validated.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        if (fieldName) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      return {
        success: false,
        errors: fieldErrors,
        message: 'validation_error',
      };
    }

    // Server-side audit log
    console.log('[AUDIT] Marine Parts Inquiry Received:', {
      timestamp: new Date().toISOString(),
      name: validated.data.name,
      company: validated.data.company,
      email: validated.data.email,
      vessel: validated.data.vessel || 'Not specified',
      messageLength: validated.data.message.length,
    });

    return {
      success: true,
      errors: {},
      message: 'success',
    };
  } catch (error) {
    console.error('[ERROR] Failed to process marine inquiry:', error);
    return {
      success: false,
      errors: { _form: 'unexpected_error' },
      message: 'server_error',
    };
  }
}

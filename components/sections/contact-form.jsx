'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '@/lib/validations';
import { submitContactInquiry } from '@/app/actions/contact';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { LuCircleCheck, LuCircleAlert, LuSend, LuLoaderCircle } from 'react-icons/lu';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [serverState, setServerState] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      vessel: '',
      message: '',
      consent: false,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerState(null);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('company', data.company);
    formData.append('email', data.email);
    formData.append('vessel', data.vessel || '');
    formData.append('message', data.message);
    formData.append('consent', data.consent ? 'true' : 'false');

    try {
      const result = await submitContactInquiry(null, formData);
      setServerState(result);
      if (result.success) {
        reset();
      }
    } catch {
      setServerState({
        success: false,
        message: 'server_error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getErrorMessage = (errorKey) => {
    switch (errorKey) {
      case 'name_required':
        return t('errors.nameRequired');
      case 'company_required':
        return t('errors.companyRequired');
      case 'email_invalid':
        return t('errors.emailInvalid');
      case 'message_required':
        return t('errors.messageRequired');
      case 'consent_required':
        return t('errors.consentRequired');
      default:
        return t('errors.serverError');
    }
  };

  return (
    <div className="w-full">
      {serverState?.success ? (
        <Alert variant="success" className="p-8">
          <LuCircleCheck className="h-6 w-6 text-emerald-600 mt-0.5" />
          <div className="ml-3 space-y-2">
            <AlertTitle className="text-lg font-medium text-emerald-950">
              {t('successTitle')}
            </AlertTitle>
            <AlertDescription className="text-emerald-800 leading-relaxed">
              {t('successMessage')}
            </AlertDescription>
            <div className="pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setServerState(null)}
                className="text-xs"
              >
                Weitere Anfrage senden
              </Button>
            </div>
          </div>
        </Alert>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {serverState?.success === false && (
            <Alert variant="destructive">
              <LuCircleAlert className="h-5 w-5" />
              <div className="ml-2">
                <AlertDescription>{t('errors.serverError')}</AlertDescription>
              </div>
            </Alert>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">{t('nameLabel')}</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder={t('namePlaceholder')}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {getErrorMessage(errors.name.message)}
                </p>
              )}
            </div>

            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company">{t('companyLabel')}</Label>
              <Input
                id="company"
                {...register('company')}
                placeholder={t('companyPlaceholder')}
                aria-invalid={errors.company ? 'true' : 'false'}
              />
              {errors.company && (
                <p className="text-xs text-destructive">
                  {getErrorMessage(errors.company.message)}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">{t('emailLabel')}</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder={t('emailPlaceholder')}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="text-xs text-destructive">
                  {getErrorMessage(errors.email.message)}
                </p>
              )}
            </div>

            {/* Vessel / IMO */}
            <div className="space-y-2">
              <Label htmlFor="vessel">{t('vesselLabel')}</Label>
              <Input
                id="vessel"
                {...register('vessel')}
                placeholder={t('vesselPlaceholder')}
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">{t('messageLabel')}</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder={t('messagePlaceholder')}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && (
              <p className="text-xs text-destructive">
                {getErrorMessage(errors.message.message)}
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="space-y-2 pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                {...register('consent')}
                className="mt-1 h-4 w-4 rounded-sm border-border text-primary focus:ring-primary cursor-pointer"
              />
              <span className="text-xs text-muted-foreground leading-normal">
                {t('consentLabel')}
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-destructive">
                {getErrorMessage(errors.consent.message)}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full sm:w-auto min-w-[200px] text-xs uppercase tracking-wider font-semibold"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <LuLoaderCircle className="h-4 w-4 animate-spin" />
                {t('submittingButton')}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <LuSend className="h-4 w-4" />
                {t('submitButton')}
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

export const SITE_NAME = 'German Naval Logistics';

export const SITE_CONFIG = {
  name: 'German Naval Logistics',
  legalName: 'German Naval Logistics UG (haftungsbeschränkt)',
  description: 'Specialized marine spare parts supply and technical procurement for global shipping companies and fleet operators.',
  url: 'https://www.gn-logistics.de',
  contact: {
    email: 'info@gn-logistics.de',
    phone: '+49 201 24 88 90 41',
    emergencyPhone: '+49 201 24 88 90 41', // 24/7 hotline
    address: {
      street: 'Spiekbank 50',
      postalCode: 'D-45259',
      city: 'Essen',
      country: 'Germany',
    },
    hours: 'Mon – Fri: 08:00 – 18:00 CET | 24/7 AOG Emergency Dispatch',
  },
  legal: {
    managingDirector: '[VORNAME NACHNAME]',
    commercialRegister: 'Amtsgericht Essen, HRB [000000]',
    vatId: '[DE 000 000 000]',
    responsiblePerson: '[VORNAME NACHNAME, Spiekbank 50, D-45259 Essen]',
  },
  nav: [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'services', href: '/services' },
    { key: 'contact', href: '/#contact' },
  ],
};

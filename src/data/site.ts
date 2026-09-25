export const SITE = {
  name: 'Freedive Rote',
  tagline: 'Ocean Performance',
  whatsappUrl: 'https://wa.me/6285773216666',
  phoneDisplay: '+62 857-7321-6666',
  phoneE164: '+6285773216666',
  email: 'info@freediverote.com',
  instagramUrl: 'https://www.instagram.com/freediverote/',
  mapsUrl: 'https://maps.app.goo.gl/kozkb5j8g4gNRhdc6',
  address: 'Desa Oenggaut, Nemberala, Kec. Rote Bar., Kabupaten Rote Ndao, Nusa Tenggara Tim. 85982, Indonesia',
  addressParts: {
    streetAddress: 'Desa Oenggaut, Nemberala, Kec. Rote Bar.',
    addressLocality: 'Nemberala',
    addressRegion: 'Nusa Tenggara Timur',
    postalCode: '85982',
    addressCountry: 'ID',
  },
  logoAlt: 'Freedive Rote — Ocean Performance',
} as const;

export const COURSE_LINKS = [
  { href: '/courses/try-freediving', label: 'Try Freediving' },
  { href: '/courses/level-1', label: 'Level 1' },
  { href: '/courses/level-2', label: 'Level 2' },
  { href: '/courses/level-3', label: 'Level 3' },
  { href: '/courses/coaching', label: 'Coaching' },
  { href: '/courses', label: 'All Courses' },
] as const;

export const NAV_LINKS = [
  { href: '/surf-survival', label: 'Surf Survival' },
  { href: '/trips', label: 'Trips' },
  { href: '/location', label: 'Location' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact Us' },
] as const;

export const FOOTER_LINKS = [
  { href: '/courses', label: 'Freediving Courses' },
  { href: '/surf-survival', label: 'Surf Survival' },
  { href: '/courses/coaching', label: 'Coaching' },
  { href: '/trips', label: 'Trips' },
  { href: '/location', label: 'Location' },
  { href: '/about', label: 'About' },
] as const;

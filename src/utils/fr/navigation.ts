const navBarLinks = [
  { name: 'Accueil', url: '/fr' },
  { name: 'À propos', url: '/about-us' },
  { name: 'Produits', url: '/fr/products' },
  { name: 'Capacités', url: '/capabilities' },
  { name: 'Blog', url: '/fr/blog' },
  { name: 'Contact', url: '/fr/contact' },
];

const footerLinks = [
  {
    section: 'Navigation',
    links: [
      { name: 'Accueil', url: '/fr' },
      { name: 'À propos', url: '/about-us' },
      { name: 'Produits', url: '/fr/products' },
      { name: 'Capacités', url: '/capabilities' },
      { name: 'Contact', url: '/fr/contact' },
    ],
  },
  {
    section: 'Capacités',
    links: [
      { name: 'Manufacturing', url: '/capabilities/manufacturing' },
      { name: 'Services', url: '/fr/services' },
      { name: 'Blog', url: '/fr/blog' },
    ],
  },
];

const socialLinks = {
  facebook: '#',
  x: '#',
  github: 'https://mehtapetro.com',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};

// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
  { name: 'Products', url: '/products' },
  { name: 'Capabilities', url: '/capabilities' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Navigation',
    links: [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about-us' },
      { name: 'Products', url: '/products' },
      { name: 'Capabilities', url: '/capabilities' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  {
    section: 'Capabilities',
    links: [
      { name: 'Manufacturing', url: '/capabilities/manufacturing' },
      { name: 'Services', url: '/services' },
      { name: 'Blog', url: '/blog' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/mehtapetro',
  youtube: 'https://www.youtube.com/@mehtapetro',
  linkedin: 'https://www.linkedin.com/company/mehtapetro/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};

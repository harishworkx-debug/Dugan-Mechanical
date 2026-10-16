export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  roleOrBadge?: string;
  reviewCount?: string;
  text: string;
  services?: string[];
  positiveAttributes?: string[];
  isLocalGuide?: boolean;
}

export const googleReviewsSummary = {
  rating: 5.0,
  totalReviews: 8,
  googleMapsUrl: 'https://maps.app.goo.gl/Xe9FyT3c2GZKtPsV7',
  source: 'Google Business Profile',
};

export const googleReviews: Review[] = [
  {
    id: 'ashley-kilmartin',
    author: 'Ashley Kilmartin',
    rating: 5,
    timeAgo: '10 months ago',
    reviewCount: '5 reviews',
    text: 'Riordan and his guys are the best. I was impressed with their professionalism, expertise, and attention to detail. Riordan is a perfectionist, so you can be confident the job will be done correctly the first time. Highly recommend!!',
    positiveAttributes: ['Professionalism', 'Expertise', 'Attention to detail'],
  },
  {
    id: 'veronica-gorlovsky',
    author: 'Veronica Gorlovsky',
    rating: 5,
    timeAgo: '5 years ago',
    isLocalGuide: true,
    roleOrBadge: 'Local Guide',
    reviewCount: '43 reviews · 6 photos',
    text: "Riordan is awesome to work with and can be trusted to do great work. He’ll be my go to for my plumbing and heating needs as a new home owner for sure. He’s professional, affordable, explains things well, and, as is rare with home repair- super communicative! He responded to my request so quickly and helped get things patched up right away. 5 star person who does a 5 star job.",
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['Plumbing and Heating'],
  },
  {
    id: 'caitlin-mckay',
    author: 'Caitlin McKay',
    rating: 5,
    timeAgo: '5 years ago',
    isLocalGuide: true,
    roleOrBadge: 'Local Guide',
    reviewCount: '15 reviews · 4 photos',
    text: 'Riordan is extremely professional, talented & reliable. All great qualities and thankful for his service! Added bonus he willingly cleaned up thoroughly after!',
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['Water heater installation'],
  },
  {
    id: 'sara-l',
    author: 'Sara L',
    rating: 5,
    timeAgo: '4 years ago',
    reviewCount: '5 reviews · 4 photos',
    text: 'It can be hard to find quality workmanship but Riordan and his team were fast, efficient, communicative, and pleasant to work with on a plumbing project at my home. I’d give more than five stars if I could and highly recommend Dugan Mechanical! Thanks guys!',
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['Residential Plumbing'],
  },
  {
    id: 'greg-mullaney',
    author: 'Greg Mullaney',
    rating: 5,
    timeAgo: '3 years ago',
    isLocalGuide: true,
    roleOrBadge: 'Local Guide',
    reviewCount: '19 reviews · 2 photos',
    text: 'These guys did my barbershop and my house and everything came out phenomenal!!! The owner of the business and all his guys are very professional and they deliver the best product! I appreciate you guys taking good care of me! 10 out of 10.',
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['Commercial & Residential Plumbing'],
  },
  {
    id: 'drew-fitzgerald',
    author: 'Drew Fitzgerald',
    rating: 5,
    timeAgo: '5 years ago',
    reviewCount: '1 review',
    text: 'I called Riordan for some repairs to my bathroom he did the work the same day I called and did an excellent job I will definitely be using him for my future plumbing needs!',
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['Shower installation', 'Toilet repair'],
  },
  {
    id: 'mike-mcniff',
    author: 'Mike McNiff',
    rating: 5,
    timeAgo: '4 years ago',
    reviewCount: '8 reviews · 2 photos',
    text: 'Outstanding quality and honest diagnostic precision. Riordan and his team pinpointed our plumbing leak promptly without unnecessary wall damage. Top-tier craftsmanship!',
    positiveAttributes: ['Quality'],
    services: ['Plumbing leak detection'],
  },
  {
    id: 'tom-leahy',
    author: 'Tom Leahy',
    rating: 5,
    timeAgo: '5 years ago',
    isLocalGuide: true,
    roleOrBadge: 'Local Guide',
    reviewCount: '19 reviews · 7 photos',
    text: 'Extremely responsive, punctual, and fair on pricing. Dugan Mechanical diagnosed our leak and handled our water heater installation with complete professionalism. Highly recommended.',
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['Plumbing leak detection', 'Water heater installation', 'Water heater repair'],
  },
];

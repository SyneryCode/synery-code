import { Project } from '../components/ProjectDetail';

export const projects: Project[] = [

  {
    id: 'mobile-1',
    title: 'PartTec - Car Parts Marketplace',
    description: 'partTec app simplifies finding, verifying, and comparing car parts efficiently and securely.',
    fullDescription: ' PartTec is a comprehensive car parts marketplace designed to streamline the process of finding, verifying, and comparing automotive components. The platform features an intuitive search and filtering system, detailed product listings with high-resolution images and specifications, user reviews and ratings, secure payment processing, and order tracking. Built with React for a dynamic user experience, Node.js for robust backend services, and MongoDB for flexible data management.',
    category: 'mobile',
    technologies:  ['Flutter', 'Node.js', 'MongoDB', 'Dart'],
    image: 'https://i.ibb.co/PvK2t7n7/Shared-Screenshot.jpg',
    detailImage: 'https://i.ibb.co/PvK2t7n7/Shared-Screenshot.jpg',
    liveDemo: 'https://example.com',
    sourceCode: 'https://github.com/Mo963syr/PartTec',
    featured: true,
    timeline: '3 months',
    teamSize: '4 developers',
    achievements: [
      '500+ active users in first month',
      'Integrated with 50+ suppliers',]
  },
  {
    id: 'web-2',
    title: 'Watches Website',
    description: 'E-commerce platform for luxury watches with advanced search and secure checkout.',
    fullDescription: 'A sleek e-commerce platform dedicated to luxury watches, offering users an elegant shopping experience. Features include advanced search and filtering options, detailed product pages with high-resolution images and specifications, user reviews and ratings, secure payment gateway integration, order tracking, and a responsive design for optimal viewing on all devices. Built using React for a dynamic frontend, Node.js for backend services, and MongoDB for data storage.',
    category: 'web',
    technologies: ['HTML', 'CSS', 'Javascript'],
    image:'https://i.ibb.co/67CvLQZv/preview.png',
    detailImage: 'https://i.ibb.co/67CvLQZv/preview.png',
    liveDemo: 'https://example.com',
    sourceCode: 'https://github.com/samer-bakeer/responsive-watches-website',
    featured: false,
    timeline: '2 months',
    teamSize: '3 developers',
    achievements: [
      '200+ products listed',
      'Integrated with 20+ payment gateways',
      'Achieved 99.9% uptime',
      'Reduced cart abandonment by 30%'
    ]
  },
  {
    id: 'web-3',
    title: 'Educational website ',
    description: 'Comprehensive learning management system with course creation, video streaming, and student tracking.',
    fullDescription: 'EduLearn is a full-featured educational platform designed for online learning and course management. Features include course creation and management tools, video streaming capabilities, quizzes and assignments, student progress tracking, discussion forums, and certificate generation. The platform supports multiple user roles including students, instructors, and administrators, and is built with scalability in mind to accommodate a growing user base.',
    category: 'web',
    technologies: ['React.js','TypeScript','Node.js','Express.js'],
    image: 'https://i.ibb.co/gFX6hsMk/localhost-3001-1.png',
    detailImage: 'https://i.ibb.co/gFX6hsMk/localhost-3001-1.png',
    liveDemo: 'https://front-of-school-site.vercel.app/',
    sourceCode: 'https://github.com/SyneryCode/School-website',
    featured: true,
    timeline: '6 months',
    teamSize: '7 developers',
    achievements: [
      '1,000+ active students',
      'Integrated with Zoom for live classes',
      'Automated grading system',
      'Reduced dropout rate by 20%'
    ]
  },
  {
    id: 'web-4',
    title: 'islamic-website ',
    description: 'A comprehensive Islamic website that enables Muslims to read the Quran, the hadiths of the Prophet, as well as prophetic stories, morning and evening remembrances, the direction of the Qiblah, and other features.',
    fullDescription: 'A comprehensive Islamic website that enables Muslims to read the Quran, the hadiths of the Prophet, as well as prophetic stories, morning and evening remembrances, the direction of the Qiblah, and other features.',
    category: 'web',
    technologies: ['React', 'Gatsby', 'Contentful', 'GraphQL', 'Netlify'],
    image: 'https://i.ibb.co/pmVnLYP/localhost-3001-2.png',
    detailImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGV8ZW58MXx8fHwxNzYwNTU2MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    liveDemo: 'https://example.com',
    sourceCode: 'https://github.com/SyneryCode/Islamic-website',
    featured: false,
    timeline: '4 months',
    teamSize: '4 developers',
    achievements: [
      '99.9% uptime in first year',
      'PageSpeed score of 98/100',
      '200% increase in organic traffic',
      'Reduced bounce rate by 45%'
    ]
  },
  {
    id: 'web-5',
    title: 'My Dream Car Platform - Car Rental Service',
    description: 'The Car Rental App is a smart and secure platform that makes it easy to search, compare, and book cars from multiple providers. Browse a wide range of vehicles — from economy to luxury — choose the best deal, and complete your rental quickly with safe online payment.',
    fullDescription: 'The Car Rental App is a smart and secure platform that makes it easy to search, compare, and book cars from multiple providers. Browse a wide range of vehicles — from economy to luxury — choose the best deal, and complete your rental quickly with safe online payment. Built with React for a dynamic user interface, Node.js for robust backend services, and MongoDB for flexible data management, the platform ensures a seamless rental experience for users.',
    category: 'web',
    technologies:['React.js','TypeScript','Node.js','Express.js'],
    image: 'https://i.ibb.co/21RDzqm0/localhost-3001-4.png',
    detailImage: 'https://i.ibb.co/HfSnVj0L/localhost-3001-5.png',
    liveDemo: 'https://example.com',
    sourceCode: 'https://github.com/SyneryCode/My-Dream-Car-Platform',
    featured: true,
    timeline: '3 months',
    teamSize: '3 developers',
    achievements: [
      '1,000+ artists onboarded',
      '$500K+ in sales facilitated',
      'Featured in design blogs',
      'Mobile-first approach'
    ]
  },
  {
  id: 'web-6',
  title: 'Aqar Syria - Real Estate Search Platform',
  description: 'A comprehensive digital platform for searching and listing residential and commercial properties across all Syrian governorates.',
  fullDescription: 'A sleek, user-friendly real estate platform designed to simplify property search in Syria. Whether you\'re looking for apartments, villas, or land, this platform offers a seamless experience. Built with a Mobile-First methodology, it ensures optimal performance and beautiful, intuitive interfaces on all devices—from smartphones to desktops. Key features include an advanced search engine with filters by governorate, property type, price, and number of rooms, alongside detailed listings featuring high-resolution images to help users make informed decisions. The site was developed using HTML, CSS, and JavaScript for fast loading and smooth user interaction.',
  category: 'web',
  technologies: [ 'TypeScript','Tailwind CSS','React.js'],
  image: 'https://i.ibb.co/7NvMbymM/localhost-3001-6.png',
  detailImage: 'https://i.ibb.co/V0p17jx4/localhost-3001-7.png',
  liveDemo: 'https://aqar-sy-fsj3.vercel.app/',
  sourceCode: 'https://github.com/SyneryCode/aqar-sy',
  featured: false,
  timeline: '2 months',
  teamSize: '3 developers',
  achievements: [
    'Listed over 284 properties across multiple governorates',
    'Designed with Mobile-First approach for superior mobile user experience',
    'Simplified UI led to a 25% increase in user engagement',
    'Optimized page load speed by 40%, enhancing overall user satisfaction'
  ]
},
{
  id: 'web-7', 
  title: 'Sooqna - Syrian Authentic Products Marketplace',
  description: 'An e-commerce platform connecting customers with authentic, locally-made Syrian products for fast delivery across Syria.',
  fullDescription: 'Sooqna is a vibrant online marketplace dedicated to showcasing and selling authentic Syrian-made goods. The platform offers users a seamless shopping experience, featuring categories such as spices, nuts, olive oil, dairy, meat, and more. Designed with a Mobile-First methodology, the site ensures a beautiful, responsive interface that works flawlessly on all devices. Key features include a powerful search bar, intuitive category navigation, detailed product listings with high-quality images, customer ratings, and an easy "Add to Cart" system for quick purchases. Built using HTML, CSS, and JavaScript, Sooqna provides a fast, reliable, and user-friendly digital storefront for Syrian artisans and producers.',
  category: 'web',
  technologies: [ 'TypeScript','Tailwind CSS','React.js'],
  image: 'https://i.ibb.co/b5K9dFGN/localhost-3002-1.png', 
  detailImage: 'https://i.ibb.co/fzQzHfR3/localhost-3002-2.png', 
  liveDemo: 'https://example.com', 
  sourceCode: 'https://github.com/SyneryCode/E-commerce-Platform-Design', 
  featured: false,
  timeline: '2 months',
  teamSize: '3 developers',
  achievements: [
    'Launched with 12+ authentic product listings from local Syrian producers',
    'Implemented a clean, category-based UI that improved user navigation by 35%',
    'Mobile-first design ensured a 95% satisfaction rate among mobile shoppers',
    'Integrated a simple cart system that reduced checkout steps by 50%'
  ]
},
{
  id: 'web-8', 
  title: 'Tabibi - Syrian Doctors Appointment Booking Platform',
  description: 'A user-friendly online platform for booking appointments with specialized doctors across Syria, offering a seamless and secure experience.',
  fullDescription: 'Tabibi is a modern healthcare platform designed to connect patients in Syria with qualified, specialized doctors. The site provides an intuitive interface for users to browse through profiles of various medical specialists—including general practitioners, pediatricians, gynecologists, and more—complete with their qualifications, specialties, availability, and clinic locations. Key features include a clear search and filtering system by specialty, easy appointment scheduling, and a professional, trustworthy design. Built using HTML, CSS, and JavaScript with a Mobile-First approach, the platform ensures fast loading times and an optimal user experience on all devices, from smartphones to desktops. This project aims to make accessing quality healthcare in Syria simpler and more efficient.',
  category: 'web',
  technologies: ['HTML', 'CSS', 'Javascript'],
  image: 'https://i.ibb.co/sJgG4YCL/localhost-3001-9.png', 
  detailImage: 'https://i.ibb.co/whfP87wt/localhost-3001-10.png',
  liveDemo: 'https://medical-clinic-silk.vercel.app/', 
  sourceCode: 'https://github.com/SyneryCode/Medical-clinics-website', 
  featured: false,
  timeline: '2 months',
  teamSize: '3 developers',
  achievements: [
    'Launched with profiles of 15+ specialized doctors from various medical fields',
    'Implemented a simple, one-click appointment booking system that reduced user steps by 40%',
    'Mobile-first design ensured accessibility for over 70% of users on mobile devices',
    'Clean, professional UI increased user trust and engagement by 30%'
  ]
},





  {
    id: 'design-1',
    title: 'Harf – Digital Platform for Syrian Heritage Crafts',
    description: 'A digital platform connecting local artisans with global audiences to preserve and promote Syria’s traditional handicrafts through storytelling and e-commerce.',
    fullDescription: 'Harf is a comprehensive digital platform dedicated to safeguarding Syria’s intangible cultural heritage by empowering local artisans and showcasing their handmade crafts to a global audience. The project involved end-to-end design and development of a bilingual (Arabic/English) e-commerce experience, including user research, brand identity, UI/UX design, product catalog architecture, and seamless WhatsApp-based ordering. The visual language blends traditional Syrian motifs with modern minimalism, creating an elegant yet accessible interface that honors the stories behind every craft. The platform features artisan profiles, interactive city-based navigation, product storytelling, and a cohesive digital ecosystem spanning web and social media. The name “Harf” — meaning “craft” or “letter” in Arabic — reflects both the artistry of the makers and the narrative power of each item.',
    category: 'design',
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop', 'InDesign'],
    image:'https://i.ibb.co/zhgbp33W/photo-2025-10-18-16-11-37-2.jpg',
    detailImage: 'https://i.ibb.co/jvCkC5gj/photo-2025-10-18-16-11-37.jpg',
    featured: false,
    timeline: '3months',
    teamSize: '4 (2 UI/UX designers, 1 graphic designer, 1 content strategist)',
    achievements: [
  'Preserved and highlighted over 50 artisan stories from 8 Syrian cities',
  'Developed a culturally sensitive bilingual design system',
  'Implemented a 360° brand experience—from logo to social media templates',
  'Selected for showcase at regional design festival'
],
    designImages: [
      'https://i.ibb.co/Gfm7DMFr/photo-2025-10-18-16-11-38-2.jpg',
      'https://i.ibb.co/gLkcqhyR/photo-2025-10-18-16-11-38.jpg'
    ]
  },

  {
    id: 'design-2',
    title: 'ModernUI - Design System',
    description:'Project: "Atlil Air" — A Smart & User-Friendly Flight Booking App Atlil Air" is a mobile application designed for booking domestic and international flights from and to Syria, aiming to deliver a simple, secure, and fast travel experience through a modern, dark-mode user interface that prioritizes clarity and ease of use.',
    fullDescription: 'Atlil Air is a comprehensive mobile application developed to revolutionize the flight booking experience for users in Syria. The project involved end-to-end design and development of a bilingual (Arabic/English) travel platform with intuitive navigation, real-time flight search, detailed itinerary breakdowns, and seamless payment integration. The UI/UX emphasizes clarity and accessibility, using a dark theme with Arabic-optimized typography and culturally relevant icons. Key features include social login (Google, Apple), multi-airline comparison, flexible payment methods (STC Pay, Apple Pay, credit cards), passenger details management, and personalized notifications. The app also highlights popular destinations and daily offers, making travel planning effortless for Syrian users. The name “Atlil” — inspired by the Arabic word for “flight” or “soar” — reflects the app’s mission to elevate the travel experience.',
    category: 'design',
    technologies: ['Figma', 'Sketch', 'Zeroheight', 'Storybook'],
    image: 'https://i.ibb.co/S4qJKLQb/photo-2025-10-18-15-28-00.jpg',
    detailImage: 'https://i.ibb.co/YBCrZCwy/photo-2025-10-18-15-28-00-3.jpg',
    featured: true,
    timeline: '4 months',
    teamSize: '3 designers',
    achievements:[
  'Designed a fully localized Arabic-first UI/UX experience',
  'Integrated 4+ payment gateways including STC Pay and Apple Pay',
  'Reduced booking steps by 40% compared to competitors',
  'User-tested with 50+ Syrian travelers for usability feedback'
],
    designImages: [
      'https://i.ibb.co/b5qM9FbR/photo-2025-10-18-15-28-00-4.jpg',
      'https://i.ibb.co/pBBWwSWx/photo-2025-10-18-15-28-00-2.jpg',
      'https://i.ibb.co/SWwGwpX/photo-2025-10-18-15-28-00-5.jpg'
    ]
  },
  {
  id: 'design-3',
  title: 'Fann Al-Khatt – Arabic Calligraphy Learning App',
  description: 'An immersive mobile app that teaches the art of Arabic calligraphy through interactive lessons, step-by-step stroke guidance, and personalized practice sessions — making traditional art accessible to modern learners.',
  fullDescription: `Fann Al-Khatt is a beautifully crafted mobile application designed to democratize the ancient art of Arabic calligraphy for beginners and enthusiasts alike. The app offers a guided journey from foundational strokes to mastering complex scripts like Thuluth, Diwani, and Naskh — all presented through intuitive animations, real-time feedback, and adaptive learning paths.

The user experience blends traditional aesthetics with modern interaction design: elegant typography, warm earthy tones, and hand-drawn illustrations create an inviting atmosphere that honors the heritage of Arabic script. Key features include:
- Interactive stroke tracing with progress tracking
- Daily practice challenges and milestone rewards
- Script gallery with historical context and visual examples
- Customizable workspace for saving and sharing creations

The name “Fann Al-Khatt” — meaning “The Art of Line” in Arabic — reflects both the precision of calligraphy and the creative expression it enables. Designed with cultural authenticity and pedagogical clarity, the app serves as a digital gateway into one of the most revered art forms of the Arab world.`,
  category: 'design',
  technologies: ['Figma', 'Adobe Illustrator', 'After Effects', 'Procreate'],
  image: 'https://i.ibb.co/wFdYQMKT/photo-2025-10-18-15-26-58.jpg',
  detailImage: 'https://i.ibb.co/j9nMnG5H/photo-2025-10-18-15-26-58.jpg',
  featured: true,
  timeline: '4 months',
  teamSize: '3 (UI/UX Designer, Motion Designer, Content Strategist)',
  achievements: [
    'Designed 3 core calligraphic scripts with animated stroke guides',
    'Implemented adaptive difficulty levels based on user performance',
    'Created a culturally resonant visual identity rooted in traditional tools (reed pen, inkwell)',
    'Featured in regional edtech showcase for innovative language learning tools'
  ],
  designImages: [
    'https://i.ibb.co/vpRsTr1/photo-2025-10-18-15-26-58-4.jpg',
    'https://i.ibb.co/DHBcSYHs/photo-2025-10-18-15-26-58-3.jpg',
    'https://i.ibb.co/TD6yNhw7/photo-2025-10-18-15-26-58-2.jpg'
  ]
},
{
  id: 'design-4',
  title: 'Mizan - Personal Finance & Inventory Management App',
  description: 'A mobile application designed for small business owners in Syria to manage daily income, track inventory, and monitor debts with a clean, Arabic-first interface.',
  fullDescription: 'Mizan is a practical mobile app tailored for Syrian entrepreneurs and small shop owners. It provides an intuitive, bilingual (Arabic/English) platform to simplify daily financial management. The core features include adding new sales entries with product names and prices, tracking current stock levels, and managing outstanding debts from customers. The UI design emphasizes clarity and ease of use, with a warm, minimalist aesthetic using soft colors and clear typography optimized for Arabic script. Key screens allow users to view their total daily earnings, add or remove items from inventory, and keep a record of who owes them money. Built with a Mobile-First approach, Mizan ensures a seamless experience on all smartphone sizes, helping users maintain better control over their finances and inventory without complex accounting tools.',
  category: 'design',
  technologies: ['Figma', 'Sketch', 'Zeroheight', 'Storybook'],
  image: 'https://i.ibb.co/7dGPr9t0/photo-2025-10-18-15-20-48.jpg',
  detailImage: 'https://i.ibb.co/wh2X1BwY/photo-2025-10-18-15-20-48-3.jpg',
  featured: true,
  timeline: '4 months',
  teamSize: '3 designers',
  achievements: [
    'Designed a fully localized Arabic-first UI/UX experience for small business owners',
    'Simplified the process of recording sales and inventory, reducing user steps by 50%',
    'User-tested with 30+ small business owners in Damascus for real-world feedback',
    'Created a visually calm and organized interface that reduces data entry errors'
  ],
  designImages: [
    'https://i.ibb.co/bgqKw0dC/photo-2025-10-18-15-20-48-2.jpg',
    'https://i.ibb.co/wh2X1BwY/photo-2025-10-18-15-20-48-3.jpg',
    'https://i.ibb.co/7dGPr9t0/photo-2025-10-18-15-20-48.jpg'
  ]
}
  
  
];

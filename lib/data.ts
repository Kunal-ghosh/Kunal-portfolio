import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'kunalghosh5135@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Kunal, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/Kunal',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Kunal-ghosh' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/kunal-ghosh-93a3a121a/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Sails.js',
            icon: '/logo/sails.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Redis',
            icon: '/logo/redis.png',
        }
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Jenkins',
            icon: '/logo/jenkins.png',
        },
        {
            name: 'Kafka',
            icon: '/logo/kafka.png',
        }
    ],
};

// export const PROJECTS: IProject[] = [
//     {
//         title: 'Electro EV',
//         slug: 'electro-ev',
//         liveUrl: 'https://electroev.co.uk/',
//         year: 2025,
//         description: `
//       A complete agency portfolio platform built for Electro EV to showcase their services, blog content, and product offerings. <br/> <br/>
      
//       Key Features:<br/>
//       <ul>
//         <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
//         <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
//         <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
//         <li>📱 Fully Responsive: Optimized for all device sizes</li>
//         <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
//       </ul><br/>
      
//       Technical Highlights:
//       <ul>
//         <li>Implemented complex slider synchronization logic using Swiper.js</li>
//         <li>Customized Payload CMS admin panel for intuitive content management</li>
//         <li>Developed reusable UI components with shadcn for design consistency</li>
//         <li>Configured efficient data fetching strategies in Next.js</li>
//       </ul>
//       `,
//         role: `
//       Full-Stack Developer <br/>
//       Owned the entire development lifecycle:
//       <ul>
//         <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
//         <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
//         <li>🔄 State Management: Implemented client-side data fetching and caching</li>
//         <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
//         <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
//         <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
//       </ul>
//       `,
//         techStack: [
//             'Next.js',
//             'Payload CMS',
//             'Tailwind CSS',
//             'shadcn',
//             'Swiper.js',
//             'React Hook Form',
//             'Vercel',
//         ],
//         thumbnail: '/projects/thumbnail/mti-electronics.webp',
//         longThumbnail: '/projects/long/mti-electronics.webp',
//         images: [
//             '/projects/images/mti-electronics-1.webp',
//             '/projects/images/mti-electronics-2.webp',
//         ],
//     },
//     {
//         title: 'Epikcart',
//         slug: 'epikcart',
//         techStack: [
//             'React',
//             'Redux',
//             'React i18n',
//             'Tailwind CSS',
//             'Framer Motion',
//             'debouncing',
//             'Api Integration',
//         ],
//         thumbnail: '/projects/thumbnail/epikcart.jpg',
//         longThumbnail: '/projects/long/epikcart.jpg',
//         images: [
//             '/projects/images/epikcart-1.png',
//             '/projects/images/epikcart-2.png',
//             '/projects/images/epikcart-3.png',
//             '/projects/images/epikcart-4.png',
//             '/projects/images/epikcart-5.png',
//         ],
//         liveUrl: 'https://demo.epikcart.siphertech.com/',
//         year: 2023,
//         description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
//         role: `As the frontend developer in a team of five, I: <br/>
//         - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
//         - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
//         - Integrated multi-language support with React i18n, including RTL handling.<br/>
//         - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
//     },
//     {
//         title: 'Resume Roaster',
//         slug: 'resume-roaster',
//         techStack: [
//             'GPT-4',
//             'Next.js',
//             'Postgressql',
//             'Prisma',
//             'Tailwind CSS',
//         ],
//         thumbnail: '/projects/thumbnail/resume-roaster.jpg',
//         longThumbnail: '/projects/long/resume-roaster.jpg',
//         images: [
//             '/projects/images/resume-roaster-1.png',
//             '/projects/images/resume-roaster-2.png',
//             '/projects/images/resume-roaster-3.png',
//         ],
//         liveUrl: 'https://resume-roaster.vercel.app/',
//         year: 2023,
//         description:
//             'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
//         role: `As the sole developer and business owner, I:<br/>
//         - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
//         - Integrated GPT-4 for AI-driven feedback and insights.<br/>
//         - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
//     },
//     {
//         title: 'Real Estate',
//         slug: 'property-pro',
//         techStack: [
//             'React.js',
//             'Redux',
//             'Tailwind CSS',
//             'React i18n',
//             'Framer Motion',
//         ],
//         thumbnail: '/projects/thumbnail/property-pro.jpg',
//         longThumbnail: '/projects/long/property-pro.jpg',
//         images: [
//             '/projects/images/property-pro-1.png',
//             '/projects/images/property-pro-2.png',
//             '/projects/images/property-pro-3.png',
//         ],
//         liveUrl: 'https://demo.propertypro.siphertech.com/',
//         year: 2023,
//         description:
//             'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
//         role: `As the frontend developer, I:<br/>
//         - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
//         - Integrated dynamic state management for efficient handling of property data.<br/>
//         - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
//         - Enhanced user interaction with animations and transitions using Framer Motion.`,
//     },
//     {
//         title: 'Consulting Finance',
//         slug: 'crenotive',
//         techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
//         thumbnail: '/projects/thumbnail/consulting-finance.jpg',
//         longThumbnail: '/projects/long/consulting-finance.jpg',
//         images: [
//             '/projects/images/consulting-finance-1.png',
//             '/projects/images/consulting-finance-2.png',
//             '/projects/images/consulting-finance-3.png',
//         ],
//         sourceCode: 'https://github.com/Kunal/crenotive',
//         liveUrl: 'https://crenotive.netlify.app/',
//         year: 2023,
//         description:
//             'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
//         role: ``,
//     },
//     {
//         title: 'devLinks',
//         slug: 'devLinks',
//         techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
//         thumbnail: '/projects/thumbnail/devLinks.jpg',
//         longThumbnail: '/projects/long/devLinks.jpg',
//         images: [
//             '/projects/images/devLinks-1.png',
//             '/projects/images/devLinks-2.png',
//             '/projects/images/devLinks-3.png',
//         ],
//         sourceCode: 'https://github.com/Kunal/devsLink',
//         liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
//         year: 2023,
//         description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

//             I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
//         role: ``,
//     },
// ];
export const PROJECTS: IProject[] = [
{
    title: "GitHub Webhook Listener",
    slug: "webhook-repo",
    techStack: ["Flask", "MongoDB", "Python", "Webhook"],
    thumbnail: "/logo/arrow.png",
    longThumbnail: "/logo/arrow.png",
    images: [],
    sourceCode: "https://github.com/Kunal-ghosh/webhook-repo",
    liveUrl: "",
    year: 2024,
    description: `
    An implementation of a GitHub webhook receiver that listens to repository events and stores structured event payloads into MongoDB for later retrieval and analysis.<br/><br/>

    Key Features:<br/>
    <ul>
      <li>Receives GitHub webhook push events</li>
      <li>Persists data logs in MongoDB</li>
      <li>REST endpoint to expose history</li>
      <li>Secure secret-key validation</li>
    </ul>
    `,
    role: `
    Full-Stack Developer<br/>
    <ul>
      <li>Designed & built webhook listener using Flask</li>
      <li>Persisted event payload to MongoDB</li>
      <li>Implemented signature validation</li>
    </ul>
    `,
},
{
    title: "AI Blog",
    slug: "ai-blog",
    techStack: ["React", "JavaScript", "Vite"],
    thumbnail: "/logo/arrow.png",
    longThumbnail: "/logo/arrow.png",
    images: [],
    sourceCode: "https://github.com/Kunal-ghosh/ai-blog",
    liveUrl: "",
    year: 2024,
    description: `
    AI Blog is a frontend-driven experiment allowing users to browse AI-generated articles with a clean modern interface. The platform showcases dynamic blog card UI, fast routing, and responsive page structure.<br/><br/>

    Features:<br/>
    <ul>
      <li>Minimal, modern blog UI</li>
      <li>Client-side routing</li>
      <li>Responsive layout</li>
    </ul>
    `,
    role: `
    Frontend Developer<br/>
    <ul>
      <li>Designed UI layout</li>
      <li>Implemented page routing & blog cards</li>
      <li>Integrated dynamic content modules</li>
    </ul>
    `,
},
{
    title: "ONGC Blog",
    slug: "ongc-blog",
    techStack: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/logo/arrow.png",
    longThumbnail: "/logo/arrow.png",
    images: [],
    sourceCode: "https://github.com/Kunal-ghosh/ONGCblog.github.io",
    liveUrl: "https://kunal-ghosh.github.io/ONGCblog.github.io",
    year: 2022,
    description: `
    A static, lightweight blog website built to document ONGC-related articles and internship experience. The site is deployed via GitHub Pages and offers easy navigation and responsive blog layout.<br/><br/>

    Features:<br/>
    <ul>
      <li>Static blog UI</li>
      <li>Deployed via GitHub Pages</li>
      <li>Clean responsive styling</li>
    </ul>
    `,
    role: `
    Solo Developer<br/>
    <ul>
      <li>Built static UI architecture</li>
      <li>Wrote & published content</li>
      <li>Deployed to GitHub Pages</li>
    </ul>
    `,
},
{
    title: "Weather App",
    slug: "weather-app",
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
    thumbnail: "/logo/arrow.png",
    longThumbnail: "/logo/arrow.png",
    images: [],
    sourceCode: "https://github.com/Kunal-ghosh/weather.github.io",
    liveUrl: "https://kunal-ghosh.github.io/weather.github.io",
    year: 2022,
    description: `
    A simple interactive weather application leveraging a public Weather API to display real-time temperature, humidity, and atmospheric conditions.<br/><br/>

    Features:<br/>
    <ul>
      <li>Live weather lookup</li>
      <li>City-based search</li>
      <li>Simple responsive UI</li>
    </ul>
    `,
    role: `
    Solo Developer<br/>
    <ul>
      <li>Integrated weather API</li>
      <li>Created responsive UI</li>
      <li>Built & deployed on GitHub Pages</li>
    </ul>
    `,
},

];



export const MY_EXPERIENCE = [
    {
        title: 'Software Developer',
        company: 'Spyne.ai',
        duration: 'Jan 2024 - Present',
        projects: [
            {
                title: 'Partner System',
                description: 'Designed and implemented a scalable, event-driven image processing system for partner integrations, handling CSV inputs via FTP, S3, and AWS Lambda for asynchronous task queuing. Oversaw the orchestration of multiple cron jobs to manage the image lifecycle, automate processing workflows, and ensure  timely output generation.'
            },
            {
                title: 'Webhook System',
                description: 'Improved webhook system from cron-based to event-driven using Debezium, Kafka, and Redis achieving 95% SLA for client deliveries. Integrated Shopify as per client requirements, enabling easy    onboarding for other Shopify customers.',
            },
            {
                title: 'Contracting System',
                description: 'Designed and implemented a robust contracting system integrating HubSpot and DocuSign via webhooks, enabling instant contract generation and dispatch from Spyne Console. The system automates account and contract creation, supports customizable templates, and streamlines the sales workflow — reducing manual effort and accelerating deal closures.',
            },
            {
                title: 'Credit system',
                description: 'Designed a comprehensive credit management system for resellers and dealerships with configurable limits, balance tracking, and actionable analytics. ',
            },
        ],
    },
    {
        title: 'ASE Intern',
        company: 'Aibi Solutions',
        duration: 'Jun 2024 - Sep 2024',
        projects: [
            {
                title: 'Ops Dashboard and verification system',
                description: 'Developed a comprehensive dashboard for operations team to monitor and manage the verification process. The system includes features for bulk verification, manual verification, and automated verification. The system also includes a verification system for the verification process.',
            },
        ],
    },
    {
        title: 'ML Research Intern',
        company: 'National Institute of Technology Silchar',
        duration: 'Jan 2024 - May 2024',
        projects: [
            {
                title: 'Early detection of Alzheimer\'s disease',
                description: 'Developed a machine learning model to predict Alzheimer\'s disease using MRI images. The model is trained on a dataset of MRI images and is able to predict the disease with an accuracy of 94.7%.',
            },
        ],
    },
    {
        title: 'PHP Web Developer',
        company: 'Oil and Natural Gas Corporation Limited (ONGC)',
        duration: 'May 2023 - Jun 2023',
        projects: [
            {
                title: 'Redefining Homepage',
                description: 'Redesigned and optimized the internal homepage on the company intranet using PHP, enhancing performance, user experience, and content accessibility for internal stakeholders.',
            },
            {
                title: 'Digitalizing of Forms',
                description: 'Developed dynamic web forms using PHP and integrated them with a backend database via Node.js, enabling seamless data capture, storage, and retrieval for internal workflows.',
            },
            {
                title: 'E-com website',
                description: 'Developed a secure e-commerce platform for ONGC’s intranet, allowing only authorized ONGC employees to list, browse, and purchase items. The system ensured restricted access, user authentication, and a smooth transaction flow tailored for internal organizational use.',
            },
        ],
    },
];

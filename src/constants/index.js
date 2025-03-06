/* eslint-disable no-unused-vars */
import {
  article1,
  article2,
  article3,
  article4,
  article5,
  backend,
  cmb,
  cnpc,
  creator,
  css,
  docker,
  git,
  golang,
  herobgPreview,
  html,
  ipmanage,
  ipmanageBackend,
  javascript,
  knownsec,
  linux,
  mobile,
  mongodb,
  mysql,
  preview,
  python,
  reactjs,
  redis,
  redux,
  s360,
  spark,
  tailwind,
  typescript,
  web,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    titleKey: 'navBar.about',
  },
  {
    id: 'work',
    titleKey: 'navBar.work',
  },
  {
    id: 'tech',
    titleKey: 'navBar.tech',
  },
  {
    id: 'project',
    titleKey: 'navBar.project',
  },
  {
    id: 'talks',
    titleKey: 'navBar.talks',
  },
  {
    id: 'blog',
    titleKey: 'navBar.blog',
  },
  {
    id: 'contact',
    titleKey: 'navBar.contact',
  },
];

const services = [
  {
    title: 'Video Streaming',
    icon: web,
  },
  {
    title: 'Mobile Development',
    icon: mobile,
  },
  {
    title: 'Cloud & DevOps',
    icon: backend,
  },
  {
    title: 'Software Engineering',
    icon: creator,
  },
];
const socials = [
  {
    name: 'github',
    url: 'https://github.com/krzemienski',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/nickkrzemienski/',
  },
  {
    name: 'website',
    url: 'https://awesome.video',
  },
  {
    name: 'email',
    url: 'mailto:krzemienski@gmail.com',
  },
];

const technologies = [
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Linux',
    icon: linux,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Redis',
    icon: redis,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'Redux',
    icon: redux,
  },
];

export const skills = [
  {
    Stack: 'Video Streaming',
    progressPercentage: '95',
  },
  {
    Stack: 'Cloud & DevOps',
    progressPercentage: '90',
  },
  {
    Stack: 'Mobile Development',
    progressPercentage: '85',
  },
];

const experiences = [
  {
    title: 'Engineering Lead, Video Innovations',
    company_name: 'fuboTV Inc.',
    icon: cnpc,
    iconBg: '#000000',
    date: 'March 2022 - June 2024',
    points: [
      'Spearheaded the development of server-side multi-view systems in 2022, integrating multiple video feeds within a single player interface, revolutionizing content consumption and enhancing viewer experience.',
      'Engineered a just-in-time (JIT) transcoding and packaging to HLS solution from 2023 to 2024, optimizing it for HEVC source files.',
      'Deployed in Kubernetes (k8s), significantly enhancing system scalability, fault tolerance, and operational efficiency across video streaming operations.',
      'Ensured high availability and service reliability through meticulous management of containerized applications.',
    ],
  },
  {
    title: 'Engineering Lead, VOD Encoding & Operations',
    company_name: 'fuboTV Inc.',
    icon: cmb,
    iconBg: '#000000',
    date: 'February 2018 - February 2022',
    points: [
      'Led the encoding, packaging, and operations of VODs, overseeing the delivery of approximately 500 hours of assets daily.',
      'Implemented a system that efficiently received content, transcoded it to optimal bitrate ladders, and packaged it in both HLS and DASH formats with DRM protection.',
      'Leveraged AWS Spot Instances and a container-based infrastructure to significantly reduce transcoding and packaging costs by approximately 70%.',
      'Engineered multiple codec streaming with DASH (h.264, h.265, vp9) and HLS (h.264, h.265) assets for 4K content.',
    ],
  },
  {
    title: 'Engineering Manager, AppleTV & Roku',
    company_name: 'fuboTV Inc.',
    icon: knownsec,
    iconBg: '#000000',
    date: 'February 2018 - November 2018',
    points: [
      'Hired, managed, and mentored a team of 10 software engineers in the NYC office.',
      'Responsible for both fuboTV\'s AppleTV & Roku teams\' product roadmap and engineering goals.',
      'Contributed code to both Roku & AppleTV teams as an IC, while managing.',
      'Helped build and deliver the first ever UHD/HDR10 live feed for OTT, during World Cup 2018.',
    ],
  },
  {
    title: 'Software Engineer, iOS',
    company_name: 'fuboTV Inc.',
    icon: mobile,
    iconBg: '#000000',
    date: 'May 2017 - February 2018',
    points: [
      'Rewrote the fuboTV\'s Swift player framework from the ground up.',
      'Response for the decreased usage in 3rd party vendors SDKs.',
      'Designed and measured overall video quality experience.',
      'Leveraged all of Apple\'s AVFrameworks.',
    ],
  },
  {
    title: 'Principal Developer & Founder',
    company_name: 'Koda Labs Inc.',
    icon: s360,
    iconBg: '#000000',
    date: 'October 2013 - May 2017',
    points: [
      'Hired, managed, and mentored a team of 3 developers and various contractors in completing over 15 successful client projects.',
      'Managed all client projects using agile software methodologies and various project management tools.',
      'Utilized Apple\'s latest iOS APIs and frameworks to ensure the best user experience on various client\'s apps.',
      'Built & designed 4 different games in Unity3D that had user bases well over 1 million users.',
    ],
  },
  {
    title: 'Squad Leader',
    company_name: 'United States Marine Corps Reserve',
    icon: s360,
    iconBg: '#000000',
    date: 'December 2008 - January 2015',
    points: [
      'Directly responsible for the actions and well being of Marines under my command.',
      'Coordinated the movement and employment of various weapons systems within my squad to complete missions and patrols.',
      'Developed leadership while leading my team by adhering to the three core values of Marine Corps; Honor, Courage, and Commitment.',
      'Reached the rank of Seargent in less than 4 years.',
    ],
  },
];

const projects = [
  {
    name: 'JIT Transcoding and Packaging',
    description: 'Engineered a just-in-time (JIT) transcoding and packaging to HLS solution from 2023 to 2024, optimizing it for HEVC source files. Deployed in Kubernetes (k8s), significantly enhancing system scalability, fault tolerance, and operational efficiency across video streaming operations.',
    tags: [
      {
        name: 'kubernetes',
        color: 'text-blue-500', // Blue
      },
      {
        name: 'HEVC',
        color: 'text-green-500', // Green
      },
      {
        name: 'HLS',
        color: 'text-purple-500', // Purple
      },
    ],
    image: preview,
    source_code_link: 'https://github.com/krzemienski',
  },
  {
    name: 'Server-side Multi-view Systems',
    description: 'Spearheaded the development of server-side multi-view systems in 2022, integrating multiple video feeds within a single player interface, revolutionizing content consumption and enhancing viewer experience.',
    tags: [
      {
        name: 'multi-view',
        color: 'text-red-500', // Red
      },
      {
        name: 'streaming',
        color: 'text-cyan-500', // Cyan
      },
      {
        name: 'server-side',
        color: 'text-orange-500', // Orange
      },
    ],
    image: ipmanageBackend,
    source_code_link: 'https://github.com/krzemienski',
  },
  {
    name: 'VOD Encoding & Operations Pipeline',
    description: 'Led the encoding, packaging, and operations of VODs, overseeing the delivery of approximately 500 hours of assets daily. Implemented a system that efficiently received content, transcoded it to optimal bitrate ladders, and packaged it in both HLS and DASH formats with DRM protection.',
    tags: [
      {
        name: 'AWS',
        color: 'text-yellow-500', // Yellow
      },
      {
        name: 'DRM',
        color: 'text-pink-500', // Pink
      },
      {
        name: 'VOD',
        color: 'text-indigo-500', // Indigo
      },
    ],
    image: ipmanage,
    source_code_link: 'https://github.com/krzemienski',
  },
];

const talks = [
  {
    title: 'HLS & DASH Multi Codec Encoding & Packaging',
    description: 'This talk covers the implementation and optimization of multi-codec streaming solutions using both HLS and DASH packaging formats, with a focus on enhancing content delivery network flexibility and efficiency.',
    url: 'https://youtu.be/AMFrkIb5Y5U?si=iZIkGZFloP9kQzeD',
    pdf: '/HLS & DASH multi codec encoding & packaging v1.2 09022020.pdf',
    image: article1,
  },
  {
    title: 'Deep Dive into Video Streaming Technologies',
    description: 'A comprehensive overview of modern video streaming technologies, infrastructure components, and optimization strategies for delivering high-quality video content at scale.',
    url: 'https://youtu.be/g6C5qsQmEB8?si=cns1bL2NdjEH-IJj',
    image: article2,
  },
];

const podcasts = [
  {
    title: 'The Video Insiders: Exploring Streaming Video Technologies',
    description: 'A discussion about the latest advancements in streaming video technologies, including multiple codec support, server-side multi-view systems, and just-in-time transcoding solutions.',
    url: 'https://podcasts.apple.com/us/podcast/the-video-insiders/id1444571837?i=1000473286884',
    image: article3,
  },
];

const blogs = [
  {
    title: 'Optimizing Video Streaming with HEVC and AVC Dual Format Support',
    description:
      'How implementing dual format support for both HEVC and AVC codecs significantly enhances content delivery network flexibility and efficiency. This approach ensures high-quality video content delivery across a wide range of devices and network conditions.',
    wordCount: 1200,
    readCount: 8500,
    tags: [
      {
        name: 'HEVC',
        color: 'red',
      },
      {
        name: 'AVC',
        color: 'blue',
      },
      {
        name: 'Streaming',
        color: 'yellow',
      },
    ],
    image: article1,
    articleLink: 'https://awesome.video',
  },
  {
    title: 'Server-Side Multi-View Systems for Enhanced Sports Viewing',
    description:
      'Exploring the development of server-side multi-view systems that integrate multiple video feeds within a single player interface. This technology revolutionizes content consumption for sports events, allowing viewers to switch between camera angles and customize their viewing experience in real-time.',
    wordCount: 950,
    readCount: 6200,
    tags: [
      {
        name: 'Multi-View',
        color: 'red',
      },
      {
        name: 'Sports',
        color: 'blue',
      },
      {
        name: 'OTT',
        color: 'yellow',
      },
    ],
    image: article2,
    articleLink: 'https://awesome.video',
  },
  {
    title: 'Kubernetes for Video Processing: Scaling Transcoding Workloads',
    description:
      'Insights on deploying video processing workloads in Kubernetes. Covering how to effectively manage containerized applications, implement horizontal pod autoscaling, and utilize persistent volumes for data-intensive video processing tasks like transcoding and packaging.',
    wordCount: 1050,
    readCount: 7300,
    tags: [
      {
        name: 'Kubernetes',
        color: 'red',
      },
      {
        name: 'Transcoding',
        color: 'blue',
      },
      {
        name: 'Scaling',
        color: 'yellow',
      },
    ],
    image: article3,
    articleLink: 'https://awesome.video',
  },
];

const githubRepos = {
  show: true,
  heading: 'Recent Projects',
  username: 'krzemienski',
  length: 4,
  specfic: [],
};

const thisProject = {
  name: 'Nick Krzemienski Portfolio',
  githubLink: 'https://github.com/krzemienski',
  description: 'Portfolio website for Nick Krzemienski, Engineering Lead in Video Innovations',
};

export { blogs, experiences, githubRepos, projects, services, socials, technologies, thisProject, talks, podcasts };

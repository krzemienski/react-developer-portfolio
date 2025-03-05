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
    title: 'about.cardTitle.0',
    icon: web,
  },
  {
    title: 'about.cardTitle.1',
    icon: mobile,
  },
  {
    title: 'about.cardTitle.2',
    icon: backend,
  },
  {
    title: 'about.cardTitle.3',
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
    Stack: 'tech.skill.0', // Video Streaming
    progressPercentage: '95',
  },
  {
    Stack: 'tech.skill.1', // Cloud & DevOps
    progressPercentage: '90',
  },
  {
    Stack: 'tech.skill.2', // Mobile Development
    progressPercentage: '85',
  },
];

const experiences = [
  {
    title: 'experience.detail.0.title',
    company_name: 'experience.detail.0.company_name',
    icon: cnpc,
    iconBg: '#E6DEDD',
    date: 'experience.detail.0.date',
    points: 'experience.detail.0.points',
  },
  {
    title: 'experience.detail.1.title',
    company_name: 'experience.detail.1.company_name',
    icon: cmb,
    iconBg: '#E6DEDD',
    date: 'experience.detail.1.date',
    points: 'experience.detail.1.points',
  },
  {
    title: 'experience.detail.2.title',
    company_name: 'experience.detail.2.company_name',
    icon: knownsec,
    iconBg: '#E6DEDD',
    date: 'experience.detail.2.date',
    points: 'experience.detail.2.points',
  },
  {
    title: 'experience.detail.3.title',
    company_name: 'experience.detail.3.company_name',
    icon: '',
    iconBg: '#E6DEDD',
    date: 'experience.detail.3.date',
    points: 'experience.detail.3.points',
  },
  {
    title: 'experience.detail.4.title',
    company_name: 'experience.detail.4.company_name',
    icon: s360,
    iconBg: '#E6DEDD',
    date: 'experience.detail.4.date',
    points: 'experience.detail.4.points',
  },
];

const projects = [
  {
    name: 'work.card.0.name',
    description: 'work.card.0.description',
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
    name: 'work.card.1.name',
    description: 'work.card.1.description',
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
    name: 'work.card.2.name',
    description: 'work.card.2.description',
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

const blogs = [
  {
    title: 'Optimizing Video Streaming with HEVC and AVC Dual Format Support',
    description:
      'In this presentation, I discuss how implementing dual format support for both HEVC and AVC codecs significantly enhances content delivery network flexibility and efficiency. This approach ensures high-quality video content delivery across a wide range of devices and network conditions, optimizing streaming capabilities and improving the end-user experience with seamless, high-definition viewing.',
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
      'This talk explores the development of server-side multi-view systems that integrate multiple video feeds within a single player interface. I discuss how this technology revolutionizes content consumption for sports events, allowing viewers to switch between camera angles and customize their viewing experience in real-time.',
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
      'In this technical deep dive, I share insights on deploying video processing workloads in Kubernetes. The presentation covers how to effectively manage containerized applications, implement horizontal pod autoscaling, and utilize persistent volumes for data-intensive video processing tasks like transcoding and packaging.',
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
  {
    title: 'Cost Optimization Strategies for Cloud-Based Video Processing',
    description:
      'This presentation explores how we reduced transcoding and packaging costs by approximately 70% compared to on-demand cloud compute by leveraging AWS Spot Instances and a container-based infrastructure. I discuss the architecture, implementation challenges, and best practices for maintaining reliability while significantly reducing operational costs.',
    wordCount: 880,
    readCount: 5400,
    tags: [
      {
        name: 'AWS',
        color: 'red',
      },
      {
        name: 'Cost-Optimization',
        color: 'blue',
      },
      {
        name: 'Spot-Instances',
        color: 'yellow',
      },
    ],
    image: article4,
    articleLink: 'https://awesome.video',
  },
  {
    title: 'The Future of Video Streaming: Just-in-Time Transcoding and Packaging',
    description:
      'In this forward-looking talk, I discuss the development and implementation of just-in-time (JIT) transcoding and packaging solutions for video streaming. This approach represents the next evolution in video delivery, enabling more efficient use of storage and bandwidth while maintaining high-quality viewing experiences across devices.',
    wordCount: 1100,
    readCount: 9200,
    tags: [
      {
        name: 'JIT',
        color: 'red',
      },
      {
        name: 'Transcoding',
        color: 'blue',
      },
      {
        name: 'Future-Tech',
        color: 'yellow',
      },
    ],
    image: article5,
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

export { blogs, experiences, githubRepos, projects, services, socials, technologies, thisProject };

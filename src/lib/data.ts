
import {
  Code,
  Github,
  Linkedin,
  LucideIcon,
  Palette,
  Search,
  Server,
  Twitter,
  Webhook,
} from 'lucide-react';
import type { Education, Experience, NavItem, Service, SkillCategory, Testimonial } from './types';

export const user = {
  name: 'John Doe',
  role: 'Full-Stack Developer',
  summary:
    'I build modern, responsive, and performant web applications from scratch. My expertise lies in turning complex problems into elegant, user-friendly solutions.',
};

export const siteConfig = {
  name: 'Persona Folio',
  description: 'A modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion.',
  url: 'https://personafolio.example.com',
  links: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    cv: '/path-to-your-cv.pdf',
  },
};

export const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'Contact', href: '#contact' },
];

export const socialLinks: { name: string; href: string; icon: LucideIcon }[] = [
  { name: 'GitHub', href: siteConfig.links.github, icon: Github },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
  { name: 'Twitter', href: siteConfig.links.twitter, icon: Twitter },
];

export const about = {
  introduction:
    "I'm a passionate developer with a knack for crafting beautiful and functional web experiences. With a background in both design and engineering, I bridge the gap between aesthetics and performance. I'm driven by a desire to learn, grow, and contribute to meaningful projects.",
};

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    description:
      'Led the development of a new customer-facing dashboard using React and TypeScript. Improved performance by 30% and mentored junior developers.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Innovate Co.',
    period: '2018 - 2020',
    description:
      'Developed and maintained a large-scale e-commerce platform using Next.js and Node.js. Implemented a new CI/CD pipeline, reducing deployment times by 50%.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Web Wizards',
    period: '2017 - 2018',
    description:
      'Assisted in building responsive websites for various clients using HTML, CSS, and JavaScript. Gained foundational skills in web development and client communication.',
  },
];

export const education: Education[] = [
  {
    institution: 'University of Technology',
    degree: 'B.Sc. in Computer Science',
    period: '2013 - 2017',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML & CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'Tailwind CSS', level: 98 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'Firebase', level: 88 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'Vercel', level: 90 },
      { name: 'Figma', level: 80 },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Teamwork', level: 92 },
      { name: 'Creativity', level: 85 },
    ],
  },
];

export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Building fully responsive and high-performance websites from the ground up using modern technologies like Next.js and React.',
    icon: 'Code',
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing intuitive and engaging user interfaces that provide a seamless user experience, with a focus on accessibility.',
    icon: 'Palette',
  },
  {
    title: 'API Development',
    description:
      'Creating robust and scalable RESTful APIs to power your applications, ensuring secure and efficient data transfer.',
    icon: 'Server',
  },
  {
    title: 'SEO Optimization',
    description:
      'Improving your website’s visibility on search engines through technical SEO best practices, boosting organic traffic.',
    icon: 'Search',
  },
  {
    title: 'Webhook Integration',
    description: 'Seamlessly connect your applications with third-party services, enabling real-time data synchronization and automation.',
    icon: 'Webhook'
  }
];


export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    avatar: 'testimonial-avatar-1',
    testimonial:
      "Working with John was an absolute pleasure. Their expertise in frontend development is unmatched. They delivered a high-quality product on time and exceeded our expectations. I can't recommend them enough.",
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, Innovate LLC',
    avatar: 'testimonial-avatar-2',
    testimonial:
      'John is a true professional. They are not only a talented developer but also a great communicator. They kept us in the loop throughout the project and were always open to feedback. The final product was a huge success.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Creative Solutions',
    avatar: 'testimonial-avatar-3',
    testimonial:
      "John's attention to detail is incredible. They transformed our outdated website into a modern, user-friendly platform that has significantly boosted our online presence. We've seen a 50% increase in user engagement since the relaunch.",
  },
  {
    name: 'David Lee',
    role: 'CTO, StartupX',
    avatar: 'testimonial-avatar-4',
    testimonial:
      "I've worked with many developers, and John is one of the best. Their ability to solve complex problems and write clean, efficient code is remarkable. They were a key player in the success of our latest project.",
  },
];

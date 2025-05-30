import { Education, Experience, NavItem, Project, Skill, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'HTML', level: 90, icon: 'Code' },
  { name: 'CSS', level: 85, icon: 'Paintbrush' },
  { name: 'JavaScript', level: 65, icon: 'FileJson' },
  { name: 'Python', level: 70, icon: 'Python' },
  { name: 'Java', level: 80, icon: 'Java' },
  { name: 'Git', level: 40, icon: 'GitBranch' },
];

// export const projects: Project[] = [
//   {
//     id: 'project-1',
//     title: 'E-commerce Dashboard',
//     description: 'A responsive dashboard for e-commerce analytics with real-time data visualization and filtering capabilities.',
//     image: 'https://images.pexels.com/photos/6951869/pexels-photo-6951869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
//     demoLink: 'https://example.com/demo',
//     codeLink: 'https://github.com/example/project',
//   },
//   {
//     id: 'project-2',
//     title: 'Recipe Finder App',
//     description: 'A web application that allows users to search for recipes based on ingredients they have at home.',
//     image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     tags: ['React', 'CSS', 'API Integration'],
//     demoLink: 'https://example.com/demo',
//     codeLink: 'https://github.com/example/project',
//   },
// ];

export const education: Education[] = [
  {
    degree: 'Masters of Computer Applications',
    institution: 'Aditya Engineering college',
    location: 'kakinda,Andhar Pradesh',
    startDate: '2023',
    endDate: '2025',
    description: 'Completed my MCA with a strong foundation in programming, software development, and web technologies. Gained hands-on experience in Python, Java, HTML, CSS, and JavaScript. ',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Pragati degree college',
    location: 'kakinda,Andhar Pradesh',
    startDate: '2020',
    endDate: '2023',
    description: 'Completed my B.Sc. with a strong academic foundation in mathematics, computer science, and logical reasoning. Developed interest in programming and problem-solving through coursework and lab sessions. This degree laid the groundwork for pursuing my MCA and building a career in the IT field.',
  },
  
];

export const experiences: Experience[] = [
  {
    title: 'Web Development Intern',
    company: 'Makers Mind Soft Solutions',
    location: 'Remote',
    startDate: 'May 2023',
    endDate: 'Julu 2023',
    description: [
      'Designed and developed a responsive web page using HTML, CSS, and Bootstrap.',
      'Focused on creating clean layouts and ensuring mobile-friendly design.',
      'Learned how to apply Bootstrap components for faster and consistent design.',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/lakshmi1239?tab=repositories', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://in.linkedin.com/in/varalakshmi-kovela-232a84280', icon: 'Linkedin' },
  { platform: 'Email', url: 'mailto:lakshmikovela42@gmail.com', icon: 'Mail' },
];

export const aboutMe = {
  title: 'About Me',
  description: `I'm  a passionate and curious Full Stack Developer with a strong foundation in both front-end and back-end technologies. I enjoy building responsive, user-friendly web applications and solving real-world problems through clean, efficient code.

My journey began with learning HTML, CSS, and JavaScript, where I discovered my love for creating interactive websites. I later expanded my skills to include Python and Core Java, which strengthened my logical thinking and back-end development capabilities. 

I’m eager to keep growing as a developer and contribute to meaningful projects that make a difference.
`,
  
};
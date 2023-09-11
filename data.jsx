import { nanoid } from "nanoid";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiShieldStarLine } from "react-icons/ri";
import {
  BsCalendar2Check,
  BsFillBagFill,
  BsPinAngle,
  BsCheckCircleFill,
  BsWrenchAdjustableCircleFill,
} from "react-icons/bs";
import { FaPenSquare } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import { MdStars } from "react-icons/md";
import { AiFillDollarCircle,AiOutlineFacebook,AiOutlineLinkedin,AiFillTwitterSquare,AiOutlineYoutube,AiOutlineInstagram } from "react-icons/ai";
import FindTalentDropdown from "./src/components/find-talent-dropdown/FindTalentDropdown";
import FindWorkDropdown from "./src/components/find-work-dropdown/FindWorkDropdown";
import WhyUpworkDropdown from "./src/components/why-upwork-dropdown/WhyUpworkDropdown";
import microsoftSvg from "./src/assets/microsoft.svg";
import airbnbSvg from "./src/assets/airbnb.svg";
import bissellSvg from "./src/assets/bissell.svg";
import testimonialsMicrosoftSvg from "./src/assets/microsoft-lg-light.svg";
import testimonialsNasdaqSvg from "./src/assets/nasdaq-light.svg";

export const navItems = [
  {
    id: nanoid(),
    name: "Find Talent",
    type: "FIND_TALENT",
    component: <FindTalentDropdown />,
  },
  {
    id: nanoid(),
    name: "Find Work",
    type: "FIND_WORK",
    component: <FindWorkDropdown />,
  },
  {
    id: nanoid(),
    name: "Why Upwork",
    type: "WHY_UPWORK",
    component: <WhyUpworkDropdown />,
  },
];

export const navBottomItems = [
  {
    id: nanoid(),
    name: "Development & IT",
  },
  {
    id: nanoid(),
    name: "AI Services",
  },
  {
    id: nanoid(),
    name: "Design & Creative",
  },
  {
    id: nanoid(),
    name: "Sales & Marketing",
  },
  {
    id: nanoid(),
    name: "Admin & Customer Support",
  },
];

export const dropDownTalentItems = [
  {
    id: nanoid(),
    name: "Talent",
    description: "Hire professional and agencies",
    icon: <HiOutlineUserGroup />,
  },
  {
    id: nanoid(),
    name: "Projects",
    description: "Buy ready-tos-start services",
    icon: <BsCalendar2Check />,
  },
  {
    id: nanoid(),
    name: "Jobs",
    description: "Apply to jobs posted by clients",
    icon: <BsFillBagFill />,
  },
];

export const moreDropDownItems = [
  {
    id: nanoid(),
    name: "Writing & Translation",
  },
  {
    id: nanoid(),
    name: "Finance & Accounting",
  },
  {
    id: nanoid(),
    name: "HR & Training",
  },
  {
    id: nanoid(),
    name: "Legal",
  },
  {
    id: nanoid(),
    name: "Engineering & Architecture",
  },
  {
    id: nanoid(),
    name: "See all specializations",
  },
];

export const findWorkDropdownItems = [
  {
    id: nanoid(),
    header: "Ways to earn",
    description: "Learn why Upwork has the right opportunities for you.",
  },
  {
    id: nanoid(),
    header: "Find work foy your skills",
    description: "Explore the kind of work available in your field.",
  },
  {
    id: nanoid(),
    header: "Find ways to promote yourself",
    description: "Show clients you're the one they want.",
  },
];

export const whyUpworkDropdownItemsLeft = [
  {
    id: nanoid(),
    header: "Success Stories",
    description: "Discover how teams work strategically and grow together.",
  },
  {
    id: nanoid(),
    header: "Reviews",
    description: "See what it's like to collaborate on Upwork.",
  },
  {
    id: nanoid(),
    header: "How to hire",
    description: "Learn about the different ways to get work done.",
  },
  {
    id: nanoid(),
    header: "How to find work",
    description: "Learn about how to grow your independent career.",
  },
];

export const whyUpworkDropdownItemsRight = [
  {
    id: nanoid(),
    header: "Guides",
    description: "Getting Started as a Freelancer",
  },
  {
    id: nanoid(),
    header: "Guides",
    description: "Growing Your Freelance Career",
  },
  {
    id: nanoid(),
    header: "Guides",
    description: "Hiring & Working with Independent Talent",
  },
];

export const findTalentDropdownItemsLeft = [
  {
    id: nanoid(),
    header: "Post a job and hire a pro",
    subtitle: "Talent Marketplace",
    identity: "TALENT_MARKETPLACE",
  },
  {
    id: nanoid(),
    header: "Browse and buy projects",
    subtitle: "Project catalog",
    identity: "PROJECT_CATALOG",
  },
  {
    id: nanoid(),
    header: "Get advice from an industry expert",
    subtitle: "Consultations",
    identity: "CONSULTATIONS",
  },
];

export const talentMarketplaceItems = [
  {
    id: nanoid(),
    header: "Development & IT",
  },
  {
    id: nanoid(),
    header: "Design & Creative",
  },
  {
    id: nanoid(),
    header: "Sales & Marketing",
  },
  {
    id: nanoid(),
    header: "Writing & Translation",
  },
  {
    id: nanoid(),
    header: "Admin & Customer Support",
  },
  {
    id: nanoid(),
    header: "Finance & Accounting",
  },
  {
    id: nanoid(),
    header: "HR & Training",
  },
  {
    id: nanoid(),
    header: "Legal",
  },
  {
    id: nanoid(),
    header: "Engineering & Architecture",
  },
  {
    id: nanoid(),
    header: "Hire freelancers",
  },
];

export const projectCatalogItems = [
  {
    id: nanoid(),
    header: "Logo Design",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/logo.cd04b531.jpg",
  },
  {
    id: nanoid(),
    header: "Articles & Blog Posts",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/blog.d73af7fb.jpg",
  },
  {
    id: nanoid(),
    header: "WordPress",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/wp.1acec44b.jpg",
  },
  {
    id: nanoid(),
    header: "Social Media Marketing",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/smm.1a3a67a0.jpg",
  },
  {
    id: nanoid(),
    header: "Video Editing",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/video.8e2caeb1.jpg",
  },
  {
    id: nanoid(),
    header: "SEO",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/seo.bb0c74c3.jpg",
  },
];

export const consultationsItems = [
  {
    id: nanoid(),
    header: "Web Programming",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/web-programming.bba7813a.png",
  },
  {
    id: nanoid(),
    header: "AI & Machine Learning",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/ai.b8aa0451.png",
  },
  {
    id: nanoid(),
    header: "Marketing & Strategy",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/marketing.43b52b75.png",
  },
  {
    id: nanoid(),
    header: "Social Media Marketing",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/social-media.775752fd.png",
  },
  {
    id: nanoid(),
    header: "Website Builders & CMS",
    image:
      "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/website-builders.6acb130a.png",
  },
];

export const trustedByItems = [
  {
    id: nanoid(),
    svg: microsoftSvg,
  },
  {
    id: nanoid(),
    svg: airbnbSvg,
  },
  {
    id: nanoid(),
    svg: bissellSvg,
  },
];

export const howToHireItems = [
  {
    id: nanoid(),
    header: "No cost to join",
    description:
      "Register and browse professionals, explore projects, or even book a consultation.",
    icon: <FaPenSquare />,
  },
  {
    id: nanoid(),
    header: "Post a job and hire top talent",
    description:
      "Finding talent doesn’t have to be a chore. Post a job or we can search for you!",
    icon: <BsPinAngle />,
  },
  {
    id: nanoid(),
    header: "Work with the best—without breaking the bank",
    description:
      "Upwork makes it affordable to up your work and take advantage of low transaction rates.",
    icon: <RiShieldStarLine />,
  },
];

export const categoryPillsItems = [
  {
    id: nanoid(),
    header: "Development & IT",
    star: "4.8/5",
    skills: 1853,
  },
  {
    id: nanoid(),
    header: "AI Services",
    star: "4.8/5",
    skills: 294,
  },
  {
    id: nanoid(),
    header: "Design & Creative",
    star: "4.91/5",
    skills: 968,
  },
  {
    id: nanoid(),
    header: "Sales & Marketing",
    star: "4.77/5",
    skills: 392,
  },
  {
    id: nanoid(),
    header: "Writing & Translation",
    star: "4.92/5",
    skills: 505,
  },
  {
    id: nanoid(),
    header: "Admin & Customer Support",
    star: "4.77/5",
    skills: 508,
  },
  {
    id: nanoid(),
    header: "Finance & Accounting",
    star: "4.79/5",
    skills: 214,
  },
  {
    id: nanoid(),
    header: "Engineering & Architecture",
    star: "4.85/5",
    skills: 650,
  },
];

export const enterpriseListItems = [
  {
    id: nanoid(),
    icon: <BsFillBagFill />,
    text: "Access expert talent to fill your skill gaps",
  },
  {
    id: nanoid(),
    icon: <BsFillBagFill />,
    text: "Control your workflow: hire, classify and pay your talent",
  },
  {
    id: nanoid(),
    icon: <SlEarphones />,
    text: "Partner with Upwork for end-to-end support",
  },
];

export const rebrandDeliveryItems = [
  {
    id: nanoid(),
    header: `Post a job 
    and hire a pro`,
    tag: "Talent Marketplace",
  },
  {
    id: nanoid(),
    header: `Browse and 
    buy projects`,
    tag: "Project Catalog",
  },
  {
    id: nanoid(),
    header: "Get advice from an industry expert",
    tag: "Consultations",
  },
];

export const whyUpworkSecLeftItems = [
  {
    id: nanoid(),
    header: "Proof of quality",
    description:
      "Check any pro’s work samples, client reviews, and identity verification.",
    icon: <MdStars />,
  },
  {
    id: nanoid(),
    header: "No cost until you hire",
    description:
      "Interview potential fits for your job, negotiate rates, and only pay for work you approve.",
    icon: <AiFillDollarCircle />,
  },
  {
    id: nanoid(),
    header: "Safe and secure",
    description:
      "Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.",
    icon: <BsCheckCircleFill />,
  },
];

export const whyUpWorkSecRightItems = [
  {
    id: nanoid(),
    header: "4.9/5",
    icon: <RiShieldStarLine />,
    subtitle: "Clients rate professionals on Upwork",
  },
  {
    id: nanoid(),
    header: "Award winner",
    icon: <BsWrenchAdjustableCircleFill />,
    subtitle: "G2's 2021 Best Software Awards",
  },
];

export const findGreatWorkSectionItems = [
  {
    id: nanoid(),
    text: "Find opportunities for every stage of your freelance career",
  },
  {
    id: nanoid(),
    text: "Control when, where, and how you work",
  },
  {
    id: nanoid(),
    text: "Explore different ways to earn",
  },
];

export const testimonialsItems = [
  {
    id: nanoid(),
    svg: testimonialsNasdaqSvg,
    statement:
      "“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”",
    author: "Josh Machiz, Chief Digital Officer",
    firstTitle: "Emmy Winning",
    firstSubTitle: "Facebook Watch program",
    secondTitle: "Millions",
    secondSubTitle: "of impressions generated per client per IPO",
    color: "rgb(19,84,78)",
  },
  {
    id: nanoid(),
    svg: testimonialsMicrosoftSvg,
    statement:
      "“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”",
    author: "Carol Taylor, Director of Content Experience",
    firstTitle: "50% Faster",
    firstSubTitle: "launch of projects",
    secondTitle: "10,000",
    secondSubTitle: "projects completed",
    color: "rgb(188,81,27)",
  },
];

export const rebrandSkillsMenuItems = [
  {
    id: nanoid(),
    name: "Top skills",
  },
  {
    id: nanoid(),
    name: "Trending skills",
  },
  {
    id: nanoid(),
    name: "Top skills US",
  },
  {
    id: nanoid(),
    name: "Project Catalog",
  },
];

export const footerItems = [
  {
    id: nanoid(),
    title: "For Clients",
    subtitles: [
      "How to Hire",
      "Talent Marketplace",
      "Project Catalog",
      "Hire an Agency",
      "Enterprise",
      "Any Hire",
      "Contract-to-Hire",
      'Direct Contracts',
      'Hire Worldwide',
      'Hire in the USA',
    ],
  },
  {
    id: nanoid(),
    title: 'For Talent',
    subtitles: [
      'How to Find Work',
      'Direct Contracts',
      'Find Freelance Jobs Worldwide',
      'Find Freelance Jobs in the USA',
    ],
  },
  {
   id: nanoid(),
   title: 'Resources',
   subtitles: [
    'Help & Support',
    'Success Stories',
    'Upwork Reviews',
    'Resources',
    'Blog',
    'Community',
    'Affiliate Program',
    'Free Business tools',
   ],
  },
  {
    id: nanoid(),
    title: 'Company',
    subtitles: [
      'About Us',
      'Leadership',
      'Investor Relations',
      'Careers',
      'Out Impact',
      'Press',
      'Contact Us',
      'Trust,Safety & Security',
      'Modern Slavery Statement',
    ],
  },
];

export const followUsIcons = [
  {
    id: nanoid(),
    icon: <AiOutlineFacebook />,
  },
  {
    id: nanoid(),
    icon: <AiOutlineLinkedin />
  },
  {
    id: nanoid(),
    icon: <AiFillTwitterSquare />
  },
  {
    id: nanoid(),
    icon: <AiOutlineYoutube />
  },
  {
    id: nanoid(),
    icon: <AiOutlineInstagram />
  },
];

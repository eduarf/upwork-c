import { nanoid } from "nanoid";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiShieldStarLine } from "react-icons/ri";
import { BsCalendar2Check, BsFillBagFill, BsPinAngle } from "react-icons/bs";
import { FaPenSquare } from "react-icons/fa";
import FindTalentDropdown from "./src/components/find-talent-dropdown/FindTalentDropdown";
import FindWorkDropdown from "./src/components/find-work-dropdown/FindWorkDropdown";
import WhyUpworkDropdown from "./src/components/why-upwork-dropdown/WhyUpworkDropdown";
import microsoftSvg from "./src/assets/microsoft.svg";
import airbnbSvg from "./src/assets/airbnb.svg";
import bissellSvg from "./src/assets/bissell.svg";

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
    header: 'Development & IT',
    star: '4.8/5',
    skills: 1853,
  },
  {
    id: nanoid(),
    header: 'AI Services',
    star: '4.8/5',
    skills: 294
  },
  {
    id: nanoid(),
    header: 'Design & Creative',
    star: '4.91/5',
    skills: 968
  },
  {
    id: nanoid(),
    header: 'Sales & Marketing',
    star: '4.77/5',
    skills: 392,
  },
  {
    id: nanoid(),
    header: 'Writing & Translation',
    star: '4.92/5',
    skills: 505,
  },
  {
    id: nanoid(),
    header: 'Admin & Customer Support',
    star: '4.77/5',
    skills: 508,
  },
  {
    id: nanoid(),
    header: 'Finance & Accounting',
    star: '4.79/5',
    skills: 214,
  },
  {
    id: nanoid(),
    header: 'Engineering & Architecture',
    star: '4.85/5',
    skills: 650,
  },
];

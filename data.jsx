import { nanoid } from "nanoid";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCalendar2Check, BsFillBagFill } from "react-icons/bs";
import FindTalentDropdown from "./src/components/find-talent-dropdown/FindTalentDropdown";
import FindWorkDropdown from "./src/components/find-work-dropdown/FindWorkDropdown";
import WhyUpworkDropdown from "./src/components/why-upwork-dropdown/WhyUpworkDropdown";

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
    header: 'How to hire',
    description: 'Learn about the different ways to get work done.',
  },
  {
    id: nanoid(),
    header: 'How to find work',
    description: 'Learn about how to grow your independent career.'
  },
];

export const whyUpworkDropdownItemsRight = [
  {
    id: nanoid(),
    header: 'Guides',
    description: 'Getting Started as a Freelancer',
  },
  {
    id: nanoid(),
    header: 'Guides',
    description: 'Growing Your Freelance Career',
  },
  {
    id: nanoid(),
    header: 'Guides',
    description: 'Hiring & Working with Independent Talent',
  },
];

export const findTalentDropdownItemsLeft = [
  {
    id: nanoid(),
    header: 'Post a job and hire a pro',
    subtitle: 'Talent Marketplace',
    identity: 'TALENT_MARKETPLACE'
  },
  {
    id: nanoid(),
    header: 'Browse and buy projects',
    subtitle: 'Project catalog',
    identity: 'PROJECT_CATALOG'
  },
  {
    id: nanoid(),
    header: 'Get advice from an industry expert',
    subtitle: 'Consultations',
    identity: 'CONSULTATIONS'
  },
];

export const talentMarketplaceItems = [
  {
    id: nanoid(),
    header: 'Development & IT',
  },
  {
    id: nanoid(),
    header: 'Design & Creative',
  },
  {
    id: nanoid(),
    header: 'Sales & Marketing',
  },
  {
    id: nanoid(),
    header: 'Writing & Translation',
  },
  {
    id: nanoid(),
    header: 'Admin & Customer Support',
  },
  {
    id: nanoid(),
    header: 'Finance & Accounting',
  },
  {
    id: nanoid(),
    header: 'HR & Training',
  },
  {
    id: nanoid(),
    header: 'Legal',
  },
  {
    id: nanoid(),
    header: 'Engineering & Architecture',
  },
  {
    id: nanoid(),
    header: 'Hire freelancers',
  },
];

export const projectCatalogItems = [
  {
    id: nanoid(),
    header: 'Logo Design',
    image: 'https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/logo.cd04b531.jpg'
  },
  {
    id: nanoid(),
    header: 'Articles & Blog Posts',
    image: 'https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/blog.d73af7fb.jpg'
  },
  {
    id: nanoid(),
    header: 'WordPress',
    image: 'https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/wp.1acec44b.jpg',
  },
  {
    id: nanoid(),
    header: 'Social Media Marketing',
    image: 'https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/smm.1a3a67a0.jpg'
  },
  {
    id: nanoid(),
    header: 'Video Editing',
    image: 'https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/video.8e2caeb1.jpg',
  },
  {
    id: nanoid(),
    header: 'SEO',
    image: 'https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/seo.bb0c74c3.jpg',
  },
];

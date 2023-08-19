import { nanoid } from "nanoid";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCalendar2Check, BsFillBagFill } from "react-icons/bs";
import FindTalentNav from "./src/components/findtalent-nav/FindTalentNav";
import FindWorkDropdown from "./src/components/findwork-nav/FindWorkDropdown";
import WhyUpworkNav from "./src/components/whyupwork-nav/WhyUpworkNav";

export const navItems = [
  {
    id: nanoid(),
    name: "Find Talent",
    type: "FIND_TALENT",
    component: <FindTalentNav />,
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
    component: <WhyUpworkNav />,
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

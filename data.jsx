import { nanoid } from "nanoid";
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsCalendar2Check,BsFillBagFill } from 'react-icons/bs';

export const navItems = [
    {
        id: nanoid(),
        name: 'Find Talent',
        type: 'FIND_TALENT',
    },
    {
        id: nanoid(),
        name: 'Find Work',
        type: 'FIND_WORK',
    },
    {
        id: nanoid(),
        name: 'Why Upwork',
        type: 'WHY_UPWORK',
    }
];

export const navBottomItems = [
    {
        id: nanoid(),
        name: 'Development & IT',
    },
    {
        id: nanoid(),
        name: 'AI Services',
    },
    {
        id: nanoid(),
        name: 'Design & Creative',
    },
    {
        id: nanoid(),
        name: 'Sales & Marketing',
    },
    {
        id: nanoid(),
        name: 'Admin & Customer Support',
    },
];

export const dropDownTalentItems = [
    {
        id: nanoid(),
        name: 'Talent',
        description: 'Hire professional and agencies',
        icon: <HiOutlineUserGroup />,
    },
    {
        id: nanoid(),
        name: 'Projects',
        description: 'Buy ready-tos-start services',
        icon: <BsCalendar2Check />,
    },
    {
        id: nanoid(),
        name: 'Jobs',
        description: 'Apply to jobs posted by clients',
        icon: <BsFillBagFill />
    }
];

export const moreDropDownItems = [
    {
        id: nanoid(),
        name: 'Writing & Translation',
    },
    {
        id: nanoid(),
        name: 'Finance & Accounting',
    },
    {
        id: nanoid(),
        name: 'HR & Training',
    },
    {
        id: nanoid(),
        name: 'Legal',
    },
    {
        id: nanoid(),
        name: 'Engineering & Architecture',
    },
    {
        id: nanoid(),
        name: 'See all specializations'
    },
];
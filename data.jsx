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
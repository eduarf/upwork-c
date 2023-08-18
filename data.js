import { nanoid } from "nanoid";

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
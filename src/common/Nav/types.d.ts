import { Session } from 'next-auth';

export type TNavBar = {
    active: boolean;
    matches: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

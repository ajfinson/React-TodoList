import { atom, useRecoilValue } from 'recoil';


// Define the atom
export const todoAtom = atom<string[]>({
    key: 'todoAtom',
    default: [],
});
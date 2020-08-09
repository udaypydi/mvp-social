import { atom } from 'recoil';

export const activeElementType = atom({
    key: 'activeElement',
    default: 'CONTAINER',
});


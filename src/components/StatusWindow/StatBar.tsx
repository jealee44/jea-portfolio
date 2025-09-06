import {motion} from  'motion/react';

export interface StatBarProps {
    label: string;
    current: number;
    max: number;
    color?: 'cyan' | 'purple' | 'gold';
}
import React, { JSX, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
    text: string;
    icon?: ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

export default function Button({
    text,
    icon,
    className,
    onClick,
    variant = 'primary',
}: ButtonProps): JSX.Element {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'flex items-center gap-6 px-4 py-2 rounded-[10px] cursor-pointer transition-colors',
                {
                    'text-white bg-[#C32033] hover:bg-[#A01A2A]':
                        variant === 'primary',
                    'text-[#C32033] bg-white border border-[#C32033] hover:bg-gray-50':
                        variant === 'secondary',
                },
                className,
            )}
        >
            {icon && icon}
            <span>{text}</span>
        </button>
    );
}

import React, { JSX, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
    text: string;
    icon?: ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'link' | 'follow';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    text,
    icon,
    className,
    onClick,
    disabled = false,
    variant = 'primary',
    type = 'button',
}: ButtonProps): JSX.Element {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                'flex items-center gap-6 px-4 py-2 rounded-[10px] cursor-pointer transition-colors',
                {
                    'text-white bg-[#C32033] hover:bg-[#A01A2A]':
                        variant === 'primary',
                    'text-[#C32033] bg-white border border-[#C32033] hover:bg-gray-50':
                        variant === 'secondary',
                    'text-[#C32033] bg-transparent border-none px-0 py-0 rounded-none hover:text-[#A01A2A] hover:underline':
                        variant === 'link',
                    'text-[#C32033] bg-[#C3203312] hover:bg-gray-50':
                        variant === 'follow',
                },
                className,
            )}
        >
            {icon && icon}
            <span>{text}</span>
        </button>
    );
}

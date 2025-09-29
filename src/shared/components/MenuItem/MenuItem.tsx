'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
    href: string;
    label: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <li className="relative pb-1">
            <Link
                href={href}
                className={`relative after:absolute after:-bottom-[9px] after:left-0 after:h-[2px] after:w-0 after:bg-[#C32033] after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-[#C32033]' : 'text-black'} `}
            >
                {label}
            </Link>
        </li>
    );
};

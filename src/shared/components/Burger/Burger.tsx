'use client';

import clsx from 'clsx';

import { MenuOpen } from '../MenuOpen/MenuOpen';

interface BurgerProps {
    burgerActive: boolean;
    closeBurgerMenu: () => void;
}

export const Burger: React.FC<BurgerProps> = ({
    burgerActive,
    closeBurgerMenu,
}) => {
    return (
        <>
            <button
                className="min-[1120px]:hidden [&_svg]:size-[1.1rem] cursor-pointer size-5"
                onClick={closeBurgerMenu}
            >
                <div
                    className={clsx(
                        'group relative h-[14px] w-[20px]',
                        burgerActive && 'active',
                    )}
                >
                    <span className="bg-[#030303] absolute top-0 left-0 h-[2px] w-full transition-transform group-[.active]:translate-y-[6px] group-[.active]:rotate-45"></span>
                    <span className="bg-[#030303] absolute top-[6px] left-0 h-[2px] w-full transition-opacity group-[.active]:opacity-0"></span>
                    <span className="bg-[#030303] absolute bottom-0 left-0 h-[2px] w-full transition-transform group-[.active]:-translate-y-[6px] group-[.active]:-rotate-45"></span>
                </div>
            </button>
            <MenuOpen
                burgerActive={burgerActive}
                closeBurgerMenu={closeBurgerMenu}
            />
        </>
    );
};

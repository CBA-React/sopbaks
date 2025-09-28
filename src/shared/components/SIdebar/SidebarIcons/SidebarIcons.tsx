import { JSX } from 'react';

interface Props {
    className?: string;
    color?: string;
}

export function AdsIcon({ className, color = '#868686' }: Props): JSX.Element {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.33008 14.9898L9.71008 11.8998C10.0501 11.4598 10.6801 11.3798 11.1201 11.7198L12.9501 13.1598C13.3901 13.4998 14.0201 13.4198 14.3601 12.9898L16.6701 10.0098"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function FollowingIcon({
    className,
    color = '#868686',
}: Props): JSX.Element {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.5901 22.5C20.5901 18.63 16.7402 15.5 12.0002 15.5C7.26015 15.5 3.41016 18.63 3.41016 22.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function HomeIcon({ className, color = '#868686' }: Props): JSX.Element {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <mask
                id="mask0_4085_14021"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="25"
            >
                <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_4085_14021)">
                <path
                    d="M6 19.5H9V14.5C9 14.2167 9.09583 13.9792 9.2875 13.7875C9.47917 13.5958 9.71667 13.5 10 13.5H14C14.2833 13.5 14.5208 13.5958 14.7125 13.7875C14.9042 13.9792 15 14.2167 15 14.5V19.5H18V10.5L12 6L6 10.5V19.5ZM4 19.5V10.5C4 10.1833 4.07083 9.88333 4.2125 9.6C4.35417 9.31667 4.55 9.08333 4.8 8.9L10.8 4.4C11.15 4.13333 11.55 4 12 4C12.45 4 12.85 4.13333 13.2 4.4L19.2 8.9C19.45 9.08333 19.6458 9.31667 19.7875 9.6C19.9292 9.88333 20 10.1833 20 10.5V19.5C20 20.05 19.8042 20.5208 19.4125 20.9125C19.0208 21.3042 18.55 21.5 18 21.5H14C13.7167 21.5 13.4792 21.4042 13.2875 21.2125C13.0958 21.0208 13 20.7833 13 20.5V15.5H11V20.5C11 20.7833 10.9042 21.0208 10.7125 21.2125C10.5208 21.4042 10.2833 21.5 10 21.5H6C5.45 21.5 4.97917 21.3042 4.5875 20.9125C4.19583 20.5208 4 20.05 4 19.5Z"
                    fill={color}
                />
            </g>
        </svg>
    );
}

export function SearchIcon({
    className,
    color = '#868686',
}: Props): JSX.Element {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M21.0002 21.5002L16.6602 17.1602"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function FaqIcon({ className, color = '#AAAAAA' }: Props): JSX.Element {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clipPath="url(#clip0_235_868)">
                <path
                    d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334Z"
                    stroke={color}
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 6.66663V9.99996"
                    stroke={color}
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 13.3334H10.0083"
                    stroke={color}
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_235_868">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

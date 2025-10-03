import { JSX } from 'react';

export function GlobeIcon(): JSX.Element {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1"
            />
            <path
                d="M8 1.5C8 1.5 10.5 4 10.5 8C10.5 12 8 14.5 8 14.5M8 1.5C8 1.5 5.5 4 5.5 8C5.5 12 8 14.5 8 14.5M2 8H14M3 5H13M3 11H13"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
            />
        </svg>
    );
}

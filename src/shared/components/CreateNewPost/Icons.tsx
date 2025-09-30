import { JSX } from 'react';

export function EmojiIcon(): JSX.Element {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle cx="8" cy="10" r="1.5" fill="currentColor" />
            <circle cx="16" cy="10" r="1.5" fill="currentColor" />
            <path
                d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}
export function HashtagIcon(): JSX.Element {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M10 3L8 21M16 3L14 21M4 8H20M3 16H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

export function ImageIcon(): JSX.Element {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path
                d="M21 15L16 10L5 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function ArrowDownIcon(): JSX.Element {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

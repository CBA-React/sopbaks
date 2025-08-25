interface GraphIconProps {
    color?: string;
    rotate?: number;
}

export default function GraphIcon({
    color = '#C32033',
    rotate = 0,
}: GraphIconProps) {
    return (
        <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <path
                d="M14.4834 4.50043H18.8217V8.00262"
                stroke={color}
                strokeWidth="1.00189"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.71289 11.5017L7.41222 7.70802C7.52728 7.61512 7.66388 7.54142 7.81422 7.49114C7.96456 7.44086 8.1257 7.41498 8.28843 7.41498C8.45116 7.41498 8.6123 7.44086 8.76264 7.49114C8.91299 7.54142 9.04959 7.61512 9.16464 7.70802L11.1292 9.29399C11.2443 9.38689 11.3809 9.46059 11.5312 9.51087C11.6816 9.56115 11.8427 9.58703 12.0055 9.58703C12.1682 9.58703 12.3293 9.56115 12.4797 9.51087C12.63 9.46059 12.7666 9.38689 12.8817 9.29399L18.2005 5.00024"
                stroke={color}
                strokeWidth="1.00189"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

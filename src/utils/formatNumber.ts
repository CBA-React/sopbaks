export function formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
}

export const formatAmount = (num: number): string => {
    if (num >= 1_000_000_000) {
        const formatted = (num / 1_000_000_000).toFixed(2);
        return formatted.replace(/\.?0+$/, '') + 'B';
    }
    if (num >= 1_000_000) {
        const formatted = (num / 1_000_000).toFixed(2);
        return formatted.replace(/\.?0+$/, '') + 'M';
    }
    if (num >= 1_000) {
        const formatted = (num / 1_000).toFixed(2);
        return formatted.replace(/\.?0+$/, '') + 'K';
    }
    return num.toString();
};
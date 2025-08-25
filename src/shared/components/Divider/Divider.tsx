import clsx from 'clsx';

export default function Divider({className}: {className?: string}) {
    return <div className={clsx('h-[1px] w-full bg-[#D6D6D6]', className)} />;
}

import Image from 'next/image';

interface FaqItemProps {
    title: string;
    text: string;
    icon: string;
}

export default function FaqItem({ title, text, icon }: FaqItemProps) {
    return (
        <div className={'max-w-[318px]'}>
            <div>
                <Image src={icon} alt={title} width={48} height={48} />
            </div>
            <h3 className={'text-[18px] font-semibold mt-5'}>{title}</h3>
            <p className={'text-[#535862] mt-2'}>{text}</p>
        </div>
    );
}

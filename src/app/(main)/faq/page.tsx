import { JSX } from 'react';

import ContactUsForm from '@/shared/components/ContactUsForm/ContactUsForm';
import FaqItem from '@/shared/components/FaqItem/FaqItem';

const faqArray = [
    {
        title: 'Is SOPBAKS free to use?',
        text: 'Yes! You can use SOMBAKS for free. Premium features for businesses and creators are available via subscription.',
        icon: '/pictures/faq/1.png',
    },
    {
        title: 'How do I follow other users?',
        text: 'Just visit the user’s profile and click the “Follow” button. You’ll see their posts in your feed',
        icon: '/pictures/faq/2.png',
    },
    {
        title: 'Can I go live on SOMBAKS?',
        text: 'Yes! SOMBAKS allows users to broadcast live content. To go live, click the “Start Streaming” button at the top of your screen or in your profile',
        icon: '/pictures/faq/3.png',
    },
    {
        title: 'How do I find live streams on the platform?',
        text: 'Go to the Streaming tab and use filters or categories like Music, Gaming, Business, Cooking, etc., to explore live or upcoming streams.',
        icon: '/pictures/faq/4.png',
    },
    {
        title: 'Can I like and comment on posts?',
        text: 'Yes! You can engage with any public post by liking️ and commenting. Comments are a great way to start conversations and connect with others on the platform.',
        icon: '/pictures/faq/5.png',
    },
    {
        title: 'Is SOMBAKS safe? ',
        text: 'Yes, SOMBAKS is safe to use. We follow strict privacy policies and do not sell or misuse your personal data.',
        icon: '/pictures/faq/6.png',
    },
];

export default function Faq(): JSX.Element {
    return (
        <article className={'mt-5'}>
            <h1 className={'text-[24px] font-bold'}>Help Center & FAQ</h1>
            <p className={'text-[#5D5F63]'}>
                Got questions? We’ve got answers. <br />
                Learn how SOMBAKS works, how to post, stream, promote your
                brand, and keep your account secure. secure.
                <br />
                Need help? Start here.
            </p>
            <div
                // max-w-[1100px]
                className={
                    'bg-[#FAFAFA] rounded-[20px] w-full py-[60px] px-[20px] lg:px-[40px] mt-5'
                }
            >
                <section
                    className={
                        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:mt-5'
                    }
                >
                    {faqArray.map((faq) => (
                        <FaqItem
                            key={faq.title}
                            title={faq.title}
                            text={faq.text}
                            icon={faq.icon}
                        />
                    ))}
                </section>
                <ContactUsForm />
            </div>
        </article>
    );
}

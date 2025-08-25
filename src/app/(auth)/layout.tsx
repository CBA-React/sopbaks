import Image from 'next/image';

import Logo from 'public/icons/logo.svg';
import LogoMobile from 'public/icons/logoMobile.svg';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const bannerImage = '/pictures/signup-banner.png';
    const bannerAlt = 'Auth Banner';

    return (
        <div className="h-screen flex flex-col-reverse md:flex-row overflow-hidden bg-white">
            <section className="flex-1 md:w-1/2 flex flex-col items-center px-6 md:px-0 bg-white rounded-t-[20px] md:rounded-none -mt-6 md:mt-0 relative z-20">
                <div className="w-full max-w-[560px] flex flex-col lg:h-full">
                    <div className="mt-[40px] hidden lg:block">
                        <Logo className="w-[150px] h-auto" />
                    </div>
                    <div className="flex-1 flex items-center justify-center py-8 mt-10 lg:mt-0">
                        {children}
                    </div>
                </div>
            </section>

            <section className="w-full md:w-1/2 relative h-[calc(40vh+24px)] md:h-auto">
                <div className="absolute top-5 right-3 z-10 md:hidden">
                    <LogoMobile className="w-[150px] h-auto" />
                </div>
                <Image
                    src={bannerImage}
                    alt={bannerAlt}
                    fill
                    className="object-cover"
                    priority
                />
            </section>
        </div>
    );
}

import Image from "next/image";

export default function HeroSection({ title, bg = "/images/home/home-hero-3.jpg", alt = "Hero Banner", children }) {
    return (
        <section className="hero-section relative h-[70vh] w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={bg}
                    alt={alt}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="relative z-30 wrapper h-full w-full flex flex-col justify-center items-center text-center px-[4vw]">
                {title && (
                    <h1 className="text-white font-medium leading-none text-[70px] lg:text-[7vw]">
                        {title}
                    </h1>
                )}

                {children}
            </div>

            <div className="h-[3vw] w-full absolute bottom-0 left-0 z-10 hidden lg:block">
                <Image
                    src="/svg/wave.svg"
                    alt="Wave Image"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="h-[10vw] w-full absolute bottom-0 left-0 z-10 lg:hidden">
                <Image
                    src="/svg/mobile-wave.svg"
                    alt="Wave Image"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </section>
    );
}

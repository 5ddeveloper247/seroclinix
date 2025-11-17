import { overviewData } from '@/data/data.js';

export default function Overview() {
    return (
        <section className="py-15 lg:py-[6vw] bg-[#E8E8E8]">
            <div className="wrapper">
                <div className='flex items-center justify-center'>
                    <div className="lg:w-1/2 mb-3 text-center">
                        <h2 className="font-pat text-primary mb-4! lg:mb-0! leading-none">
                            Overview
                        </h2>
                        <h2>Why join the affiliate program?</h2>
                        <p>Our veterinary team is committed to providing safe effective and
                            compassionate care for pets of all ages</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {overviewData.map((item, index) => (
                        <article
                            key={index}
                            className="bg-white p-5 lg:p-[1.5vw] rounded-2xl lg:rounded-[1.5vw] flex flex-col gap-4 lg:gap-[1vw]"
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-6 lg:w-[4vw] object-contain"
                                loading="lazy"
                            />

                            <h5 className="font-medium text-heading">{item.title}</h5>

                            <p className="text-gray-500 opacity-80">{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
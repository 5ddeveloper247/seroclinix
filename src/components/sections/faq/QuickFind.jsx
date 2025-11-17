import { quickAnswersData } from '@/data/data.js';

export default function QuickFind() {
    return (
        <section className="wrapper py-15 lg:py-[6vw]">
            <h2 className='mb-4! lg:mb-[2.5vw]!'>
                Quickfind Answers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickAnswersData.map((item, index) => (
                    <article
                        key={index}
                        className="bg-[#F6F6F6] p-5 lg:p-[1.5vw] rounded-2xl lg:rounded-[1.5vw] flex flex-col gap-4 lg:gap-[1vw]"
                    >
                        <img
                            src={item.icon}
                            alt={item.title}
                            className="w-6 lg:w-[4vw] object-contain"
                            loading="lazy"
                        />

                        <h4 className="font-normal text-heading">{item.title}</h4>

                        <p className="text-gray-500">{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

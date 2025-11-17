import Image from "next/image"
import { articleSection } from "@/data/data"
import Link from "next/link"

export default function DetailSection() {
    return (
        <>
            <section>
                <div className="wrapper py-15 lg:py-[6vw]">
                    <h2 className="mb-7! lg:!mb-[3vw]">Latest Post</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[3vw]">
                        {/* Content Section */}
                        <div>
                            <div className="flex item-center gap-2 mb-3">
                                <span>22/3/2024</span>
                                <span>5 Minutes</span>
                            </div>
                            <h3 className="text-[22px] lg:text-[2.8vw] font-normal leading-snug mb-3">
                                Grooming experts present new methods for shedding control service
                            </h3>

                            <p className="text-gray-700 mb-5 leading-relaxed">
                                As the world shifts towards smarter solutions, Right Peeps is here to
                                turbocharge your business growth. We’re all about leveraging cutting-edge
                                tech and top-tier talent to help you scale fast, innovate, and crush your
                                goals. <br />
                                Let’s redefine success together—because when you outsource smart, you don’t
                                just save—you thrive.
                            </p>

                            <div className="flex items-center gap-2">
                                <span className="py-1 px-2 rounded-[3px] bg-[#EEF4FF] border border-[#DCDCDC] text-primary">Cleaning</span>
                                <span className="py-1 px-2 rounded-[3px] bg-[#FDF2FA] border border-[#DCDCDC] text-primary">Animals</span>
                            </div>

                            <div>
                                <div className="flex items-center gap-[1vw] mt-5">
                                    <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" className="w-[3vw] h-[3vw] rounded-full object-cover" alt="" />

                                    <div>
                                        <span>Guy Hawkins</span>
                                        <div className="flex item-center gap-2">
                                            <span>22/3/2024</span>
                                            <span>5 Minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative h-65 lg:h-[33vw] w-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
                                    after:bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] after:z-[1] after:rounded-2xl after:lg:rounded-[1vw]">
                            <Image
                                src="/images/blog/blog-one.jpg"
                                alt="Latest Post"
                                fill
                                priority
                                className="rounded-2xl lg:rounded-[1vw] object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="wrapper">
                <div className="flex flex-col lg:flex-row gap-[3vw] justify-between mb-5 lg:mb-[4vw]">
                    <div className="w-full lg:w-2/3">
                        <h3 className="font-normal lg:max-w-1/2">Solve Anything In Business Using Simple Steps</h3>
                        <p>
                            Under sink water filters Australia are compact filtration systems installed discreetly beneath your kitchen sink. They treat water directly at the point of use, delivering cleaner, healthier water straight from your tap. These systems are available with single or multi-stage filtration options and can be connected to any existing kitchen or faucet tap.
                        </p>

                        <h3 className="font-normal lg:max-w-1/2">How They Work</h3>
                        <p>
                            Reverse osmosis (RO) systems use a semi-permeable membrane to remove tiny contaminants found in our tap water, like PFAS (forever chemicals) and heavy metals. The process includes sediment and carbon filtration before water passes through the RO membrane for utmost purity.
                        </p>
                        <p>
                            RO systems address a wide range of impurities, offering comprehensive filtration. Features like remineralization improve water quality, making it safe and healthy for consumption.
                        </p>

                        <div className="relative h-65 lg:h-[33vw] w-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
                            after:bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] after:z-[1] after:rounded-2xl after:lg:rounded-[1vw]">
                            <Image
                                src="/images/blog/blog-one.jpg"
                                alt="Latest Post"
                                fill
                                priority
                                className="rounded-2xl lg:rounded-[1vw] object-cover object-center"
                            />
                        </div>

                        <h3 className="font-normal lg:max-w-1/2 mt-5">Reducing The Operation Cost</h3>
                        <p>
                            Using under-sink filters significantly reduces the reliance on bottled water, cutting down on plastic waste. This small change contributes to a larger environmental benefit. By eliminating the need for single-use bottles, households can play a part in reducing pollution and conserving natural resources.
                        </p>
                        <p>
                            The production and disposal of plastic bottles have long-lasting environmental consequences. Switching to under-sink filtration systems helps minimize this impact, promoting a more sustainable lifestyle. For eco-conscious consumers, this choice aligns with broader efforts to reduce their carbon footprint.
                        </p>

                        <h3 className="font-normal lg:max-w-1/2">Advantages of Using The Streamline Work Flow</h3>
                        <p>
                            Using under-sink filters significantly reduces the reliance on bottled water, cutting down on plastic waste. This small change contributes to a larger environmental benefit. By eliminating the need for single-use bottles, households can play a part in reducing pollution and conserving natural resources.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="bg-primary p-8 rounded-xl lg:p-[2vw] lg:rounded-[1vw] sticky top-[25%] left-0">
                            <h3 className="mb-5 text-white font-normal">Get in Touch with Us</h3>
                            <form>
                                <input className="py-2 px-4 lg:py-[.7vw] lg:px-[1vw] w-full bg-white text-black mb-3 rounded-lg" type="text" placeholder="Your Name*" />
                                <input className="py-2 px-4 lg:py-[.7vw] lg:px-[1vw] w-full bg-white text-black mb-3 rounded-lg" type="email" placeholder="Email*" />
                                <input className="py-2 px-4 lg:py-[.7vw] lg:px-[1vw] w-full bg-white text-black mb-3 rounded-lg" type="number" placeholder="Phone Number*" />
                                <textarea
                                    className="py-2 px-4 lg:py-[.7vw] lg:px-[1vw] w-full bg-white text-black mb-3 rounded-lg"
                                    name=""
                                    id=""
                                    rows="5"
                                    placeholder="How Can We Help"
                                >
                                </textarea>
                                <button className="bg-[#003337] text-white py-2 px-4 rounded-full w-full font-light lg:py-[.7vw] lg:px-[1vw]">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                <h2 className="mb-7! lg:mb-[2vw]">Article & News</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[2vw]">
                    {articleSection.map((article) => (
                        <div key={article.id}>
                            <div
                                className="relative h-50 lg:h-[20vw] w-full 
                                after:content-[''] after:absolute after:inset-0 
                                after:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#888888_100%)] 
                                after:mix-blend-multiply after:rounded-3xl lg:after:rounded-[1vw]"
                            >
                                <Image
                                    src={article.src}
                                    fill
                                    className="rounded-3xl lg:rounded-[1vw] object-cover"
                                    alt="Blog Image"
                                />

                                <span className="absolute bottom-5 left-5 lg:bottom-[1vw] lg:left-[1vw] bg-white z-10 px-4 py-2 lg:px-[1vw] lg:py-[.3vw] rounded-full">{article.category}</span>
                            </div>


                            <div className="flex items-center justify-between mt-4 lg:mt-[1vw]">
                                <span>{article.date}</span>
                                <span>{article.time}</span>
                            </div>

                            <hr className="opacity-20 my-5 lg:my-[1vw]" />

                            <div className="flex flex-col gap-5 lg:gap-[1vw]">
                                <h4>{article.title}</h4>
                                <p>{article.desc}</p>
                                <Link href="" className="text-primary">
                                    View More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
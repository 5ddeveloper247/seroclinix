import Image from "next/image"
import Link from "next/link"

export default function DetailSection({ article, allArticles = [] }) {
    if (!article) return null;

    // Filter out current article from related articles
    const relatedArticles = allArticles.filter(
        (item) => item.id?.toString() !== article.id?.toString()
    ).slice(0, 6); // Show max 6 related articles

    // Parse categories/tags if they exist
    const categories = article.categories ||
        (article.category ? [article.category] : []) ||
        [];

    return (
        <>
            <section>
                <div className="wrapper py-15 lg:py-[6vw]">
                    <h2 className="mb-7! lg:mb-[3vw]!">Latest Post</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[3vw]">
                        {/* Content Section */}
                        <div>
                            <div className="flex item-center gap-2 mb-3">
                                {article.date && <span>{article.date}</span>}
                                {article.read_time && <span>{article.read_time}</span>}
                            </div>
                            <h3 className="text-[22px] lg:text-[2.8vw] font-normal leading-snug mb-3">
                                {article.title}
                            </h3>

                            <div
                                className="text-gray-700 mb-5 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: article.description || article.content || ""
                                }}
                            />

                            {categories.length > 0 && (
                                <div className="flex items-center gap-2 flex-wrap">
                                    {categories.map((cat, idx) => (
                                        <span
                                            key={idx}
                                            className="py-1 px-2 rounded-[3px] bg-[#EEF4FF] border border-[#DCDCDC] text-primary"
                                        >
                                            {typeof cat === 'string' ? cat : cat.name || cat}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {(article.author || article.date || article.read_time) && (
                                <div>
                                    <div className="flex items-center gap-[1vw] mt-5">
                                        {article.author_image && (
                                            <img
                                                src={article.author_image}
                                                className="w-[3vw] h-[3vw] rounded-full object-cover"
                                                alt={article.author || "Author"}
                                            />
                                        )}

                                        <div>
                                            {article.author && <span>{article.author}</span>}
                                            <div className="flex item-center gap-2">
                                                {article.date && <span>{article.date}</span>}
                                                {article.read_time && <span>{article.read_time}</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Image Section */}
                        <div className="relative h-65 lg:h-[33vw] w-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
                                    after:bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] after:z-[1] after:rounded-2xl after:lg:rounded-[1vw]">
                            <Image
                                src={article.image || "/images/blog/blog-one.jpg"}
                                alt={article.title || "Latest Post"}
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
                        {/* Full Content */}
                        {article.full_content && (
                            <div
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{
                                    __html: article.full_content
                                }}
                            />
                        )}

                        {/* If no full_content, show description/content */}
                        {!article.full_content && article.content && (
                            <div
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{
                                    __html: article.content
                                }}
                            />
                        )}

                        {/* Additional images if available */}
                        {article.images && article.images.length > 0 && article.images.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative h-65 lg:h-[33vw] w-full mt-5 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
                                    after:bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] after:z-[1] after:rounded-2xl after:lg:rounded-[1vw]"
                            >
                                <Image
                                    src={typeof img === 'string' ? img : img.url || img.src}
                                    alt={article.title || "Blog Image"}
                                    fill
                                    className="rounded-2xl lg:rounded-[1vw] object-cover object-center"
                                />
                            </div>
                        ))}

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

                {relatedArticles.length > 0 && (
                    <>
                        <h2 className="mb-7! lg:mb-[2vw]">Article & News</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[2vw]">
                            {relatedArticles.map((relatedArticle) => (
                                <div key={relatedArticle.id}>
                                    <div
                                        className="relative h-50 lg:h-[20vw] w-full 
                                        after:content-[''] after:absolute after:inset-0 
                                        after:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#888888_100%)] 
                                        after:mix-blend-multiply after:rounded-3xl lg:after:rounded-[1vw]"
                                    >
                                        <Image
                                            src={relatedArticle.image}
                                            fill
                                            className="rounded-3xl lg:rounded-[1vw] object-cover"
                                            alt={relatedArticle.title || "Blog Image"}
                                        />

                                        {relatedArticle.category && (
                                            <span className="absolute bottom-5 left-5 lg:bottom-[1vw] lg:left-[1vw] bg-white z-10 px-4 py-2 lg:px-[1vw] lg:py-[.3vw] rounded-full">
                                                {relatedArticle.category}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between mt-4 lg:mt-[1vw]">
                                        {relatedArticle.date && <span>{relatedArticle.date}</span>}
                                        {relatedArticle.read_time && <span>{relatedArticle.read_time}</span>}
                                    </div>

                                    <hr className="opacity-20 my-5 lg:my-[1vw]" />

                                    <div className="flex flex-col gap-5 lg:gap-[1vw]">
                                        <h4>{relatedArticle.title}</h4>
                                        <div
                                            className="text-gray-700 line-clamp-3"
                                            dangerouslySetInnerHTML={{
                                                __html: relatedArticle.description || ""
                                            }}
                                        />
                                        <Link href={`/blog/${relatedArticle.id}`} className="text-primary">
                                            View More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </section>
        </>
    )
}
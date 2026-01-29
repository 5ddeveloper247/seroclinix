import FaqSection from "@/components/sections/career/FaqSection"
import CareerClient from "@/wrappers/CareerClient"

export default function career () {
    return (
        <>
            <CareerClient />
            <FaqSection />
        </>
    )
}
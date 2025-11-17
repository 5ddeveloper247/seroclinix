import HeroSection from "@/components/common/HeroSection";
import BookingForm from "@/components/sections/booking/BookingForm";

export default function Booking () {
    return (
        <>
            <HeroSection title="Emergency Care" bg="/images/banners/booking.png" />
            <BookingForm />
        </>
    )
}
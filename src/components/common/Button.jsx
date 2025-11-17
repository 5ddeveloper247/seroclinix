import Image from "next/image";

const Button = ({
    text,
    iconSrc,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`rounded-full py-2 px-5 lg:py-[.6vw] lg:px-[1.7vw] bg-primary text-white text-[14px] font-medium! lg:text-[.9vw] flex items-center justify-between gap-1 lg:gap-[.6vw] ${className}`}
        >
            {text}
            {iconSrc && (
                <div className="h-3 w-3 lg:w-[1vw] lg:h-[1vw] relative">
                    <Image src={iconSrc} alt="Icon" fill className="object-contain" priority />
                </div>
            )}
        </button>
    );
};

export default Button;

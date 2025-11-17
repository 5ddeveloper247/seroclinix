"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button.jsx";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Services", href: null, dropdown: [
            { label: "Vet Services", href: "/services", image: "/images/banners/vet.jpg" },
            { label: "Vet Near You", href: "/vet", image: "/images/banners/vet.jpg" },
            { label: "Certified Vet Techs", href: "/certifiedVet", image: "/images/banners/vet.jpg" },
        ]
    },
    { name: "Shop", href: "/shop" },
    { name: "Careers", href: "/career" },
    {
        name: "Join Us", href: null, dropdown: [
            { label: "Join Our Affiliate", href: "/affiliate", image: "/images/banners/affiliate.jpg" },
            { label: "Investors", href: "/investor", image: "/images/banners/investor.jpg" },
            { label: "Certified Vet Techs", href: "/certifiedVet", image: "/images/banners/vet.jpg" },
        ]
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function HeaderComponent() {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <Disclosure as="nav" className="bg-white sticky top-0 left-0 z-[9999] py-4 lg:py-0">
            <div className="wrapper flex items-center justify-between">
                {/* Logo */}
                <div className="flex shrink-0 items-center">
                    <div className="relative w-[140px] h-10 lg:w-[10vw] lg:h-[5vw]">
                        <Image src="/svg/logo.svg" alt="Company logo" fill className="object-contain" priority />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex sm:items-center gap-3">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        const hasDropdown = item.dropdown && item.dropdown.length > 0;

                        return (
                            <div
                                key={item.name}
                                className=""
                                onMouseEnter={() => hasDropdown && setOpenMenu(item.name)}
                                onMouseLeave={() => hasDropdown && setOpenMenu(null)}
                            >
                                {hasDropdown ? (
                                    <button
                                        type="button"
                                        className={classNames(
                                            isActive
                                                ? "text-primary border border-primary"
                                                : "text-black hover:bg-white/5 hover:text-primary",
                                            "flex items-center rounded-full px-4 py-2 lg:px-[1.7vw] lg:py-[.4vw] text-[14px] lg:text-[.9vw] font-medium"
                                        )}
                                    >
                                        {item.name}
                                        <ChevronDown className="size-[1.3vw]" />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            isActive
                                                ? "text-primary border border-primary"
                                                : "text-black hover:bg-white/5 hover:text-primary",
                                            "rounded-full px-4 py-2 lg:px-[1.7vw] lg:py-[.4vw] text-[14px] lg:text-[.9vw] font-medium"
                                        )}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {/* Dropdown Panel */}
                                {hasDropdown && openMenu === item.name && (
                                    <div className="absolute left-0 top-[72%] w-full bg-white py-10 transition duration-300 ease-in-out">
                                        <div className="wrapper grid grid-cols-3 gap-10">
                                            {item.dropdown.map((subItem, idx) => (
                                                <div key={idx} className="rounded-[1vw] p-[1vw] overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
                                                    {subItem.image ? (
                                                        <Link href={subItem.href}>
                                                            <div className="relative h-[14vw] w-full rounded-[1vw] overflow-hidden">
                                                                <Image src={subItem.image} className="object-cover" fill priority alt={subItem.label} />
                                                            </div>
                                                            <div className="h-[.3vw] w-full bg-primary my-4 lg:my-[1vw]"></div>
                                                            <h4 className="font-semibold text-primary">{subItem.label}</h4>
                                                        </Link>
                                                    ) : (
                                                        <Link href={subItem.href} className="text-gray-600 hover:text-primary block">{subItem.label}</Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-2 text-gray-300">
                    <button className="rounded-full p-2 lg:p-[.6vw] border border-[#00000011]">
                        <BellIcon className="h-5 w-5 lg:h-[1.4vw] lg:w-[1.4vw] text-footer" />
                    </button>

                    <Link href="/contact">
                        <Button text="Register" iconSrc="/svg/paw.svg" className="text-[12px]! lg:text-[.9vw]!" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2">
                            <Bars3Icon className="block size-7 group-data-[open]:hidden" />
                            <XMarkIcon className="hidden size-7 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <DisclosurePanel className="sm:hidden bg-white">
                <div className="space-y-1 px-4 pt-3 pb-4">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        const hasDropdown = item.dropdown && item.dropdown.length > 0;

                        if (hasDropdown) {
                            return (
                                <Disclosure key={item.name} as="div" className="space-y-1">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={classNames(
                                                    "flex items-center w-full text-left block rounded-md px-3 py-2 text-base font-medium",
                                                    isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                                                )}
                                            >
                                                {item.name}
                                                <ChevronDown className="size-5" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="pl-4 space-y-1">
                                                {item.dropdown.map((subItem, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={subItem.href}
                                                        className="block px-3 py-2 text-gray-600 hover:text-primary"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            );
                        }

                        return (
                            <DisclosureButton
                                key={item.name}
                                as={Link}
                                href={item.href}
                                className={classNames(
                                    "block rounded-md px-3 py-2 text-base font-medium",
                                    isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                                )}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {item.name}
                            </DisclosureButton>
                        );
                    })}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}

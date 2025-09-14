"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./theme-btn";

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Navbar */}

            <nav className="bg-background/50 backdrop-blur shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="text-2xl font-bold text-blue-600">Abhi✌Coder</div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <Link href="/" className="text-white-700 hover:text-blue-600">
                                Home
                            </Link>
                            <Link href="/about" className="text-white-700 hover:text-blue-600">
                                About
                            </Link>
                            <Link href="/blog" className="text-white-700 hover:text-blue-600">
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="text-white-700 hover:text-blue-600"
                            >
                                Contact
                            </Link>


                            <div className="flex items-center btn-sm">
                                <Link href="/signup"><Button className="mx-1" variant="outline">Sign_Up</Button></Link>
                                <Link href="/login"><Button className="mx-1" variant="outline">Log_In</Button></Link>
                                <ModeToggle />
                            </div>

                        </div>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <span className="mx-2">
                                <ModeToggle />
                            </span>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white-700 hover:text-blue-600 focus:outline-none"
                            >
                                {isOpen ? "✖" : "☰"}
                            </button>
                        </div>

                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-background/50 px-4 pb-4 space-y-2">
                        <Link
                            href="/"
                            className="block text-white-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block text-white-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/blog"
                            className="block text-white-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-white-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="flex items-center btn-sm">
                            <Link href="/signup"><Button className="mx-1" variant="outline">Sign_Up</Button></Link>
                            <Link href="/login"><Button className="mx-1" variant="outline">Log_In</Button></Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

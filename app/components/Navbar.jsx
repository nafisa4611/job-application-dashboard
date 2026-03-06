import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-[#F8F8FD] py-4 border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <div className="flex items-center gap-2">

                        <div className="w-8 h-8 bg-[#4640DE] text-white rounded-full flex items-center justify-center font-bold">
                            Q
                        </div>

                        <span className="text-[#25324B] text-xl font-bold tracking-tight">QuickHire</span>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex gap-8 text-[#515B6F] font-medium">
                        <Link href="/" className="hover:text-[#4640DE]">Find Jobs</Link>
                        <Link href="/companies" className="hover:text-[#4640DE]">Browse Companies</Link>
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-6">
                    <Link href="/login" className="text-[#4640DE] font-bold">Login</Link>
                    <div className="h-8 w-px bg-gray-200"></div> {/* Divider from screenshot */}
                    <Link href="/signup" className="bg-[#4640DE] text-white px-6 py-2 font-bold hover:bg-[#3b36bc] transition">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}
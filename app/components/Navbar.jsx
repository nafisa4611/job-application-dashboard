import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-[#F8F8FD] py-4 border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-10">
                    {/* Logo - Points to Home */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-[#4640DE] text-white rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                            Q
                        </div>
                        <span className="text-[#25324B] text-xl font-bold tracking-tight">QuickHire</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex gap-8 text-[#515B6F] font-medium">
                        <Link href="/jobs" className="hover:text-[#4640DE] transition-colors">Find Jobs</Link>
                        <Link href="/admin" className="hover:text-[#4640DE] transition-colors font-bold text-[#4640DE]/80">Admin Panel</Link>
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-6">
                    <Link href="/login" className="text-[#4640DE] font-bold hover:underline">Login</Link>
                    <div className="h-6 w-px bg-gray-200"></div>
                    <Link href="/signup" className="bg-[#4640DE] text-white px-6 py-2 font-bold rounded-sm hover:bg-[#3b36bc] transition-all shadow-md active:scale-95">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}
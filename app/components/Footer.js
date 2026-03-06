import Link from "next/link";
import { FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white pt-20 pb-10 px-6">

            <div className="max-w-6xl mx-auto">

                <div className="grid md:grid-cols-4 mb-6">

                    {/* Logo */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-[#4640DE] rounded-full flex items-center justify-center font-bold">
                                Q
                            </div>
                            <h2 className="text-xl font-bold">QuickHire</h2>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Great platform for the job seeker that passionate about startups.
                            Find your dream job easier.
                        </p>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="font-semibold mb-6">About</h4>

                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">Companies</Link></li>
                            <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white">Terms</Link></li>
                            <li><Link href="#" className="hover:text-white">Advice</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-6">Resources</h4>

                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">Help Docs</Link></li>
                            <li><Link href="#" className="hover:text-white">Guide</Link></li>
                            <li><Link href="#" className="hover:text-white">Updates</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>

                        <h4 className="font-semibold mb-6">Get job notifications</h4>

                        <p className="text-gray-400 text-sm mb-5">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>

                        <div className="flex gap-2">

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 p-2 text-sm rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />

                            <button className="bg-blue-600 px-6 py-3 text-sm font-semibold rounded-r-md hover:bg-blue-700 transition cursor-pointer">
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-center items-center gap-2">

                    <p className="text-xs text-gray-500">
                        2021 © QuickHire. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        {[FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter].map(
                            (Icon, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition cursor-pointer"
                                >
                                    <Icon size={14} />
                                </div>
                            )
                        )}
                    </div>

                </div>

            </div>

        </footer>
    );
}
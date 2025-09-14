import Head from 'next/head'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaGithub, FaBriefcase } from 'react-icons/fa'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4 mt-16">
                <div className="bg-background shadow-xl rounded-xl p-10 max-w-2xl w-full mt-10">
                    <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Get in Touch</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-white-700">Name:</label>
                            <input type="text" placeholder="Your Name" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">Email:</label>
                            <input type="email" placeholder="you@example.com" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">Message:</label>
                            <textarea rows="4" placeholder="Your Message..." className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-purple-600 text-background py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                            Send Message
                        </button>
                    </form>

                    {/* Social Icons */}
                    <div className="mt-8 text-center">
                        <p className="text-white-600 mb-4">Follow us on 👇</p>
                        <div className="flex justify-center space-x-6 text-purple-600 text-xl">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition">
                                <FaGithub />
                            </a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition">
                                <FaBriefcase />
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
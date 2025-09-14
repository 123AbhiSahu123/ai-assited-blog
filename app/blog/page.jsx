"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
    const blogs = [
        {
            id: 1,
            title: "Getting Started with Next.js",
            description:
                "A advance-friendly guide to building your Advance app with Next.js. It is framwork of React routing, components, and deployment.",
            date: "Sep 6, 2025",
            tag: "Next.js",
            link: "/Blog_Slug/",
        },
        {
            id: 2,
            title: "Tailwind CSS Tips & Tricks",
            description:
                "Boost your workflow with these essential Tailwind utilities. Discover hidden gems that make styling effortless.",
            date: "Sep 1, 2025",
            tag: "Tailwind CSS",
            link: "/Blog_Slug/",
        },
        {
            id: 3,
            title: "JavaScript Best Practices",
            description:
                "Clean code, performance hacks, and everything you need for JS mastery. Improve readability and maintainability.",
            date: "Aug 28, 2025",
            tag: "JavaScript",
            link: "/Blog_Slug/",
        },
        {
            id: 4,
            title: "Started with React.js",
            description:
                "A beginner-friendly guide to building your first app with React.js. Learn the basics of routing, components, and deployment.",
            date: "Aug 25, 2025",
            tag: "React.js",
            link: "/Blog_Slug/",
        },
        {
            id: 5,
            title: "Bootstrap Tips & Tricks",
            description:
                "Boost your workflow with Bootstrap because it is open source and free to use. It is good for Beginner for learning purpose.",
            date: "Aug 15, 2025",
            tag: "Boostrap",
            link: "/Blog_Slug/",
        },
        {
            id: 6,
            title: "Use of tool Git/GitHub",
            description:
                "Git Transfer code, to GitHub Account, and it is version control Git/Github mastery. Improve readability and maintainability.",
            date: "Aug 08, 2025",
            tag: "Git/Github",
            link: "/Blog_Slug/",
        },
    ];

    return (
        <section className="min-h-screen bg-background-50 dark:bg-background-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20 text-center text-white bg-background">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-extrabold"
                >
                    Welcome to Our Blog
                </motion.h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Insights, tutorials, and guides to help you grow as a developer 🚀
                </p>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative bg-backgroud dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden dark:boder-2"
                        >
                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500"></div>

                            <div className="p-6 flex flex-col justify-between h-full">
                                <div>
                                    {/* Date & Tag */}
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-sm text-black-500 dark:text-white-400">
                                            {blog.date}
                                        </p>
                                        <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
                                            {blog.tag}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl font-bold text-balck-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {blog.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-black-600 dark:text-white-300 mt-3 line-clamp-3">
                                        {blog.description}
                                    </p>
                                </div>

                                {/* Read More Button */}
                                <Link
                                    href={blog.link}
                                    className="mt-6 inline-block w-full text-center py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
                                >
                                    Blog with Abhi →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

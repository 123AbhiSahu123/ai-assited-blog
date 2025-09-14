"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { hover } from "framer-motion";

// Dummy blog data (same as your listing page)
const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "A advance-friendly guide to building your Advance app with Next.js. It is framework of React routing, components, and deployment.",
    date: "Sep 6, 2025",
    tag: "Next.js",
    link: "/Blog_Slug/nextjs-guide",
    content: `This is a detailed article about Next.js. 
    We cover how to set up Next.js, create routes, use components, 
    and deploy your app to production.`,
  },
  {
    id: 2,
    title: "Tailwind CSS Tips & Tricks",
    description:
      "Boost your workflow with these essential Tailwind utilities. Discover hidden gems that make styling effortless.",
    date: "Sep 1, 2025",
    tag: "Tailwind CSS",
    link: "/Blog_Slug/tailwind-tips",
    content: `Tailwind CSS makes styling super fast. 
    Learn advanced utilities, responsive tricks, and dark mode integration.`,
  },
  {
    id: 3,
    title: "JavaScript Best Practices",
    description:
      "Clean code, performance hacks, and everything you need for JS mastery. Improve readability and maintainability.",
    date: "Aug 28, 2025",
    tag: "JavaScript",
    link: "/Blog_Slug/js-best-practices",
    content: `Writing clean JavaScript improves maintainability. 
    We'll discuss ES6+, async/await, and performance optimization.`,
  },
  {
    id: 4,
    title: "Started with React.js",
    description:
      "A beginner-friendly guide to building your first app with React.js. Learn the basics of routing, components, and deployment.",
    date: "Aug 25, 2025",
    tag: "React.js",
    link: "/Blog_Slug/reactjs-guide",
    content: `React is a powerful library for building UI. 
    We'll explore components, props, hooks, and how to structure apps.`,
  },
  {
    id: 5,
    title: "Bootstrap Tips & Tricks",
    description:
      "Boost your workflow with Bootstrap because it is open source and free to use. It is good for beginners for learning purpose.",
    date: "Aug 15, 2025",
    tag: "Bootstrap",
    link: "/Blog_Slug/bootstrap-tips",
    content: `Bootstrap speeds up UI development. 
    Learn about grids, components, and customization.`,
  },
  {
    id: 6,
    title: "Use of tool Git/GitHub",
    description:
      "Git Transfer code to GitHub Account, and it is version control Git/Github mastery. Improve readability and maintainability.",
    date: "Aug 08, 2025",
    tag: "Git/Github",
    link: "/Blog_Slug/git-github-best-practices",
    content: `Git and GitHub help with version control. 
    Learn branching, merging, pull requests, and collaboration.`,
  },
];

export default function BlogSlugPage() {
  const params = useParams();
  const { slug } = params;

  // find blog by slug
  const blog = blogs.find((b) => b.link.endsWith(slug));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black-600 dark:text-white-300 hover:blue">
        <h2>No More Blogs found 😢</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        {/* Tag + Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
            {blog.tag}
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {blog.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {blog.description}
        </p>

        {/* Content */}
        <article className="prose dark:prose-invert max-w-none">
          <p>{blog.content}</p>
        </article>

        {/* Back button */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

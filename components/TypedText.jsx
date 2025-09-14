"use client"; // for Next.js 13+ app router

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const el = useRef(null);   // reference to the span element
  const typed = useRef(null); // keep track of typed instance

  useEffect(() => {
    const options = {
      strings: ["Hello👀Friends!", "Welcome to Quick Lerner for Beginner!", "Powered by Abhi_Coder! 🚀"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      // Destroy instance on unmounting to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} className="text-white-600 font-bold"></span>;
}

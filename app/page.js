//  "use client";
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import TypedText from "@/components/TypedText";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";



const slides = [
  {
    id: 1,
    title: "Achieve the extraordinary",
    description:
      "Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.",
    img: "/A.jpg", // put your image in public/
    buttonText: "Shop Microsoft 365",
    buttonLink: "https://www.microsoft.com/en-in/microsoft-365/",
  },
  {
    id: 2,
    title: "Meet Surface Laptop",
    description:
      "Unlock AI features like Live Captions and Cocreator with this exceptionally powerful laptop.",
    img: "/B.jpg", // put your image in public/
    buttonText: "Learn more",
    buttonLink:
      "https://www.microsoft.com/en-in/surface/devices/surface-laptop-7th-edition",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "/only 1 month",
    features: ["1 Project", "Basic Support", "5 GB Storage"],
    button: "Get Started",
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    features: ["6 Projects", "Priority Support", "50 GB Storage"],
    button: "Upgrade to Pro",
    highlight: true, // makes this plan stand out
  },
  {
    name: "Enterprise",
    price: "₹1999",
    period: "/month",
    features: [
      "Unlimited Projects",
      "Dedicated Support",
      "1 TB Storage",
    ],
    button: "Contact Sales",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky-top">
      <main className="w-full h-screen overflow-hidden bg-background-50">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full ${index === current ? "block" : "hidden"
                }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-background/40 flex items-center">
                <div className="max-w-2xl mx-10 lg:mx-20 text-white">
                  <h1 className="text-3xl">
                    <TypedText />
                  </h1>
                  <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="mb-6 text-lg">{slide.description}</p>
                  <a
                    href={slide.buttonLink}
                    target="_blank"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg text-white font-medium"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Controls */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 w-full flex justify-center gap-3">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </main>
      <div>
      </div>

      <main className="min-h-screen bg-background-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white-900">
            Choose your plan
          </h1>
          <p className="mt-4 text-lg text-white-600">
            Simple and transparent pricing. No hidden fees.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl shadow-lg p-8 flex flex-col justify-between ${plan.highlight
                ? "border-2 border-blue-600 bg-background scale-105"
                : "bg-background border-2 border-green-600 scale-100"
                }`}
            >
              <div>
                <h2 className="text-2xl font-semibold text-white-900 mb-4">
                  {plan.name}
                </h2>
                <p className="text-4xl font-bold text-white-900">
                  {plan.price}
                  <span className="text-lg font-normal text-white-500">
                    {plan.period}
                  </span>
                </p>

                <ul className="mt-6 space-y-3 text-white-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className={`w-full block text-center px-6 py-3 rounded-xl font-medium ${plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-green-200 text-white-800 hover:bg-green-300"
                    }`}
                >
                  {plan.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}







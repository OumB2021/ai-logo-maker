export const pricingPlans = [
  {
    title: "Free",
    price: "0 Credit",
    description:
      "Perfect for individuals who want to generate logos with basic design options.",
    features: [
      "Unlimited logo generation",
      "up to 10 minutes per request",
      "Basic design styles",
      "Standard resolution downloads",
      "No commercial usage rights",
      "Community support",
    ],
    buttonText: "Get Started",
    buttonColor: "bg-zinc-800 hover:bg-zinc-800", // Tailwind classes
    recommended: false,
  },
  {
    title: "Premium",
    price: "1 Credit",
    description:
      "Ideal for professionals and businesses looking for high-quality and fast logo generation.",
    features: [
      "Unlimited logo generation",
      "less than 10 seconds per request",
      "Exclusive premium design styles",
      "High-resolution downloads",
      "Full commercial usage rights",
      "Priority customer support",
      "Access to upcoming AI design tools",
    ],
    buttonText: "Get Started",
    buttonColor: "bg-purple-500 hover:bg-purple-600", // Tailwind classes
    recommended: true,
  },
];

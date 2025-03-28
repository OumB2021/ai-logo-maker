import { Inter } from "next/font/google";
import "./globals.css";
import NavRender from "@/components/navbar/nav-render";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Logo Creator – Generate Unique Logos Instantly",
  description:
    "Create stunning AI-generated logos effortlessly. Design, customize, and download professional logos in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter} antialiased bg-zinc-100 min-h-screen flex flex-col`}
        >
          <Provider children={children} />
          <Toaster position="bottom-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}

"use client";

import { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../_context/user-detail-context";
import Prompt from "@/constants/prompt";
import { Download, LayoutDashboard, Loader2 } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

function page() {
  const searchParams = useSearchParams();
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const [formData, setFormData] = useState({});
  const [logoGenerated, setLogoGenerated] = useState(false); // ✅ Prevent multiple API calls
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const search = searchParams.get("type");

  useEffect(() => {
    console.log("type: " + search);
    if (typeof window !== "undefined" && userDetails?.email) {
      const store = localStorage.getItem(`formData`);
      if (store) {
        try {
          setFormData(JSON.parse(store) || {});
        } catch (error) {
          console.error("Error parsing localStorage data:", error);
          setFormData({}); // Fallback to empty object
        }
      }
    }

    GenerateAILogo();
  }, [userDetails]);

  useEffect(() => {
    if (formData?.title && !logoGenerated) {
      GenerateAILogo();
      setLogoGenerated(true);
    }
  }, [formData]);

  const GenerateAILogo = async () => {
    if (!formData || !formData?.title) return;
    if (search !== "Free" && userDetails?.credits <= 0) {
      toast.error("You don't have enough credits");
      return;
    }
    setLoading(true);
    // @ts-ignore: Ignore TypeScript checking in JavaScript
    const PROMPT = Prompt.LOGO_PROMPT.replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoColor}", formData?.palette)
      .replace("{logoDesign}", formData?.design?.title)
      .replace("{logoPrompt}", formData?.design?.prompt);

    // Generate logo prompt from ai

    try {
      const response = await fetch("/api/ai-logo-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: PROMPT,
          email: userDetails?.email,
          title: formData?.title,
          desc: formData?.desc,
          type: search,
          userCredits: userDetails?.credits,
        }),
      });

      const data = await response.json();
      console.log("data: " + data.image);
      if (data.image) {
        setImage(data.image);
        toast.success("Image generated successfully");
      }
    } catch (error) {
      console.error("Error generating AI logo:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center mt-32 min-h-screen gap-4 w-full px-10">
        <Loader2 className="text-muted-foreground animate-spin" />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center mt-32 gap-4 w-full px-10 h-full justify-center">
      <div>
        {image ? (
          <div className="flex flex-col gap-y-10 items-center justify-center h-full p-10 border">
            <h1 className="text-3xl font-bold ">Logo Preview</h1>
            <Image
              src={image}
              alt="logo image"
              width={300}
              height={300}
              className="rounded-md"
            />
            <div className="flex items-center justify-center gap-2">
              <Link
                href="/"
                className="text-zinc-50 py-2 px-4 rounded-md bg-zinc-800 flex items-center gap-2 hover:bg-zinc-700"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Link>
              <Link href="/dashboard">
                <button className="text-zinc-50 py-2 px-4 rounded-md bg-purple-500 flex items-center gap-2 hover:bg-purple-400">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full items-center justify-center">
            <p className="text-muted-foreground text-lg">
              No image generated yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default page;

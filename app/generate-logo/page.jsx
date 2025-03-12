"use client";

import { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../_context/user-detail-context";
import Prompt from "@/constants/prompt";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

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
        }),
      });

      const data = await response.json();

      if (data.image) {
        setImage(data.image);
      }
    } catch (error) {
      console.error("Error generating AI logo:", error);
    } finally {
      setLoading(false);
    }

    // Generate logo image
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center mt-32 min-h-screen gap-4 w-full px-10">
        <Loader2 className="text-muted-foreground animate-spin" />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center mt-32 min-h-screen gap-4 w-full px-10">
      <div>
        {image ? (
          <Image src={image} alt="logo image" width={200} height={200} />
        ) : (
          <p className="text-zinc-500">No image generated yet.</p>
        )}
      </div>
    </div>
  );
}
export default page;

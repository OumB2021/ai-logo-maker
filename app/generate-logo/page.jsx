"use client";

import { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../_context/user-detail-context";
import Prompt from "@/constants/prompt";
import { Loader2 } from "lucide-react";
import Image from "next/image";

function page() {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const [formData, setFormData] = useState({});
  const [logoGenerated, setLogoGenerated] = useState(false); // ✅ Prevent multiple API calls
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  useEffect(() => {
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
      setLogoGenerated(true); // ✅ Prevents re-fetching
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

    const response = await fetch(`/api/ai-logo-model`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: PROMPT,
        email: userDetails?.email,
        title: formData.title,
        desc: formData.desc,
      }),
    });

    const data = await response.json();
    console.log("Prompt Generated:", data);
    setImage(data.image);
    setLoading(false);

    // Generate logo image
  };

  if (loading) {
    return <Loader2 className="text-muted-foreground animate-spin" />;
  }
  return (
    <div className="flex flex-col items-center mt-32 min-h-screen gap-4 w-full px-10">
      <div>
        <Image src={image} alt="logo image" width={200} height={200} />
      </div>
    </div>
  );
}
export default page;

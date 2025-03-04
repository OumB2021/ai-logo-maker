"use client";

import { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../_context/user-detail-context";
import Prompt from "@/constants/prompt";

function page() {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const [formData, setFormData] = useState({});
  console.log("logotitle", formData.title);
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

    genereAILogo();
  }, [userDetails]);

  useEffect(() => {
    if (formData?.title) {
      genereAILogo();
    }
  }, [formData]);

  const genereAILogo = () => {
    if (!formData) return;

    // @ts-ignore: Ignore TypeScript checking in JavaScript
    const PROMPT = Prompt.LOGO_PROMPT.replace("{logoTitle}", formData?.title)
      .replace("{logoDescription}", formData?.desc)
      .replace("{logoColor}", formData?.palette)
      .replace("{logoDesign}", formData?.design?.title)
      .replace("{logoPrompt}", formData?.design?.prompt);

    console.log("Generated AI Logo Prompt:", PROMPT);
  };

  return (
    <div className="flex flex-col items-center mt-32 min-h-screen gap-4 w-full px-10">
      page
    </div>
  );
}
export default page;

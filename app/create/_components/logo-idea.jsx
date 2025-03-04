"use client";

import Prompt from "@/constants/prompt";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

function LogoIdea({ onHandleInputChange, formData }) {
  const [ideas, setIdeas] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(formData?.idea || "");

  useEffect(() => {
    generateLogoDesignIdea();
  }, []);

  const generateLogoDesignIdea = async () => {
    setIsLoading(true);

    const PROMPT = Prompt.DESIGN_IDEA_PROMPT.replace(
      `{logoType}`,
      formData?.design?.title || "generic logo"
    )
      .replace(`{logoTitle}`, formData?.title || "brand")
      .replace(`{logoDesc}`, formData?.desc || "No description provided")
      .replace(`{logoPrompt}`, formData?.design?.prompt || "create and unique");

    try {
      const response = await fetch(`/api/ai-logo-ideas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: PROMPT }),
      });
      if (!response.ok) throw new Error("Failed to fetch logo ideas");

      const data = await response.json();

      setIdeas(data.ideas);
    } catch (error) {
      console.error("Error fetching logo ideas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelect = (idea) => {
    setSelectedOption(idea);
    onHandleInputChange(idea);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full rounded-xl p-4">
      {loading ? (
        <Loader2 className="animate-spin text-muted-foreground size-5" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {ideas?.logoIdeas.map((item, index) => (
            <button
              key={index}
              className={`p-3 border rounded-md transition ${
                selectedOption === item.idea
                  ? "border-zinc-600 bg-zinc-200 text-zinc-800"
                  : "border-zinc-300 hover:border-zinc-600"
              }`}
              onClick={() => handleSelect(item.idea)}
            >
              {item.idea}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LogoIdea;

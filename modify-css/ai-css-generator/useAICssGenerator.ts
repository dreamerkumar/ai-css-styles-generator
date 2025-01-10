import React, { useState } from "react";

export const useAICssGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [cssMode, setCssMode] = useState<"add" | "replace">("add");
  const [callInProgress, setCallInProgress] = useState(false);
  const generateCssFromPrompt = async () => {
    try {
      setCallInProgress(true);
      const res = await fetch("/api/get-css-style-for-a-box-from-ai-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (
        res.ok &&
        data.response &&
        data.response.length > 0 &&
        !data.response.includes("Invalid request")
      ) {
        setResponse(data.response);
        setError(""); // Clear any previous errors
        setCallInProgress(false);
        return data.response;
      }

      if (data.response.includes("Invalid request")) {
        setResponse("");
        console.warn(
          // warning since this falls into user error category
          data.response +
            " The error message happened for the following prompt: " +
            prompt
        );
        setError(data.response);
        setCallInProgress(false);
        return null;
      }

      if (data.response.length === 0) {
        setResponse("");
        const errorMessage =
          "The AI did not return any CSS. Please try again with a different prompt.";
        console.warn(
          // warning since this falls into user error category
          errorMessage +
            " The error message happened for the following prompt: " +
            prompt
        );
        setError(errorMessage);
        setCallInProgress(false);
        return null;
      }

      setResponse("");
      console.error(
        `useAICssGenerator: Error fetching AI response -> ${data.message}`
      );
      setError("Error fetching AI response");
      setCallInProgress(false);
      return null;
    } catch (e) {
      setResponse("");
      console.error(
        `useAICssGenerator: Error connecting to the server -> ${e}`
      );
      setError("Error connecting to the server");
      setCallInProgress(false);
      return null;
    }
  };

  return {
    prompt,
    setPrompt,
    response,
    error,
    generateCssFromPrompt,
    cssMode,
    setCssMode,
    callInProgress,
  };
};

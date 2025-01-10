import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import CODE from "./code";

const promptPrefix = `You are a CSS code generator. Your task is to convert the user's request into valid CSS properties, returning them exclusively as 'key: value;' pairs—one property per line. 
Do not include any other text, HTML, explanations, or classes in your response.

Example:
- If the user says "set background to red", your output should be:
background-color: red;

- If the user says "make text bold and blue", your output could be:
font-weight: bold;
color: blue;

Do not wrap your answer in code fences or add any commentary. Only return the CSS properties.

If the user's request is not clear, return the following error message:
"Invalid request: It's not clear from the user's request what CSS properties to set. Please provide a more specific request."
`;

// Make sure you have your OPENAI_API_KEY set in your environment
const openai = new OpenAI({
  apiKey: CODE,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "No prompt provided." });
  }

  try {
    // Using the newer chat completion API with GPT-3.5-turbo
    const completion = await openai.chat.completions.create({
      model: "o1-mini",
      messages: [{ role: "user", content: promptPrefix + prompt }],
      max_completion_tokens: 1000,
      temperature: 1,
    });

    const response = completion.choices[0].message.content?.trim();
    res.status(200).json({ response });
  } catch (error: any) {
    console.error("Error from OpenAI API:", error);
    res
      .status(500)
      .json({ message: "Error calling OpenAI API", error: error.message });
  }
}

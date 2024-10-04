import { create } from "zustand";
import OpenAI from "openai";

const extractQuotedStrings = (text) => {
  // Regular expression to match quoted strings (both single and double quotes)
  const regex = /['"](.*?)['"]/g;
  const matches = [];
  let match;

  // Find all matches in the text
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1]); // match[1] contains the content inside the quotes
  }

  return matches;
};

const useStore = create((set) => ({
  isOnboardingActive: false,
  setIsOnBoardingStatus: (isOnboardingStatus) => {
    set((state) => ({ isOnboardingActive: isOnboardingStatus }));
  },
  translate: async (text, lang) => {
    try {
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_4o_MINI_API_KEY,
      });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Your friendly "${lang}" translator assistant`,
          },
          {
            role: "user",
            content: `give me a single sentence of the translation of "${text}" in ${lang}`,
          },
        ],
      });
      console.log(extractQuotedStrings(completion.choices[0].message.content));
      return extractQuotedStrings(completion.choices[0].message.content)[0];
    } catch (err) {
      return "ERRR";
    }
  },
}));

export default useStore;

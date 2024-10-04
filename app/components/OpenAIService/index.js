import axios from "axios";

const API_KEY = "YOUR_OPENAI_API_KEY";

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
  },
});

export const getOpenAIResponse = async (prompt) => {
  const response = await openai.post("/completions", {
    model: "",
    prompt: prompt,
    max_tokens: 100,
  });
  return response.data;
};

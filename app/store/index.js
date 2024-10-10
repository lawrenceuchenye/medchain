import { create } from "zustand";
import OpenAI from "openai";

const useStore = create((set) => ({
  isOnboardingActive: false,
  lang: "english",
  isTranslating:false,
  atomicTranslateTriggerCounter:0,
  setIsTranslating:(status,_atomicTranslateTriggerCounter)=>{
    if(!status){
      set((state) => ({ isTranslating:(_atomicTranslateTriggerCounter<=0) ? status : state.isTranslating,atomicTranslateTriggerCounter:_atomicTranslateTriggerCounter-1 }))
    }
  },
  setLang: (lang) => {
    set((state) => ({ lang: lang,atomicTranslateTriggerCounter:1 }));
  },
  setIsOnBoardingStatus: (isOnboardingStatus) => {
    set((state) => ({ isOnboardingActive: isOnboardingStatus }));
  },
  translate: async (text, lang) => {
    try {
      const openai = new OpenAI({
        apiKey:
          "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",
        dangerouslyAllowBrowser: true,
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
            content: `translate strictly and only "${text}" to ${lang} only`,
          },
        ],
      });
      console.log(completion.choices[0].message.content);
      return JSON.parse(completion.choices[0].message.content);
    } catch (err) {
      return err;
    }
  },
}));

export default useStore;

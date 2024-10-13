import { create } from "zustand";
import OpenAI from "openai";

const useStore = create((set) => ({
  isOnboardingActive: false,
  lang: "english",
  isTranslating:false,
  atomicTranslateTriggerCounter:0,
  isLoggedIn:false,
  type:null,
  walletAddress:null,
  isRequestConnect:false,
  isRequestDES:false,
  isRequestDoc:false,
  setIsRequestDoc:(status)=>{
    set((state)=> ({ isRequestDoc:status}));
  },
  setIsRequestDES:(status)=>{
    set((state)=> ({ isRequestDES:status}));
  },
  setIsRequestConnect:(status)=>{
    set((state)=> ({ isRequestConnect:status}));
  },
  setWalletAddress:(addr)=>{
    set((state)=>({ walletAddress:addr}));
  },
  setIsLoggedInStatus:(status,type)=>{
    set((state)=>({ isLoggedIn:status,type:type}))
  },
  setIsTranslating:(status)=>{
   set((state)=>({isTranslating:status }))
  },
  setLang: (lang) => {
    set((state) => ({ lang: lang,atomicTranslateTriggerCounter:state.atomicTranslateTriggerCounter+1 }));
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
       return JSON.parse(completion.choices[0].message.content);
    } catch (err) {
      return err;
    }
  },
  respond: async (text, type) => {
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
            content: type == 0 ? `Your a friendly de-anxiety assistant` : type==1? "Your sharp medical expert" : "your a helpful answer bot",
          },
          {
            role: "user",
            content: `text`,
          },
        ],
      });
       return JSON.parse(completion.choices[0].message.content);
    } catch (err) {
      return err;
    }
  },
}));

export default useStore;

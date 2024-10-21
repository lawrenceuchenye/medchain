import { create } from "zustand";
import OpenAI from "openai";

const useStore = create((set) => ({
  isOnboardingActive: false,
  lang: "english",
  isTranslating: false,
  atomicTranslateTriggerCounter: 0,
  isLoggedIn: false,
  type: null,
  walletAddress: null,
  isRequestConnect: false,
  isRequestDES: false,
  isRequestDoc: false,
  isRequestAddFile: false,
  isRequestAddMed: false,
  isViewWalletProfile: false,
  userprofile: null,
  uploadedFiles: [],
  medwatchList: [],
  addToUploadedFiles: (file) => {
    set((state) => ({
      uploadedFiles: [...state.uploadedFiles, file],
    }));
  },
  removeFromUploadedFiles: (file_name) => {
    set((state) => ({
      uploadedFiles: state.uploadedFiles.filter(
        (file) => file.name != file_name
      ),
    }));
  },
  setUserprofile: (profile) => {
    set((state) => set({ userprofile: profile }));
  },
  addToMedWatchList: (medicine) => {
    set((state) => ({
      medwatchList: [...state.medwatchList, medicine],
    }));
  },
  removeFromMedWatchList: (medicine) => {
    set((state) => ({
      medwatchList: state.medwatchList.filter(
        (medicine_) => medicine_.name != medicine
      ),
    }));
  },
  setIsViewWalletProfile: (status) => {
    set((state) => ({ isViewWalletProfile: status }));
  },
  setIsRequestAddFile: (status) => {
    set((state) => ({ isRequestAddFile: status }));
  },
  setIsRequestAddMed: (status) => {
    set((state) => ({ isRequestAddMed: status }));
  },
  setIsRequestDoc: (status) => {
    set((state) => ({ isRequestDoc: status }));
  },
  setIsRequestDES: (status) => {
    set((state) => ({ isRequestDES: status }));
  },
  setIsRequestConnect: (status) => {
    set((state) => ({ isRequestConnect: status }));
  },
  setWalletAddress: (addr) => {
    set((state) => ({ walletAddress: addr }));
  },
  setIsLoggedInStatus: (status, type) => {
    set((state) => ({ isLoggedIn: status, type: type }));
  },
  setIsTranslating: (status) => {
    set((state) => ({ isTranslating: status }));
  },
  setLang: (lang) => {
    set((state) => ({
      lang: lang,
      atomicTranslateTriggerCounter: state.atomicTranslateTriggerCounter + 1,
    }));
  },
  setIsOnBoardingStatus: (isOnboardingStatus) => {
    set((state) => ({ isOnboardingActive: isOnboardingStatus }));
  },
  translate: async (text, lang) => {
    try {
      const openai = new OpenAI({
        apiKey: "",
        dangerouslyAllowBrowser: true,
      });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `Your friendly "${lang}" translator assistant`,
          },
          {
            role: "user",
            content: `translate only without adding any other text "${text}" to ${lang} remove any text "json" or backticks`,
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

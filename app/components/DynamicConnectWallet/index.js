import { DynamicWidget,useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { toast } from 'react-toastify';

import { useEffect } from "react";
import { useRouter } from 'next/router';
import useStore from "../../store";

const index = () => {
  const setIsOnBoardingStatus=useStore((state)=>state.setIsOnBoardingStatus);
  const setIsLoggedInStatus=useStore((state)=>state.setIsLoggedInStatus);
  const isOnboardingActive = useStore((state) => state.isOnboardingActive);
    
  const router = useRouter();

  const isLoggedIn=useIsLoggedIn();

  
  useEffect(()=>{
   if(isOnboardingActive){
    toast("Connected");
    setIsOnBoardingStatus(false);
    setIsLoggedInStatus(true);
    router.push("/dashboard/user/patient");
   }else{
   }
    
  },[isLoggedIn]);

  return (
    <DynamicWidget />
     
  );
};

export default index;

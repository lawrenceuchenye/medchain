import { useEffect } from "react";
import { IPFSService } from "@/lib/ipfs";

export default function TestPage() {
  useEffect(() => {
    IPFSService.uploadUserDetails();
  }, []);

  return <div>Test Page</div>;
}

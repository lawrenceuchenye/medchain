import { env } from "@/env.mjs";
import { DoctorService } from "@/lib/doctor";
import { useEffect } from "react";

export default function TestPage() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			DoctorService.findBySpecialty("pediatrician").then((result) => {
				console.log(result);
			});
		}
	}, []);

	return null;
}

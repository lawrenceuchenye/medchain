import { graphql } from "@/subgraph/gql";
import { SubgraphService } from "../subgraph";
import { BackendService } from "../backend";

export namespace DoctorService {
	export const findBySpecialty = async (specialty: string) => {
		const doctorsQueryDocument = graphql(`
			query Doctor($specialty: String!) {
    			doctorRegistereds(where: {
        			specialty: $specialty
    			}) { ipfsHash }
			}
		`);

		const queryResult = await SubgraphService.execute(doctorsQueryDocument, {
			specialty,
		});
		const usersResults = await BackendService.client.api.users
			.$get({
				query: { hashes: queryResult.doctorRegistereds.map((d) => d.ipfsHash) },
			})
			.then((res) => res.json());
		return usersResults;
	};
}

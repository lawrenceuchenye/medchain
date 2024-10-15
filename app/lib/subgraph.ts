import { env } from "@/env.mjs";
import type { TypedDocumentString } from "@/subgraph/graphql";

export namespace SubgraphService {
	export async function execute<TResult, TVariables>(
		query: TypedDocumentString<TResult, TVariables>,
		...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
	) {
		const response = await fetch(env.NEXT_PUBLIC_SUBGRAPH_QUERY_ENDPOINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/graphql-response+json",
			},
			body: JSON.stringify({
				query: document,
				variables,
			}),
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response.json() as TResult;
	}
}

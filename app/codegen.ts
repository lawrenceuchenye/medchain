import type { CodegenConfig } from "@graphql-codegen/cli";
// import { env } from "./env.mjs";

const config: CodegenConfig = {
	// schema: env.NEXT_PUBLIC_SUBGRAPH_QUERY_ENDPOINT,
	schema: "https://api.studio.thegraph.com/query/79612/medchain_001/v0.0.1",
	documents: ["./lib/**/*.{ts,tsx}"],
	generates: {
		"subgraph/": {
			preset: "client",
			config: {
				documentMode: "string",
			},
		},
		"./schema.graphql": {
			plugins: ["schema-ast"],
			config: {
				includeDirectives: true,
			},
		},
	},
};
export default config;

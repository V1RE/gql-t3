import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://graphql.prepr.io/b2364a78a8cce8595e54235d5c7646751608edc27814ce4fb2b0ed9f8f1a6f48",
  documents: "src/**/*.graphql",
  generates: {
    "src/types/prepr.d.ts": {
      plugins: ["typescript"],
      config: {
        declarationKind: "interface",
        typesPrefix: "IPrepr",
        useTypeImports: true,
      },
    },
    "src/types/gql.d.ts": {
      plugins: ["typescript-graphql-files-modules"],
    },
    "src/utils/prepr.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: '**/schema.graphql',
    generates: {
        './src/__generated__/index.ts': {
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
};
export default config;
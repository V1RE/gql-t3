
declare module '*/search.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const search: DocumentNode;

  export default defaultDocument;
}
    
import { mergeResolvers, fileLoader } from 'merge-graphql-schemas';
import path from 'path';

const resolvers = fileLoader(path.join(__dirname, '.'), { recursive: true });

export default mergeResolvers(resolvers);

import { defineConfig } from 'oxfmt';
import { oxfmt } from 'oxc-config-mantine';

export default defineConfig({
  ...oxfmt,
  ignorePatterns: [...oxfmt.ignorePatterns, 'src/routeTree.gen.ts'],
});

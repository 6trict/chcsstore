import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { existsSync } from 'node:fs';

// Always use relative paths - themes are served from R2 via Worker
// Each shop's theme is at: themes-live/{shopId}/{themeId}/
// The Worker serves these files, so relative paths just work
const base = process.env.VITE_THEME_BASE ?? '/';
const workspaceRoot = path.resolve(__dirname, '../..');
const workspaceAliasesAvailable = existsSync(path.join(workspaceRoot, 'packages/ui/src/index.ts'))
  && existsSync(path.join(workspaceRoot, 'packages/sdk/src/index.ts'));

export default defineConfig(() => ({
  plugins: [
    react(),
  ],
  base,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      ...(workspaceAliasesAvailable
        ? {
            '@shoppex/sdk': path.resolve(workspaceRoot, 'packages/sdk/src/index.ts'),
            '@shoppex/builder-runtime/react': path.resolve(workspaceRoot, 'packages/builder-runtime/src/react.tsx'),
            '@shoppex/builder-runtime': path.resolve(workspaceRoot, 'packages/builder-runtime/src/index.ts'),
            '@shoppex/ui/primitives': path.resolve(workspaceRoot, 'packages/ui/src/primitives/index.ts'),
            '@shoppex/ui/utils': path.resolve(workspaceRoot, 'packages/ui/src/utils/index.ts'),
            '@shoppex/ui': path.resolve(workspaceRoot, 'packages/ui/src/index.ts'),
          }
        : {}),
    },
  },
  server: {
    allowedHosts: true,
  },
}));

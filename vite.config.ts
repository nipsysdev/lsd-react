import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'node:url'
import { globSync } from 'glob'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig(({ mode }) => {
  const config = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }

  if (mode === 'lib') {
    return {
      ...config,
      plugins: [
        react(),
        tailwindcss(),
        libInjectCss(),
        dts({
          exclude: ['src/index.tsx', 'src/__fixtures__/**/*'],
          tsconfigPath: 'tsconfig.app.json',
        }),
      ],
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/main.ts'),
          formats: ['es'],
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
          // https://rollupjs.org/configuration-options/#input
          input: Object.fromEntries(
            globSync([
              'src/components/**/*.tsx',
              'src/style.css',
              'src/main.ts',
            ]).map((file) => {
              // This remove `src/` as well as the file extension from each
              // file, so e.g. src/nested/foo.js becomes nested/foo
              const entryName = path.relative(
                'src',
                file.slice(0, file.length - path.extname(file).length),
              )
              // This expands the relative paths to absolute paths, so e.g.
              // src/nested/foo becomes /project/src/nested/foo.js
              const entryUrl = fileURLToPath(new URL(file, import.meta.url))
              return [entryName, entryUrl]
            }),
          ),
          output: {
            entryFileNames: '[name].js',
            assetFileNames: 'assets/[name][extname]',
            globals: {
              react: 'React',
              'react-dom': 'React-dom',
              'react/jsx-runtime': 'react/jsx-runtime',
              tailwindcss: 'tailwindcss',
            },
          },
        },
      },
    }
  }

  return {
    ...config,
    plugins: [react(), tailwindcss()],
  }
})

import path from 'path';
import { defineConfig, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import styleImport from 'vite-plugin-style-import';
// import vue from '@vitejs/plugin-vue';
// import vue2 from '@vitejs/plugin-vue2';
// import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';
// import commonjs from '@rollup/plugin-commonjs';
// import cleanup from 'rollup-plugin-cleanup';
// import terser from '@rollup/plugin-terser';

// https://vitejs.dev/config/

/**
 * npm run build:test
 * npm run build:lib
 */
enum Mode {
  /**
   * 库模式，其他为不同环境下的demo模式
   */
  'LIB' = 'lib',
  'DEV' = 'dev',
  'TEST' = 'test',
  'UAT' = 'uat',
  'PROD' = 'prod',
}

interface ViteParams {
  mode: string;
  command: string;
  ssrBuild: boolean;
}

export default (viteParams: ViteParams) => {
  const { mode } = viteParams;
  // console.log(mode); // { mode: 'localhost', command: 'serve', ssrBuild: false }
  const config: UserConfigExport = {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      react(),
      // antd less 按需加载
      styleImport({
        libs: [{
          libraryName: 'antd',
          esModule: true,
          resolveStyle: name => `antd/es/${name}/style`,
        }],
      }),
      // vue(),
      // vue2(),
      // visualizer(),
      // commonjs(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@@': path.resolve(__dirname, './examples'),
      },
    },
    server: {
      host: true,
      port: 8964,
    },
    esbuild: {
      target: 'chrome65',
    },
    build: {
      target: 'es2015',
    },
  };

  if (mode === Mode.LIB) {
    // 生成类型文件
    const dstConfig = dts({
      outputDir: './dist-lib',
      insertTypesEntry: true,
      skipDiagnostics: true,
      rollupTypes: true,
      exclude: ['examples']
    });
    config.plugins?.push(dstConfig);

    // 构建打包
    if (config.build) {
      // 库模式打包
      config.build.lib = {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'lib-ts-template',
        fileName: 'lib-ts-template', // 打包后的dist里文件名称
      };
      // rollup配置
      config.build.rollupOptions = {
        plugins: [
          // cleanup({
          //   comments: 'none',
          // }),
          // terser({
          //   format: {
          //     comments: 'some',
          //   },
          // }),
        ],
        output: {
          inlineDynamicImports: true,
          dir: './dist-lib',
        },
        external: ['react', 'react-dom', 'react-router'],
      };
      // // commonjs配置
      // config.build.commonjsOptions = {
      //   transformMixedEsModules: true,
      // };
    }
    // config.optimizeDeps = {
    //   include: [
    //     path.resolve(__dirname, './dist/lib-ts-template.umd.js'),
    //   ],
    // };
  }

  return defineConfig(config);
}

/**
 * this env uses bitdev.react/react-env
 * to inspect its config @see https://bit.cloud/bitdev/react/react-env
 */
import { ReactEnv } from '@bitdev/react.react-env';
import { Compiler } from '@teambit/compiler';
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import { Pipeline } from '@teambit/builder';
import {
  TypescriptCompiler,
  resolveTypes,
  TypescriptTask,
} from '@teambit/typescript.typescript-compiler';
import { ESLintLinter, EslintTask } from '@teambit/defender.eslint-linter';
// import { JestTester, JestTask } from '@teambit/defender.jest-tester';
import { VitestTester, VitestTask } from '@teambit/vite.vitest-tester';
import { PrettierFormatter } from '@teambit/defender.prettier-formatter';
import { Tester } from '@teambit/tester';
import { Preview } from '@teambit/preview';
import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import hostDependencies from './preview/host-dependencies.js';

const require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = dirname(fileURLToPath(import.meta.url));

export class ReactMui extends ReactEnv {
  /**
   * name of the environment. used for friendly mentions across bit.
   */
  name = 'react-mui';

  /**
   * create an instance of a Bit Component Compiler.
   * Learn more: https://bit.dev/reference/compiling/set-up-compiler
   */
  compiler(): EnvHandler<Compiler> {
    return TypescriptCompiler.from({
      tsconfig: this.tsconfigPath,
      esm: true,
      types: resolveTypes(__dirname, [this.tsTypesPath]),
    });
  }

  /**
   * create an instance of the Bit Tester plugin.
   * learn more: https://bit.dev/reference/testing/set-up-tester
   */
  tester(): EnvHandler<Tester> {
    return VitestTester.from({
      config: require.resolve('./config/vitest.config.mjs'),
    });
    // return JestTester.from({
    //   config: require.resolve('./config/jest.config.cjs'),
    // });
  }

  /**
   * add a Bit Linter plugin.
   * learn more: https://bit.dev/reference/testing/set-up-tester
   */
  linter() {
    return ESLintLinter.from({
      tsconfig: this.tsconfigPath,
      configPath: this.eslintConfigPath,
      pluginsPath: __dirname,
      extensions: this.eslintExtensions,
    });
  }

  /**
   * create a formatter instance.
   * learn more: https://bit.dev/reference/formatting/set-up-formatter
   */
  formatter() {
    return PrettierFormatter.from({
      configPath: require.resolve('./config/prettier.config.js'),
    });
  }

  /**
   * create an instance for Bit Preview.
   */
  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      // docsTemplate: require.resolve('./preview/docs.js'),
      mounter: require.resolve('./preview/mounter.js'),
      hostDependencies,
    });
  }

  /**
   * Add your build pipeline.
   * learn more: https://bit.dev/docs/react-env/build-pipelines
   */
  build() {
    return Pipeline.from([
      TypescriptTask.from({
        tsconfig: this.tsconfigPath,
        types: resolveTypes(__dirname, [this.tsTypesPath]),
      }),
      EslintTask.from({
        tsconfig: this.tsconfigPath,
        configPath: this.eslintConfigPath,
        pluginsPath: __dirname,
        extensions: this.eslintExtensions,
      }),
      VitestTask.from({
        config: require.resolve('./config/vitest.config.mjs'),
      }),
      // JestTask.from({
      //   config: require.resolve('./config/jest.config.cjs'),
      // }),
    ]);
  }

  protected tsconfigPath = require.resolve('./config/tsconfig.json');

  protected tsTypesPath = './types';

  protected jestConfigPath = require.resolve('./config/jest.config.cjs');

  protected eslintConfigPath = require.resolve('./config/eslintrc.cjs');

  protected eslintExtensions = ['.ts', '.tsx', '.js', '.jsx', '.mjs'];
}

export default new ReactMui();

import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-personal-website',
  distFolder: './dist/angular-personal-website', // output directory of your Angular build artifacts
  outDir: './docs', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
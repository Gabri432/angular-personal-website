import { ScullyConfig } from '@scullyio/scully';


const blogTopics = [
    '/angular-personal-website/blogs/stories',
    '/angular-personal-website/blogs/education',
    '/angular-personal-website/blogs/gaming',
    '/angular-personal-website/blogs/music',
    '/angular-personal-website/blogs/sport',
    '/angular-personal-website/blogs/programming'
];

const blogPostTitles = [
    '/angular-personal-website/blog/education/university-or-not',
    '/angular-personal-website/blog/stories/this-is-my-story',
    '/angular-personal-website/blog/stories/italy-is-not-for-young-people',
    '/angular-personal-website/blog/programming/why-i-love-angular',
    '/angular-personal-website/blog/sport/italian-basketball-team-journey'
];

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-personal-website',
  distFolder: './dist/angular-personal-website', // output directory of your Angular build artifacts
  outDir: './docs', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
  extraRoutes: [
    '/angular-personal-website/',
    '/angular-personal-website/blogs',
    '/angular-personal-website/projects',
    ...blogTopics,
    ...blogPostTitles
  ],
};


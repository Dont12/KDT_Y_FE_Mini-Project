import { MetadataRoute } from 'next';

// 배포시 sitemap 객체별 url 우선순위 설정하기

const sitemap = (): MetadataRoute.Sitemap => [
  // {
  //   url: 'https://acme.com',
  //   priority: 1,
  // },
  // {
  //   url: 'https://acme.com/about',
  //   priority: 0.8,
  // },
  // {
  //   url: 'https://acme.com/blog',
  //   priority: 0.5,
  // },
];

export default sitemap;

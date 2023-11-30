import { MetadataRoute } from 'next';

// 배포시 sitemap 객체별 url 우선순위 설정하기

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://www.stayinn.site/',
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: 'https://www.stayinn.site/products',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://www.stayinn.site/detail',
    changeFrequency: 'weekly',
    priority: 0.5,
  },
];

export default sitemap;

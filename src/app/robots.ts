import { MetadataRoute } from 'next';

// 배포시 sitemap value 수정하기

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: '/private/',
  },
  sitemap: 'https://www.stayinn.site//sitemap.xml',
});

export default robots;

import { MetadataRoute } from 'next';

// 배포시 sitemap value 수정하기

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: 'https//.../sitemap.xml',
});

export default robots;

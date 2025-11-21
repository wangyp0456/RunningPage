interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Wangyp.Running',
  siteUrl: 'https://wangyp0456.github.io/RunningPage',
  logo: 'https://i0.hdslb.com/bfs/openplatform/ee39045ebe54e4cbe83638beca4e60f5a085c088.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Thinks',
      url: 'https://github.com/yihong0618/running_page',
    },
  ],
};

export default data;

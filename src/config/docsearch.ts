import type { DocSearchClientOptions } from '@astrojs/starlight-docsearch';

export default {
  appId: 'WXY73KCYSE',
  apiKey: 'ed07b8adaee9b4d3cf212418f926bf4f',
  indexName: 'docs_zyhgov_cn_wxy73kcyse_articles',
  getMissingResultsUrl({ query }) {
    return `https://github.com/zyhgov/issues/new?title=Search%20for%20"${query}"`;
  },
} satisfies DocSearchClientOptions;
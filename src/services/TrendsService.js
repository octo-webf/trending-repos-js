export class TrendsService {
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  fetchAll() {
    return this.httpClient
      .get("https://github-trending-api.now.sh/")
      .then(trends => trends.map(this.mapApiTrendToTrend));
  }

  mapApiTrendToTrend(trend) {
    return {
      author: {
        avatar: trend.avatar,
        name: trend.author
      },
      repository: {
        description: trend.description,
        name: trend.name,
        stars: trend.stars,
        url: trend.url
      }
    };
  }
}

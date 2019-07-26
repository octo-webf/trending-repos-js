import { TrendsService } from './TrendsService'

describe("TrendsService", () => {
  describe("fetchAll", () => {
    it("should return the trends", async () => {
      // Given
      const url = "https://github-trending-api.now.sh/";
      const httpClient = {
        get: jest.fn().mockResolvedValue([
          {
            author: "John Doe",
            avatar: "http://my-avatar.com/1",
            name: "React",
            url: "http://repo.com/1",
            description: "React description",
            stars: 12
          },
          {
            author: "Sara Walker",
            avatar: "http://my-avatar.com/2",
            name: "Typescript",
            url: "http://repo.com/2",
            description: "Typescript description",
            stars: 120
          }
        ])
      };
      const trendsService = new TrendsService(httpClient);

      // When
      const response = await trendsService.fetchAll();

      // Then
      expect(httpClient.get).toHaveBeenCalledTimes(1);
      expect(httpClient.get).toHaveBeenNthCalledWith(1, url);
      expect(response).toEqual([
        {
          author: {
            name: "John Doe",
            avatar: "http://my-avatar.com/1"
          },
          repository: {
            name: "React",
            url: "http://repo.com/1",
            description: "React description",
            stars: 12
          }
        },
        {
          author: {
            name: "Sara Walker",
            avatar: "http://my-avatar.com/2"
          },
          repository: {
            name: "Typescript",
            url: "http://repo.com/2",
            description: "Typescript description",
            stars: 120
          }
        }
      ]);
    });
  });
});

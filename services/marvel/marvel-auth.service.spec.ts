import { generateAuthenticationString } from "dh-marvel/services/marvel/marvel-auth.service";

describe("MarvelAuthService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2020, 3, 1));
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  describe("when generating an authentication string", () => {
    it("should return a valid query string", async () => {
      const authenticationString = generateAuthenticationString();
      expect(authenticationString).toBe(
        "ts=1585710000000&apikey=PUBLIC_KEY&hash=bdb8918d04a09818152b6e24dfcfef5b"
      );
    });
  });
});

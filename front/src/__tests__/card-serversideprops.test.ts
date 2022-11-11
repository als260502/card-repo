import Presentation from "../pages/card/[id]";
import { getServerSideProps } from "../pages/card/[id]";
import jestFetchMock from "jest-fetch-mock";
import { ParsedUrlQuery } from "querystring";
import { GetServerSidePropsContext } from "next";


jestFetchMock.enableMocks();

describe("getServerSideProps", () => {
  beforeEach(() => {
    jestFetchMock.resetMocks();
  });

  it("should get initial props user and bio from backend", async () => {

    const user = {
      name: "Andre",
      github: "https://github.com/als260502",
      likedin: "https://linkedin/in/andre-souza-dev",
      instagram: "https://www.instagram.com/velhoo.np"
    }
    const { bio } = { bio: '123' }
    jestFetchMock.mockResponseOnce(JSON.stringify(user));
    jestFetchMock.mockResponseOnce(JSON.stringify({ bio: '123' }));


    const ctx = {
      query: { id: "fjdks" } as ParsedUrlQuery
    };

    const response = await getServerSideProps(ctx as GetServerSidePropsContext);
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          bio,
          user,
        }
      })
    );
  });

});
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import fetchMock from "jest-fetch-mock";

import Generate from "../pages/generate";

const mockedRouterPush = jest.fn();

jest.mock("next/router", () => {
  return {
    useRouter: () => ({
      push: mockedRouterPush,
    }),
  };
});

describe("Inputs", () => {
  it("Should have a input to name, linkedin-Url and github-url", () => {
    render(<Generate />);

    const nameField = screen.getByPlaceholderText("Input your name");
    const linkedinUrlField = screen.getByPlaceholderText(
      "https://linkdein.com/in/andre-souza-dev"
    );
    const githubUrlField = screen.getByPlaceholderText(
      "https://github.com/als260502"
    );

    expect(nameField).toBeInTheDocument();
    expect(linkedinUrlField).toBeInTheDocument();
    expect(githubUrlField).toBeInTheDocument();
  });

  it("Should be able to redirect to qrcode page", async () => {
    render(<Generate />);

    const nameField = screen.getByPlaceholderText("Input your name");
    const linkedinField = screen.getByPlaceholderText(
      "https://linkdein.com/in/andre-souza-dev"
    );
    const githubField = screen.getByPlaceholderText(
      "https://github.com/als260502"
    );

    const buttonElement = screen.getByText("Generate Image");
    const name = "André Souza";

    fireEvent.change(nameField, {
      target: { value: name },
    });
    fireEvent.change(linkedinField, {
      target: { value: "https://linkdein.com/in/andre-souza-dev" },
    });
    fireEvent.change(githubField, {
      target: { value: "https://github.com/als260502" },
    });

    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: "André Souza",
        githubUrl: "https://github.com/als260502",
        linkedinUrl: "https://linkdein.com/in/andre-souza-dev",
      })
    );

    await userEvent.click(buttonElement);

    expect(mockedRouterPush).toBeCalled();
  });
});

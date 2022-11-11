import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Presentation from "../pages/card/[id]";

const mockedRouterPush = jest.fn();

jest.mock("next/router", () => {
  return {
    useRouter: () => ({
      push: mockedRouterPush,
    }),
  };
});

describe("Presentation Page", () => {
  it("Should load without crash", async () => {
    render(
      <Presentation
        bio=""
        user={{ name: "", github: "", linkedin: "", instagram: "" }}
      />
    );

    expect(
      screen.getByRole("heading", { name: "My history" })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Linkedin" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Linkedin" })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Github" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Github" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Instagram" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Instagram" })
    ).toBeInTheDocument();
  });
});

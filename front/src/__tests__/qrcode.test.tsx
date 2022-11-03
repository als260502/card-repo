import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QRCode from "../pages/qrcode";

jest.mock("next/router", () => {
  return {
    useRouter: () => ({
      query: { name: "André" },
    }),
  };
});

jest.mock("downloadjs", () => {
  return {
    download: () => jest.fn(),
  };
});

describe("QRCode Page", () => {
  it("renders without crashing", () => {
    render(<QRCode />);

    expect(
      screen.getByRole("heading", { name: "Scan Me" })
    ).toBeInTheDocument();
  });
});

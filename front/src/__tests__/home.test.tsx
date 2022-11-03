import { render, screen } from "@testing-library/react";
import Generate from "../pages/generate";

describe("Generate Page", () => {
  it("renders without crashing", () => {
    render(<Generate />);
    expect(
      screen.getByRole("heading", { name: "QR Code Image Generator" })
    ).toBeInTheDocument();
  });
});

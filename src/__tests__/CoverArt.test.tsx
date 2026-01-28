import { render } from "@testing-library/react";
import CoverArt from "../components/CoverArt";
import { describe, it, expect } from "vitest";

describe("CoverArt", () => {
  it("renders correctly with a cover URL", () => {
    const { asFragment } = render(<CoverArt coverUrl="https://example.com/cover.jpg" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly without a cover URL (placeholder)", () => {
    const { asFragment } = render(<CoverArt />);
    expect(asFragment()).toMatchSnapshot();
  });
});

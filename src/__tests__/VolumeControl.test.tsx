import { render } from "@testing-library/react";
import VolumeControls from "../components/VolumeControls";
import { describe, it, expect, vi } from "vitest";

describe("VolumeControls", () => {
  const mockOnVolumeChange = vi.fn();

  it("renders correctly at 0 volume (muted)", () => {
    const { asFragment } = render(
      <VolumeControls volume={0} onVolumeChange={mockOnVolumeChange} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly at low volume (< 50)", () => {
    const { asFragment } = render(
      <VolumeControls volume={30} onVolumeChange={mockOnVolumeChange} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly at high volume (>= 50)", () => {
    const { asFragment } = render(
      <VolumeControls volume={80} onVolumeChange={mockOnVolumeChange} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

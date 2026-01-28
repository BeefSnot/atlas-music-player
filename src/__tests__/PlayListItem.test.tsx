import { render } from "@testing-library/react";
import PlayListItem from "../components/PlayListItem";
import { describe, it, expect, vi } from "vitest";

describe("PlayListItem", () => {
  const mockOnClick = vi.fn();
  const defaultProps = {
    title: "Test Song",
    artist: "Test Artist",
    duration: 300, // 5:00
    onClick: mockOnClick,
  };

  it("renders correctly when not current", () => {
    const { asFragment } = render(
      <PlayListItem {...defaultProps} current={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly when current (selected)", () => {
    const { asFragment } = render(
      <PlayListItem {...defaultProps} current={true} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";
import SongTitle from "../components/SongTitle";
import { describe, it, expect } from "vitest";

describe("SongTitle", () => {
  it("renders correctly with title and artist", () => {
    const { asFragment } = render(<SongTitle title="Test Song" artist="Test Artist" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

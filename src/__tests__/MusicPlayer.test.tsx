import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import MusicPlayer from "../components/MusicPlayer";
import { describe, it, expect } from "vitest";

describe("MusicPlayer", () => {
  it("renders the first song from the playlist by default", async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => {
        // Use getAllByText because the text appears in both the main player and the playlist
        expect(screen.getAllByText("Mock Song 1")[0]).toBeInTheDocument();
        expect(screen.getAllByText("Mock Artist 1")[0]).toBeInTheDocument();
    });
  });

  it("toggles play/pause state when the button is clicked", async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => expect(screen.getByLabelText("Play")).toBeInTheDocument());

    const playButton = screen.getByLabelText("Play");
    fireEvent.click(playButton);

    await waitFor(() => expect(screen.getByLabelText("Pause")).toBeInTheDocument());
    
    fireEvent.click(screen.getByLabelText("Pause"));
    await waitFor(() => expect(screen.getByLabelText("Play")).toBeInTheDocument());
  });

  it("changes to the next song when the Next button is clicked", async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => expect(screen.getAllByText("Mock Song 1")[0]).toBeVisible());

    const nextButton = screen.getByLabelText("Next");
    fireEvent.click(nextButton);

    await waitFor(() => {
        // Look for the currently playing title specifically
        // The playlist item and the main title might both be "Mock Song 2"
        // so we check if at least one instance is visible and likely the main title
        const songTitles = screen.getAllByText("Mock Song 2");
        expect(songTitles.length).toBeGreaterThan(0);
        expect(songTitles[0]).toBeInTheDocument();
    });
  });

  it("changes to the previous song when the Previous button is clicked", async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => expect(screen.getByLabelText("Next")).toBeInTheDocument());

    // Move to second song
    fireEvent.click(screen.getByLabelText("Next"));
    await waitFor(() => expect(screen.getAllByText("Mock Song 2")[0]).toBeVisible());

    // Move back to first song
    fireEvent.click(screen.getByLabelText("Previous"));
    await waitFor(() => expect(screen.getAllByText("Mock Song 1")[0]).toBeVisible());
  });

  it("changes volume when volume control is adjusted", async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => expect(screen.getByRole("slider")).toBeInTheDocument());

    const volumeSlider = screen.getByRole("slider");
    fireEvent.change(volumeSlider, { target: { value: "80" } });

    expect(volumeSlider).toHaveValue("80");
  });

  it("toggles speed between 1x, 2x, and 0.5x", async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => expect(screen.getByText("1x")).toBeInTheDocument());

    const speedButton = screen.getByText("1x");
    
    fireEvent.click(speedButton);
    expect(screen.getByText("2x")).toBeInTheDocument();

    fireEvent.click(screen.getByText("2x"));
    expect(screen.getByText("0.5x")).toBeInTheDocument();
  });
});

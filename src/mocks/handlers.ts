import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:5173/api/v1/playlist", () => {
    return HttpResponse.json([
      {
        id: "1",
        title: "Mock Song 1",
        artist: "Mock Artist 1",
        genre: "Mock Genre",
        duration: 120,
        cover: "mock-cover-url",
      },
      {
        id: "2",
        title: "Mock Song 2",
        artist: "Mock Artist 2",
        genre: "Mock Genre",
        duration: 180,
        cover: "mock-cover-url-2",
      },
    ]);
  }),
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json([
      {
        id: "1",
        title: "Mock Song 1",
        artist: "Mock Artist 1",
        genre: "Mock Genre",
        duration: 120,
        cover: "mock-cover-url",
      },
      {
        id: "2",
        title: "Mock Song 2",
        artist: "Mock Artist 2",
        genre: "Mock Genre",
        duration: 180,
        cover: "mock-cover-url-2",
      },
    ]);
  }),
  http.get("/api/v1/songs/:id", ({ params }) => {
    return HttpResponse.json({
        id: params.id,
        title: `Mock Song ${params.id}`,
        artist: `Mock Artist ${params.id}`,
        genre: "Mock Genre",
        duration: 120,
        cover: "mock-cover-url",
        song: "mock-audio-url"
    });
  })
];

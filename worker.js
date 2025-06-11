addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const videoUrl = url.searchParams.get('url');

  if (!videoUrl || !videoUrl.includes('youtube.com/watch')) {
    return new Response(JSON.stringify({ error: 'Invalid or missing YouTube URL' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Dummy response with a full range of mock qualities
  const response = {
    title: "Sample YouTube Video",
    lengthSeconds: 245,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videos: [
      { itag: 18, quality: "360p", container: "mp4", url: "https://example.com/video-360p.mp4" },
      { itag: 22, quality: "720p", container: "mp4", url: "https://example.com/video-720p.mp4" },
      { itag: 37, quality: "1080p", container: "mp4", url: "https://example.com/video-1080p.mp4" },
      { itag: 38, quality: "3072p", container: "mp4", url: "https://example.com/video-3072p.mp4" },
      { itag: 133, quality: "240p", container: "mp4", url: "https://example.com/video-240p.mp4" },
      { itag: 134, quality: "360p", container: "mp4", url: "https://example.com/video-360p-alt.mp4" },
      { itag: 135, quality: "480p", container: "mp4", url: "https://example.com/video-480p.mp4" },
      { itag: 136, quality: "720p", container: "mp4", url: "https://example.com/video-720p-alt.mp4" },
      { itag: 137, quality: "1080p", container: "mp4", url: "https://example.com/video-1080p-alt.mp4" },
      { itag: 160, quality: "144p", container: "mp4", url: "https://example.com/video-144p.mp4" }
    ]
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

const YOUTUBE_API_KEY = import.meta.env.YOUTUBE_API_KEY;

export async function getPlaylistVideos(playlistId: string, maxResults = 6) {
  if (!YOUTUBE_API_KEY) {
    console.warn('YOUTUBE_API_KEY not set');
    return [];
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return [];
    }

    return data.items.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnails: item.snippet.thumbnails,
      publishedAt: item.snippet.publishedAt,
      position: item.snippet.position,
    }));
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    return [];
  }
}

export async function getLatestVideo(playlistId: string) {
  const videos = await getPlaylistVideos(playlistId, 1);
  return videos.length > 0 ? videos[0] : null;
}

export async function getYoutubeShorts(channelHandle: string, maxResults = 6) {
  if (!YOUTUBE_API_KEY) {
    console.warn('YOUTUBE_API_KEY not set');
    return [];
  }

  try {
    const channelName = channelHandle.replace('@', '');
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${channelName}&key=${YOUTUBE_API_KEY}`;
    const channelResponse = await fetch(channelUrl);
    const channelData = await channelResponse.json();

    if (!channelData.items || channelData.items.length === 0) {
      return [];
    }

    const channelId = channelData.items[0].id;

    const shortsUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&channelId=${channelId}&videoDuration=short&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(shortsUrl);
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return [];
    }

    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnails: item.snippet.thumbnails,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (error) {
    console.error('Error fetching YouTube shorts:', error);
    return [];
  }
}

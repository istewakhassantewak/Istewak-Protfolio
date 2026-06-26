export function getProjectThumbnail(liveUrl, repoName) {
  const live = liveUrl?.replace(/\/$/, '');
  if (live && live.startsWith('http') && !live.includes('github.com')) {
    return `https://api.microlink.io/?url=${encodeURIComponent(live)}&screenshot=true&meta=false&embed=screenshot.url`;
  }
  if (repoName) {
    return `https://opengraph.githubassets.com/1/istewakhassantewak/${repoName}`;
  }
  return '/istee.png';
}

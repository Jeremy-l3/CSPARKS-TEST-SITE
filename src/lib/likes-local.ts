const STORAGE_KEY = 'csparks_likes_v1';

function readLikes(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function writeLikes(slugs: Set<string>) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(slugs)));
}

export function getInitialLikes(): string[] {
  return Array.from(readLikes());
}

export function toggleLike(slug: string): string[] {
  const likes = readLikes();
  if (likes.has(slug)) {
    likes.delete(slug);
  } else {
    likes.add(slug);
  }
  writeLikes(likes);
  return Array.from(likes);
}

export function isLiked(slug: string): boolean {
  return readLikes().has(slug);
}

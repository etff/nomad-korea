const BOOKMARKS_STORAGE_KEY = 'nomadkorea_bookmarks';

/**
 * Get all bookmarked city IDs from localStorage
 */
export function getBookmarkedCities(): string[] {
  if (typeof window === 'undefined') return [];

  const bookmarksJson = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
  if (!bookmarksJson) return [];

  try {
    return JSON.parse(bookmarksJson) as string[];
  } catch {
    return [];
  }
}

/**
 * Check if a city is bookmarked
 */
export function isBookmarked(cityId: string): boolean {
  const bookmarks = getBookmarkedCities();
  return bookmarks.includes(cityId);
}

/**
 * Toggle bookmark status for a city
 * Returns the new bookmark status
 */
export function toggleBookmark(cityId: string): boolean {
  if (typeof window === 'undefined') return false;

  const bookmarks = getBookmarkedCities();
  const index = bookmarks.indexOf(cityId);

  if (index > -1) {
    // Remove bookmark
    bookmarks.splice(index, 1);
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
    return false;
  } else {
    // Add bookmark
    bookmarks.push(cityId);
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
    return true;
  }
}

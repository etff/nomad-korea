const REACTIONS_STORAGE_KEY = 'nomadkorea_reactions';

export type ReactionType = 'like' | 'dislike' | null;

interface CityReactions {
  [cityId: string]: ReactionType;
}

/**
 * Get all user reactions from localStorage
 */
export function getUserReactions(): CityReactions {
  if (typeof window === 'undefined') return {};

  const reactionsJson = localStorage.getItem(REACTIONS_STORAGE_KEY);
  if (!reactionsJson) return {};

  try {
    return JSON.parse(reactionsJson) as CityReactions;
  } catch {
    return {};
  }
}

/**
 * Get user's reaction for a specific city
 */
export function getUserReaction(cityId: string): ReactionType {
  const reactions = getUserReactions();
  return reactions[cityId] || null;
}

/**
 * Toggle like for a city
 * Returns the new reaction state
 */
export function toggleLike(cityId: string): ReactionType {
  if (typeof window === 'undefined') return null;

  const reactions = getUserReactions();
  const currentReaction = reactions[cityId];

  if (currentReaction === 'like') {
    // Remove like
    delete reactions[cityId];
    localStorage.setItem(REACTIONS_STORAGE_KEY, JSON.stringify(reactions));
    return null;
  } else {
    // Add like (remove dislike if exists)
    reactions[cityId] = 'like';
    localStorage.setItem(REACTIONS_STORAGE_KEY, JSON.stringify(reactions));
    return 'like';
  }
}

/**
 * Toggle dislike for a city
 * Returns the new reaction state
 */
export function toggleDislike(cityId: string): ReactionType {
  if (typeof window === 'undefined') return null;

  const reactions = getUserReactions();
  const currentReaction = reactions[cityId];

  if (currentReaction === 'dislike') {
    // Remove dislike
    delete reactions[cityId];
    localStorage.setItem(REACTIONS_STORAGE_KEY, JSON.stringify(reactions));
    return null;
  } else {
    // Add dislike (remove like if exists)
    reactions[cityId] = 'dislike';
    localStorage.setItem(REACTIONS_STORAGE_KEY, JSON.stringify(reactions));
    return 'dislike';
  }
}

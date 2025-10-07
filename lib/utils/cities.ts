import { City } from '@/lib/types';
import { mockCities } from '@/lib/mock-data/cities';
import { mockReviews } from '@/lib/mock-data/reviews';

/**
 * Get all cities
 */
export function getAllCities(): City[] {
  return mockCities;
}

/**
 * Get a city by its slug
 */
export function getCityBySlug(slug: string): City | undefined {
  return mockCities.find(city => city.slug === slug);
}

/**
 * Get reviews for a specific city
 */
export function getCityReviews(cityId: string) {
  return mockReviews.filter(review => review.cityId === cityId);
}

/**
 * Get similar cities based on region or cost of living
 */
export function getSimilarCities(cityId: string, limit: number = 3): City[] {
  const currentCity = mockCities.find(city => city.id === cityId);

  if (!currentCity) {
    return [];
  }

  // Find cities in the same region or with similar cost of living
  const similarCities = mockCities
    .filter(city => city.id !== cityId)
    .map(city => {
      let score = 0;

      // Same region gets high priority
      if (city.region === currentCity.region) {
        score += 10;
      }

      // Similar cost of living (within 30%)
      const costDiff = Math.abs(city.costOfLiving - currentCity.costOfLiving);
      const costRatio = costDiff / currentCity.costOfLiving;
      if (costRatio < 0.3) {
        score += 5;
      }

      // Similar rating
      const ratingDiff = Math.abs(city.rating - currentCity.rating);
      if (ratingDiff < 0.5) {
        score += 3;
      }

      return { city, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.city);

  return similarCities;
}

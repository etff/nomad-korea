// User Types
export interface User {
  id: string;
  email: string;
  password: string; // In real app, this would be hashed
  name: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
}

// City Types
export interface RecommendedPlace {
  name: string;
  type: 'cafe' | 'coworking' | 'library';
  description: string;
  address?: string;
}

export interface Transportation {
  subway: boolean;
  bus: string;
  airport: string;
  walkability: number; // 1-5 scale
}

export interface Climate {
  spring: string;
  summer: string;
  fall: string;
  winter: string;
  rainySeasonStart?: string;
  rainySeasonEnd?: string;
}

export interface City {
  id: string;
  name: string;
  slug: string;
  region: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  costOfLiving: number; // Monthly cost in KRW
  internetSpeed: number; // Mbps
  temperature: {
    summer: number;
    winter: number;
  };
  tags: string[];
  highlights: string[];
  recommendedPlaces?: RecommendedPlace[];
  transportation?: Transportation;
  climate?: Climate;
  likes: number; // Total likes count
  dislikes: number; // Total dislikes count
}

// Review Types
export interface Review {
  id: string;
  cityId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  tags: string[];
  helpful: number;
  createdAt: string;
}

// Meetup Types
export interface Meetup {
  id: string;
  title: string;
  cityId: string;
  organizerId: string;
  description: string;
  date: string;
  location: string;
  attendeeIds: string[];
  maxAttendees: number;
  tags: string[];
  createdAt: string;
}

// Auth Types
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

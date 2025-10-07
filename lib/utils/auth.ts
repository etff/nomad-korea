import { User } from '@/lib/types';

const AUTH_STORAGE_KEY = 'nomadkorea_current_user';
const USERS_STORAGE_KEY = 'nomadkorea_users';

/**
 * Get the currently logged-in user from localStorage
 */
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;

  const userJson = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!userJson) return null;

  try {
    return JSON.parse(userJson) as User;
  } catch {
    return null;
  }
}

/**
 * Set the current user in localStorage
 */
export function setCurrentUser(user: User): void {
  if (typeof window === 'undefined') return;

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

/**
 * Logout the current user
 */
export function logout(): void {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(AUTH_STORAGE_KEY);
}

/**
 * Check if a user is authenticated
 */
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

/**
 * Get all registered users from localStorage
 */
export function getRegisteredUsers(): User[] {
  if (typeof window === 'undefined') return [];

  const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
  if (!usersJson) return [];

  try {
    return JSON.parse(usersJson) as User[];
  } catch {
    return [];
  }
}

/**
 * Save all registered users to localStorage
 */
export function saveRegisteredUsers(users: User[]): void {
  if (typeof window === 'undefined') return;

  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

/**
 * Find a user by email
 */
export function findUserByEmail(email: string): User | undefined {
  const users = getRegisteredUsers();
  return users.find(user => user.email === email);
}

/**
 * Register a new user
 */
export function registerUser(email: string, password: string, name: string): User {
  const users = getRegisteredUsers();

  const newUser: User = {
    id: `user-${Date.now()}`,
    email,
    password,
    name,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveRegisteredUsers(users);

  return newUser;
}

/**
 * Validate user credentials
 */
export function validateCredentials(email: string, password: string): User | null {
  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return null;
  }

  return user;
}

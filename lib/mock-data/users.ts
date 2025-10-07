import { User } from '@/lib/types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'test@nomadkorea.com',
    password: 'password123',
    name: '김노마드',
    avatar: '👨‍💻',
    bio: '디지털 노마드 5년차, 한국의 아름다운 도시들을 여행하며 일합니다.',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'user-2',
    email: 'sarah@example.com',
    password: 'password123',
    name: '사라',
    avatar: '👩‍💼',
    bio: '프리랜서 디자이너. 제주도를 사랑합니다.',
    createdAt: '2024-01-15T00:00:00Z',
  },
  {
    id: 'user-3',
    email: 'john@example.com',
    password: 'password123',
    name: '존',
    avatar: '👨‍🎨',
    bio: '개발자이자 여행 블로거.',
    createdAt: '2024-02-01T00:00:00Z',
  },
  {
    id: 'user-4',
    email: 'minjee@example.com',
    password: 'password123',
    name: '민지',
    avatar: '👩‍🎨',
    bio: '부산에서 활동하는 프론트엔드 개발자.',
    createdAt: '2024-02-15T00:00:00Z',
  },
  {
    id: 'user-5',
    email: 'alex@example.com',
    password: 'password123',
    name: '알렉스',
    avatar: '👨‍🚀',
    bio: '스타트업 창업자. 전국 곳곳을 누비며 일합니다.',
    createdAt: '2024-03-01T00:00:00Z',
  },
];

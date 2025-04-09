import { ReactNode } from 'react';

export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: string;
  size: string;
  weight: string;
  images: string[];
  description: string;
  personality: string;
  status: 'available' | 'adopted' | 'pending';
  flagged: boolean;
  location: string;
}

export interface LostDog {
  id: string;
  name: string;
  breed: string;
  images: string[];
  status: 'lost' | 'found';
  lastSeenLocation: {
    city: string;
    state: string;
  };
}

export interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface BackgroundWrapperProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
} 
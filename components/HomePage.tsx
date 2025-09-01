
import React from 'react';
import { UserType, Activity } from '../types';
import Header from './Header';
import ActivityCard from './ActivityCard';

interface HomePageProps {
  userType: UserType;
  onLogout: () => void;
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Tree Plantation Drive',
    description: 'Our members actively participated in a tree plantation drive to promote a greener environment and combat climate change.',
    imageUrl: 'https://picsum.photos/seed/trees/400/300',
  },
  {
    id: 2,
    title: 'Blood Donation Camp',
    description: 'We organized a successful blood donation camp in collaboration with the local hospital, contributing to saving lives in our community.',
    imageUrl: 'https://picsum.photos/seed/blood/400/300',
  },
  {
    id: 3,
    title: 'Food Distribution for Needy',
    description: 'Distributing nutritious meals to the underprivileged, ensuring no one goes to bed hungry. A small step towards a bigger change.',
    imageUrl: 'https://picsum.photos/seed/food/400/300',
  },
  {
    id: 4,
    title: 'Educational Workshop for Children',
    description: 'Conducted a workshop for underprivileged children, providing them with basic stationery and interactive learning sessions.',
    imageUrl: 'https://picsum.photos/seed/education/400/300',
  },
  {
    id: 5,
    title: 'Cleanliness Drive',
    description: 'A community-wide cleanliness drive to promote hygiene and create a cleaner, healthier living space for everyone.',
    imageUrl: 'https://picsum.photos/seed/clean/400/300',
  },
  {
    id: 6,
    title: 'Health Check-up Camp',
    description: 'Organized a free health check-up camp for the elderly, providing essential medical consultations and medicines.',
    imageUrl: 'https://picsum.photos/seed/health/400/300',
  },
];

const HomePage: React.FC<HomePageProps> = ({ userType, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header onLogout={onLogout} />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-slate-200">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
                Welcome, {userType}!
            </h1>
            <p className="text-slate-600 mt-2">
                Here's a glimpse of the impactful activities we are proud of.
            </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Our Social Service Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;

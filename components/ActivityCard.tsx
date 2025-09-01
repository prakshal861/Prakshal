
import React from 'react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-slate-100">
      <img
        src={activity.imageUrl}
        alt={activity.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
        <p className="text-gray-600 text-base">{activity.description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;

// src/components/UserProfileCard/UserProfileCard.tsx
import React from 'react';
import type { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="p-4 border rounded shadow-md flex flex-col items-center text-center">
      {user.avatarUrl && (
        <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full mb-4" />
      )}
      <h2 className="text-xl font-semibold">{user.name}</h2>
      {showEmail && <p className="text-gray-600">{user.email}</p>}
      {showRole && <p className="text-gray-500">{user.role}</p>}
      {onEdit && (
      <button
        onClick={() => onEdit(user.id)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Edit Profile
      </button>
    )}
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

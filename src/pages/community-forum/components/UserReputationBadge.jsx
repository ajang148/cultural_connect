import React from 'react';
import Icon from '../../../components/AppIcon';

const UserReputationBadge = ({ badge }) => {
  const getBadgeColor = (level) => {
    const colors = {
      bronze: '#CD7F32',
      silver: '#C0C0C0',
      gold: '#FFD700',
      platinum: '#E5E4E2'
    };
    return colors?.[level] || '#6B7280';
  };

  return (
    <div 
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
      style={{ 
        backgroundColor: `${getBadgeColor(badge?.level)}20`,
        color: getBadgeColor(badge?.level)
      }}
    >
      <Icon name={badge?.icon} size={14} />
      <span>{badge?.name}</span>
    </div>
  );
};

export default UserReputationBadge;
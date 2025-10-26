import { useState } from 'react';
import NicheSelector from '../NicheSelector';
import type { Niche } from '@shared/schema';

export default function NicheSelectorExample() {
  const mockNiches: Niche[] = [
    { id: '1', name: 'Lifestyle', icon: '🌟' },
    { id: '2', name: 'Fitness', icon: '💪' },
    { id: '3', name: 'Tech', icon: '💻' },
    { id: '4', name: 'Beauty', icon: '💄' },
    { id: '5', name: 'Finance', icon: '💰' },
    { id: '6', name: 'Food', icon: '🍔' },
    { id: '7', name: 'Travel', icon: '✈️' },
    { id: '8', name: 'Gaming', icon: '🎮' },
  ];

  const [selected, setSelected] = useState<string[]>(['1', '3']);

  const handleToggle = (nicheId: string) => {
    setSelected(prev => 
      prev.includes(nicheId)
        ? prev.filter(id => id !== nicheId)
        : [...prev, nicheId]
    );
  };

  return (
    <NicheSelector 
      niches={mockNiches}
      selectedNiches={selected}
      onToggleNiche={handleToggle}
    />
  );
}

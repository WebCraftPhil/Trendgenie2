import IdeaCard from '../IdeaCard';
import type { ContentIdea } from '@shared/schema';

export default function IdeaCardExample() {
  const mockIdea: ContentIdea = {
    id: '1',
    trendTitle: 'Morning Routine Transformations',
    trendSummary: 'Creators are sharing their dramatic before/after morning routines, showing how small changes lead to big productivity gains.',
    ideas: [
      'Show your chaotic 6AM vs your optimized 5AM routine',
      '30-day morning routine challenge with daily updates',
      'Common morning mistakes that kill productivity'
    ],
    hooks: [
      'I wasted 3 years waking up wrong... here\'s what changed everything',
      'This 5-minute morning habit made me 10x more productive'
    ],
    performance: 'High',
    niche: 'Productivity',
    generatedAt: new Date()
  };

  return (
    <div className="max-w-2xl">
      <IdeaCard 
        idea={mockIdea} 
        onSave={(id) => console.log('Save', id)}
        onRegenerate={(id) => console.log('Regenerate', id)}
      />
    </div>
  );
}

import React from 'react';
import { Code2, CheckCircle2, Timer, ArrowRight } from 'lucide-react';

function ChallengesPage() {
  const challenges = [
    {
      id: 1,
      title: 'Two Sum Problem',
      difficulty: 'Easy',
      completedDate: '2024-03-15',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      category: 'Arrays & Hashing',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.'
    },
    {
      id: 2,
      title: 'LRU Cache Implementation',
      difficulty: 'Medium',
      completedDate: '2024-03-10',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(n)',
      category: 'Design',
      description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.'
    },
    {
      id: 3,
      title: 'Merge K Sorted Lists',
      difficulty: 'Hard',
      completedDate: '2024-03-05',
      timeComplexity: 'O(N log k)',
      spaceComplexity: 'O(k)',
      category: 'Heap',
      description: 'Merge k sorted linked lists and return it as one sorted list.'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'hard': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-white/70 bg-white/5 border-white/10';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Programming Challenges</h1>
        <p className="text-white/70">
          My solutions to various coding problems and algorithmic challenges
        </p>
      </div>

      <div className="space-y-6">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-semibold">{challenge.title}</h2>
                  <span className={`px-2 py-1 rounded text-sm border ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span className="bg-white/5 border border-white/10 px-2 py-1 rounded">
                    {challenge.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Completed {challenge.completedDate}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white/80 mb-4">{challenge.description}</p>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Timer className="w-4 h-4 text-white" />
                <span className="text-white/70">Time: </span>
                <span>{challenge.timeComplexity}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Timer className="w-4 h-4 text-white" />
                <span className="text-white/70">Space: </span>
                <span>{challenge.spaceComplexity}</span>
              </div>
            </div>

            <a href="#" className="inline-flex items-center text-white hover:text-white/80 transition-colors">
              View Solution <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChallengesPage;
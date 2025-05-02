// import React, { useState } from 'react';
// import { Calendar, Clock, ArrowRight, Code2, Award, BookOpen, X } from 'lucide-react';

// type Tab = 'blog' | 'challenges';
// type Challenge = {
//   id: number;
//   title: string;
//   difficulty: 'Easy' | 'Medium' | 'Hard';
//   completedDate: string;
//   timeComplexity: string;
//   spaceComplexity: string;
//   category: string;
//   description: string;
//   solution?: {
//     code: string;
//     explanation: string;
//   };
// };

// function BlogPage() {
//   const [activeTab, setActiveTab] = useState<Tab>('blog');
//   const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

//   const posts = [
//     {
//       id: 1,
//       title: 'Building Scalable Microservices with Node.js',
//       excerpt: 'Learn how to design and implement scalable microservices architecture using Node.js and Docker.',
//       date: '2024-03-15',
//       readTime: '8 min read',
//       category: 'Architecture',
//       image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80'
//     },
//     {
//       id: 2,
//       title: 'Advanced React Patterns for Clean Code',
//       excerpt: 'Explore advanced React patterns that will help you write cleaner, more maintainable code.',
//       date: '2024-03-10',
//       readTime: '6 min read',
//       category: 'React',
//       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80'
//     },
//     {
//       id: 3,
//       title: 'Optimizing Frontend Performance',
//       excerpt: "Tips and techniques for improving your web application's performance and user experience.",
//       date: '2024-03-05',
//       readTime: '5 min read',
//       category: 'Performance',
//       image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80'
//     }
//   ];

//   const challenges: Challenge[] = [
//     {
//       id: 1,
//       title: 'Two Sum Problem',
//       difficulty: 'Easy',
//       completedDate: '2024-03-15',
//       timeComplexity: 'O(n)',
//       spaceComplexity: 'O(n)',
//       category: 'Arrays & Hashing',
//       description: 'Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.',
//       solution: {
//         code: `function twoSum(nums: number[], target: number): number[] {
//   const map = new Map<number, number>();
  
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement)!, i];
//     }
//     map.set(nums[i], i);
//   }
  
//   return []; // No solution found
// }

// // Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1]`,
//         explanation: `This solution uses a hash map to achieve O(n) time complexity:

// 1. We iterate through the array once
// 2. For each number, we calculate its complement (target - current number)
// 3. If the complement exists in our map, we've found a solution
// 4. Otherwise, we add the current number and its index to the map
// 5. The space complexity is O(n) as we store at most n elements in the map`
//       }
//     },
//     {
//       id: 2,
//       title: 'LRU Cache Implementation',
//       difficulty: 'Medium',
//       completedDate: '2024-03-10',
//       timeComplexity: 'O(1)',
//       spaceComplexity: 'O(n)',
//       category: 'Design',
//       description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.',
//       solution: {
//         code: `class LRUCache {
//   private capacity: number;
//   private cache: Map<number, number>;

//   constructor(capacity: number) {
//     this.capacity = capacity;
//     this.cache = new Map();
//   }

//   get(key: number): number {
//     if (!this.cache.has(key)) return -1;
    
//     // Update access order by deleting and re-adding
//     const value = this.cache.get(key)!;
//     this.cache.delete(key);
//     this.cache.set(key, value);
    
//     return value;
//   }

//   put(key: number, value: number): void {
//     if (this.cache.has(key)) {
//       this.cache.delete(key);
//     } else if (this.cache.size >= this.capacity) {
//       // Remove least recently used item (first item in map)
//       const firstKey = this.cache.keys().next().value;
//       this.cache.delete(firstKey);
//     }
    
//     this.cache.set(key, value);
//   }
// }

// // Example usage:
// const cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1));  // returns 1
// cache.put(3, 3);           // evicts key 2
// console.log(cache.get(2));  // returns -1 (not found)`,
//         explanation: `This LRU Cache implementation uses a Map to maintain insertion order:

// 1. We use Map's built-in insertion order property
// 2. get() operation:
//    - Returns -1 if key doesn't exist
//    - Updates access order by removing and re-adding the item
// 3. put() operation:
//    - Removes existing key if present
//    - Evicts least recently used item if at capacity
//    - Adds new key-value pair
// 4. All operations are O(1) time complexity
// 5. Space complexity is O(n) where n is the cache capacity`
//       }
//     },
//     {
//       id: 3,
//       title: 'Merge K Sorted Lists',
//       difficulty: 'Hard',
//       completedDate: '2024-03-05',
//       timeComplexity: 'O(N log k)',
//       spaceComplexity: 'O(k)',
//       category: 'Heap',
//       description: 'Merge k sorted linked lists and return it as one sorted list.',
//       solution: {
//         code: `class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//   if (!lists.length) return null;
  
//   return mergeLists(lists, 0, lists.length - 1);
// }

// function mergeLists(lists: Array<ListNode | null>, start: number, end: number): ListNode | null {
//   if (start === end) return lists[start];
  
//   const mid = Math.floor((start + end) / 2);
//   const left = mergeLists(lists, start, mid);
//   const right = mergeLists(lists, mid + 1, end);
  
//   return mergeTwoLists(left, right);
// }

// function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   const dummy = new ListNode(0);
//   let current = dummy;
  
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       current.next = l1;
//       l1 = l1.next;
//     } else {
//       current.next = l2;
//       l2 = l2.next;
//     }
//     current = current.next;
//   }
  
//   current.next = l1 || l2;
//   return dummy.next;
// }

// // Example usage:
// const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// const list3 = new ListNode(2, new ListNode(6));

// console.log(mergeKLists([list1, list2, list3]));`,
//         explanation: `This solution uses a divide-and-conquer approach:

// 1. We recursively divide the lists into pairs
// 2. For each pair, we merge them using mergeTwoLists
// 3. The process continues until all lists are merged
// 4. Time complexity is O(N log k) where:
//    - N is total number of nodes
//    - k is number of linked lists
// 5. Space complexity is O(k) for the recursive call stack
// 6. mergeTwoLists uses a dummy node pattern for cleaner code`
//       }
//     }
//   ];

//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty.toLowerCase()) {
//       case 'easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
//       case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
//       case 'hard': return 'text-red-400 bg-red-400/10 border-red-400/20';
//       default: return 'text-white/70 bg-white/5 border-white/10';
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 md:p-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-4">Blog & Challenges</h1>
//         <div className="flex space-x-4">
//           <button
//             onClick={() => setActiveTab('blog')}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
//               activeTab === 'blog'
//                 ? 'bg-white/20 text-white'
//                 : 'text-white/70 hover:text-white hover:bg-white/10'
//             }`}
//           >
//             <BookOpen className="w-5 h-5" />
//             Blog Posts
//           </button>
//           <button
//             onClick={() => setActiveTab('challenges')}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
//               activeTab === 'challenges'
//                 ? 'bg-white/20 text-white'
//                 : 'text-white/70 hover:text-white hover:bg-white/10'
//             }`}
//           >
//             <Code2 className="w-5 h-5" />
//             Coding Challenges
//           </button>
//         </div>
//       </div>

//       {activeTab === 'blog' && (
//         <div className="space-y-8">
//           {posts.map((post) => (
//             <article key={post.id} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10">
//               <div className="md:flex">
//                 <div className="md:w-1/3">
//                   <img 
//                     src={post.image}
//                     alt={post.title}
//                     className="h-48 md:h-full w-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6 md:w-2/3">
//                   <div className="flex items-center gap-4 text-sm text-white/70 mb-3">
//                     <span className="bg-white/5 border border-white/10 px-2 py-1 rounded">
//                       {post.category}
//                     </span>
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       {post.date}
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock className="w-4 h-4" />
//                       {post.readTime}
//                     </div>
//                   </div>
//                   <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
//                   <p className="text-white/80 mb-4">{post.excerpt}</p>
//                   <a href="#" className="inline-flex items-center text-white hover:text-white/80 transition-colors">
//                     Read More <ArrowRight className="w-4 h-4 ml-2" />
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       )}

//       {activeTab === 'challenges' && !selectedChallenge && (
//         <div className="space-y-6">
//           {challenges.map((challenge) => (
//             <div key={challenge.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <div className="flex items-center gap-3 mb-2">
//                     <Code2 className="w-5 h-5 text-white" />
//                     <h2 className="text-xl font-semibold">{challenge.title}</h2>
//                     <span className={`px-2 py-1 rounded text-sm border ${getDifficultyColor(challenge.difficulty)}`}>
//                       {challenge.difficulty}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-4 text-sm text-white/70">
//                     <span className="bg-white/5 border border-white/10 px-2 py-1 rounded">
//                       {challenge.category}
//                     </span>
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       Completed {challenge.completedDate}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <p className="text-white/80 mb-4">{challenge.description}</p>

//               <div className="flex flex-wrap gap-4 mb-4">
//                 <div className="flex items-center gap-2 text-sm">
//                   <Clock className="w-4 h-4 text-white" />
//                   <span className="text-white/70">Time: </span>
//                   <span>{challenge.timeComplexity}</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <Clock className="w-4 h-4 text-white" />
//                   <span className="text-white/70">Space: </span>
//                   <span>{challenge.spaceComplexity}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setSelectedChallenge(challenge)}
//                 className="inline-flex items-center text-white hover:text-white/80 transition-colors"
//               >
//                 View Solution <ArrowRight className="w-4 h-4 ml-2" />
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {activeTab === 'challenges' && selectedChallenge && (
//         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setSelectedChallenge(null)}
//                 className="p-2 hover:bg-white/10 rounded-lg transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <h2 className="text-xl font-semibold">{selectedChallenge.title}</h2>
//               <span className={`px-2 py-1 rounded text-sm border ${getDifficultyColor(selectedChallenge.difficulty)}`}>
//                 {selectedChallenge.difficulty}
//               </span>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div>
//               <h3 className="text-lg font-medium mb-2">Problem Description</h3>
//               <p className="text-white/80">{selectedChallenge.description}</p>
//             </div>

//             <div>
//               <h3 className="text-lg font-medium mb-2">Solution</h3>
//               <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
//                 <code className="text-sm font-mono text-white/90">
//                   {selectedChallenge.solution?.code}
//                 </code>
//               </pre>
//             </div>

//             <div>
//               <h3 className="text-lg font-medium mb-2">Explanation</h3>
//               <p className="text-white/80 whitespace-pre-wrap">{selectedChallenge.solution?.explanation}</p>
//             </div>

//             <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4 text-white" />
//                 <span className="text-white/70">Time Complexity: </span>
//                 <span>{selectedChallenge.timeComplexity}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4 text-white" />
//                 <span className="text-white/70">Space Complexity: </span>
//                 <span>{selectedChallenge.spaceComplexity}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BlogPage;


import {Problem} from "../types"
import { Code , Eye , Github} from 'lucide-react';

const problems: Problem[] = [
    {
      id: 1,
      title: 'Find the First Node of Loop in Linked List',
      difficulty: 'Easy',
      description: 'Given the head of a singly linked list, return the first node of the loop if a loop exists; otherwise, return null.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Find_the_first_node_of_loop_in_linked_list',
    },
    {
      id: 2,
      title: 'Palindrome Sentence',
      difficulty: 'Easy',
      description: 'Given a string s, check if it is a palindrome sentence or not. A palindrome sentence reads the same backward as forward, ignoring spaces and punctuation.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Palindrome_Sentence',
    },
    {
      id: 3,
      title: 'Search in a Row-Column Sorted Matrix',
      difficulty: 'Medium',
      description: 'Given a 2D matrix where each row and column is sorted in increasing order, determine whether a given number x is present in the matrix.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Search_in_a_Row_Column_sorted_matrix',
    },
    {
      id: 4,
      title: 'Search in a Row-Wise Sorted Matrix',
      difficulty: 'Medium',
      description: 'Given a row-wise sorted 2D matrix and an integer x, determine whether x is present in the matrix.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Search_in_a_row_wise_sorted_matrix',
    },
    {
      id: 5,
      title: 'Search in a Sorted Matrix',
      difficulty: 'Medium',
      description: 'Given a strictly sorted 2D matrix (each row is sorted in increasing order, and the first element of each row is greater than the last element of the previous row), determine whether a given number x is present in the matrix.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Search_in_a_sorted_Matrix',
    },
    {
      id: 6,
      title: 'SheetCodeforces',
      difficulty: 'Medium',
      description: 'A collection of Codeforces problems categorized by topics and difficulty levels for practice.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/SheetCodeforces',
    },
    {
      id: 7,
      title: 'Anagram',
      difficulty: 'Easy',
      description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/anagram',
    },
    {
      id: 8,
      title: 'Apply Operations to an Array',
      difficulty: 'Easy',
      description: 'Given an array of non-negative integers, apply a series of operations to modify the array as per the problem statement.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/apply_Operations_to_an_Array',
    },
    {
      id: 9,
      title: 'Count and Say',
      difficulty: 'Medium',
      description: 'Given an integer n, generate the nth term of the count-and-say sequence.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/count_and_Say',
    },
    {
        id: 9,
        title: "divide Array Into Equal Pairs",
        difficulty: "Easy",
        description: "Given an array of integers, check if the array can be divided into pairs where each pair consists of two numbers with the same sum.",
        leetCodeUrl: "https://leetcode.com/problems/divide-array-into-equal-pairs/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/divide_Array_Into_Equal_Pairs",
      },
      {
        id: 10,
        title: "find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        description: "Find the first and last position of an element in a sorted array. If the element is not found, return [-1, -1].",
        leetCodeUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/find_First_and_Last_Position_of_Element_in_Sorted_Array",
      },
      {
        id: 11,
        title: "find Lucky Integer in an Array",
        difficulty: "Easy",
        description: "Find the lucky integer in the array. A lucky integer is an integer that appears in the array exactly as many times as its value.",
        leetCodeUrl: "https://leetcode.com/problems/find-lucky-integer-in-an-array/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/find_Lucky_Integer_in_an_Array",
      },
      {
        id: 12,
        title: "find Missing and Repeated Values",
        difficulty: "Medium",
        description: "Given an array containing `n` numbers where the numbers are from 1 to n, find the repeated and missing number.",
        leetCodeUrl: "https://leetcode.com/problems/find-the-duplicate-number/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/find_Missing_and_Repeated_Values",
      },
      {
        id: 13,
        title: "find the Peaks",
        difficulty: "Easy",
        description: "Given an array, find all the 'peak' elements. A peak element is greater than or equal to its neighbors.",
        leetCodeUrl: "https://leetcode.com/problems/find-peak-element/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/find_the_Peaks",
      },
      {
        id: 14,
        title: "implement Atoi",
        difficulty: "Medium",
        description: "Implement the `atoi` function that converts a string to an integer, handling leading whitespaces, signs, and invalid characters.",
        leetCodeUrl: "https://leetcode.com/problems/string-to-integer-atoi/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/implement_Atoi",
      },
      {
        id: 15,
        title: "maximum Ascending Subarray Sum",
        difficulty: "Easy",
        description: "Given an array of integers, find the sum of the maximum ascending subarray.",
        leetCodeUrl: "https://leetcode.com/problems/maximum-ascending-subarray-sum/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/maximum_Ascending_Subarray_Sum",
      },
      {
        id: 16,
        title: "merge Two 2D Arrays by Summing Values",
        difficulty: "Medium",
        description: "Merge two 2D arrays by summing corresponding elements of both arrays.",
        leetCodeUrl: "https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/merge_Two_2D_Arrays_by_Summing_Values",
      },
      {
        id: 17,
        title: "minimum Recolors to Get K Consecutive Black Blocks",
        difficulty: "Medium",
        description: "A problem about finding the minimum number of recolors to obtain a set of consecutive black blocks.",
        leetCodeUrl: "https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/minimum_Recolors_to_Get_K_Consecutive_Black_Blocks"
    },
    {
        id: 18,
        title: "nonRepeatingCharacter",
        difficulty: "Easy",
        description: "A problem that asks to find the first non-repeating character in a string.",
        leetCodeUrl: "https://leetcode.com/problems/first-unique-character-in-a-string/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/non_Repeating_Character"
    },
    {
        id: 19,
        title: "number of occurrence",
        difficulty: "Easy",
        description: "A problem where we need to find the number of occurrences of each element in an array.",
        leetCodeUrl: "https://leetcode.com/problems/number-of-occurrences/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/number_of_occurrence"
    },
    {
        id: 20,
        title: "palindrome Number",
        difficulty: "Easy",
        description: "A problem to determine whether a given number is a palindrome.",
        leetCodeUrl: "https://leetcode.com/problems/palindrome-number/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/palindrome_Number"
    },
    {
        "id": 27,
        "title": "reverse an Array",
        "difficulty": "Easy",
        "description": "Reverse an array.",
        "leetCodeUrl": "https://leetcode.com/problems/reverse-an-array/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/reverse_an_Array"
    },
    {
        "id": 28,
        "title": "search in Rotated Sorted Array",
        "difficulty": "Medium",
        "description": "Search for a target value in a rotated sorted array.",
        "leetCodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/search_in_Rotated_Sorted_Array"
    },
    {
        "id": 29,
        "title": "sortColors",
        "difficulty": "Medium",
        "description": "Sort an array of colors represented by 0, 1, and 2.",
        "leetCodeUrl": "https://leetcode.com/problems/sort-colors/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/sort_Colors"
    },
    {
        "id": 30,
        "title": "squares of a Sorted Array",
        "difficulty": "Easy",
        "description": "Return an array of squares of a sorted array.",
        "leetCodeUrl": "https://leetcode.com/problems/squares-of-a-sorted-array/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/squares_of_a_Sorted_Array"
    },
    {
        "id": 31,
        "title": "valid Palindrome",
        "difficulty": "Easy",
        "description": "Check if a string is a valid palindrome.",
        "leetCodeUrl": "https://leetcode.com/problems/valid-palindrome/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/valid_Palindrome"
    },
    {
        "id": 31,
        "title": "Valid Parentheses",
        "difficulty": "Easy",
        "description": "Check if a string of parentheses is valid (balanced).",
        "leetCodeUrl": "https://leetcode.com/problems/valid-parentheses/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/valid_Palindrome"
    },
    {
        "id": 32,
        "title": "Merge Two Sorted Lists",
        "difficulty": "Easy",
        "description": "Merge two sorted linked lists into one sorted linked list.",
        "leetCodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/merge_two_Sorted_Lists"
    },
    {
        "id": 33,
        "title": "Maximum Subarray",
        "difficulty": "Easy",
        "description": "Find the contiguous subarray within an array that has the largest sum.",
        "leetCodeUrl": "https://leetcode.com/problems/maximum-subarray/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/maximum_Subarray"
    },
    {
        "id": 34,
        "title": "Invert Binary Tree",
        "difficulty": "Easy",
        "description": "Invert a binary tree (flip left and right subtrees).",
        "leetCodeUrl": "https://leetcode.com/problems/invert-binary-tree/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/invert_Binary_Tree"
    },
    {
        "id": 35,
        "title": "Two Sum",
        "difficulty": "Easy",
        "description": "Find two numbers in an array that add up to a specific target.",
        "leetCodeUrl": "https://leetcode.com/problems/two-sum/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/twoSum"
    }
  ];

const getBgColor = (difficulty:string) => {
    if (difficulty === 'Easy') return 'text-green-400 bg-green-400/10 border-green-400/20';
    if (difficulty === 'Medium') return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    if (difficulty === 'Hard') return 'text-red-400 bg-red-400/10 border-red-400/20 ';
    return ''
};

const BlogPage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className=" grid gap-4 grid-cols-1 max-w-2xl   mx-auto pb-6 ">
                    <div className="text-white text-2xl font-bold">
                        Coding Challenege
                    </div>
                    {problems.map((problem) => (
                        <div key={problem.id} className="border border-white/10 rounded-md p-5 mb-0 bg-white bg-opacity-10 backdrop-blur-[10px]">
                            <span className="text-white mb-4 inline-block">
                                <Code className="mr-2 inline"/> <span>{problem.title}</span>
                                <span className={`ml-1 p-2 rounded-md ${getBgColor(problem.difficulty)}`}>{problem.difficulty}</span>
                            </span>
                            <p className="text-white/70">{problem.description}</p>
                            <div className="md:flex mt-3">
                                <a href={problem.leetCodeUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black mb-3 md:mb-0 md:mr-2 bg-orange-yellow flex justify-between p-3 border   border-white/10 rounded-md items-center">
                                    <span>View on LeetCode</span>
                                    <Eye className=" ml-1"/>
                                </a>
                                <a href={problem.githubSolutionUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="  text-white flex justify-between p-3 border   border-white/10 rounded-md items-center">
                                    <span>GitHub Solution</span>
                                    <Github className=" ml-1"/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogPage
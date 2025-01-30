"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PuzzleLink({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if we're on a solution page
  const isSolutionPage = pathname.includes('/solution');
  
  // Get the base puzzle path (e.g., /puzzle-1)
  const puzzlePath = pathname.split('/solution')[0];
  
  // Create the target link
  const href = isSolutionPage 
    ? puzzlePath               // Link back to puzzle
    : `${pathname}/solution`;  // Link to solution
    
  const defaultText = isSolutionPage ? 'Back to Puzzle' : 'View Solution';

  return (
    <Link href={href}>
      {children || defaultText}
    </Link>
  );
}
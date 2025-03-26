import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PinterestGalleryProps {
  className?: string;
  maxRows?: number;
}

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  height: 'short' | 'medium' | 'tall';
}

const galleryItems: GalleryItem[] = [
    {
      "id": 1,
      "title": "Mountain View",
      "description": "Beautiful mountain landscape",
      "imageUrl": "/gallery/gallery-1.jpeg",
      "height": "medium"
    },
    {
      "id": 2,
      "title": "Beach Sunset",
      "description": "Stunning sunset at the beach",
      "imageUrl": "/gallery/gallery-2.jpeg",
      "height": "tall"
    },
    {
      "id": 3,
      "title": "City Lights",
      "description": "Urban night scene",
      "imageUrl": "/gallery/gallery-3.jpeg",
      "height": "short"
    },
    {
      "id": 4,
      "title": "Forest Trail",
      "description": "Peaceful forest path",
      "imageUrl": "/gallery/gallery-4.jpeg",
      "height": "medium"
    },
    {
      "id": 5,
      "title": "Desert Landscape",
      "description": "Arid desert scene",
      "imageUrl": "/gallery/gallery-5.jpeg",
      "height": "medium"
    },
    {
      "id": 6,
      "title": "Ocean Waves",
      "description": "Powerful ocean waves",
      "imageUrl": "/gallery/gallery-1.jpeg",
      "height": "tall"
    },
    {
      "id": 7,
      "title": "Snow Peaks",
      "description": "Snowy mountain peaks",
      "imageUrl": "/gallery/gallery-2.jpeg",
      "height": "tall"
    },
    {
      "id": 8,
      "title": "Autumn Forest",
      "description": "Colorful autumn leaves",
      "imageUrl": "/gallery/gallery-3.jpeg",
      "height": "short"
    },
    {
      "id": 9,
      "title": "Tropical Paradise",
      "description": "Exotic tropical scene",
      "imageUrl": "/gallery/gallery-4.jpeg",
      "height": "medium"
    },
    {
      "id": 10,
      "title": "Northern Lights",
      "description": "Aurora borealis in the night sky",
      "imageUrl": "/gallery/gallery-5.jpeg",
      "height": "medium"
    },
    {
      "id": 11,
      "title": "Waterfall",
      "description": "Majestic waterfall in the wilderness",
      "imageUrl": "/gallery/gallery-1.jpeg",
      "height": "tall"
    },
    {
      "id": 12,
      "title": "Ancient Ruins",
      "description": "Historic archaeological site",
      "imageUrl": "/gallery/gallery-2.jpeg",
      "height": "medium"
    }
  ]
  

const Gallery: React.FC<PinterestGalleryProps> = ({ className, maxRows = 2 }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [columnCount, setColumnCount] = useState(4);

  // Handle window resize to adjust column count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setColumnCount(2);      // Small screens
      else if (width < 1024) setColumnCount(3); // Medium screens
      else setColumnCount(4);                  // Large screens
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update scroll progress for the scrollbar thumb
  useEffect(() => {
    const updateScrollProgress = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const progress = scrollWidth <= clientWidth 
          ? 0 
          : scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(progress);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollProgress);
      return () => scrollContainer.removeEventListener('scroll', updateScrollProgress);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Create a two-row layout with dynamic columns
  const createTwoRowLayout = () => {
    // Calculate approx number of items per row based on total items
    const itemsPerRow = Math.ceil(galleryItems.length / 2);
    
    // Create an array for each row
    const row1: GalleryItem[] = [];
    const row2: GalleryItem[] = [];
    
    // Sort items by height to balance rows better
    const sortedItems = [...galleryItems].sort((a, b) => {
      const heightValues = { tall: 3, medium: 2, short: 1 };
      return heightValues[b.height] - heightValues[a.height];
    });
    
    // Distribute items in a zigzag pattern to balance the rows
    sortedItems.forEach((item, index) => {
      if (index % 2 === 0) {
        row1.push(item);
      } else {
        row2.push(item);
      }
    });
    
    return [row1, row2];
  };

  const rows = createTwoRowLayout();

  return (
    <div className={cn("w-full relative py-10", className)}>
      <div className="overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex flex-col gap-4 pb-4 px-1 min-w-full overflow-x-auto scrollbar-none"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
          {/* First row */}
          <div className="flex gap-4 min-w-max">
            {rows[0].map((item) => (
              <div 
                key={`row1-${item.id}`} 
                className={cn(
                  "rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
                  "flex flex-col",
                  "w-[300px]",
                  item.height === 'short' ? 'h-[180px]' : 
                  item.height === 'medium' ? 'h-[220px]' : 'h-[280px]'
                )}
              >
                <div 
                  className="w-full h-full bg-cover bg-center relative group"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row */}
          <div className="flex gap-4 min-w-max">
            {rows[1].map((item) => (
              <div 
                key={`row2-${item.id}`} 
                className={cn(
                  "rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
                  "flex flex-col",
                  "w-[300px]",
                  item.height === 'short' ? 'h-[180px]' : 
                  item.height === 'medium' ? 'h-[220px]' : 'h-[280px]'
                )}
              >
                <div 
                  className="w-full h-full bg-cover bg-center relative group"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Gallery;
"use client";
import CalendarHeatmap from 'react-calendar-heatmap';
import "react-calendar-heatmap/dist/styles.css"; 
import '../styles/heatmap.css';
import { Button } from './button';

// interface HeaMapProps {
//   children: ReactNode;
//   className?: string;
//   appName: string;
//

export const Heatmap = (
    // { children, className, appName }: 
) => {
  return (
    <div>
    <CalendarHeatmap 
    startDate={new Date('2025-01-01')}
    endDate={new Date('2025-04-01')}
    values={[
      { date: '2016-01-01', count: 5    },
      { date: '2016-01-22', count: 5},
      { date: '2016-01-30', count: 15 },
    ]}
    classForValue={(value) => {

        return "color-scale-4"; // Lightest color
      }}
  />

<div>
        <Button >
          Open alert
        </Button>
  </div>
  </div>
  );
};

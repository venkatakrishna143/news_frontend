import React, { useEffect, useState } from 'react'
import {
    differenceInSeconds,
    differenceInMinutes,
    differenceInHours,
    differenceInDays,
    differenceInWeeks,
    differenceInMonths,
  } from "date-fns";
import { Typography } from '@mui/material';

function AgoTimeStamp({time}) {
    const [timeAgo, setTimeAgo] = useState("");

    const getTimeAgo = (time) => {
        const now = new Date();
        const date = new Date(time);
    
        const seconds = differenceInSeconds(now, date);
        if (seconds < 60) return `${seconds}s`;
    
        const minutes = differenceInMinutes(now, date);
        if (minutes < 60) return `${minutes}m`;
    
        const hours = differenceInHours(now, date);
        if (hours < 24) return `${hours}h`;
    
        const days = differenceInDays(now, date);
        if (days < 7) return `${days}d`;
    
        const weeks = differenceInWeeks(now, date);
        if (weeks < 4) return `${weeks}w`;
    
        const months = differenceInMonths(now, date);
        console.log(months)
        return `${months}m`;
    };
    
 
    
      useEffect(() => {
        const updateAgo = () => {
          setTimeAgo(getTimeAgo(time));
        };
    
        updateAgo();
        const interval = setInterval(updateAgo, 1000); // Update every second for dynamic changes
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, [time]);

    
  return (
      <Typography variant="body2">{timeAgo}</Typography>
  )
}

export default AgoTimeStamp
import React, { createContext, useState, useEffect, ReactNode } from 'react';

export type ActivityState = {
  currentActivity: string;
  duration: number; // 초 단위
  location: string;
  geofenceStatus: string;
};

export type ActivityContextType = {
  activityState: ActivityState;
  setActivityState: React.Dispatch<React.SetStateAction<ActivityState>>;
};

export const ActivityContext = createContext<ActivityContextType | null>(null);

export const ActivityProvider = ({ children }: { children: ReactNode }) => {
  const [activityState, setActivityState] = useState<ActivityState>({
    currentActivity: '앉아있음',
    duration: 0,
    location: 'Office',
    geofenceStatus: '내부',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActivityState(prev => ({ ...prev, duration: prev.duration + 1 }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ActivityContext.Provider value={{ activityState, setActivityState }}>
      {children}
    </ActivityContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';

const ReminderContext = createContext();

export const useReminderContext = () => {
  return useContext(ReminderContext);
};

export const ReminderProvider = ({ children }) => {
  const [reminderInterval, setReminderInterval] = useState(30);
  let reminderTimer;

  const showNotification = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          const notification = new Notification('Drink Water Reminder', {
            body: 'Take a break and drink some water!',
          });
  
          notification.addEventListener('click', () => {
            window.location.href = '/';
          });
        }
      });
    }
  };

  useEffect(() => {
    reminderTimer = setInterval(() => {
      showNotification();
    }, reminderInterval * 60 * 1000);

    return () => {
      if (reminderTimer) {
        clearInterval(reminderTimer);
      }
    };
  }, [reminderInterval]);

  const value = {
    reminderInterval,
    setReminderInterval,
  };
  return <ReminderContext.Provider value={value}>{children}</ReminderContext.Provider>;
};



import React from 'react';
import { useState,useEffect } from 'react';

export const UseOnScreen = (ref) => {
    const [isOnScreen, setIsOnScreen] = useState(false);

    const observer = new IntersectionObserver((([entry]) =>{
        // console.log(entry);
        setIsOnScreen(entry.isIntersecting)
    }),{
        threshold:0.5
    });

    useEffect(() =>{
        observer.observe(ref.current)

        return () => observer.disconnect();
    })

  return isOnScreen;
}
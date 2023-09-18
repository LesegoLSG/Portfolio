import React, { useContext, useEffect } from 'react';
import { useRef } from 'react';
import { UseOnScreen } from './UseOnScreen';
import { NavContexts } from '../../Context/NavContexts';

export const UseNav = (navLinkId) => {
    const ref = useRef(null);
    const {setActiveLinkId} = useContext(NavContexts);


    const isOnScreen = UseOnScreen(ref);

    useEffect(() =>{
      if(isOnScreen){
        setActiveLinkId(navLinkId);
      }
    }, [isOnScreen, setActiveLinkId, navLinkId]);

  return ref;
}


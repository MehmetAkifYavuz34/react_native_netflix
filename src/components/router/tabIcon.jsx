import React from 'react';
import {DOWLANDS, HOME, NEWHOT, SEARCH} from '../../utils/route';
import {
  ArrowCircleDown2,
  Home,
  MessageQuestion,
  SearchNormal1,
  VideoPlay,
} from 'iconsax-react-nativejs';

const TabBarIcon = ({route, color, size, focused}) => {
  switch (route.name) {
    case HOME:
      return (
        <Home
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case NEWHOT:
      return (
        <VideoPlay
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case SEARCH:
      return (
        <SearchNormal1
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case DOWLANDS:
      return (
        <ArrowCircleDown2
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );

    default:
      return <MessageQuestion color={color} size={size} />;
  }
};

export default TabBarIcon;

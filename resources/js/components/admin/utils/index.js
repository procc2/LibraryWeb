import { defaultDirection } from '../constants/config';

export const getDirection = () => {
  let direction = defaultDirection;
  if (localStorage.getItem('direction')) {
    const localValue = localStorage.getItem('direction');
    if (localValue === 'rtl' || localValue === 'ltr') {
      direction = localValue;
    }
  }
  return {
    direction,
    isRtl: direction === 'rtl'
  };
};

export const setDirection = localValue => {
  let direction = 'ltr';
  if (localValue === 'rtl' || localValue === 'ltr') {
    direction = localValue;
  }
  localStorage.setItem('direction', direction);
};

import { BikeModel } from '@/types/bike';

export const bikes: BikeModel[] = [
  {
    id: 'ktm-rc-390',
    name: 'KTM RC 390',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80',
    price: 5499,
    specs: {
      engine: '373cc',
      power: '43.5 HP',
      torque: '37 Nm',
      weight: '155 kg',
    },
    description: 'A lightweight sports bike with advanced ABS and superior handling.',
  },
  {
    id: 'ktm-duke-890',
    name: 'KTM Duke 890',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80',
    price: 11499,
    specs: {
      engine: '889cc',
      power: '115 HP',
      torque: '92 Nm',
      weight: '169 kg',
    },
    description: 'A powerful streetfighter with cutting-edge electronics.',
  },
  {
    id: 'ktm-adventure-1290',
    name: 'KTM Adventure 1290',
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80',
    price: 19999,
    specs: {
      engine: '1301cc',
      power: '160 HP',
      torque: '138 Nm',
      weight: '209 kg',
    },
    description: 'The ultimate adventure touring bike with off-road capabilities.',
  },
];
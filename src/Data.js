import img1 from './assets/images/icon-arcade.svg'
import img2 from './assets/images/icon-advanced.svg'
import img3 from './assets/images/icon-pro.svg'
export const monthPlan = [
  {
    id: 1,
    image: img1,
    plan: 'Arcade',
    amount: '$9/mo',
  },
  {
    id: 2,
    image: img2,
    plan: 'Advanced',
    amount: '$12/mo',
  },
  {
    id: 3,
    image: img3,
    plan: 'Pro',
    amount: '$15/mo',
  },
]

// for the yearly plan
export const yearplan = [
  {
    id: 1,
    image: img1,
    plan: 'Arcade',
    amount: '$90/yr',
  },
  {
    id: 2,
    image: img2,
    plan: 'Advanced',
    amount: '$120/yr',
  },
  {
    id: 3,
    image: img3,
    plan: 'Pro',
    amount: '$150/yr',
  },
]

// pick add ons
export const picks = [
  {
    id: 1,
    text: 'Online service',
    paragraph: 'Access to multiplayer',
  },
  {
    id: 2,
    text: 'Larger Storage',
    paragraph: 'Extra 11Tb of cloud save',
  },
  {
    id: 3,
    text: 'Customizable profile',
    paragraph: 'Custom theme on your profile',
  },
]

export const inputs = [
  {
    id: 1,
    label: 'Name',
    identity: 'text',
    placeholder: 'e.g. Stephen King',
  },
  {
    id: 2,
    label: 'Email',
    identity: 'e-mail',
    placeholder: 'e.g. king@gmail.com',
  },
  {
    id: 3,
    label: 'Phone Number',
    identity: 'phone-number',
    placeholder: 'e.g. +1 234 567 890',
  },
]

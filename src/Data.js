import img1 from './assets/images/icon-arcade.svg'
import img2 from './assets/images/icon-advanced.svg'
import img3 from './assets/images/icon-pro.svg'
export const monthPlan = [
  {
    id: 1,
    image: img1,
    plan: 'Arcade',
    amount: '$9/mo',
    duration: 'monthly',
  },
  {
    id: 2,
    image: img2,
    plan: 'Advanced',
    amount: '$12/mo',
    duration: 'monthly',
  },
  {
    id: 3,
    image: img3,
    plan: 'Pro',
    amount: '$15/mo',
    duration: 'monthly',
  },
]

// for the yearly plan
export const yearplan = [
  {
    id: 1,
    image: img1,
    plan: 'Arcade',
    amount: '$90/yr',
    duration: 'yearly',
  },
  {
    id: 2,
    image: img2,
    plan: 'Advanced',
    amount: '$120/yr',
    duration: 'yearly',
  },
  {
    id: 3,
    image: img3,
    plan: 'Pro',
    amount: '$150/yr',
    duration: 'yearly',
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
export const side = [
  {
    number: 1,
    name: 'YOUR INFO',
    link: '/',
  },
  {
    number: 2,
    name: 'SELECT PLAN',
    link: '/plan',
  },
  {
    number: 3,
    name: 'ADD-ONS',
    link: '/pick',
  },
  {
    number: 4,
    name: 'SUMMARY',
    link: '/summary',
  },
]

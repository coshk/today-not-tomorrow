interface Link {
  link:
    | '/'
    | '/stats'
    | '/others'
    | '/settings';
  name:
    | 'tasks'
    | 'stats'
    | 'others'
    | 'settings';
}

export const navlinks: Link[] = [
  {
    link: '/',
    name: 'tasks'
  },
  {
    link: '/stats',
    name: 'stats'
  },
  {
    link: '/others',
    name: 'others'
  },
  {
    link: '/settings',
    name: 'settings'
  },
];

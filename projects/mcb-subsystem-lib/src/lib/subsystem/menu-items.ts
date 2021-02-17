import { MenuItems } from 'angular-infra';

export default [{
  code: 100,
  titleKey: 'workflow',
  icon: 'archive',
  children: [
    {
      code: 100,
      titleKey: 'cartable',
      path: 'workflow/cartable',
      icon: 'none',
    },
    {
      code: 101,
      titleKey: 'processes',
      path: 'workflow/processes',
      icon: 'none',
    },
    {
      code: 101,
      titleKey: 'report',
      path: 'workflow/history',
      icon: 'none',
    },
    {
      code: 101,
      titleKey: 'processStart',
      path: 'workflow/request-start-test',
      icon: 'none',
    }


  ],
}] as MenuItems;

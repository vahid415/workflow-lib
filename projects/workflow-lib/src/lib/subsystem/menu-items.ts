import { MenuItems } from '@navaco/mcb-infra';

export default [{
  code: 100,
  titleKey: 'workflow',
  icon: 'archive',
  children: [
    {
      code: 100,
      titleKey: 'cartable',
      path: 'workflow/cartable',
      icon: '**',
    },
    {
      code: 101,
      titleKey: 'processes',
      path: 'workflow/processes',
      icon: '**',
    },
    {
      code: 101,
      titleKey: 'report',
      path: 'workflow/history',
      icon: '**',
    },
    {
      code: 101,
      titleKey: 'processStart',
      path: 'workflow/request-start-test',
      icon: '**',
    }


  ],
}] as MenuItems;

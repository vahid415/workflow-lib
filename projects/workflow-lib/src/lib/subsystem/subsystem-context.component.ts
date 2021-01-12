import { Component } from '@angular/core';
import { Subsystem, TranslatorService, CommonService, UIService } from '@navaco/mcb-infra';

import { SUBSYSTEM } from './definition';

@Component({
  selector: 'mcb-subsystem-context',
  templateUrl: './subsystem-context.component.html',
  providers: [
    CommonService,
    TranslatorService,
    UIService,
    { provide: Subsystem, useValue: SUBSYSTEM }
  ]
})
export class SubsystemContextComponent {
}

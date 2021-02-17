import { Component } from '@angular/core';
import { Breadcrumb, TranslatorService, BreadcrumbItems } from 'angular-infra';

@Component({
    selector: 'mcb-subsystem',
    templateUrl: './subsystem-root.component.html',
})
export class SubsystemRootComponent {
    @Breadcrumb() breadcrumb: BreadcrumbItems = [{ textKey: 'workflow' }];

    constructor(public trnaslator: TranslatorService) {
        // Do no remove this empty constructor!
        // this TranslatorService is being used by breadcrumb 
    }
}

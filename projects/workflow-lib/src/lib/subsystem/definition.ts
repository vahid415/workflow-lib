import { Subsystem } from '@navaco/mcb-infra';
import faIRDict from './dictionaries/dictionary.fa-ir';
import enUSDict from './dictionaries/dictionary.en-us';
import menuItems from './menu-items';

export const SUBSYSTEM = new Subsystem();
SUBSYSTEM.id = 'MCB_WORKFLOW';
SUBSYSTEM.icon = 'system';
SUBSYSTEM.titleKey = 'workflow';
SUBSYSTEM.menuItems = menuItems;
SUBSYSTEM.dictionaries = [faIRDict, enUSDict];
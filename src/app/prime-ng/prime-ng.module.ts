import { NgModule } from '@angular/core';

import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar'
import { TableModule } from 'primeng/table'



@NgModule({
  
  exports:[
    MenuModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ButtonModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }

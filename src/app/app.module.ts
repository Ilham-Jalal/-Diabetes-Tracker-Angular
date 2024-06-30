import { NgModule } from '@angular/core';
import {GlucoseServiceService} from "./glucose-service.service";
import {GlucoseListComponent} from "./glucose-list/glucose-list.component";
import {CommonModule} from "@angular/common";
import {GlucoseFormComponent} from "./glucose-form/glucose-form.component";
import {RouterLink} from "@angular/router";
// @ts-ignore
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    GlucoseListComponent,

  ],
  imports: [
    CommonModule,
    GlucoseFormComponent,
    GlucoseFormComponent,
    RouterLink,
    NgChartsModule,
  ],
  providers: [GlucoseServiceService],
})
export class AppModule { }

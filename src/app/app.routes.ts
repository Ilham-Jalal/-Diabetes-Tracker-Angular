import { Routes } from '@angular/router';
import { GlucoseListComponent } from './glucose-list/glucose-list.component';
import { GlucoseFormComponent } from './glucose-form/glucose-form.component';

export const routes: Routes = [
  { path: 'glucose-readings', component: GlucoseListComponent },
  { path: 'save', component: GlucoseFormComponent },
  { path: 'edit/:id', component: GlucoseFormComponent },
  { path: '', redirectTo: '/glucose-readings', pathMatch: 'full' }
];

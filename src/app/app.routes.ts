import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'data-binding',
    component: DataBindingComponent,
    title: 'Data Binding',
  },
  {
    path: 'structural-directive',
    component: StructuralDirectiveComponent,
    title: 'Structural Directive',
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectiveComponent,
    title: 'Attribute Directive',
  },
  {
    path: '',
    redirectTo: 'data-binding',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

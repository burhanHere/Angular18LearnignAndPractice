import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IfElseControlFlowComponent } from './components/control-flow/if-else-control-flow/if-else-control-flow.component';
import { ForControlFlowComponent } from './components/control-flow/for-control-flow/for-control-flow.component';

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
    path: 'if-else-control-flow',
    component: IfElseControlFlowComponent,
    title: 'if-else-control-flow',
  },
  {
    path: 'for-control-flow',
    component: ForControlFlowComponent,
    title: 'for-control-flow',
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

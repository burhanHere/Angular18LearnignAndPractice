import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IfElseControlFlowComponent } from './components/control-flow/if-else-control-flow/if-else-control-flow.component';
import { ForControlFlowComponent } from './components/control-flow/for-control-flow/for-control-flow.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetApiComponent } from './components/api-intigration/get-api/get-api.component';
import { PostPutDeleteApiComponent } from './components/api-intigration/post-put-delete-api/post-put-delete-api.component';

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
    path: 'pipes',
    component: PipesComponent,
    title: 'pipes',
  },
  {
    path: 'template-form',
    component: TemplateComponent,
    title: 'template-form',
  },
  {
    path: 'reactive-form',
    component: ReactiveComponent,
    title: 'reactive-form',
  },
  {
    path: 'get-api',
    component: GetApiComponent,
    title: 'get-api',
  },
  {
    path: 'post-put-delete-api',
    component: PostPutDeleteApiComponent,
    title: 'post-put-delete-api',
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

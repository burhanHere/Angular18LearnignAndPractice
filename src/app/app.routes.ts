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
import { LifecycleEventsComponent } from './components/lifecycle-events/lifecycle-events.component';
import { NgtemplateComponent } from './components/directives/ngtemplate/ngtemplate.component';
import { NgcontainerComponent } from './components/directives/ngcontainer/ngcontainer.component';
import { ViewChildComponent } from './components/decorators/view-child/view-child.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SignupComponent } from './components/signup/signup.component';
import { authenticationGuard } from './components/guards/authGuard/authentication.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'signup',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login',
  },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [authenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'data-binding',
        pathMatch: 'full',
      },
      {
        path: 'data-binding',
        component: DataBindingComponent,
        title: 'data-binding',
      },
      {
        path: 'structural-directive',
        component: StructuralDirectiveComponent,
        title: 'structural-directive',
      },
      {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent,
        title: 'attribute-directive',
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
        path: 'lifecycle-events',
        component: LifecycleEventsComponent,
        title: 'lifecycle-events',
      },
      {
        path: 'ng-template',
        component: NgtemplateComponent,
        title: 'ng-template',
      },
      {
        path: 'ng-component',
        component: NgcontainerComponent,
        title: 'ng-component',
      },
      {
        path: 'viewChild',
        component: ViewChildComponent,
        title: 'viewChild',
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

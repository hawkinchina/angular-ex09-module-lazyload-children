import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ListComponent } from './components/list/list.component';
import { PriceComponent } from './components/price/price.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'price',
        component: PriceComponent,
      },
    ],
  },
  //在子模块中，配置路由 （在自定义模块中，还有其他的其他的子组件。）
  //和模块的根组件，配置成父子路由： 访问的地址为/product ，后面加上/list
  //这种配置方式， 会把list/price组件挂载到product模块的根组件上，
];

@NgModule({
  //特别注意： forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

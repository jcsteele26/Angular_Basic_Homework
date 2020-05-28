import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KillahComponent } from './killah/killah.component';
import { WutangComponent } from './wutang/wutang.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'zero', component: HomeComponent},
  {path: 'one', component: KillahComponent},
  {path: 'two', component: WutangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

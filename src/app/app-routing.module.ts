import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Angularのベストプラクティスは、 ルートのAppModuleからインポートされるルーティング専用のトップレベルモジュールで、 ルーターをロードして管理することです。

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  /**
   * RouterModule.forRoot()
   * ルーティングに必要なサービス・プロバイダーとディレクティブを提供し、
   * ブラウザの現在のURLを元に最初の遷移を行います。
   */
  imports: [RouterModule.forRoot(routes)],

  // AppRoutingModule は RouterModule をエクスポートし、アプリケーション全体で利用できるようにします。
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'board-game-store-feature-list',
          loadChildren: () =>
            import('@stores/board-game-store/feature-list').then(
              (module) => module.BoardGameStoreFeatureListModule
            ),
        },
        {
          path: 'board-game-store-feature-details',
          loadChildren: () =>
            import('@stores/board-game-store/feature-details').then(
              (module) => module.BoardGameStoreFeatureDetailsModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

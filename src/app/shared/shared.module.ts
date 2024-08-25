import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QbRanksComponent } from './components/qb-ranks/qb-ranks.component';
import { RbRanksComponent } from './components/rb-ranks/rb-ranks.component';
import { WrRanksComponent } from './components/wr-ranks/wr-ranks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QbRanksComponent,
    RbRanksComponent,
    WrRanksComponent,
    HttpClientModule,
  ],
  exports: [QbRanksComponent, RbRanksComponent, WrRanksComponent],
})
export class SharedModule {}

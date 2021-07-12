import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxCaptureModule } from 'ngx-capture';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { IndextopointsPipe } from './pipes/indextopoints.pipe';
import { OrderByPointsPipe } from './pipes/order-by-points.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { VotablePipe } from './pipes/votable.pipe';
import { VotedByPipe } from './pipes/voted-by.pipe';

@NgModule({
  declarations: [AppComponent, RankingComponent, LoadingComponent, IndextopointsPipe, ReversePipe, VotablePipe, VotedByPipe, OrderByPointsPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,    
    FontAwesomeModule,
    NgxCaptureModule,
    RouterModule,
    RouterModule.forRoot([])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

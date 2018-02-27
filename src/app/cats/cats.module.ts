import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsService } from './cats-service/cats.service';
import { CatsParentComponent } from './cats-parent/cats-parent.component';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [CatsService],
  declarations: [CatsParentComponent],
  exports: [CatsParentComponent]
})
export class CatsModule { }

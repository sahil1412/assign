import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgxPaginationModule} from 'ngx-pagination'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import{FormControl, FormGroup, FormsModule,NgForm, ReactiveFormsModule} from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustompipePipe } from './custompipe.pipe';
import { ChildComponent } from './child/child.component';
import { HelloComponent } from './hello/hello.component';



@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
    ChildComponent,
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

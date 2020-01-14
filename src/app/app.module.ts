import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbToastrModule,
  NbWindowModule,
  NbDialogModule,
  NbDatepickerModule,
  NbChatModule, NbCardModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {PagesModule} from './pages/pages.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {SmartTableService} from './@core/data/smart-table.service';
import {SmartTableData} from './@core/data/smart-table';
import {MessageComponent} from './modal/message/message.component';
import {ConfirmComponent} from './modal/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ConfirmComponent,
  ],
  imports: [
    NbCardModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    Ng2SmartTableModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:8080/api/test/v1',
          login: {
            endpoint: '/auth/login',
            redirect: {
              success: '/pages',
              failure: null,
            },
          },

          register: {
            endpoint: '/auth/register',
            redirect: {
              success: '/welcome',
              failure: null,
            },
          },

        }),
      ],
      forms: {},
    }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    // CoreModule.forRoot(),
  ],
  providers: [{provide: SmartTableData, useClass: SmartTableService}],
  bootstrap: [AppComponent],
  entryComponents: [
    MessageComponent,
    ConfirmComponent
  ],
})
export class AppModule { }

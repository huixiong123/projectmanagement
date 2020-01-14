import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule, NbTreeGridModule, NbUserModule
} from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {OneColumnLayoutComponent} from '../@theme/layout/one-column/one-column.layout';
import {FooterComponent} from '../@theme/components/footer/footer.component';
import {HeaderComponent} from '../@theme/components/header/header.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {SmartTableComponent} from './tasks/smart-table.component';
import {SmartTableData} from '../@core/data/smart-table';
import {SmartTableService} from '../@core/data/smart-table.service';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
    NbThemeModule,
    Ng2SmartTableModule,
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbSearchModule,
    NbActionsModule,
    NbUserModule,
    NbSelectModule,
    NbMenuModule.forRoot(),
    PagesRoutingModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    OneColumnLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SmartTableComponent,
  ],
})
export class PagesModule {
}

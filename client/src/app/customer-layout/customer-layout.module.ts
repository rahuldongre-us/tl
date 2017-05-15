import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MaterialModule,
  OverlayContainer,
  FullscreenOverlayContainer,
  MdSelectionModule, MdButtonModule, MdCheckboxModule
} from '@angular/material';
import { CustomerLayoutRoutingModule } from './customer-layout-routing.module';
import { CustomerLayoutComponent } from './customer-layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderComponent, SidebarComponent } from '../shared/components';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    CustomerLayoutRoutingModule,
    DashboardModule 
  ],
  declarations: [CustomerLayoutComponent,
        HeaderComponent,
        SidebarComponent]
})
export class CustomerLayoutModule { }
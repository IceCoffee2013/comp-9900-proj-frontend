import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoggerService } from './logger.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SpinnerComponent,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    SpinnerComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    LoggerService,
    SpinnerService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

import { NgModule, ModuleWithProviders }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [ BrowserModule, FormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
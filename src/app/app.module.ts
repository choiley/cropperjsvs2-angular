import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ImageCropComponent } from './components/image-crop/image-crop.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ImageCropComponent],
  bootstrap: [ImageCropComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

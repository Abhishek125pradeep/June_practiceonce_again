import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import{ HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule ,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule 

  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    FormsModule ,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule 
  ]
})
export class SharedModule { }

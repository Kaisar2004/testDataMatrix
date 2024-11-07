import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatButton
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData = {
    name: '',
    surname: ''
  };

  dataSource: any[] = [];

  addData() {
    if (this.formData.name && this.formData.surname) {
      this.dataSource.push({ ...this.formData });
      this.formData = { name: '', surname: '' };
    }
  };
}

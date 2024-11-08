import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {
  MatTableDataSource,
  MatTableModule
} from "@angular/material/table";
import {CommonModule, NgFor} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    NgFor,
    FormsModule,
    CommonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData = { orderName: '', quantity: null, unitPrice: null };
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['orderName', 'quantity', 'unitPrice', 'totalPrice', 'actions'];

  addOrder() {
    if (this.formData.orderName && this.formData.quantity && this.formData.unitPrice) {
      this.dataSource.data = [...this.dataSource.data, { ...this.formData }];
      this.formData = { orderName: '', quantity: null, unitPrice: null };
    }
  };

  removeOrder(order: any) {
    const data = this.dataSource.data;
    const index = data.indexOf(order);
    if (index > -1) {
      data.splice(index, 1);
      this.dataSource.data = [...data];
    }
  };
}

import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ResponseData } from '../models/ResponseData';
@Injectable({
  providedIn: 'root'
})
export class General {

  constructor() { }

  //#region Declartions
  [key: string]: any;
  //#endregion

    addEitFromGeneral() {
      this.form.markAllAsTouched();
      if (this.form.valid) {
        this._service.createUpdate(this.form.getRawValue())
          .subscribe((res: ResponseData) => {
            debugger
            if (res.isSuccess == true) {
            
              this.getData(this.filter);
              this.alert.success(res.message);
              this.modalService.dismissAll();
            }
            else {
              this.alert.error(res.message)
            }
          },
            (err) => {
              console.log(err)
              this.alert.error("مشكلة في الداتا بيز")
            });
      }
    }
  
    removeGeneral(id) {
      if (id == 0) return;
      Swal.fire({
        title: 'الحذف',
        text: "هل متاكد من الحذف؟",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'نعم',
        cancelButtonText:"لا"
      }).then((result) => {
        if (result.value) {
  
          this._service.delete(id).subscribe(res => {
            if (res.isSuccess) {
              this.getData(this.filter);
              this.alert.success(res.message);
  
            
            }
            else {
              this.alert.showError(res.message);
            }
          });
        }
  
      })
    }

  removeItemFromArray<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
}

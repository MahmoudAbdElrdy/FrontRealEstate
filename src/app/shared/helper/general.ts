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
  isLoading: boolean;

  onSave() {
   
  
      if (this.form.valid) {
        this.service.create(this.form.getRawValue())
          .subscribe((res: ResponseData) => {
            console.log("result=>", res)

            if (res.isSuccess == true) {
              this.primarykey = res.data;

              this.alert.showSuccess(res.message);

            }
            else {
              this.alert.showError(res.message)
            }
          },
            (err) => {
              console.log(err)
              this.alert.showError("DatabaseServerError")
            });
      }
    }
   
  

  onDelete() {

  
    if (!this.complete)
      return;
    if (this.primarykey == 0) return;

    Swal.fire({
    
    }).then((result) => {
      if (result.value) {

        this.service.delete(this.primarykey).subscribe(res => {
          if (res.isSuccess) {
            this.alert.showSuccess(res.message)
            this.router.navigateByUrl(this.url);
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

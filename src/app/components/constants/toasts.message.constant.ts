import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class ToastsMessageConstant {

    constructor(private toastrService: ToastrService) {

    }

    success(message: string, title?: string, config?: any) {
       return this.toastrService.success(message, title, config)
    }

    error(error: string, title?: string, config?: any) {
        this.toastrService.error(error, title, config)
    }

    warning(warning: string, title?: string, config?: any) {
        this.toastrService.warning(warning, title, config)
    }
}
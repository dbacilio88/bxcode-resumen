import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { take } from 'rxjs';
import { ToastsMessageConstant } from './components/constants/constants.index';
import { PersonService } from './services/person.list.service';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bxcode-resumen';
  constructor(
    private tsc: ToastsMessageConstant,
    private service: PersonService,
    public routes: Router
  ) { }

  onClick() {
    this.service.list()
      .pipe(take(1))
      .subscribe((value) => console.log(value))
      .add();

    this.tsc.success('Hello world!', 'title')
      .onTap
      .pipe(take(2)).subscribe((res: any) => this.toasterClickedHandler(res));

    console.log('click me')

    this.routes.navigate(['about'])

  }

  toasterClickedHandler(res: any) {
    console.log('Toastr clicked ',);
  }
}
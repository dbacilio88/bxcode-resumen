import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bxcode-404',
  standalone: true,
  imports: [],
  templateUrl: './bxcode-404.component.html',
  styleUrl: './bxcode-404.component.scss'
})
export class Bxcode404Component {
  constructor(private router: Router) {

  }
  onclic() {
    this.router.navigate(['/home'])
  }
}

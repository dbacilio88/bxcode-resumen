import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bxcode-about',
  standalone: true,
  imports: [],
  templateUrl: './bxcode-about.component.html',
  styleUrl: './bxcode-about.component.scss'
})
export class BxcodeAboutComponent {

  constructor(private router: Router) {

  }
  onclic() {
    this.router.navigate(['home'])
  }
}

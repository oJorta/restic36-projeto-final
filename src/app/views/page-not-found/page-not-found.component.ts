import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}

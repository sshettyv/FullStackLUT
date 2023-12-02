import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ButtonComponent } from '../components/button/button.component'


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'tutorialApp';

}

 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientComponent } from './Components/patient/patient.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PatientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Patient-app';
}

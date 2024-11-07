import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetachedModule } from 'ds2u-lib';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DetachedModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testlib';
}

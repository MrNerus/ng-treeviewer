import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ultree } from "./components/ultree/ultree";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ultree],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('treeviewer');
}

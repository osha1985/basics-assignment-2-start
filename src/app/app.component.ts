import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private username: string;

  public userNameIsEmpty(): boolean {
    return (this.username === '');
  }

  public resetUserName(): void {
    this.username = '';
  }

  public constructor() {
    this.username = '';
  }
}

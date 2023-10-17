import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'augusto';
  public nameUpper: string = 'AUGUSTO';
  public fullName: string = 'augusto HERNÁNDEZ';

  public customDate: Date = new Date();
}

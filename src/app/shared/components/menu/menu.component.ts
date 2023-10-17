import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  public items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
          {
            label: 'Pipes de Angular',
            icon: PrimeIcons.DESKTOP,
            items:[
              { label: 'Textos y fechas', icon: PrimeIcons.ALIGN_LEFT, routerLink: '/' },
              { label: 'Números', icon: PrimeIcons.DOLLAR, routerLink: 'numbers' },
              { label: 'No comúnes', icon: PrimeIcons.GLOBE, routerLink: 'uncommon' }
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: PrimeIcons.COG,
            items:[
              { label: 'Custom pipes', icon: PrimeIcons.COG, routerLink: 'custom' }
            ]
          }
        ];
    }
}

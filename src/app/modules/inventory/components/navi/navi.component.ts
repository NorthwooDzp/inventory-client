import { Component } from '@angular/core';
import { NavLink } from '../../../../models';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent {
    public links: NavLink[] = [
        {
            path: '/storage',
            label: 'Склад'
        },
        {
            path: '/employee',
            label: 'Пользователи'
        }
    ];


}

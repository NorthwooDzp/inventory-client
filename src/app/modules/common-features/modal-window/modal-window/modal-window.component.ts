import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ViewModes } from '../../../../models';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss'],
    animations: [
        trigger('appearance', [
            state('in', style({transform: 'translateY(0)'})),
            transition(':enter', [
                style({transform: 'translateY(100vh)'}),
                animate('300ms', style({transform: 'translateY(0)'}))
            ]),
            transition(':leave', [
                animate('300ms', style({transform: 'translateY(100vh)'}))
            ])
        ])
    ]
})
export class ModalWindowComponent {
    @Input() public title: string;
    @Output() public modalClose: EventEmitter<void> = new EventEmitter();
    @Input() public mode: ViewModes;

    public closeWindow(): void {
        this.modalClose.emit();
    }

}

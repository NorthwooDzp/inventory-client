import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

const modalAnimationDuration = 300;

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss'],
    animations: [trigger('modalWindow', [
        state('in', style({transform: 'translateY(0)'})),
        transition(':enter', [
            style({transform: 'translateY(100vh)'}),
            animate(`${modalAnimationDuration}ms`, style({transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
            animate(`${modalAnimationDuration}ms`, style({transform: 'translateY(100vh)'}))
        ])
    ])]
})
export class ModalWindowComponent {
    @Input() public visible: boolean;
    @Input() public title: string;
    @Output() public modalClose: EventEmitter<void> = new EventEmitter();

    public closeWindow(): void {
        this.modalClose.emit();
    }

}

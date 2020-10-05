import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

const modalAnimationDuration = 300;

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss'],
    animations: [trigger('modalWindow', [
        transition(':enter', [
            style({transform: 'translateY(100vh)'}),
            animate(modalAnimationDuration, style({transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
            animate(modalAnimationDuration, style({transform: 'translateY(100vh)'}))
        ])
    ]),
        trigger('backdrop', [
            transition(':enter', [
                style({opacity: 0}),
                animate(modalAnimationDuration, style({opacity: 1}))
            ]),
            transition(':leave', [
                style({opacity: 1}),
                animate(modalAnimationDuration, style({opacity: 0}))
            ])
        ])]
})
export class ModalWindowComponent {
    @Input() public visible: boolean;
    @Input() public title: string;
    @Input() public isWarning: boolean;
    @Output() public modalClose: EventEmitter<void> = new EventEmitter();

    public closeWindow(): void {
        this.modalClose.emit();
    }

}

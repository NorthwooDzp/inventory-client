import { Component, EventEmitter, Input, Output } from '@angular/core';
import { modalWindowAnimation } from '../../../../animation';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss'],
    animations: [modalWindowAnimation]
})
export class ModalWindowComponent {
    @Input() public title: string;
    @Output() public modalClose: EventEmitter<void> = new EventEmitter();

    public closeWindow(): void {
        this.modalClose.emit();
    }

}

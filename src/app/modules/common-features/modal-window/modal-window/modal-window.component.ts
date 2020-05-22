import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ViewModes } from '../../../../models/ui-consts';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
    @Input() public title: string;
    @Output() public modalClose: EventEmitter<void> = new EventEmitter();
    @Input() public mode: ViewModes;
    public isClosing: boolean = false;

    public closeWindow(): void {
        this.isClosing = true;
        const to = setTimeout(() => {
            this.isClosing = false;
            this.modalClose.emit();
        }, 800);
    }

    public getModalClass(): string[] {
        return [this.mode ? this.mode : '', this.isClosing ? ' modal__closing' : ''];
    }
}

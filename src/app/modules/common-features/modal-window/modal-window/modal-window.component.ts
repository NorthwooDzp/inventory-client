import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ViewModes } from '../../../../models';
import { EventsService } from '../../../../services/events.service';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
    @Input() public title: string;
    @Output() public modalClose: EventEmitter<void> = new EventEmitter();
    @Input() public mode: ViewModes;
    public isClosing: boolean = false;

    constructor(private eventsservice: EventsService) {
    }

    public ngOnInit() {
        this.eventsservice.modalCloseEmitter.subscribe(() => {
            this.closeWindow();
        });
    }

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

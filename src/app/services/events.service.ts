import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
    public modalCloseEmitter: EventEmitter<void> = new EventEmitter();

    public closeModalWindow(): void {
        this.modalCloseEmitter.emit();
    }
}

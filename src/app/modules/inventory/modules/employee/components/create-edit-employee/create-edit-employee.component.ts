import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ViewModes } from '../../../../../../models';
import { Employee, EmployeeDTO } from '../../../../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../../../../../../services/events.service';

@Component({
    selector: 'app-create-edit-employee',
    templateUrl: './create-edit-employee.component.html',
    styleUrls: ['./create-edit-employee.component.scss']
})
export class CreateEditEmployeeComponent implements OnInit {
    @Input() mode: ViewModes;
    @Input() employee: Employee ;
    @Output() save: EventEmitter<Employee | EmployeeDTO> = new EventEmitter();
    @Output() cancel: EventEmitter<void> = new EventEmitter();

    constructor(private eventsService: EventsService) {
    }

    public title: string;
    public employeeForm: FormGroup;

    public ngOnInit(): void {
        if (this.mode === ViewModes.CREATE_MODE) {
            this.title = 'Добавить нового сотрудника';
            this.createForm();
        } else if (this.mode === ViewModes.EDIT_MODE) {
            this.title = 'Редактировать данные сотрудника';
            this.createForm(this.employee);
        }
    }

    public onModalClose() {
        this.cancel.emit();
    }

    public closeModal(): void {
        this.eventsService.closeModalWindow();
    }

    public submitForm(): void {
        switch (this.mode) {
            case ViewModes.CREATE_MODE:
                this.save.emit(this.employeeForm.getRawValue() as Employee);
                break;
            case ViewModes.EDIT_MODE:
                this.save.emit(this.employeeForm.getRawValue() as EmployeeDTO);
                break;
        }
    }

    private createForm(employee?: Employee) {
        this.employeeForm = new FormGroup({
            firstName: new FormControl(employee?.firstName || '', [Validators.required]),
            lastName: new FormControl(employee?.lastName || '', [Validators.required]),
            position: new FormControl(employee?.position || '', [Validators.required])
        });
    }

}

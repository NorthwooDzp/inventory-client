import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ViewModes } from '../../../../../../models';
import { CreateEmployeeDTO, EditEmployeeDTO, Employee } from '../../../../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-edit-employee',
    templateUrl: './create-edit-employee.component.html',
    styleUrls: ['./create-edit-employee.component.scss']
})
export class CreateEditEmployeeComponent implements OnInit {
    @Input() mode: ViewModes;
    @Input() employee: Employee;
    @Output() save: EventEmitter<CreateEmployeeDTO | EditEmployeeDTO> = new EventEmitter();
    @Output() cancel: EventEmitter<void> = new EventEmitter();

    public employeeForm: FormGroup;

    public ngOnInit(): void {
        switch (this.mode) {
            case ViewModes.CREATE_MODE:
                this.createForm();
                break;
            case ViewModes.EDIT_MODE:
                this.createForm(this.employee);
                break;
        }

    }

    public onModalClose() {
        this.cancel.emit();
    }

    public submitForm(): void {
        switch (this.mode) {
            case ViewModes.CREATE_MODE:
                this.save.emit(this.employeeForm.getRawValue() as CreateEmployeeDTO);
                break;
            case ViewModes.EDIT_MODE:
                this.save.emit(this.employeeForm.getRawValue() as EditEmployeeDTO);
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

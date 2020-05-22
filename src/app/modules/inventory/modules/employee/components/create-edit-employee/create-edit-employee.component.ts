import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EmployeeService } from '../../../../services';
import { ViewModes } from '../../../../../../models';
import { Employee, EmployeeDTO } from '../../../../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-edit-employee',
    templateUrl: './create-edit-employee.component.html',
    styleUrls: ['./create-edit-employee.component.scss']
})
export class CreateEditEmployeeComponent implements OnInit {
    @Input() mode: ViewModes;
    @Input() employee: Employee;
    @Output() save: EventEmitter<EmployeeDTO> = new EventEmitter();
    @Output() cancel: EventEmitter<void> = new EventEmitter();

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

    public closePopup() {
        this.cancel.emit();
    }

    public submitForm(): void {
        this.save.emit(this.employeeForm.getRawValue() as EmployeeDTO);
    }

    private createForm(employee?: Employee) {
        this.employeeForm = new FormGroup({
            firstName: new FormControl(employee?.firstName || '', [Validators.required]),
            lastName: new FormControl(employee?.lastName || '', [Validators.required]),
            position: new FormControl(employee?.position || '', [Validators.required])
        });
    }

}

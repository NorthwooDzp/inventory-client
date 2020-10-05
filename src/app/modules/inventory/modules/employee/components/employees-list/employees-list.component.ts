import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../../../services';
import { CreateEmployeeDTO, EditEmployeeDTO, Employee } from '../../../../models';
import { ViewModes } from '../../../../../../models';

@Component({
    selector: 'app-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
    public employees: Employee[];
    public modes = ViewModes;
    public mode: ViewModes = this.modes.DISPLAY_MODE;
    public selectedEmployee: Employee;

    constructor(private employeeService: EmployeeService) {
    }

    public ngOnInit(): void {
        this.getAllEmployees();
    }

    public onModalClose(): void {
        this.changeMode(this.modes.DISPLAY_MODE);
    }

    private getAllEmployees() {
        this.employeeService.getAll().subscribe(employees => {
            this.employees = employees;
        });
    }

    public changeMode(mode: ViewModes, id?: string) {
        if (mode === this.modes.EDIT_MODE || mode === this.modes.DELETE_MODE) {
            this.selectedEmployee = this.employees.find(emp => emp._id === id);
        } else {
            this.selectedEmployee = null;
        }
        this.mode = mode;
    }

    public saveEmployee(employee: CreateEmployeeDTO | EditEmployeeDTO): void {
        if (this.mode === ViewModes.CREATE_MODE) {
            this.createEmployee(employee as CreateEmployeeDTO);
        } else if (this.mode === this.modes.EDIT_MODE) {
            this.updateEmployee(employee as EditEmployeeDTO);
        }
    }

    public deleteEmployee(): void {
        this.employeeService.delete(this.selectedEmployee._id).subscribe(() => {
            this.changeMode(this.modes.DISPLAY_MODE);
        });
    }

    private createEmployee(employee: CreateEmployeeDTO): void {
        this.employeeService.create(employee).subscribe(newEmployee => {
            this.employees.push(newEmployee);
            this.changeMode(this.modes.DISPLAY_MODE);
        });
    }

    private updateEmployee(employee: EditEmployeeDTO) {
        this.employeeService.update(this.selectedEmployee._id, employee).subscribe(newEmployee => {
            this.employees.splice(
                this.employees.findIndex(emp => emp._id === this.selectedEmployee._id),
                1,
                newEmployee
            );
            this.changeMode(this.modes.DISPLAY_MODE);
        });
    }

}

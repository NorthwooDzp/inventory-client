import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../../../services';
import { Employee } from '../../../../models';
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

    constructor(private employeeService: EmployeeService) {
    }

    public ngOnInit(): void {
        this.getAllEmployees();
    }

    private getAllEmployees() {
        this.employeeService.getAll().subscribe(employees => {
            this.employees = employees;
        });
    }

    public addEmployee(): void {
        this.mode = this.modes.CREATE_MODE;
    }

}

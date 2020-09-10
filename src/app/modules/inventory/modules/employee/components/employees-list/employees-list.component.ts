import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../../../services';
import { Employee, EmployeeDTO } from '../../../../models';
import { ViewModes } from '../../../../../../models';
import { EventsService } from '../../../../../../services/events.service';

@Component({
    selector: 'app-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
    public employees: Employee[];
    public modes = ViewModes;
    public mode: ViewModes = this.modes.DISPLAY_MODE;

    constructor(private employeeService: EmployeeService,
                private eventService: EventsService) {
    }

    public ngOnInit(): void {
        this.getAllEmployees();
    }

    public onModalClose(): void {
        this.mode = ViewModes.DISPLAY_MODE;
    }

    private getAllEmployees() {
        this.employeeService.getAll().subscribe(employees => {
            this.employees = employees;
        });
    }

    public showCreateForm(): void {
        this.mode = this.modes.CREATE_MODE;
    }

    public showEditForm(id: string): void {

    }

    public saveEmployee(employee: Employee | EmployeeDTO): void {
        if (this.mode === ViewModes.CREATE_MODE) {
            this.createEmployee(employee as Employee);
        }
    }

    private createEmployee(employee: Employee): void {
        this.employeeService.create(employee).subscribe(newEmployee => {
            console.log(newEmployee);
            this.eventService.closeModalWindow();
        });
    }

}

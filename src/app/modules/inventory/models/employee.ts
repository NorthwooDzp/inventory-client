export interface Employee {
    _id?: string;
    firstName: string;
    lastName: string;
    position: string;
}

export interface EmployeeDTO extends Partial<Employee> {
}

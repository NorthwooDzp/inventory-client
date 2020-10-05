export interface Employee extends CreateEmployeeDTO{
    _id: string;
}

export interface CreateEmployeeDTO {
    firstName: string;
    lastName: string;
    position: string;
}

export interface EditEmployeeDTO extends Partial<CreateEmployeeDTO> {
}

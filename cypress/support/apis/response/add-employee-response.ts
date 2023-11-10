// Interface for add employee response
export interface ICreateEmployeeResponse {
  data: {
    employeeId: string;
    empNumber: number;
    firstName: string;
    middleName: string;
    lastName: string;
    terminationId: number;
  };
  meta: [];
  rels: [];
}

// add employee and delete employee initalizer
import { ICreateEmployeePayload } from "../apis/payload/add-employee-payload";
import { IDeleteEmployeePayload } from "../apis/payload/delete-employee-payload";
import GenericHelper from "../helpers/generic-helper";

export default class AddAndDeleteEmployee {
  static initAddEmployee(): ICreateEmployeePayload {
    let ICreateEmployeePayload: ICreateEmployeePayload = {
      firstName: `QA ${GenericHelper.genericRandomNumber()}`,
      middleName: `QA ${GenericHelper.genericRandomNumber()}`,
      lastName: `QA ${GenericHelper.genericRandomNumber()}`,
      empPicture: "",
      employeeId: `${GenericHelper.genericRandomNumber()}`,
    };
    return ICreateEmployeePayload;
  }

  static initDeleteEmployee(empNumber: number): IDeleteEmployeePayload {
    let IDeleteEmployeePayload: IDeleteEmployeePayload = {
      ids: [empNumber],
    };
    return IDeleteEmployeePayload;
  }
}

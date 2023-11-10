//  Add Location API Helper

import { IDeleteEmployeePayload } from "../apis/payload/delete-employee-payload";
import {IDeleteEmployeeResponse } from "../apis/response/delete-employee-response"
import AddAndDeleteEmployeeInit from "../initializers/add-Delete-employee-initializer"

export const URLs = {
    employee: `/web/index.php/api/v2/pim/employees`
}

export default class DeleteEmployeeHelper {
    static deleteEmployeeHelper(empNumber: number) {

        return cy.deleteEmployee(URLs.employee, AddAndDeleteEmployeeInit.initDeleteEmployee(empNumber)).then((response) => {
            response.data
        })

    }}
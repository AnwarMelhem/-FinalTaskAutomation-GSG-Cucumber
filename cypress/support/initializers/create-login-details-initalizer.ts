// Create Login Details initalizer

import GenericHelper from "../helpers/generic-helper";
import { ICreateLoginDetailsPayload } from "../apis/payload/create-login-details-payload";

export default class CreateLoginDetails {
  static CreateLoginDetailsInitalizer(empNumber:number,username:string,password:string): ICreateLoginDetailsPayload {
    let ICreateLocationPayload: ICreateLoginDetailsPayload = {
        empNumber:empNumber,
        password:password,
        status:true,
        userRoleId:2,
        username:username,
    };
    return ICreateLocationPayload;
  }
}

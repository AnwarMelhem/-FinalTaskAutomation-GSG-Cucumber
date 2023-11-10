//  Add Location API Helper
import { ICreateLoginDetailsPayload } from "../apis/payload/create-login-details-payload";
import { ICreateLoginDetailsResponse } from "../apis/response/create-login-details-response";
import CreateLoginDetails from "../initializers/create-login-details-initalizer";

export const URLs = {
  user: `/web/index.php/api/v2/admin/users`,
};

class CreateLoginDetailsHelper {
  static createLoginDetails(empNumber: number, username: string, password:string) {
    return cy
      .createLoginDetails(
        URLs.user,
        CreateLoginDetails.CreateLoginDetailsInitalizer(empNumber, username, password)
      )
      .then((response) => {
        response.data;
      });
  }
}

export default CreateLoginDetailsHelper;

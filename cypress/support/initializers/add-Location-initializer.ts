// add location initalizer

import GenericHelper from "../helpers/generic-helper";
import { ICreateLocationPayload } from "../apis/payload/add-location-payload";

export default class AddLocation {
  static initAddLocation(): ICreateLocationPayload {
    let ICreateLocationPayload: ICreateLocationPayload = {
      name: `QA ${GenericHelper.genericRandomNumber()}`,
      countryCode: "PS",
      province: "qa",
      city: "qa",
      address: "qa",
      zipCode: "qa",
      phone: "454",
      fax: "4485",
      note: "note",
    };
    return ICreateLocationPayload;
  }
}

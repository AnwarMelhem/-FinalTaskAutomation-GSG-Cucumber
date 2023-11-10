// Add job title API Helper'
import { ICreateAddJobTitlePayload } from "../apis/payload/add-job-title-payload";
import { ICreateAddJobTitleResponse } from "../apis/response/add-job-title-response";
import AddJobTitle from "../initializers/add-job-title-initializer";

export const URLs = {
  jobTitle: `/web/index.php/api/v2/admin/job-titles`,
};

class AddJobTitleHelper {
  static addJobTitle() {
    return cy
      .addJobTitle(URLs.jobTitle, AddJobTitle.initAddJobTitle())
      .then((response) => {
        response.data;
      });
  }


}

export default AddJobTitleHelper;

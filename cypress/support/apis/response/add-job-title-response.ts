// Interface for add job title response
export interface ICreateAddJobTitleResponse {
  data: {
    id: string;
    title: string;
    description: string;
    note: string;
    jobSpecification: {
      id: any;
      filename: any;
      fileType: any;
      fileSize: any;
    };
  };
  meta: [];
  rels: [];
}

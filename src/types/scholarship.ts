export interface IScholarship {
  id: number;
  programName: string;
  contents: string;
  min_point: string;
  max_point: string;
  department_name: string;
  internalNum: string;
  link: string;
  end_date: string;
}

export interface IDepartment {
  departmentName: string;
  internalNum: string;
  location: string;
}

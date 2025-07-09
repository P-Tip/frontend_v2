import { IDepartment } from "@/types/scholarship";

export interface DepartmentFilterProps {
  onSelectDepartment: (department: string) => void;
}

export interface DepartmentFilterState {
  selectedConsonant: string;
  selectedDepartment: string | null;
}

export interface DepartmentItemProps {
  department: IDepartment;
  isSelected: boolean;
  onClick: (department: IDepartment) => void;
}

import { useFilterScholarships } from "@/services/queries/scholarshipQuery";
import { IDepartment } from "@/types/scholarship";
import { consonant } from "@/utils/constant";
import { useEffect, useState } from "react";

interface DepartmentSearchProps {
  onSelectDepartment: (department: string) => void;
}

const DepartmentSearch = ({ onSelectDepartment }: DepartmentSearchProps) => {
  const [selectConsonant, setSelectConsonant] = useState("");
  const [selectDepartment, setSelectDepartment] = useState<string | null>(null);

  const { data: departments = [] } = useFilterScholarships(selectConsonant);

  const handleDepartmentClick = (department: IDepartment) => {
    if (selectDepartment === department.departmentName) {
      setSelectDepartment(null);
    } else {
      setSelectDepartment(department.departmentName);
    }
  };

  useEffect(() => {
    if (selectDepartment !== null) {
      onSelectDepartment(selectDepartment);
    } else {
      onSelectDepartment("");
    }
  }, [selectDepartment, onSelectDepartment]);

  return (
    <div>
      <div className="flex p-1">
        <select
          className="border border-ptu-gray rounded-lg p-2"
          value={selectConsonant}
          onChange={(e) => setSelectConsonant(e.target.value)}
        >
          <option value={""}>전체</option>
          {consonant.map((char) => (
            <option key={char} value={char}>
              {char}
            </option>
          ))}
        </select>
      </div>

      <div className="h-[calc(35vh)] overflow-y-auto">
        {departments.map((department: IDepartment) => (
          <div
            key={department.departmentName}
            className={`border border-ptu-gray rounded-lg p-2 m-1 cursor-pointer ${
              selectDepartment === department.departmentName
                ? "bg-ptu-green"
                : ""
            }`}
            onClick={() => handleDepartmentClick(department)}
          >
            {department.departmentName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentSearch;

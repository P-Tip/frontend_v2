import { getFilterScholarships } from "@/services/scholarshipApi";
import { IDepartment } from "@/types/scholarship";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface DepartmentSearchProps {
  onSelectDepartment: (department: string) => void;
}

const DepartmentSearch = ({ onSelectDepartment }: DepartmentSearchProps) => {
  const [selectConsonant, setSelectConsonant] = useState("");
  const [selectDepartment, setSelectDepartment] = useState<string | null>(null);
  const consonant = [
    "ㄱ",
    "ㄴ",
    "ㄷ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅅ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];

  const { data: departments = [] } = useQuery({
    queryKey: ["departments", selectConsonant],
    queryFn: () => getFilterScholarships(selectConsonant),
  });

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
          onChange={(e) => setSelectConsonant(e.target.value)}
        >
          <option value={""} disabled selected>
            부서 검색
          </option>
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

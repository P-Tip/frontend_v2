import React from "react";

export interface ScholarshipDetail {
  year: number;
  semester: number;
  amount: number;
  status: "지급완료" | "지급예정";
}

function getCurrentSemester() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const semester = month >= 3 && month <= 8 ? 1 : 2;
  const year = month <= 2 ? now.getFullYear() - 1 : now.getFullYear();
  return { year, semester };
}

function getAccumulatedScholarship(details: ScholarshipDetail[]) {
  const { year, semester } = getCurrentSemester();
  return details
    .filter((d) => d.year === year && d.semester === semester)
    .reduce((sum, cur) => sum + cur.amount, 0);
}

const ScholarshipBox = ({
  scholarshipDetails,
}: {
  scholarshipDetails: ScholarshipDetail[];
}) => {
  const accumulatedAmount = getAccumulatedScholarship(scholarshipDetails);

  return (
    <div className="bg-green-100 bg-opacity-50 p-4 rounded-xl shadow-sm flex items-center gap-4">
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="green"
          strokeWidth="2"
        >
          <circle
            cx="12"
            cy="10"
            r="4"
            fill="none"
            stroke="green"
            strokeWidth="2.5"
          />
          <path d="M10 14 L9 17 L11 16 Z" fill="green" />
          <path d="M14 14 L15 17 L13 16 Z" fill="green" />
        </svg>
      </div>
      <div>
        <p className="text-sm text-gray-500 font-bold">현재 누적 장학금</p>
        <p className="text-2xl font-bold text-green-700">
          {accumulatedAmount.toLocaleString()} 원
        </p>
      </div>
    </div>
  );
};

export default ScholarshipBox;

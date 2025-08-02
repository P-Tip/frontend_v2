// components/ScholarshipBox.tsx

import React from "react";

interface ScholarshipDetail {
  year: number;
  semester: number;
  amount: number;
  status: "지급완료" | "지급예정" | "기타";
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
    .filter(
      (d) =>
        d.year === year && d.semester === semester && d.status === "지급완료",
    )
    .reduce((sum, cur) => sum + cur.amount, 0);
}

const ScholarshipBox = ({
  scholarshipDetails,
}: {
  scholarshipDetails: ScholarshipDetail[];
}) => {
  const accumulatedAmount = getAccumulatedScholarship(scholarshipDetails);

  return (
    <div className="bg-[#E9FFF3] p-4 rounded-xl shadow-sm flex items-center gap-4">
      <div className="text-green-500 text-2xl">🎖️</div>
      <div>
        <p className="text-sm text-gray-600">현재 누적 장학금</p>
        <p className="text-2xl font-bold text-green-600">
          {accumulatedAmount.toLocaleString()} 원
        </p>
      </div>
    </div>
  );
};

export default ScholarshipBox;

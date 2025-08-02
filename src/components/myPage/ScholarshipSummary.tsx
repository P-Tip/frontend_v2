interface ScholarshipSummaryProps {
  solScholarship: number;
  ongoingPrograms: number;
  completedPrograms: number;
}

const ScholarshipSummary = ({
  solScholarship,
  ongoingPrograms,
  completedPrograms,
}: ScholarshipSummaryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          솔선수범 장학금
        </h2>
        <p className="text-orange-600 font-bold text-xl">
          {solScholarship.toLocaleString()}원
        </p>
      </div>
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          진행중인 프로그램
        </h2>
        <p className="text-blue-600 font-bold text-xl">{ongoingPrograms}개</p>
      </div>
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          완료된 프로그램
        </h2>
        <p className="text-purple-600 font-bold text-xl">
          {completedPrograms}개
        </p>
      </div>
    </div>
  );
};

export default ScholarshipSummary;

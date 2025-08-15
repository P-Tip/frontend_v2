interface ScholarshipSummaryProps {
  solScholarship: number;
  ongoingPrograms: number;
  completedPrograms: number;
  currentTotal?: number;
}

const ScholarshipSummary = ({
  solScholarship,
  ongoingPrograms,
  completedPrograms,
}: ScholarshipSummaryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <div className="bg-sky-50 bg-opacity-50 rounded-3xl shadow-sm p-4 hover:shadow-md transition-all duration-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-sm font-semibold text-gray-500">
              솔선수범 장학금
            </h2>
            <p className="font-bold text-xl">
              {solScholarship.toLocaleString()}원
            </p>
            <p className="text-gray-500 font-semibold text-sm">
              최대 700,000원
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 2.5c.3 0 .6.15.77.43l2.49 4.94 5.45.79a.75.75 0 0 1 .42 1.28l-3.94 3.84.93 5.42a.75.75 0 0 1-1.09.79L12 17.77l-4.87 2.56a.75.75 0 0 1-1.09-.79l.93-5.42-3.94-3.84a.75.75 0 0 1 .42-1.28l5.45-.79 2.49-4.94A.75.75 0 0 1 12 2.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-50 bg-opacity-50 rounded-3xl shadow-sm p-4 hover:shadow-md transition-all duration-300 ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-sm font-semibold text-gray-500">
              진행중인 프로그램
            </h2>
            <p className="font-bold text-xl">{ongoingPrograms}개</p>
            <p className="text-gray-500 font-semibold text-sm">장학금 지원</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-200 bg-opacity-50 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="blue" />
              <path
                d="M12 7v5l3 3"
                stroke="white"
                strokeWidth="2.5 "
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-sky-50 bg-opacity-50 rounded-3xl shadow-sm p-4 hover:shadow-md transition-all duration-300">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-sm font-semibold text-gray-500">
              완료된 프로그램
            </h2>
            <p className="font-bold text-xl">{completedPrograms}개</p>
            <p className="text-gray-500 font-semibold text-sm">장학금 수혜</p>
          </div>
          <div className="w-11 h-11 rounded-full bg-purple-200 bg-opacity-60 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipSummary;

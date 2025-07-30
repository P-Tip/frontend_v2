const SemesterHeader = ({ semester, lastUpdated }: { semester: string; lastUpdated: string }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold">{semester} 장학금 현황</h2>
    <p className="text-sm text-gray-500">최근 업데이트: {lastUpdated}</p>
  </div>
);

export default SemesterHeader;
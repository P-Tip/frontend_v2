import SemesterHeader from './SemesterHeader';
import ScholarshipBox from './ScholarshipBox';
import ScholarshipDetailTable, { ScholarshipItem } from './ScholarshipDetailTable';

const scholarshipData: ScholarshipItem[] = [
  { semester: '2025-1', name: '솔선수범 장학금', amount: 350000, status: '지급완료' },
  { semester: '2025-1', name: '학업성취 장학금', amount: 200000, status: '지급예정' },
];

const MyPage = () => {
  return (
    <div className="p-4 space-y-6">
      <SemesterHeader semester="2025년 1학기" lastUpdated="2025-07-29" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ScholarshipBox title="솔선수범 장학금" amount={350000} maxAmount={700000} />
        <ScholarshipBox title="진행중인 프로그램" amount={3} />
        <ScholarshipBox title="완료된 프로그램" amount={4} />
      </div>

      <ScholarshipDetailTable data={scholarshipData} />
    </div>
  );
};

export default MyPage;
import SemesterHeader from "./SemesterHeader";
// import ScholarshipBox from './ScholarshipBox';
import ScholarshipDetailTable, {
  ScholarshipItem,
} from "./ScholarshipDetailTable";
import ScholarshipSummary from "./ScholarshipSummary";

const scholarshipData: ScholarshipItem[] = [
  {
    semester: "2025-1",
    name: "솔선수범 장학금",
    amount: 200000,
    status: "지급완료",
  },
  {
    semester: "2025-1",
    name: "학업성취 장학금",
    amount: 200000,
    status: "지급예정",
  },
];

const MyPage = () => {
  return (
    <>
      <div className="p-2 space-y-6">
        <SemesterHeader semester="2025년 1학기" lastUpdated="2025-07-29" />
      </div>
      {/* <div className="">
      <ScholarshipBox scholarshipDetails={mockDetails} />
    </div> */}
      <div className="flex flex-col md:flex-row gap-4">
        <ScholarshipSummary
          ongoingPrograms={3}
          completedPrograms={4}
          solScholarship={0}
        />
      </div>
      <div className="mt-[20px]">
        <ScholarshipDetailTable data={scholarshipData} />
      </div>
    </>
  );
};

export default MyPage;

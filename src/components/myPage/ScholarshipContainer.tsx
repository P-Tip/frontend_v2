import SemesterHeader from "./SemesterHeader";
import ScholarshipBox from "./ScholarshipBox";
import { ScholarshipDetail } from "./ScholarshipBox";
import ScholarshipDetailTable, {
  ScholarshipItem,
} from "./ScholarshipDetailTable";
import ScholarshipSummary from "./ScholarshipSummary";

const scholarshipData: ScholarshipItem[] = [
  {
    semester: "2025-1",
    name: "성적우수 장학금",
    amount: 250000,
    status: "지급완료",
  },
  {
    semester: "2025-1",
    name: "근로 장학금",
    amount: 200000,
    status: "지급예정",
  },
  {
    semester: "2024-2",
    name: "국가장학금 1유형",
    amount: 1200000,
    status: "지급완료",
  },
];

const convertToDetail = (data: ScholarshipItem[]): ScholarshipDetail[] => {
  return data.map((item) => {
    const [yearStr, semStr] = item.semester.split("-");
    return {
      year: parseInt(yearStr),
      semester: parseInt(semStr),
      amount: item.amount,
      status: item.status,
    };
  });
};

const ScholarshipContainer = () => {
  const detailData = convertToDetail(scholarshipData);

  //솔선수범 장학금 임시값
  const solScholarship = 200000;

  return (
    <div className="w-full p-2 space-y-6">
      <SemesterHeader semester="2025년 1학기" lastUpdated="2025-07-29" />
      <ScholarshipBox scholarshipDetails={detailData} />
      <div className="flex flex-col md:flex-row gap-4">
        <ScholarshipSummary
          ongoingPrograms={3}
          completedPrograms={4}
          solScholarship={solScholarship}
        />
      </div>
      <div className="mt-[20px]">
        <ScholarshipDetailTable data={scholarshipData} />
      </div>
    </div>
  );
};

export default ScholarshipContainer;

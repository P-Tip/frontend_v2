interface ScholarshipSummaryProps {
  totalAmount: number;
  attendanceAmount: number;
  ongoingPrograms: number;
  completedPrograms: number;
}

const ScholarshipSummary = ({
  totalAmount,
  attendanceAmount,
  ongoingPrograms,
  completedPrograms,
}: ScholarshipSummaryProps) => {
  return (
    <div>
      <div>현재 누적 장학금: {totalAmount.toLocaleString()}원</div>
      <div>출석수업 장학금: {attendanceAmount.toLocaleString()}원</div>
      <div>진행중인 프로그램: {ongoingPrograms}개</div>
      <div>완료된 프로그램: {completedPrograms}개</div>
    </div>
  );
};

export default ScholarshipSummary;
import { Progress } from "@/components/ui/progress";

interface PointProgressProps {
  totalPoint: number;
}

const PointProgress = ({ totalPoint }: PointProgressProps) => {
  return (
    <div className="bg-ptu-light-green-bg rounded-2xl px-3.5 py-4">
      <h1 className="text-2xl font-bold text-left">나의 솔선수범 장학금</h1>
      <div className="text-right">
        <p className="font-medium">{totalPoint / 10000} / 70 만점</p>
        <Progress value={Math.min(totalPoint, 700000) / 7000} />
      </div>
    </div>
  );
};

export default PointProgress;

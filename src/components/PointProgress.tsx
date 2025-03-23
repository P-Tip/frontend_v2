import { Progress } from "@/components/ui/progress";

interface PointProgressProps {
  totalPoint: number;
}

export const PointProgress = ({ totalPoint }: PointProgressProps) => {
  return (
    <div className="bg-ptu-light-green-bg rounded-2xl px-3.5 sm:px-4 py-4 grid grid-cols-1 sm:grid-cols-2">
      <h1 className="text-2xl font-bold text-left">나의 솔선수범 장학금</h1>
      <div className="text-right">
        <p className="font-medium">{totalPoint / 10000} / 70 만점</p>
        <Progress value={Math.min(totalPoint, 700000) / 7000} />
      </div>
    </div>
  );
};

export const MypagePointProgress = ({ totalPoint }: PointProgressProps) => {
  return (
    <div className="bg-ptu-light-green-bg rounded-2xl p-3.5 mt-5">
      <span className="text-lg flex justify-between pb-2">
        <p className="font-semibold">나의 솔선수범 장학금</p>
        <p className="font-medium">{totalPoint / 10000} / 70 만점</p>
      </span>
      <Progress value={Math.min(totalPoint, 700000) / 7000} />
    </div>
  );
};

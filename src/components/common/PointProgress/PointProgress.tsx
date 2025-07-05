import { Progress } from "@/components/ui/progress";
import {
  PointProgressProps,
  DEFAULT_POINT_CONFIG,
} from "./PointProgress.types";

export const PointProgress = ({ totalPoint }: PointProgressProps) => {
  const { maxPoints, displayDivider, progressDivider } = DEFAULT_POINT_CONFIG;

  return (
    <div className="bg-brand-surface rounded-2xl px-6 py-6 border border-brand-border hover:shadow-md transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <h3 className="text-2xl font-bold text-brand-text-primary leading-8">
          나의 솔선수범 장학금
        </h3>
        <div className="text-right">
          <p className="font-semibold text-brand-text-primary mb-3 text-lg">
            {Math.floor(totalPoint / displayDivider)} / 70 만점
          </p>
          <Progress
            value={Math.min(totalPoint, maxPoints) / progressDivider}
            className="h-3"
          />
        </div>
      </div>
    </div>
  );
};

export const MypagePointProgress = ({ totalPoint }: PointProgressProps) => {
  const { maxPoints, displayDivider, progressDivider } = DEFAULT_POINT_CONFIG;

  return (
    <div className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border hover:shadow-md transition-all duration-300 animate-fadeIn">
      <div className="flex justify-between items-center pb-4">
        <p className="text-xl font-bold text-brand-text-primary leading-7">
          나의 솔선수범 장학금
        </p>
        <p className="font-semibold text-brand-text-primary text-lg">
          {Math.floor(totalPoint / displayDivider)} / 70 만점
        </p>
      </div>
      <Progress
        value={Math.min(totalPoint, maxPoints) / progressDivider}
        className="h-3"
      />
    </div>
  );
};

export interface PointProgressProps {
  totalPoint: number;
}

export interface PointProgressConfig {
  maxPoints: number;
  displayDivider: number;
  progressDivider: number;
}

export const DEFAULT_POINT_CONFIG: PointProgressConfig = {
  maxPoints: 700000,
  displayDivider: 10000,
  progressDivider: 7000,
};

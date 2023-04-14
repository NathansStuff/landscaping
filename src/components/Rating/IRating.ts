export interface IRatingProps {
  className?: string;
  count: number;
  value: number;
  color?: string;
  activeColor?: string;
  size?: number;
  isHalf?: boolean;
  emptyIcon?: React.ReactElement;
  halfIcon?: React.ReactElement;
  fullIcon?: React.ReactElement;
}

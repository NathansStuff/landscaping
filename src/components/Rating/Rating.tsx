import { ReactElement, cloneElement } from 'react';
import { IRatingProps } from './IRating';
import { EmptyStar, FullStar, HalfStar } from './Stars';

function Rating({
  className,
  count,
  value,
  color = '#ffd700',
  activeColor = '#ffc107',
  size = 30,
  isHalf = true,
  emptyIcon = <EmptyStar />,
  halfIcon = <HalfStar />,
  fullIcon = <FullStar />,
}: IRatingProps) {
  const stars = [];

  for (let i = 1; i <= count; i++) {
    let star: ReactElement;
    if (isHalf && value - i + 1 > 0 && value - i + 1 < 1) {
      star = halfIcon;
    } else if (i <= value) {
      star = fullIcon;
    } else {
      star = emptyIcon;
    }

    stars.push(
      <div key={i}>
        {cloneElement(star, {
          size: size,
          color: i <= value ? activeColor : color,
        })}
      </div>
    );
  }

  return <div className={`rating ${className}`}>{stars}</div>;
}

export default Rating;

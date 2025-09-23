interface PathAnimationProps {
  position: 'left' | 'right';
  width?: number;
  height?: number;
}

const inputPaths = [
  // 'M763 296 L 724.342 297.36 C 708.881 297.36 693.45 296.409 678.22 294.518 L 598.822 284.659 C 592.82 284.659 200.538 190.002 0.675 164.892',
  'M 774 312 L 701.108 310.061 L 598 290 L -1 181',
  'M 772 326 L 598.822 326.002 L 0.675 321.858',
  'M 769 340 L 701.108 340.388 L 599 358 L 3 480',
  // 'M758 353 L724.342 353.088 C708.881 353.088 693.45 354.039 678.22 355.93 L598.822 365.789 L0.6751 478.825'
];

const PathAnimation: React.FC<PathAnimationProps> = ({
  position,
  width = 800,
  height = 644
}) => {
  const isRight = position === 'right';
  return (
    <svg
      className="path-anim -z-1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`20 0 ${width} ${height}`}
      fill="none"
    >
      <g
        id={isRight ? "line_group_reverse" : "line_group"}
        {...(isRight && { transform: "scale(-1,1) translate(-844,0)" })}
      >
        {inputPaths.map((d, index) => (
          <g key={`${position}-path-${index}`}>
            <path
              id={`path-${position}-${index}`}
              d={d}
              stroke="url(#base_gradient)"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
            <ellipse
              rx="20"
              ry="2"
              fill="url(#flow_light)"
              filter="url(#glow)"
              opacity="1"
            >
              <animateMotion
                path={d}
                dur={1.5}
                repeatCount={1}
                rotate="auto"
                keyTimes="0;1"
                keyPoints="1;0"
              />
            </ellipse>
          </g>
        ))}
      </g>
    </svg>
  );
};

export default PathAnimation;
import React from 'react';

const arr = Array.from({ length: 21 }, (v, i) => ({
  rotate: (360 / 21) * i + 360 / 21,
  values: ""
    .padStart(i + 1, 1)
    .padEnd(21, 0)
    .split("")
    .join(";"),
}));
const sizeMap = {
  large: 151,
  medium: 75,
  small: 20
}
const Loading = () => {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"

      width="151px"
      height="151px"
      viewBox="0 0 100 100"
    >
      <g>
        {
          arr.map((item, index) => (
            <rect transform={"rotate(" + item.rotate + " 50 50)"}
              x="47.5"
              y="12.5"
              rx="2.5"
              ry="2.5"
              width="5"
              height="5"
              fill="#2D80E2"
              key={index}
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
          ))
        }

        {
          arr.map((item, index) => (
            <rect transform={"rotate(" + item.rotate + " 50 50)"}
              x="47.5"
              y="12.5"
              rx="2.5"
              ry="2.5"
              width="5"
              height="5"
              fill="#ccc"
              key={index}
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values={item.values}
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
          ))
        }
      </g>
    </svg >
  );
};

export default Loading;


import React from "react";
import { Figure } from "./Figure";
import { Bar } from "./Bar";
import { Caption, CaptionProps } from "./Caption";
import "./Plot.sass";

export interface PlotProps {
  heights: number[];
  numOfBars: number;
  active: number[];
  testing: number[];
  currentlySorting: boolean;
  finished: boolean;
  startSort: () => void;
  pauseSort: () => void;
  restartSort: () => void;
}

const Plot: React.FC<PlotProps> = (props: PlotProps) => {
  const bars: JSX.Element[] = props.heights.map((h, i) => {
    return (
      <Bar
        key={i}
        active={props.active.includes(i)}
        testing={props.testing.includes(i)}
        height={h}
        width={1 / props.heights.length}
      />
    );
  });

  return (
    <div className="plot">
      <Figure bars={bars} />
      <Caption
        numOfBars={props.numOfBars}
        currentlySorting={props.currentlySorting}
        startSort={props.startSort}
        pauseSort={props.pauseSort}
        restartSort={props.restartSort}
        finished={props.finished}
      />
    </div>
  );
};

export { Plot };

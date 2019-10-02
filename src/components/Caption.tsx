import React from "react";
import "./Plot.sass";

export interface CaptionProps {
  startSort: () => void;
  pauseSort: () => void;
  restartSort: () => void;
  numOfBars: number;
  currentlySorting: boolean;
  finished: boolean;
}

const Caption: React.FC<CaptionProps> = ({
  startSort,
  pauseSort,
  restartSort,
  numOfBars,
  currentlySorting,
  finished
}: CaptionProps) => {
  let label = finished ? "Restart" : currentlySorting ? "Pause" : "Sort";

  let clickHandler;
  if (finished) clickHandler = restartSort;
  else if (currentlySorting) clickHandler = pauseSort;
  else clickHandler = startSort;

  let sortButton: JSX.Element = (
    <button className="caption__sortbutton" onClick={clickHandler}>
      {label}
    </button>
  );

  return (
    <div className="caption">
      <div style={{ display: "flex" }}>
        <div className="caption__elements">
          {"Number of elements: " + numOfBars}
        </div>
      </div>
      {sortButton}
    </div>
  );
};

export { Caption };

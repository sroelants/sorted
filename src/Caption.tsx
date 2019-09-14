import React from "react";
import './Plot.sass';

export interface CaptionProps {
  startSort: () => void;
  numOfBars: number
  currentlySorting: boolean
}

interface captionState {
  startSort: () => void,
  numOfBars: number,
  currentlySorting: boolean
}

const Caption: React.FC<CaptionProps>  = 
  ({startSort, numOfBars, currentlySorting}: CaptionProps) => {
      let sortButton: JSX.Element = currentlySorting ? 
        (<button className="caption__sortbutton caption__sortbutton--disabled">
          {"Sorting..."}
         </button>) : 
        (<button className="caption__sortbutton" 
          onClick={() => {
            startSort()
          }}>Sort!</button>);
      return (
      <div className="caption">
        <div style={{display: 'flex'}}>
          <div className="caption__elements">{"Number of elements: " + numOfBars}</div>
          <div className="caption__steps">{"Number of steps: " + 0}</div>
        </div>
        {sortButton}
      </div>
      );
  }

export {Caption}

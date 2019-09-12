import React from "react";
import './Plot.sass';

export interface captionProps {
  startSort: () => void;
  numOfBars: number
  currentlySorting: boolean
}

interface captionState {
  startSort: () => void,
  numOfBars: number,
  currentlySorting: boolean
}

class Caption extends React.Component<captionProps, captionState> {
  constructor(props: captionProps) {
    super(props)
    this.state = {
                  startSort: props.startSort,
                  numOfBars: props.numOfBars,
                  currentlySorting: props.currentlySorting
                }
  }


    render() {
      let sortButton: JSX.Element = this.state.currentlySorting ? 
        (<button className="caption__sortbutton caption__sortbutton--disabled">
          {"Sorting..."}
         </button>) : 
        (<button className="caption__sortbutton" 
          onClick={() => {
            this.setState({currentlySorting: true})
            this.state.startSort()
          }}>Sort!</button>);
      return (
      <div className="caption">
        <div style={{display: 'flex'}}>
          <div className="caption__elements">{"Number of elements: " + this.state.numOfBars}</div>
          <div className="caption__steps">{"Number of steps: " + 0}</div>
        </div>
        {sortButton}
      </div>
      );
  }
}

export {Caption}

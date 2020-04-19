import React from "react";

class ProgressBar extends React.Component {
  getPercent = () => {
    switch (this.props.step) {
      case `2`:
        return 33;
      case `3`:
        return 66;
      case `completed`:
        return 100;
      default:
        return 1;
    }
  };

  render() {
    return (
      <>
        <p>Progress</p>
        <div
          style={{
            height: `10px`,
            width: `300px`,
            border: `1px #ccc solid`,
            background: `#efefef`,
          }}
        >
          <div
            style={{
              height: `100%`,
              background: `green`,
              width: `${this.getPercent()}%`,
            }}
          />
        </div>
      </>
    );
  }
}
export default ProgressBar;

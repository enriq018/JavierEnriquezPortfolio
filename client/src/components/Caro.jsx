import React, { Component } from 'react';

const PopOut = ({ pic, active, enlarge }) => (
  <div className={active ? "modal is-active" : "modal"} onClick={()=> enlarge()}>
    <div className="modal-background" />
    <div className="modal-content">
      <img src={pic} alt="" id="pop-pic" />
    </div>
    <button className="modal-close is-large" aria-label="close" />
  </div>
);


const CaroComponent = ({ pics, picIndex, activePic, enlarge, changePic }) => (
  <div className="image caro">
  <PopOut pic={pics[picIndex]} active={activePic} enlarge={enlarge}/>
    <img className="project-pic" src={pics[picIndex]} alt="Image" onClick={() => enlarge()} />
    <div className="caro-controls">
      <button onClick={ () => changePic('prev', true)} className="button is-info is-medium caro-button">
      <span className="icon is-large">
        <i className="fas fa-arrow-left" aria-hidden="true" />
      </span>
        <span> Previous Image </span>
      </button>

      <button onClick={() => changePic(null, true)} className="button is-info is-medium caro-button" >
        <span> Next Image </span>
      <span className="icon is-large">
        <i className="fas fa-arrow-right" aria-hidden="true" />
      </span>
      </button>
    </div>
  </div>
);

class Caro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picIndex: 0,
      autoEnabled: true,
      activePic: false,
    };
    this.changePic = this.changePic.bind(this);
    this.autoPic = this.autoPic.bind(this);
    this.enlarge = this.enlarge.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.autoPic();
    }, 7000);
  }

  autoPic() {
    if (this.state.autoEnabled) {
      this.changePic();
      setTimeout(() => {
        this.autoPic();
      }, 7000);
    }
  }

  changePic(direction, click) {
    if (click) {
      this.setState({ autoEnabled: false });
    }

    if (direction === 'prev') {
      if (this.state.picIndex !== 0) {
        this.setState( (prevState, props)=> {
          return { picIndex: prevState.picIndex - 1 };
        });
      }
    } else {
        if (this.state.picIndex !== this.props.pics.length - 1) {
          this.setState( (prevState, props)=> {
            return { picIndex: prevState.picIndex + 1 };
          });
        };
    }
  }

  enlarge() {
    this.setState( (prevState, props)=> {
      return { activePic: !prevState.activePic, autoEnabled: false };
    });
  }

  render() {
    return (
      <CaroComponent
        picIndex={this.state.picIndex}
        activePic={this.state.activePic}
        enlarge={this.enlarge}
        pics={this.props.pics}
        changePic={this.changePic}
      />
    );
  }
}

export default Caro;

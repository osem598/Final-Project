import React, {Component} from 'react';

import Main from './main'
import Test from './test'


export default class Actual extends Component {
    constructor(props){
        super(props);
        this.state={
        size:11,
        scalenum:1,
        fovPercentage:.4,
        pMarker:"X",
        lMarker:"o",
        startline:[1,1,1],
        objectpf:[[[2,2,2],[2,8,2]],[[2,8,2],[2,8,8]],[[2,8,8],[2,2,8]],[[2,2,8],[2,2,2]],[[8,2,2],[8,8,2]],[[8,8,2],[8,8,8]],[[8,8,8],[8,2,8]],[[8,2,8],[8,2,2]],[[2,2,2],[8,2,2]],[[2,8,2],[8,8,2]],[[2,2,8],[8,2,8]],[[2,8,8],[8,8,8]]],
        objectprepf:[[[2,2,2],[2,8,2]],[[2,8,2],[2,8,8]],[[2,8,8],[2,2,8]],[[2,2,8],[2,2,2]],[[8,2,2],[8,8,2]],[[8,8,2],[8,8,8]],[[8,8,8],[8,2,8]],[[8,2,8],[8,2,2]],[[2,2,2],[8,2,2]],[[2,8,2],[8,8,2]],[[2,2,8],[8,2,8]],[[2,8,8],[8,8,8]]],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleObjSubmit = this.handleObjSubmit.bind(this)
    }

    handleChange(event){
      this.setState({
        [event.target.name]: event.target.value
    })
    }

    handleObjSubmit(event){
      this.setState({
        objectpf:this.state.objectprepf
    })
    event.preventDefault();
    }

  render() {
    return (
      <div className="actual">
                <form onSubmit={this.handleObjSubmit}>
        <div className="input">
          Screen Size:
          <input type="text" name="size" value={this.state.size} placeholder="size" onChange={this.handleChange} />
        </div>
        <div className="input">
          Scale Multiplier:
          <input type="text" name="scalenum" value={this.state.scalenum} placeholder="scale" onChange={this.handleChange} />
        </div>
        <div className="input">
          Fov fovPercentage:
          <input type="text" name="fovPercentage" value={this.state.fovPercentage} placeholder="Fov" onChange={this.handleChange} />
        </div>
        <div className="input">
          Point Marker:
          <input type="text" name="pMarker" value={this.state.pMarker} placeholder="Point Marker" onChange={this.handleChange} />
          </div>
          <div className="input">
            Line Marker:
          <input type="text" name="lMarker" value={this.state.lMarker} placeholder="Line Marker" onChange={this.handleChange} />
          </div>
          <div className="object-input">
            Object:
          <textarea name="objectprepf" value={this.state.objectprepf} placeholder="Object" onChange={this.handleChange} />
          <button type="submit">Submit Object</button>
          </div>
        </form>
        <Main

        size = {this.state.size}
        scalenum = {this.state.scalenum}
        fovPercentage = {this.state.fovPercentage}
        pMarker= {this.state.pMarker}
        lMarker= {this.state.lMarker}
        fontsize= {this.state.fontsize}
        objectpf={this.state.objectpf}
        />


        
      </div>
    );
  }
}
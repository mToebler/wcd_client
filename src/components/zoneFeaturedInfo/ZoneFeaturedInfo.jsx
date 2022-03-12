import "./zoneFeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import axios from "axios";

export default class ZoneFeaturedInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { gpmTotal: {}, totalDuration: {}, gpmCurrent: {}, gpmDuration: {} };
    this.id = this.props.id;
  }  

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)    
    axios
      .get(`http://localhost:3030/api/v1/usage/gpm/${this.id}`)
      .then((res) => {
        const gpmTotal = res.data[0];
        const totalDuration = gpmTotal.duration;        
        this.setState({ gpmTotal });
        this.setState({ totalDuration });
        // console.log('ZFI DEBUG:', this.state);
      });
      
    axios
      .get(`http://localhost:3030/api/v1/usage/gpm/${this.id}/current`)
      .then((res) => {
        const gpmCurrent = res.data[0];
        const currentDuration = gpmCurrent.duration;        
        this.setState({ gpmCurrent });
        this.setState({ currentDuration });
        console.log('ZFI DEBUG:', this.state);
      });
  }

  render() {
    let arrow;
    if (this.state.gpmTotal.gpm > this.state.gpmCurrent.gpm) {
      arrow = <ArrowDownward className="featuredIcon" />
    } else {
      arrow = <ArrowUpward className="featuredIcon warning" />
    }

    return (
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Current GPM</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{parseFloat(this.state.gpmCurrent.gpm).toFixed(2)}</span>
            <span className="featuredMoneyRate">
              { parseFloat((1 - (this.state.gpmTotal.gpm/this.state.gpmCurrent.gpm)) * 100).toFixed(1) + '%'}
              {arrow}
            </span>
          </div>
          <span className="featuredSub">Last Full Cycle</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Lifetime GPM</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{parseFloat(this.state.gpmTotal.gpm).toFixed(2)}</span>
            <span className="featuredMoneyRate">
              {" "}              
            </span>
          </div>
          <span className="featuredSub">Total time: {this.state.totalDuration.hours}:{this.state.totalDuration.minutes}</span>
        </div>
      </div>
    );
  }
}

import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import axios from 'axios';

export default class FeaturedInfo extends React.Component {
   constructor(props) {
      super(props);
      this.state = { currentWeekUsage: {}, weekUsageLastYear: {},currentMonthUsage: {}, monthUsageLastYear: {} };
   }  
   
   componentDidMount() {
      console.log("ZFI DEBUG ID: ", this.id);
      axios
         .get(`http://localhost:3030/api/v1/flume/week/1`)
         .then((res) => {
            const currentWeekUsage = res.data[0];
            this.setState({ currentWeekUsage });
            console.log('FI DEBUG:', this.state);
         });
      
      axios
         .get(`http://localhost:3030/api/v1/flume/week/53`)
         .then((res) => {
            const weekUsageLastYear = res.data[0];
            this.setState({ weekUsageLastYear });
            console.log('FI DEBUG2:', this.state);
         });      
      
      axios
         .get(`http://localhost:3030/api/v1/flume/month/0`)
         .then((res) => {
            const currentMonthUsage = res.data[0];
            this.setState({ currentMonthUsage });
            console.log('FI DEBUG3:', this.state);
         });      
      
      axios
         .get(`http://localhost:3030/api/v1/flume/month/12`)
         .then((res) => {
            const monthUsageLastYear = res.data[0];
            this.setState({ monthUsageLastYear });
            console.log('FI DEBUG4:', this.state);
         });      

   }

   render() {
      let arrow;
      let monthArrow;
      if (this.state.currentWeekUsage.usage < this.state.weekUsageLastYear.usage) {
        arrow = <ArrowDownward className="featuredIcon" />
      } else {
        arrow = <ArrowUpward className="featuredIcon warning" />
      }

      if(this.state.currentMonthUsage.usage < this.state.monthUsageLastYear.usage) {
         monthArrow = <ArrowDownward className="featuredIcon" />
       } else {
         monthArrow = <ArrowUpward className="featuredIcon warning" />
       }
   
      return (
         <div className='featured'>
            <div className='featuredItem'>
               <span className="featuredTitle">Last 7 Days </span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">{ this.state.currentWeekUsage.usage }</span>
                  <span className="featuredMoneyRate">
                     { parseFloat((1 - (this.state.weekUsageLastYear.usage/this.state.currentWeekUsage.usage)) * 100).toFixed(1) + '%'}
                     {arrow}
                  </span>
               </div>
               <span className="featuredSub">Compared to last year</span>
            </div>
            <div className='featuredItem'>
               <span className="featuredTitle">Last 30 Days</span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">{this.state.currentMonthUsage.usage }</span>
                  <span className="featuredMoneyRate">{parseFloat((1 - (this.state.monthUsageLastYear.usage / this.state.currentMonthUsage.usage)) * 100).toFixed(1) + '%'}
                     {monthArrow}
                  </span>
               </div>
               <span className="featuredSub">Compared to last year</span>
            </div>
            <div className='featuredItem'>
               <span className="featuredTitle">YTD Usage</span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">22,134</span>
                  <span className="featuredMoneyRate">5.5<ArrowUpward className='featuredIcon' /></span>
               </div>
               <span className="featuredSub">Compared to last year</span>
            </div>
         </div>
      )
   }
}

import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import axios from 'axios';
import {authHeader} from '../../services/auth.header'

export default class FeaturedInfo extends React.Component {
   constructor(props) {
      super(props);
      this.state = { currentWeekUsage: {}, weekUsageLastYear: {}, currentMonthUsage: {}, monthUsageLastYear: {}, YTDUsageLastYear: {}, YTDUsage: {} };
   }  
   
   componentDidMount() {
      console.log("ZFI DEBUG ID: ", this.id);
      axios
         .get(`http://localhost:3030/api/v1/flume/week/1`, { headers: authHeader() })
         .then((res) => {
            const currentWeekUsage = res.data[0];
            this.setState({ currentWeekUsage });
            console.log('FI DEBUG:', this.state);
         });
      
      axios
         .get(`http://localhost:3030/api/v1/flume/week/53`, { headers: authHeader() })
         .then((res) => {
            const weekUsageLastYear = res.data[0];
            this.setState({ weekUsageLastYear });
            console.log('FI DEBUG2:', this.state);
         });      
      
      axios
         .get(`http://localhost:3030/api/v1/flume/month/0`, { headers: authHeader() })
         .then((res) => {
            const currentMonthUsage = res.data[0];
            this.setState({ currentMonthUsage });
            console.log('FI DEBUG3:', this.state);
         });      
      
      axios
         .get(`http://localhost:3030/api/v1/flume/month/12`, { headers: authHeader() })
         .then((res) => {
            const monthUsageLastYear = res.data[0];
            this.setState({ monthUsageLastYear });
            console.log('FI DEBUG4:', this.state);
         });      

      axios
         .get(`http://localhost:3030/api/v1/flume/year/ytd`, { headers: authHeader() })
         .then((res) => {
            const YTDUsage = res.data[0];
            this.setState({ YTDUsage });
            console.log('FI DEBUG YTD:', this.state);
         });      
         
      axios
         .get(`http://localhost:3030/api/v1/flume/year/prevytd`, { headers: authHeader() })
         .then((res) => {
            const YTDUsageLastYear = res.data[0];
            this.setState({ YTDUsageLastYear });
            console.log('FI DEBUG YTDLast:', this.state);
         });               
   }

   render() {
      let arrow;
      let monthArrow;
      let yearArrow
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
   
       if(this.state.YTDUsage.usage < this.state.YTDUsageLastYear.usage) {
         yearArrow = <ArrowDownward className="featuredIcon" />
       } else {
         yearArrow = <ArrowUpward className="featuredIcon warning" />
       }
   
      return (
         <div className='featured'>
            <div className='featuredItem'>
               <span className="featuredTitle">Last 7 Days </span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">{ parseInt(this.state.currentWeekUsage.usage).toLocaleString("en-US") }</span>
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
                  <span className="featuredMoney">{parseInt(this.state.currentMonthUsage.usage).toLocaleString("en-US")  }</span>
                  <span className="featuredMoneyRate">{parseFloat((1 - (this.state.monthUsageLastYear.usage / this.state.currentMonthUsage.usage)) * 100).toFixed(1) + '%'}
                     {monthArrow}
                  </span>
               </div>
               <span className="featuredSub">Compared to last year</span>
            </div>
            <div className='featuredItem'>
               <span className="featuredTitle">YTD Usage</span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">{parseInt(this.state.YTDUsage.usage).toLocaleString("en-US") } </span>
                  <span className="featuredMoneyRate">{parseFloat((1 - (this.state.YTDUsageLastYear.usage / this.state.YTDUsage.usage)) * 100).toFixed(1) + '%'}
                     {yearArrow}
                  </span>
               </div>
               <span className="featuredSub">Compared to last year</span>
            </div>
         </div>
      )
   }
}

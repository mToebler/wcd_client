import './home.css'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
// import { usageData } from '../../../dummy'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'
import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         usageData: [],
         usageData2: []
      };
    }

   componentDidMount() {
      axios
         .get(`http://localhost:3030/api/v1/usage/all/year`)
         .then((res) => {
            const usageData = res.data;
            console.log('DEBUG:', usageData);
            this.setState({ usageData });
         });      
   }
   
   render() {
      return (
         <div className="home">
            <FeaturedInfo />
            <Chart data={this.state.usageData} title='Irrigation v. Total Usage in Gallons' grid dataKey='usage' dataKey2='totalUsage' aspect='5' />
            <div className="homeWidgets">
               <WidgetSm />
               <WidgetLg />
            </div>
         </div>
      )
   }
}
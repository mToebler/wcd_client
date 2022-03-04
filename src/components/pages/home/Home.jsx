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
        usageData: []
      };
    }

   componentDidMount() {
      axios
         .get(`http://localhost:3030/api/v1/usage/monthly`)
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
            <Chart data={this.state.usageData} title='Irrigation Water Usage' grid dataKey='usage' aspect="5" />
            <div className="homeWidgets">
               <WidgetSm />
               <WidgetLg />
            </div>
         </div>
      )
   }
}
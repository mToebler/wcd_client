import './home.css'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import { usageData } from '../../../dummy'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'

export default function Home() {
   return (
      <div className="home">
         <FeaturedInfo />
         <Chart data={usageData} title='Water Usage' grid dataKey='Monthly Usage' />
         <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
         </div>
      </div>
   )
}
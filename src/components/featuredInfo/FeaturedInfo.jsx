import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function FeaturedInfo() {
  return (
     <div className='featured'>
        <div className='featuredItem'>
           <span className="featuredTitle">Weekly Usage</span>
           <div className="featuredMoneyContainer">
              <span className="featuredMoney">2,134</span>
              <span className="featuredMoneyRate">-11.5<ArrowDownward className='featuredIcon negative' /></span>              
           </div>
           <span className="featuredSub">Compared to last month</span>
        </div>
        <div className='featuredItem'>
           <span className="featuredTitle">Monthly Usage</span>
           <div className="featuredMoneyContainer">
              <span className="featuredMoney">16,134</span>
              <span className="featuredMoneyRate"> 17.5 <ArrowUpward className='featuredIcon' /></span>              
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

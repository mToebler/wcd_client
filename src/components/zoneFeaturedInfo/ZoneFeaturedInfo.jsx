import './zoneFeaturedInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function ZoneFeaturedInfo() {
  return (
     <div className='featured'>
        <div className='featuredItem'>
           <span className="featuredTitle">Average GPM</span>
           <div className="featuredMoneyContainer">
              <span className="featuredMoney">23.5</span>
              <span className="featuredMoneyRate">-11.5<ArrowDownward className='featuredIcon negative' /></span>              
           </div>
           <span className="featuredSub">Last Full Cycle</span>
        </div>
        <div className='featuredItem'>
           <span className="featuredTitle">Lifetime GPM</span>
           <div className="featuredMoneyContainer">
              <span className="featuredMoney">28.8</span>
              <span className="featuredMoneyRate"> +0.5 <ArrowUpward className='featuredIcon' /></span>              
           </div>
           <span className="featuredSub">Total hours: 1032</span>
        </div>
      </div>
  )
}

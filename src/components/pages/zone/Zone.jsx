import "./zone.css";
import ZoneFeaturedInfo from '../../zoneFeaturedInfo/ZoneFeaturedInfo'
import { CropOriginal, Check, Opacity, SquareFoot, Landscape, LocalFlorist, WbSunny } from "@material-ui/icons";
import { usageData } from '../../../dummy'
import Chart from '../../chart/Chart'

export default function Zone() {
  return (
    <div className="zone">
      <div className="zoneTitleContainer">
        <h1 className="zoneTitle">Zone Detail</h1>
        <button className="zoneActionButton">action</button>
      </div>
      <div className="zoneContainer">
        <div className="zoneShow">
          <div className="zoneShowTop">
            <img
              src="https://prod-media-photo.rach.io/1d6dd916-e2d2-42c7-967c-f66e661daaca"
              className="zoneShowImage"
              alt=""
            />
            <div className="zoneShowTopTitle">
              <span className="zoneShowName">Zone 1</span>
              <span className="zoneShowDesc">
                Back planter, under stairs, and around BBQ
              </span>
            </div>
          </div>          
          <div className="zoneShowBottom">
            <span className="zoneShowTitle">Zone Details</span>
            <div className="zoneShowInfo">
              <Check className="zoneShowIcon" />
              <span className="zoneShowInfoTitle">Enabled</span>
            </div>
            <div className="zoneShowInfo">
              <Opacity className="zoneShowIcon" />
              <span className="zoneShowInfoTitle">Bubbler</span>
            </div>
            <div className="zoneShowInfo">
              <SquareFoot className="zoneShowIcon" />
              <span className="zoneShowInfoTitle">1 inch/hour</span>
            </div>
            <div className="zoneShowInfo">
              <Landscape className="zoneShowIcon" />
              <span className="zoneShowInfoTitle">Loamy Sand</span>
            </div>
            <div className="zoneShowInfo">
              <LocalFlorist className="zoneShowIcon" />
              <span className="zoneShowInfoTitle">Shrubs</span>
            </div>
            <div className="zoneShowInfo">
              <WbSunny className="zoneShowIcon" />
              <span className="zoneShowInfoTitle">Lots of Sun</span>
            </div>
          </div>
        </div>
        <div className="zoneAnalytics">
        <ZoneFeaturedInfo />
        <Chart data={usageData} title='Water Usage' grid dataKey='Monthly Usage' className='chart'/>
        </div>
      </div>
    </div>
  );
}

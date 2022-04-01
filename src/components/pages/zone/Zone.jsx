import './zone.css';
import ZoneFeaturedInfo from '../../zoneFeaturedInfo/ZoneFeaturedInfo';
import {
  CropOriginal,
  Check,
  Opacity,
  SquareFoot,
  Landscape,
  LocalFlorist,
  WbSunny,
  DateRange,
  Watch,
  ChevronLeft,
  ChevronRight,
} from '@material-ui/icons';
import moment from 'moment';
// import { usageData } from "../../../dummy";
import Chart from '../../chart/Chart';
import React from 'react';
import axios from 'axios';
import { authHeader } from '../../../services/auth.header';

export default class Zone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zone: {},
      customNozzle: {},
      customCrop: {},
      customSoil: {},
      customShade: {},
      usageData: [],
      isWatering: {},
    };
    this.id = this.props.id;
  }

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    console.log('DEBUG ID: ', this.id);
    this.setState({ isWatering: false });

    axios
      .get(`http://localhost:3030/api/v1/rachio/zone/${this.id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        const zone = res.data;
        const customNozzle = zone['customNozzle'];
        const customCrop = zone['customCrop'];
        const customSoil = zone['customSoil'];
        const customShade = zone['customShade'];

        console.log(zone);
        console.log('DEBUG:', customNozzle);

        this.setState({ zone });
        this.setState({ customNozzle });
        this.setState({ customCrop });
        this.setState({ customSoil });
        this.setState({ customShade });
      });

    axios
      .get(`http://localhost:3030/api/v1/usage/monthly/${this.id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        const usageData = res.data;
        console.log('ZoneChartDebug:', usageData);
        this.setState({ usageData });
      });
  }

  startRachio() {
    this.setState({ isWatering: true });
    axios
      .get(
        `http://localhost:3030/api/v1/rachio/startzone/${this.state.zone.zoneNumber}/duration/180`,
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        console.log('startRachio res', res);
        res
          ? this.setState({ isWatering: true })
          : this.setState({ isWatering: false });
      });
  }

  render() {
    const prevZone =
      this.state.zone.zoneNumber - 1 < 1 ? 16 : this.state.zone.zoneNumber - 1;
    const nextZone =
      this.state.zone.zoneNumber + 1 > 16 ? 1 : this.state.zone.zoneNumber + 1;

    return (
      <div className='zone'>
        <div className='zoneTitleContainer'>
          <div className='zoneTitleBrowserContainer'>
            <div className='zoneBrowserContainter'>
              <span className='browseleft'>
                <a href={'/zone/' + prevZone}>
                  <ChevronLeft />
                </a>
              </span>
              <span className='browseright'>
                <a href={'/zone/' + nextZone}>
                  <ChevronRight />
                </a>
              </span>
            </div>
            <h1 className='zoneTitle'>{this.state.zone.name}</h1>
          </div>
          <button
            className='zoneActionButton'
            onClick={this.startRachio.bind(this)}
          >
            {this.state.isWatering ? 'watering' : 'start'}
          </button>
        </div>
        <div className='zoneContainer'>
          <div className='zoneShow'>
            <div className='zoneShowTop'>
              <img
                src={this.state.zone.imageUrl}
                className='zoneShowImage'
                alt=''
              />
            </div>
            <div className='zoneShowBottom'>
              <span className='zoneShowTitle'>
                Zone {this.state.zone.zoneNumber} Details
              </span>
              <div className='zoneShowBottomContainer'>
                <div className='zoneShowBottomCol'>
                  <div className='zoneShowInfo'>
                    <Check
                      className={
                        this.state.zone.enabled
                          ? 'zoneShowIcon enabled'
                          : 'zoneShowIcon disabled'
                      }
                    />
                    <span
                      className={
                        this.state.zone.enabled
                          ? 'zoneShowInfoTitle enabled'
                          : 'zoneShowInfoTitle disabled'
                      }
                    >
                      {this.state.zone.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                  <div className='zoneShowInfo'>
                    <Opacity className='zoneShowIcon' />
                    <span className='zoneShowInfoTitle capitalize'>
                      {`${this.state.customNozzle.name}`.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className='zoneShowInfo'>
                    <SquareFoot className='zoneShowIcon' />
                    <span className='zoneShowInfoTitle'>
                      {' '}
                      {this.state.customNozzle.inchesPerHour} inch/hour
                    </span>
                  </div>
                </div>
                <div className='zoneShowBottomCol'>
                  <div className='zoneShowInfo'>
                    <Landscape className='zoneShowIcon' />
                    <span className='zoneShowInfoTitle capitalize'>
                      {`${this.state.customSoil.name}`.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className='zoneShowInfo'>
                    <LocalFlorist className='zoneShowIcon' />
                    <span className='zoneShowInfoTitle capitalize'>
                      {this.state.customCrop.name}
                    </span>
                  </div>
                  <div className='zoneShowInfo'>
                    <WbSunny className='zoneShowIcon' />
                    <span className='zoneShowInfoTitle capitalize'>
                      {`${this.state.customShade.name}`.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='zoneShowFooter'>
              <span className='zoneShowFooterTitle'>Last Watered:</span>
              <div className='zoneShowBottomContainer'>
                <div className='zoneShowBottomCol'>
                  <div className='zoneShowInfo'>
                    <DateRange className='zoneShowIcon' />
                    <span className='zoneShowInfoTitle'>
                      {moment(new Date(this.state.zone.lastWateredDate)).format(
                        'MMM Do YYYY'
                      )}
                    </span>
                  </div>
                </div>
                <div className='zoneShowBottomCol'>
                  <div
                    className={`zoneShowInfo ${
                      this.state.zone.lastWateredDuration ? '' : 'hide'
                    }`}
                  >
                    <Watch className='zoneShowIcon' />
                    <span className='zoneShowInfoTitle'>
                      {Math.round(this.state.zone.lastWateredDuration / 60)}{' '}
                      mins
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='zoneAnalytics'>
            <ZoneFeaturedInfo id={this.props.id} />
            <Chart
              data={this.state.usageData}
              title='Water Usage'
              grid
              dataKey='usage'
              aspect='3'
              className='chart'
            />
          </div>
        </div>
      </div>
    );
  }
}

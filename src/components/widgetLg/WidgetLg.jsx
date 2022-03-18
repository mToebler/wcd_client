import React from 'react';
import './widgetLg.css';
import axios from 'axios';

export default class WidgetLg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zones: [] };
  }

  componentDidMount() {
    var zones;
    axios.get(`http://localhost:3030/api/v1/usage/recent/10`)
      .then((res) => {
      zones = res.data;
      console.log('widgetLg zones', zones);
      this.setState({ zones });      
    });
  }

  render() {    
    console.log('WidgetLg render zones:', this.state);
    const latestZoneInfo = this.state.zones.map((el, idx) =>       
      <tbody key={idx}>
        <tr className='widgetLgTr'>
          <td className='widgetLgZone'>
            <img src={el.img} alt='Zone: {el.name}' className='widgetLgImg' />
            <span className='widgetLgName'>{el.name}</span>
          </td>
          <td className='widgetLgDate'>{el.start_time}</td>
          <td className='widgetLgDuration'>{el.duration['minutes']}</td>
          <td className='widgetLgUsage'>{el.usage}</td>
        </tr>
      </tbody>
    );
    console.log('WidgetLg: latestZoneInfo', latestZoneInfo);

    return (
      <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Latest Irrigation Activity</h3>
        <table className='widgetLgTable'>
          <thead>
            <tr className='widgetLgTr'>
              <th className='widgetLgTh'>Zone</th>
              <th className='widgetLgTh'>Start Time</th>
              <th className='widgetLgTh'>Duration</th>
              <th className='widgetLgTh'>Usage</th>
            </tr>
          </thead>
          {latestZoneInfo}
        </table>
      </div>
    );
  }
}

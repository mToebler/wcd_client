import './widgetSm.css';
import React from 'react';
import { Visibility } from '@material-ui/icons';
import axios from 'axios';
import SimpleBarChart from '../chart/SimpleBarChart';

export default class WidgetSm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { usageData: [] }
  }

  componentDidMount() {
    axios.get(`http://localhost:3030/api/v1/flume/latest/20`)
      .then((res) => {
        const usageDataBackwards = res.data;
        const usageData = [...usageDataBackwards].reverse()
        console.log('DEBUG: WidgetSm', usageData);
        this.setState({ usageData });
      })
  }
  render() {
    console.log('render Widgit', this.state.usageData, )
    console.log('widgetSm: state', this.state)
    return (
      <div className='widgetSm'>
        <span className='widgetSmTitle'>Latest Water Usage</span>
        <SimpleBarChart data={this.state.usageData} title='Latest Water Usage' grid dataKey='usage' aspect='5'/>
      </div>
    );
  }
}

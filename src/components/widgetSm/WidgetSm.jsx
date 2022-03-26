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
  // To stop rerending later
  intervalID;

  getData = () => {
    axios.get(`http://localhost:3030/api/v1/flume/recent/10`)
    .then((res) => {
      console.log('CDM: res.data', res.data.usage);
      const usageDataBackwards = res.data.usage;        
      const usageData = [...usageDataBackwards].reverse()
      this.setState({ usageData });
      this.intervalID = setTimeout(this.getData.bind(this), 60000);
    })
  }

  componentDidMount() {
    this.getData()
  }

  componentWillUnmount() {
    /*
      stop getData() from continuing to run even
      after unmounting component. Calling
      'clearTimeout()` here rather than `clearInterval()`
    */
    clearTimeout(this.intervalID);
  }

  render() {
    console.log('render Widgit', this.state.usageData, )
    console.log('widgetSm: state', this.state)
    return (
      <div className='widgetSm'>
              
        <SimpleBarChart data={this.state.usageData} title='Latest Water Usage' grid dataKey='value' aspect='5'/>
              
      </div>
    );
  }
}

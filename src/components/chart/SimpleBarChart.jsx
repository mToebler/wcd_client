import React from 'react'
import './simpleBarChart.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function SimpleBarChart({ title, data, dataKey, grid, aspect }) {
  const ratio = aspect ? aspect : 5;
  const datamax = dataKey ? ((Math.max(...data.map(o => o.usage)))) : ((Math.max(...data.map(o => o.usage))));
  
  return (
    <div className="outter_barchart">
      <div className="barchart">
      <h3 className="barchartTitle">{ title }</h3>
        <ResponsiveContainer
          /*width='55' height='200' */aspect={ ratio}  > 
          <BarChart data={data}
            buffer={{ top: 0, right: 30, left: 0, bottom: 0 }}
            width={600} height={200}>
            <XAxis dataKey='timestamp' stroke='#444444' tick={{fontSize: 10}} />
            <YAxis type='number' stroke='#555555' dataKey='value' tick={{ fontSize: 10 }} domain={[0, datamax => { return datamax }]} />
            <Bar barSize={20} type='monotone' dataKey={dataKey} stroke='#a2a2cd' />            
            {/* <Line type='monotone' dataKey='totalUsage' stroke='#5550bd' /> */}
            <Tooltip />
            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>    
  )
}

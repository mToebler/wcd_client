import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid, aspect}) {
  const ratio = aspect ? aspect : 5; 
  return (
     <div className="chart">
        <h3 className="chartTitle">{ title }</h3>
        <ResponsiveContainer width='100%' aspect={ ratio }>
           <LineChart data={data} >
              <XAxis dataKey='name' stroke='#5550bd' />
              <YAxis type='number' domain={[0, dataMax=>((Math.max(...data.map(o=>o.usage)))+200)]}  />
              <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
              <Tooltip />
              {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
           </LineChart>
        </ResponsiveContainer>
     </div>
  )
}

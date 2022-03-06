import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, dataKey2, grid, aspect}) {
   const ratio = aspect ? aspect : 5; 
   const dKey2 = dataKey2 ? dataKey2 : undefined;
   const datamax = dataKey2 ? ((Math.max(...data.map(o => o.totalUsage))) + 200) : ((Math.max(...data.map(o => o.usage))) + 200);
   console.log("chart: dataKey2:", dataKey2);
   console.log("chart: datamax:", datamax);
  return (
     <div className="chart">
        <h3 className="chartTitle">{ title }</h3>
        <ResponsiveContainer width='100%' aspect={ ratio }>
           <LineChart data={data}>
              <XAxis dataKey='name' stroke='#444444' tick={{fontSize: 12}} />
              <YAxis type='number' stroke='#555555' tick={{ fontSize: 12 }} domain={[0, dataMax => { return datamax }]}  />
              <Line type='monotone' dataKey={dataKey} stroke='#a2a2cd' />
              {dKey2 && <Line type='monotone' dataKey={dKey2} stroke='#5550bd' /> }
              {/* <Line type='monotone' dataKey='totalUsage' stroke='#5550bd' /> */}
              <Tooltip />
              {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
           </LineChart>
        </ResponsiveContainer>
     </div>
  )
}

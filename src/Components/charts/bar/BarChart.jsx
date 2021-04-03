import React from 'react'
import Chart from "react-apexcharts"

function BarChart(props) {
    return (
        <div>
            <Chart
              options={props.data.options}
              series={props.data.series}
              type="bar"
              width={props.width}
              height={props.height}
            />
        </div>
    )
}

export default BarChart

"use strict";

import {
  default as React,
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  Xaxis,
  Yaxis,
  Xgrid,
  Ygrid,
  Legend
} from 'react-d3-core';

import {
  BarStack,
  Chart
} from 'react-d3-shape';

import CommonProps from './commonProps';

export default class BarStackChart extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: () => {},
    onMouseOut: () => {},
    ...CommonProps
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired
  }

  render() {

    const {
      width,
      height,
      margins,
      data,
      chartSeries,
      showXGrid,
      showYGrid,
      showLegend,
      categoricalColors
    } = this.props;

    var xgrid, ygrid;

    if(showXGrid) xgrid = <Xgrid/>
    if(showYGrid) ygrid = <Ygrid/>

    return (
      <div>
        {showLegend?
          <Legend
            {...this.props}
            width= {width}
            margins= {margins}
            chartSeries= {chartSeries}
            categoricalColors= {categoricalColors}
          />
          : null
        }
        <Chart
          {...this.props}
          width= {width}
          height= {height}
          data= {data}
          chartSeries= {chartSeries}
          stack= {true}
          >
          <BarStack
            chartSeries= {chartSeries}
          />
          {xgrid}
          {ygrid}
          <Xaxis/>
          <Yaxis/>
          {this.props.children}
        </Chart>
      </div>
    )
  }
}

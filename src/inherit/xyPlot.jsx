"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';


export default class xyChart extends Component {
  constructor(props) {
    super(props);
    const {chartSeries} = this.props;

    this.setScale = this.setScale.bind(this);
    this.setDomain = this.setDomain.bind(this);

    this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null,
      xScaleSet: null,
      yScaleSet: null,
      xDomainSet: null,
      yDomainSet: null,
      chartSeriesData: chartSeries? this.mkSeries(): null
    }
  }

  static defaultProps = {
    showLegend: true,
    categoricalColors: d3.scale.category10(),
    showXGrid: true,
    showYGrid: true,
    showXAxis: true,
    showYAxis: true,
  }

  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    id: PropTypes.string,
    margins: PropTypes.object.isRequired,
    svgClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    yAxisClassName: PropTypes.string,
    xAxisClassName: PropTypes.string,
    legendClassName: PropTypes.string,
    lineClass: PropTypes.string,
    scatterClass: PropTypes.string,
    showScatter: PropTypes.bool,
    showLegend: PropTypes.bool,
    showXAxis: PropTypes.bool,
    showYAxis: PropTypes.bool,
    lineMulti: PropTypes.array,
    interpolate: PropTypes.string,
    legendPosition: PropTypes.oneOf(['left', 'right']),
    x: PropTypes.func.isRequired,
    xDomain: PropTypes.array,
    xRange: PropTypes.array,
    xScale: PropTypes.string.isRequired,
    xOrient: PropTypes.oneOf(['bottom', 'top']),
    xTickOrient: PropTypes.oneOf(['bottom', 'top']),
    xAxisClassName: PropTypes.string,
    xLabel: PropTypes.string,
    y: PropTypes.func.isRequired,
    yDomain: PropTypes.array,
    yRange: PropTypes.array,
    yScale: PropTypes.string.isRequired,
    yOrient: PropTypes.oneOf(['right', 'left']),
    yTickOrient: PropTypes.oneOf(['right', 'left']),
    yAxisClassName: PropTypes.string,
    yLabel: PropTypes.string,
  }

  setScale(axis, func) {
    if(axis === 'x'){
      // set x scale
      this.setState({
        xScaleSet: func
      })
    }else if(axis === 'y'){
      // set y scale
      this.setState({
        yScaleSet: func
      })
    }
  }

  setDomain(axis, val) {
    console.log('setting xdomain')
    console.log(val)
    if(axis === 'x'){
      // set x scale
      this.setState({
        xDomainSet: val
      })
    }else if(axis === 'y'){
      // set y scale
      this.setState({
        yDomainSet: val
      })
    }
  }

  voronoiMouseOut(d, focus) {
    if(focus)
      focus.attr("transform", "translate(-100,-100)");

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  voronoiMouseOver(d, focus, stack) {
    const {
      xScaleSet,
      yScaleSet
    } = this.state;

    var newY = stack? yScaleSet(d.y + d.y0): yScaleSet(d.y);

    if(focus) {
      focus.attr("transform", "translate(" + xScaleSet(d.x) + "," + newY + ")");

      focus.select(".focus__inner_circle")
        .style('fill', d.color)

      focus.select(".focus__line")
        .style('stroke', d.color)

      focus.select(".focus__outer_circle")
        .style('fill', 'none')
        .style('stroke', d.color)
        .style('stroke-width', 3)
    }

    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d
    })
  }

  mkSeries() {
    const {data, chartSeries, x, y, categoricalColors} = this.props;

    var chartSeriesData = chartSeries.map((f, i) => {

      // set a color if not set
      if(!f.color)
        f.color = categoricalColors(i);

      // set name if not set
      if(!f.name)
        f.name = f.field;

      // mapping throught data set x, y data
      var mapping = data.map(d => {
        return {
          x: x(d),
          y: y(d[f.field]),
          color: f.color,
          name: f.name,
          field: f.field
        }
      })

      return Object.assign(f, {data: mapping});
    })

    return chartSeriesData;
  }
}

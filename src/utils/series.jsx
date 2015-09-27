"use strict";

export function series(props) {
  const {
    data,
    chartSeries,
    x,
    y,
    categoricalColors
  } = props;

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

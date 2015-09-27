# react-chart-component

A solution for building reusable components for d3 charts.

## Install

```
npm install --save react-d3-core
```

## Support Charts

- Line Chart
- Multipule Line Chart
- Scatter Plot
- Area Chart
- Area Stack Chart
- Bar Chart
- Bar Group Chart
- Bar Stack Chart
- Pie Chart
- Donut Chart

See examples in [Gallery](http://react-d3.github.io/react-d3-basics/gallery.html)

## Support Chart with Brush

- Line Chart
- Multipule Line Chart
- Scatter Plot
- Area Stack Chart

See examples in [Gallery](http://react-d3.github.io/react-d3-basics/brush_gallery.html)

## Docs

### Components

Chart shapes components

- [area](./docs/components/area.md)
- [area stack](./docs/components/area_stack.md)
- [bar](./docs/components/bar.md)
- [bar group](./docs/components/bar_group.md)
- [bar stack](./docs/components/bar_stack.md)
- [line](./docs/components/line.md)
- [pie](./docs/components/pie.md)
- [scatter](./docs/components/scatter.md)

### inherit

Inherit initial props, state, functions...

- [pieLayout](./docs/inherit/pie.md)
- [xyPlot](./docs/inherit/xyplot.md)

### Charts

Building Charts.

- [Line Chart](./docs/charts/line_chart.md)
- [Area Chart](./docs/charts/area_chart.md)
- [Area Stack Chart](./docs/charts/area_stack_chart.md)
- [Bar Chart](./docs/charts/bar_chart.md)
- [Bar Group Chart](./docs/charts/bar_group_chart.md)
- [Bar Stack Chart](./docs/charts/bar_stack_chart.md)
- [Scatter Plot](./docs/charts/scatter_chart.md)
- [Pie Chart](./docs/charts/pie_chart.md)
- [Donut Chart](./docs/charts/donut_chart.md)


## Why?

#### Q1: Why building another reusable chart library?

Nowadays, we had many great libraries to build a reusable charts, such as `nvd3`, `c3`, `highchart`... etc. Those are really great! But what `react-d3` aimed to build is not only a reusable chart library, but also building reusable chart **components** for further usages.

For instance, if we want to build a new chart on top of `react-d3` it is super easy, just call `<xaxis>`, `<yaxis>` and pass proper props. and we will build your xaxis and yaxis for you! This concept of building chart components might be a much better solution of building a whole new reusable chart community.

#### Q2: What are some other common problems that building d3 charts?

- Reusability: You have to build your chart over and over again. `react-d3` is using `react`, `ES6` technologies make you easily to import and export your components.

- Difficult to track data flow: It is so easy to mess up with your data, because most of the time you are manipulating data.

- Sync your data to the svgs: When you finally change your data to a specific format, it's also cause many problems when updating data to your svgs.  Where should I update? Did it update? What data is now? `react-d3` help you solve the problems.

- Checking your input data: Inputting the wrong data, will break your chart easily without knowing the reason.


#### Q3: Why react?

There are many main reasons using react as a basic structure.

- **PropType Check** : React build-in `PropTypes` for checking props. So now if you pass the wrong format your console will tell you to change to proper prop.

- **Props** : React props make you know your data better. Because props are like Immutable data in react components. So you can track your data more easily.

- **State** : State make d3 much more powerful. Because when state change react will re-render your component with the optimal speed. And also it can make you

- **Components** : Components make it easy to reuse your charts again and again.

- **Rendering** : By default react re-render your component when every props and states change, which make d3 more awesome. Because we can have less problem on making sure if the data is up-to-date or not.


## License

Apache 2.0

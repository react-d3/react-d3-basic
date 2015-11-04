# Line Component

Whenever you need to build a line chart. `Line Component` (\<Line\>) is where you generate it!

This only generate the **<path>** in line chart, if you want to show up a complete line chart you should use `LineChart Component` (\<LineChart\>).



## Settings

### Basic Props

##### dataset -> object

`dataset` props is the value that generated after `series`, should be **a object**. You can use `series` api, for setting your dataset.

##### lineClassName -> string

This prop will be passed to set in your Line css class.

##### x -> function

Your accessor of your x axis.

for example:

```js
x = function() {
  return +d;
}
```

##### y -> function

Your accessor of your y axis.

for example:

```js
y = function() {
  return +d;
}
```

##### xScaleSet -> function

x Scale. You can use `react-d3-core` scale api, for setting your scales.

##### yScaleSet -> function

Y Scale. You can use `react-d3-core` scale api, for setting your scales.

##### interpolate -> string

see https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate for options.

### Implements

##### showBrush -> boolean

set to true, if you are going to implement `react-d3-brush`

##### showZoom -> boolean

set to true, if you are going to implement `react-d3-zoom`

"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

require('../css/tooltip.css');

export default class Tooltip extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    gravity: 's',
    dist: 35
  }

  _mkContent() {
    const {
      contentTooltip
    } = this.props;

    var cv = Object.keys(contentTooltip).map((d, i) => {
      if(d === 'color') {
        var colorStyle = {
          backgroundColor: contentTooltip[d],
          color: '#FFF'
        };
      }

      return (
        <div className= "tooltip_tr">
          <div className= "tooltip_td">
            {d}
          </div>
          <div className= "tooltip_td" style={colorStyle}>
            {contentTooltip[d].toString()}
          </div>
        </div>
      )
    })

    return cv;
  }

  render() {
    const {
      xTooltip,
      yTooltip,
      contentTooltip,
      dist
    } = this.props;

    var style = {
      left: xTooltip? xTooltip + dist: -100,
      top: yTooltip? yTooltip + dist: -100,
      position: 'fixed'
    }

    if(contentTooltip) {
      var cvContent = this._mkContent();
    }

    return (
      <div
        style= {style}
        className= "react-d3-basics__tooltip_utils"
        ref= "tooltip"
        >
        <div className= "tooltip_table">
          {cvContent}
        </div>
      </div>
    )
  }
}

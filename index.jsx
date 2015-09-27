// Export utils

import {
  series
} from './src/utils/series';

export {series as series};

// Export inherit components
import {
  default as XYPlot
} from './src/inherit/xyPlot';

import {
  default as PieLayout
} from './src/inherit/pieLayout';

export {XYPlot as XYPlot};
export {PieLayout as PieLayout};


// Export basic component of charts
import {
  default as Line
} from './src/components/line';

import {
  default as Area
} from './src/components/area';

import {
  default as AreaStack
} from './src/components/area_stack';

import {
  default as Bar
} from './src/components/bar';

import {
  default as BarGroup
} from './src/components/bar_group';

import {
  default as BarStack
} from './src/components/bar_stack';

import {
  default as Pie
} from './src/components/pie';

import {
  default as Scatter
} from './src/components/scatter';

export {Line as Line}
export {Area as Area}
export {AreaStack as AreaStack}
export {Bar as Bar}
export {BarGroup as BarGroup}
export {BarStack as BarStack}
export {Pie as Pie}
export {Scatter as Scatter}

// Export high level charts
import {
  default as LineChart,
} from './src/line';

import {
  default as ScatterPlot,
} from './src/scatter';

import {
  default as AreaStackChart,
} from './src/area_stack';

import {
  default as BarChart,
} from './src/bar';

import {
  default as BarGroupChart,
} from './src/bar_group';

import {
  default as BarStackChart,
} from './src/bar_stack';

import {
  default as PieChart
} from './src/pie';


export {LineChart as LineChart};
export {ScatterPlot as ScatterPlot}
export {AreaStackChart as AreaStackChart}
export {BarChart as BarChart}
export {BarGroupChart as BarGroupChart}
export {BarStackChart as BarStackChart}
export {PieChart as PieChart}

import { Axis as VgAxis, NewSignal, SignalRef } from 'vega';
import { Config } from '../../config.js';
import { Model } from '../model.js';
import { AxisComponent, AxisComponentIndex } from './component.js';
export declare function assembleAxis(axisCmpt: AxisComponent, kind: 'main' | 'grid', config: Config<SignalRef>, opt?: {
    header: boolean;
}): VgAxis;
/**
 * Add axis signals so grid line works correctly
 * (Fix https://github.com/vega/vega-lite/issues/4226)
 */
export declare function assembleAxisSignals(model: Model): NewSignal[];
export declare function assembleAxes(axisComponents: AxisComponentIndex, config: Config<SignalRef>): VgAxis[];
//# sourceMappingURL=assemble.d.ts.map
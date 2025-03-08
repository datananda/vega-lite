import { ScaleType, SignalRef } from 'vega';
import { AxisConfig } from '../../axis.js';
import { PositionScaleChannel } from '../../channel.js';
import { Config, StyleConfigIndex } from '../../config.js';
export type AxisConfigs = ReturnType<typeof getAxisConfigs>;
export declare function getAxisConfigs(channel: PositionScaleChannel, scaleType: ScaleType, orient: string | SignalRef, config: Config): {
    vlOnlyAxisConfig: any;
    vgAxisConfig: any;
    axisConfigStyle: any;
};
export declare function getAxisConfigStyle(axisConfigTypes: string[], config: Config): any;
export declare function getAxisConfig(property: keyof AxisConfig<SignalRef>, styleConfigIndex: StyleConfigIndex<SignalRef>, style: string | string[], axisConfigs?: Partial<AxisConfigs>): {
    configFrom?: string;
    configValue?: any;
};
//# sourceMappingURL=config.d.ts.map
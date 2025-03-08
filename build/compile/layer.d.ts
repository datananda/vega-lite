import { Legend as VgLegend, NewSignal, SignalRef, Title as VgTitle } from 'vega';
import { Config } from '../config.js';
import { LayoutSizeMixins, NormalizedLayerSpec } from '../spec/index.js';
import { VgData, VgLayout } from '../vega.schema.js';
import { Model } from './model.js';
export declare class LayerModel extends Model {
    readonly children: Model[];
    constructor(spec: NormalizedLayerSpec, parent: Model, parentGivenName: string, parentGivenSize: LayoutSizeMixins, config: Config<SignalRef>);
    parseData(): void;
    parseLayoutSize(): void;
    parseSelections(): void;
    parseMarkGroup(): void;
    parseAxesAndHeaders(): void;
    assembleSelectionTopLevelSignals(signals: NewSignal[]): NewSignal[];
    assembleSignals(): NewSignal[];
    assembleLayoutSignals(): NewSignal[];
    assembleSelectionData(data: readonly VgData[]): readonly VgData[];
    assembleGroupStyle(): string | string[];
    assembleTitle(): VgTitle;
    assembleLayout(): VgLayout;
    assembleMarks(): any[];
    assembleLegends(): VgLegend[];
}
//# sourceMappingURL=layer.d.ts.map
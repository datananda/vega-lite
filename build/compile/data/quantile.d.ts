import { QuantileTransform as VgQuantileTransform } from 'vega';
import { QuantileTransform } from '../../transform.js';
import { DataFlowNode } from './dataflow.js';
/**
 * A class for quantile transform nodes
 */
export declare class QuantileTransformNode extends DataFlowNode {
    private transform;
    clone(): QuantileTransformNode;
    constructor(parent: DataFlowNode, transform: QuantileTransform);
    dependentFields(): Set<string>;
    producedFields(): Set<string>;
    hash(): string;
    assemble(): VgQuantileTransform;
}
//# sourceMappingURL=quantile.d.ts.map
import { KDETransform as VgKDETransform } from 'vega';
import { DensityTransform } from '../../transform.js';
import { DataFlowNode } from './dataflow.js';
/**
 * A class for density transform nodes
 */
export declare class DensityTransformNode extends DataFlowNode {
    private transform;
    clone(): DensityTransformNode;
    constructor(parent: DataFlowNode, transform: DensityTransform);
    dependentFields(): Set<string>;
    producedFields(): Set<string>;
    hash(): string;
    assemble(): VgKDETransform;
}
//# sourceMappingURL=density.d.ts.map
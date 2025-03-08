import { PivotTransform } from '../../transform.js';
import { PivotTransform as VgPivotTransform } from 'vega';
import { DataFlowNode } from './dataflow.js';
/**
 * A class for pivot transform nodes.
 */
export declare class PivotTransformNode extends DataFlowNode {
    private transform;
    clone(): PivotTransformNode;
    constructor(parent: DataFlowNode, transform: PivotTransform);
    addDimensions(fields: readonly string[]): void;
    producedFields(): undefined;
    dependentFields(): Set<string>;
    hash(): string;
    assemble(): VgPivotTransform;
}
//# sourceMappingURL=pivot.d.ts.map
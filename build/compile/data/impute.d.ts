import { FormulaTransform as VgFormulaTransform, ImputeTransform as VgImputeTransform, WindowTransform as VgWindowTransform } from 'vega';
import { ImputeTransform } from '../../transform.js';
import { UnitModel } from '../unit.js';
import { DataFlowNode } from './dataflow.js';
export declare class ImputeNode extends DataFlowNode {
    private readonly transform;
    clone(): ImputeNode;
    constructor(parent: DataFlowNode, transform: ImputeTransform);
    dependentFields(): Set<string>;
    producedFields(): Set<string>;
    private processSequence;
    static makeFromTransform(parent: DataFlowNode, imputeTransform: ImputeTransform): ImputeNode;
    static makeFromEncoding(parent: DataFlowNode, model: UnitModel): ImputeNode;
    hash(): string;
    assemble(): (VgFormulaTransform | VgImputeTransform | VgWindowTransform)[];
}
//# sourceMappingURL=impute.d.ts.map
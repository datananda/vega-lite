import { Field, FieldName } from '../channeldef.js';
import { Encoding } from '../encoding.js';
import { FacetFieldDef, FacetMapping } from '../spec/facet.js';
export interface RepeaterValue {
    row?: string;
    column?: string;
    repeat?: string;
    layer?: string;
}
export declare function replaceRepeaterInFacet(facet: FacetFieldDef<Field> | FacetMapping<Field>, repeater: RepeaterValue): FacetFieldDef<FieldName> | FacetMapping<FieldName>;
export declare function replaceRepeaterInEncoding<E extends Encoding<Field>>(encoding: E, repeater: RepeaterValue): Encoding<FieldName>;
//# sourceMappingURL=repeater.d.ts.map
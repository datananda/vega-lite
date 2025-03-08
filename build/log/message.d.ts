/**
 * Collection of all Vega-Lite Error Messages
 */
import { AggregateOp, SignalRef } from 'vega';
import { Aggregate } from '../aggregate.js';
import { Channel, ExtendedChannel, FacetChannel, OffsetScaleChannel, PositionScaleChannel, ScaleChannel, SingleDefUnitChannel } from '../channel.js';
import { HiddenCompositeAggregate, TypedFieldDef, Value } from '../channeldef.js';
import { SplitParentProperty } from '../compile/split.js';
import { CompositeMark } from '../compositemark/index.js';
import { ErrorBarCenter, ErrorBarExtent } from '../compositemark/errorbar.js';
import { DateTime, DateTimeExpr } from '../datetime.js';
import { ExprRef } from '../expr.js';
import { Mark } from '../mark.js';
import { Projection } from '../projection.js';
import { ScaleType } from '../scale.js';
import { GenericSpec } from '../spec/index.js';
import { Type } from '../type.js';
import { VgSortField } from '../vega.schema.js';
import { SelectionProjection } from '../compile/selection/project.js';
import { ParameterExtent } from '../selection.js';
export declare function invalidSpec(spec: GenericSpec<any, any, any, any>): string;
export declare const FIT_NON_SINGLE = "Autosize \"fit\" only works for single views and layered views.";
export declare function containerSizeNonSingle(name: 'width' | 'height'): string;
export declare function containerSizeNotCompatibleWithAutosize(name: 'width' | 'height'): string;
export declare function droppingFit(channel?: PositionScaleChannel): string;
export declare function unknownField(channel: Channel): string;
export declare function cannotProjectOnChannelWithoutField(channel: Channel): string;
export declare function cannotProjectAggregate(channel: Channel, aggregate: Aggregate | HiddenCompositeAggregate): string;
export declare function nearestNotSupportForContinuous(mark: string): string;
export declare function selectionNotSupported(mark: CompositeMark): string;
export declare function selectionNotFound(name: string): string;
export declare const SCALE_BINDINGS_CONTINUOUS = "Scale bindings are currently only supported for scales with unbinned, continuous domains.";
export declare const SEQUENTIAL_SCALE_DEPRECATED = "Sequntial scales are deprecated. The available quantitative scale type values are linear, log, pow, sqrt, symlog, time and utc";
export declare const LEGEND_BINDINGS_MUST_HAVE_PROJECTION = "Legend bindings are only supported for selections over an individual field or encoding channel.";
export declare function cannotLookupVariableParameter(name: string): string;
export declare function noSameUnitLookup(name: string): string;
export declare const NEEDS_SAME_SELECTION = "The same selection must be used to override scale domains in a layered view.";
export declare const INTERVAL_INITIALIZED_WITH_POS = "Interval selections should be initialized using \"x\", \"y\", \"longitude\", or \"latitude\" keys.";
export declare function noSuchRepeatedValue(field: string): string;
export declare function columnsNotSupportByRowCol(type: 'facet' | 'repeat'): string;
export declare const MULTIPLE_TIMER_ANIMATION_SELECTION = "Multiple timer selections in one unit spec are not supported. Ignoring all but the first.";
export declare const MULTI_VIEW_ANIMATION_UNSUPPORTED = "Animation involving facet, layer, or concat is currently unsupported.";
export declare function selectionAsScaleDomainWithoutField(field: string): string;
export declare function selectionAsScaleDomainWrongEncodings(encodings: SelectionProjection[], encoding: SingleDefUnitChannel, extent: ParameterExtent, field: string): string;
export declare const CONCAT_CANNOT_SHARE_AXIS = "Axes cannot be shared in concatenated or repeated views yet (https://github.com/vega/vega-lite/issues/2415).";
export declare function unrecognizedParse(p: string): string;
export declare function differentParse(field: string, local: string, ancestor: string): string;
export declare const ADD_SAME_CHILD_TWICE = "Attempt to add the same child twice.";
export declare function invalidTransformIgnored(transform: any): string;
export declare const NO_FIELDS_NEEDS_AS = "If \"from.fields\" is not specified, \"as\" has to be a string that specifies the key to be used for the data from the secondary source.";
export declare function customFormatTypeNotAllowed(channel: ExtendedChannel): string;
export declare function projectionOverridden<ES extends ExprRef | SignalRef>(opt: {
    parentProjection: Projection<ES>;
    projection: Projection<ES>;
}): string;
export declare const REPLACE_ANGLE_WITH_THETA = "Arc marks uses theta channel rather than angle, replacing angle with theta.";
export declare function offsetNestedInsideContinuousPositionScaleDropped(mainChannel: PositionScaleChannel): string;
export declare function primitiveChannelDef(channel: ExtendedChannel, type: 'string' | 'number' | 'boolean', value: Exclude<Value, null>): string;
export declare function invalidFieldType(type: Type): string;
export declare function invalidFieldTypeForCountAggregate(type: Type, aggregate: Aggregate | string): string;
export declare function invalidAggregate(aggregate: AggregateOp | string): string;
export declare function missingFieldType(channel: Channel, newType: Type): string;
export declare function droppingColor(type: 'encoding' | 'property', opt: {
    fill?: boolean;
    stroke?: boolean;
}): string;
export declare function relativeBandSizeNotSupported(sizeChannel: 'width' | 'height'): string;
export declare function emptyFieldDef(fieldDef: unknown, channel: ExtendedChannel): string;
export declare const LINE_WITH_VARYING_SIZE = "Line marks cannot encode size with a non-groupby field. You may want to use trail marks instead.";
export declare function incompatibleChannel(channel: ExtendedChannel, markOrFacet: Mark | 'facet' | CompositeMark, when?: string): string;
export declare function offsetEncodingScaleIgnored(channel: OffsetScaleChannel): string;
export declare function invalidEncodingChannel(channel: ExtendedChannel): string;
export declare function channelShouldBeDiscrete(channel: ExtendedChannel): string;
export declare function channelShouldBeDiscreteOrDiscretizing(channel: ExtendedChannel): string;
export declare function facetChannelDropped(channels: FacetChannel[]): string;
export declare function discreteChannelCannotEncode(channel: Channel, type: Type): string;
export declare function rangeMarkAlignmentCannotBeExpression(align: 'align' | 'baseline'): string;
export declare function lineWithRange(hasX2: boolean, hasY2: boolean): string;
export declare function orientOverridden(original: string, actual: string): string;
export declare const CANNOT_UNION_CUSTOM_DOMAIN_WITH_FIELD_DOMAIN = "Custom domain scale cannot be unioned with default field-based domain.";
export declare function cannotUseScalePropertyWithNonColor(prop: string): string;
export declare function cannotUseRelativeBandSizeWithNonBandScale(scaleType: ScaleType): string;
export declare function unaggregateDomainHasNoEffectForRawField(fieldDef: TypedFieldDef<string>): string;
export declare function unaggregateDomainWithNonSharedDomainOp(aggregate: Aggregate | string): string;
export declare function unaggregatedDomainWithLogScale(fieldDef: TypedFieldDef<string>): string;
export declare function cannotApplySizeToNonOrientedMark(mark: Mark): string;
export declare function scaleTypeNotWorkWithChannel(channel: Channel, scaleType: ScaleType, defaultScaleType: ScaleType): string;
export declare function scaleTypeNotWorkWithFieldDef(scaleType: ScaleType, defaultScaleType: ScaleType): string;
export declare function scalePropertyNotWorkWithScaleType(scaleType: ScaleType, propName: string, channel: Channel): string;
export declare function scaleTypeNotWorkWithMark(mark: Mark, scaleType: ScaleType): string;
export declare function stepDropped(channel: 'width' | 'height'): string;
export declare function mergeConflictingProperty<T>(property: string | number | symbol, propertyOf: SplitParentProperty, v1: T, v2: T): string;
export declare function mergeConflictingDomainProperty<T>(property: 'domains', propertyOf: SplitParentProperty, v1: T, v2: T): string;
export declare function independentScaleMeansIndependentGuide(channel: Channel): string;
export declare function domainSortDropped(sort: VgSortField): string;
export declare const MORE_THAN_ONE_SORT = "Domains that should be unioned has conflicting sort properties. Sort will be set to true.";
export declare const FACETED_INDEPENDENT_DIFFERENT_SOURCES = "Detected faceted independent scales that union domain of multiple fields from different data sources. We will use the first field. The result view size may be incorrect.";
export declare const FACETED_INDEPENDENT_SAME_FIELDS_DIFFERENT_SOURCES = "Detected faceted independent scales that union domain of the same fields from different source. We will assume that this is the same field from a different fork of the same data source. However, if this is not the case, the result view size may be incorrect.";
export declare const FACETED_INDEPENDENT_SAME_SOURCE = "Detected faceted independent scales that union domain of multiple fields from the same data source. We will use the first field. The result view size may be incorrect.";
export declare const INVALID_CHANNEL_FOR_AXIS = "Invalid channel for axis.";
export declare function cannotStackRangedMark(channel: Channel): string;
export declare function stackNonLinearScale(scaleType: ScaleType): string;
export declare function stackNonSummativeAggregate(aggregate: Aggregate | string): string;
export declare function invalidTimeUnit(unitName: string, value: string | number): string;
export declare function droppedDay(d: DateTime | DateTimeExpr): string;
export declare function errorBarCenterAndExtentAreNotNeeded(center: ErrorBarCenter, extent: ErrorBarExtent): string;
export declare function errorBarCenterIsUsedWithWrongExtent(center: ErrorBarCenter, extent: ErrorBarExtent, mark: 'errorbar' | 'errorband'): string;
export declare function errorBarContinuousAxisHasCustomizedAggregate(aggregate: Aggregate | string, compositeMark: CompositeMark): string;
export declare function errorBand1DNotSupport(property: 'interpolate' | 'tension'): string;
export declare function channelRequiredForBinned(channel: Channel): string;
export declare function channelShouldNotBeUsedForBinned(channel: ExtendedChannel): string;
export declare function domainRequiredForThresholdScale(channel: ScaleChannel): string;
//# sourceMappingURL=message.d.ts.map
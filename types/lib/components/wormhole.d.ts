import Vue from 'vue';
import { Transports, TransportInput, TransportVector, VMRegister } from '../types';
export declare const Wormhole: import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, {
    transports: Transports;
    targets: VMRegister;
    sources: VMRegister;
    trackInstances: boolean;
}, {
    open(transport: TransportInput): void;
    close(transport: TransportVector, force?: boolean): void;
    registerTarget(target: string, vm: Vue, force?: boolean | undefined): void;
    unregisterTarget(target: string): void;
    registerSource(source: string, vm: Vue, force?: boolean | undefined): void;
    unregisterSource(source: string): void;
    hasTarget(to: string): true;
    hasSource(to: string): true;
    hasContentFor(to: string): boolean;
    $_getTransportIndex({ to, from }: TransportVector): number;
}, unknown, Record<never, any>, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin>;
declare const wormhole: import("vue/types/vue").CombinedVueInstance<{
    transports: Transports;
    targets: VMRegister;
    sources: VMRegister;
    trackInstances: boolean;
} & {
    open(transport: TransportInput): void;
    close(transport: TransportVector, force?: boolean): void;
    registerTarget(target: string, vm: Vue, force?: boolean | undefined): void;
    unregisterTarget(target: string): void;
    registerSource(source: string, vm: Vue, force?: boolean | undefined): void;
    unregisterSource(source: string): void;
    hasTarget(to: string): true;
    hasSource(to: string): true;
    hasContentFor(to: string): boolean;
    $_getTransportIndex({ to, from }: TransportVector): number;
} & import("vue/types/v3-component-options").ExtractComputedReturns<{}> & Record<never, any> & Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>> & import("vue").ShallowUnwrapRef<{}> & Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, object, object, object, Record<never, any>, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-public-instance").OptionTypesType<{}, {}, {}, {}, {}, {}>>;
export { wormhole };

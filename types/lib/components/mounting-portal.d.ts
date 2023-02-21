import Vue from 'vue';
import { VueConstructor } from 'vue';
import { PropWithComponent } from '../types';
export declare type withPortalTarget = VueConstructor<Vue & {
    portalTarget: any;
}>;
declare const _default: import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>> & {
    portalTarget: any;
}, unknown, unknown, unknown, {
    append: string | boolean;
    bail: boolean;
    mountTo: string;
    disabled: boolean;
    name: string;
    order: number;
    slim: boolean;
    slotProps: any;
    tag: string;
    to: string;
    multiple: boolean;
    targetSlim: boolean;
    targetSlotProps: any;
    targetTag: string;
    transition: PropWithComponent;
}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin>;
export default _default;

import Vue from 'vue';
import { VNode } from 'vue';
import { Transport, PropWithComponent } from '../types';
declare const _default: import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, {
    transports: import("../types").Transports;
    firstRender: boolean;
}, {
    children(): VNode[];
    noWrapper(): boolean;
}, {
    ownTransports: Transport[];
    passengers: VNode[];
}, {
    multiple: boolean;
    name: string;
    slim: boolean;
    slotProps: any;
    tag: string;
    transition: PropWithComponent;
}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin>;
export default _default;

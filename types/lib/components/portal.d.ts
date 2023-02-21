import Vue from 'vue';
import { VNode } from 'vue';
declare const _default: import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, unknown, {
    clear(target?: string | undefined): void;
    normalizeSlots(): Function[] | VNode[] | undefined;
    normalizeOwnChildren(children: VNode[] | Function): VNode[];
    sendUpdate(): void;
}, unknown, {
    disabled: boolean;
    name: string;
    order: number;
    slim: boolean;
    slotProps: any;
    tag: string;
    to: string;
}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin>;
export default _default;

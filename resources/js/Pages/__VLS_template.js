import { Head, Link } from '@inertiajs/vue3';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './Welcome.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Head', typeof __VLS_localComponents, "Head", "Head", "Head"> &
__VLS_WithComponent<'Link', typeof __VLS_localComponents, "Link", "Link", "Link">;
__VLS_components.Head;
// @ts-ignore
[Head,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.Link; __VLS_components.Link; __VLS_components.Link; __VLS_components.Link; __VLS_components.Link; __VLS_components.Link;
// @ts-ignore
[Link, Link, Link, Link, Link, Link,];
{
let __VLS_0!: 'Head' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Head : (typeof __VLS_resolvedLocalAndGlobalComponents)['Head'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, title: ("Welcome"), }));
({} as { Head: typeof __VLS_0; }).Head;
const __VLS_2 = __VLS_1({ ...{}, title: ("Welcome"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, title: ("Welcome"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
if (__VLS_ctx.canLogin) {
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("sm:fixed sm:top-0 sm:right-0 p-6 text-right"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("sm:fixed sm:top-0 sm:right-0 p-6 text-right"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
if (__VLS_ctx.$page.props.auth.user) {
{
let __VLS_15!: 'Link' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Link : (typeof __VLS_resolvedLocalAndGlobalComponents)['Link'];
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, href: ((__VLS_ctx.route('dashboard'))), class: ("font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"), }));
({} as { Link: typeof __VLS_15; }).Link;
({} as { Link: typeof __VLS_15; }).Link;
const __VLS_17 = __VLS_16({ ...{}, href: ((__VLS_ctx.route('dashboard'))), class: ("font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('dashboard'))), class: ("font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_18.slots!).default;
}
// @ts-ignore
[canLogin, $page, route, route, route,];
}
else {
{
let __VLS_20!: 'Link' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Link : (typeof __VLS_resolvedLocalAndGlobalComponents)['Link'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, href: ((__VLS_ctx.route('login'))), class: ("font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"), }));
({} as { Link: typeof __VLS_20; }).Link;
({} as { Link: typeof __VLS_20; }).Link;
const __VLS_22 = __VLS_21({ ...{}, href: ((__VLS_ctx.route('login'))), class: ("font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('login'))), class: ("font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_23.slots!).default;
}
if (__VLS_ctx.canRegister) {
{
let __VLS_25!: 'Link' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Link : (typeof __VLS_resolvedLocalAndGlobalComponents)['Link'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, href: ((__VLS_ctx.route('register'))), class: ("ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"), }));
({} as { Link: typeof __VLS_25; }).Link;
({} as { Link: typeof __VLS_25; }).Link;
const __VLS_27 = __VLS_26({ ...{}, href: ((__VLS_ctx.route('register'))), class: ("ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('register'))), class: ("ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
(__VLS_28.slots!).default;
}
// @ts-ignore
[route, route, route, canRegister, route, route, route,];
}
}
(__VLS_13.slots!).default;
}
}
(__VLS_8.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}

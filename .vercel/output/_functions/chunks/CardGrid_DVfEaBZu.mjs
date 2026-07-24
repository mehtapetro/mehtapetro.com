import { D as createAstro, _ as maybeRenderHead, p as renderTemplate, u as renderSlot, v as addAttribute } from "./server_B_JYDiiJ.mjs";
import { t as createComponent } from "./astro-component_BGVoGKdk.mjs";
import "./compiler_Bj_GphX0.mjs";
//#region node_modules/@astrojs/starlight/user-components/CardGrid.astro
createAstro("https://mehtapetro.com");
var $$CardGrid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CardGrid;
	const { stagger = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([["card-grid", { stagger }], "astro-lmor3ela"], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/eightharsh/mprl/MPRL/node_modules/@astrojs/starlight/user-components/CardGrid.astro", void 0);
//#endregion
export { $$CardGrid as t };

import { D as createAstro, T as unescapeHTML, _ as maybeRenderHead, o as renderComponent, p as renderTemplate, u as renderSlot } from "./server_B_JYDiiJ.mjs";
import { t as createComponent } from "./astro-component_BGVoGKdk.mjs";
import "./compiler_Bj_GphX0.mjs";
import { t as $$Icon } from "./Icon_Cu5iHAeL.mjs";
//#region node_modules/@astrojs/starlight/user-components/Card.astro
createAstro("https://mehtapetro.com");
var $$Card = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Card;
	const { icon, title } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<article class="card sl-flex astro-zts4jgjd"><p class="title sl-flex astro-zts4jgjd">${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"class": "icon astro-zts4jgjd",
		"size": "1.333em"
	})}`}<span class="astro-zts4jgjd">${unescapeHTML(title)}</span></p><div class="body astro-zts4jgjd">${renderSlot($$result, $$slots["default"])}</div></article>`;
}, "/Users/eightharsh/mprl/MPRL/node_modules/@astrojs/starlight/user-components/Card.astro", void 0);
//#endregion
export { $$Card as t };

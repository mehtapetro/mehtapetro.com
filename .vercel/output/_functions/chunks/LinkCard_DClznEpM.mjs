import { D as createAstro, T as unescapeHTML, _ as maybeRenderHead, o as renderComponent, p as renderTemplate, r as spreadAttributes } from "./server_B_JYDiiJ.mjs";
import { t as createComponent } from "./astro-component_BGVoGKdk.mjs";
import "./compiler_Bj_GphX0.mjs";
import { t as $$Icon } from "./Icon_Cu5iHAeL.mjs";
//#region node_modules/@astrojs/starlight/user-components/LinkCard.astro
createAstro("https://mehtapetro.com");
var $$LinkCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LinkCard;
	const { title, description, ...attributes } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="sl-link-card astro-vodiqeol"><span class="sl-flex stack astro-vodiqeol"><a${spreadAttributes(attributes, void 0, { "class": "astro-vodiqeol" })}><span class="title astro-vodiqeol">${unescapeHTML(title)}</span></a>${description && renderTemplate`<span class="description astro-vodiqeol">${unescapeHTML(description)}</span>`}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "right-arrow",
		"size": "1.333em",
		"class": "icon rtl:flip astro-vodiqeol"
	})}</div>`;
}, "/Users/eightharsh/mprl/MPRL/node_modules/@astrojs/starlight/user-components/LinkCard.astro", void 0);
//#endregion
export { $$LinkCard as t };

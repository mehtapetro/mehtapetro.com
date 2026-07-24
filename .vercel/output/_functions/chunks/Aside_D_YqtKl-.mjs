import { nt as AstroUserError } from "./errors-data_99NpHCJB.mjs";
import { D as createAstro, _ as maybeRenderHead, o as renderComponent, p as renderTemplate, u as renderSlot, v as addAttribute } from "./server_B_JYDiiJ.mjs";
import { t as createComponent } from "./astro-component_BGVoGKdk.mjs";
import "./compiler_Bj_GphX0.mjs";
import { n as Icons, t as $$Icon } from "./Icon_Cu5iHAeL.mjs";
//#region node_modules/@astrojs/starlight/integrations/aside-utils.ts
var asideVariants = [
	"note",
	"tip",
	"caution",
	"danger"
];
var asideIconNames = {
	note: "information",
	tip: "rocket",
	caution: "warning",
	danger: "error"
};
new Set(asideVariants);
function getAsideIconName(variant, customIcon) {
	let iconName = asideIconNames[variant];
	if (customIcon) {
		iconName = customIcon;
		if (!Icons[iconName]) throwInvalidAsideIconError(iconName);
	}
	return iconName;
}
function throwInvalidAsideIconError(icon) {
	throw new AstroUserError("Invalid aside icon", `An aside custom icon must be set to the name of one of Starlight’s built-in icons, but received \`${icon}\`.\n\nSee https://starlight.astro.build/reference/icons/#all-icons for a list of available icons.`);
}
//#endregion
//#region node_modules/@astrojs/starlight/user-components/Aside.astro
createAstro("https://mehtapetro.com");
var $$Aside = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Aside;
	let { type = "note", title, icon } = Astro.props;
	if (!asideVariants.includes(type)) throw new AstroUserError("Invalid `type` prop passed to the `<Aside>` component.\n", `Received: ${JSON.stringify(type)}\nExpected one of ${asideVariants.map((i) => JSON.stringify(i)).join(", ")}`);
	const iconName = getAsideIconName(type, icon);
	if (!title) title = Astro.locals.t(`aside.${type}`);
	return renderTemplate`${maybeRenderHead($$result)}<aside${addAttribute(title, "aria-label")}${addAttribute(`starlight-aside starlight-aside--${type}`, "class")}><p class="starlight-aside__title" aria-hidden="true">${renderComponent($$result, "Icon", $$Icon, {
		"name": iconName,
		"class": "starlight-aside__icon"
	})}${title}</p><div class="starlight-aside__content">${renderSlot($$result, $$slots["default"])}</div></aside>`;
}, "/Users/eightharsh/mprl/MPRL/node_modules/@astrojs/starlight/user-components/Aside.astro", void 0);
//#endregion
export { $$Aside as t };

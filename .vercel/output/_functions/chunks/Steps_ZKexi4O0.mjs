import { nt as AstroUserError } from "./errors-data_99NpHCJB.mjs";
import { D as createAstro, T as unescapeHTML, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_B_JYDiiJ.mjs";
import { t as createComponent } from "./astro-component_BGVoGKdk.mjs";
import "./compiler_Bj_GphX0.mjs";
import { rehype } from "rehype";
import rehypeFormat from "rehype-format";
//#region node_modules/@astrojs/starlight/user-components/rehype-steps.ts
var prettyPrintProcessor = rehype().data("settings", { fragment: true }).use(rehypeFormat);
var prettyPrintHtml = (html) => prettyPrintProcessor.processSync({ value: html }).toString();
var stepsProcessor = rehype().data("settings", { fragment: true }).use(function steps() {
	return (tree, vfile) => {
		const rootElements = tree.children.filter((item) => item.type === "element" && item.tagName !== "script");
		const [rootElement] = rootElements;
		if (!rootElement) throw new StepsError("The `<Steps>` component expects its content to be a single ordered list (`<ol>`) but found no child elements.");
		else if (rootElements.length > 1) throw new StepsError("The `<Steps>` component expects its content to be a single ordered list (`<ol>`) but found multiple child elements: " + rootElements.map((element) => `\`<${element.tagName}>\``).join(", ") + ".", vfile.value.toString());
		else if (rootElement.tagName !== "ol") throw new StepsError(`The \`<Steps>\` component expects its content to be a single ordered list (\`<ol>\`) but found the following element: \`<${rootElement.tagName}>\`.`, vfile.value.toString());
		rootElement.properties.role = "list";
		if (!Array.isArray(rootElement.properties.className)) rootElement.properties.className = ["sl-steps"];
		else rootElement.properties.className.push("sl-steps");
		if (typeof rootElement.properties.start === "number") {
			const styles = [`--sl-steps-start: ${rootElement.properties.start - 1}`];
			if (rootElement.properties.style) styles.push(String(rootElement.properties.style));
			rootElement.properties.style = styles.join(";");
		}
	};
});
/**
* Process steps children: validates the HTML and adds `role="list"` to the ordered list.
* @param html Inner HTML passed to the `<Steps>` component.
*/
var processSteps = (html) => {
	return { html: stepsProcessor.processSync({ value: html }).toString() };
};
var StepsError = class extends AstroUserError {
	constructor(message, html) {
		let hint = "To learn more about the `<Steps>` component, see https://starlight.astro.build/components/steps/";
		if (html) hint += "\n\nFull HTML passed to `<Steps>`:\n" + prettyPrintHtml(html);
		super(message, hint);
	}
};
//#endregion
//#region node_modules/@astrojs/starlight/user-components/Steps.astro
createAstro("https://mehtapetro.com");
var $$Steps = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Steps;
	const { html } = processSteps(await Astro.slots.render("default"));
	return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/eightharsh/mprl/MPRL/node_modules/@astrojs/starlight/user-components/Steps.astro", void 0);
//#endregion
export { $$Steps as t };

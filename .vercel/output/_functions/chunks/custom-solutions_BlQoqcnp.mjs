import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
//#region src/content/docs/construction/custom-solutions.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		li: "li",
		p: "p",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "Challenging projects demand innovative solutions. Mehta Petro excels in delivering custom solutions engineered to address the most intricate and demanding construction requirements." }),
		"\n",
		createVNode($$Card, {
			title: "Our custom services provide:",
			icon: "puzzle",
			children: createVNode(_components.ul, { children: [
				"\n",
				createVNode(_components.li, { children: "Expert analysis of unconventional project demands - Tailored construction\nmethods for unique structures - Specialized materials and equipment sourcing -\nCollaboration with specialized subcontractors and consultants" }),
				"\n"
			] })
		}),
		"\n",
		createVNode(_components.p, { children: "No matter the complexity, our bespoke services ensure that your specialized project is not just completed, but mastered." })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Custom Solutions for Complex Projects",
	"description": "Explore Mehta Petro's comprehensive documentation for an in-depth look at our premium tools and construction services.",
	"sidebar": {
		"label": "Custom Solutions",
		"order": 4
	}
};
function getHeadings() {
	return [];
}
var url = "src/content/docs/construction/custom-solutions.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/construction/custom-solutions.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/construction/custom-solutions.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

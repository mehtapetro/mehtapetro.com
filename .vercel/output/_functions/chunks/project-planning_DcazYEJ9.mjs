import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
//#region src/content/docs/construction/project-planning.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		li: "li",
		p: "p",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "Achieve seamless project execution with Mehta Petro’s meticulous planning and management approach. We prioritize clear communication and strategic planning to ensure your project milestones are achieved without compromise." }),
		"\n",
		createVNode($$Card, {
			title: "Our planning and management services include:",
			icon: "seti:notebook",
			children: createVNode(_components.ul, { children: [
				"\n",
				createVNode(_components.li, { children: "Detailed project timelines - Resource allocation and optimization - Regular\nprogress updates and reports - Risk assessment and management" }),
				"\n"
			] })
		}),
		"\n",
		createVNode(_components.p, { children: "We believe in proactive management to foresee potential challenges and devise\nsolutions before they impact the project." })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Project Planning and Management",
	"description": "Explore Mehta Petro's comprehensive documentation for an in-depth look at our premium tools and construction services.",
	"sidebar": {
		"label": "Project Planning",
		"order": 2
	}
};
function getHeadings() {
	return [];
}
var url = "src/content/docs/construction/project-planning.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/construction/project-planning.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/construction/project-planning.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

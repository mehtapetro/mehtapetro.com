import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Aside } from "./Aside_D_YqtKl-.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
import { t as $$CardGrid } from "./CardGrid_DVfEaBZu.mjs";
import { t as $$LinkCard } from "./LinkCard_DClznEpM.mjs";
//#region src/content/docs/tools/equipment-care.mdx
function _createMdxContent(props) {
	const _components = Object.assign({ p: "p" }, props.components);
	return createVNode(Fragment, { children: [
		createVNode($$Card, {
			title: "Maintaining Your Mehta Petro Tools",
			icon: "approve-check-circle",
			children: [createVNode($$LinkCard, {
				description: "Step-by-step guide for the routine care and maintenance of your Mehta Petro tools to ensure long-lasting functionality.",
				href: "/guides/getting-started"
			}), createVNode($$LinkCard, {
				description: "Cleaning, storage, and inspection practices to keep tools in optimal condition",
				href: "/guides/getting-started"
			})]
		}),
		"\n",
		createVNode($$CardGrid, { children: [createVNode($$Card, {
			title: "Best Practices for Equipment Longevity",
			icon: "star",
			children: createVNode(_components.p, { children: "Strategies for extending the life of your tools and equipment through proper\nuse and handling. A preventative maintenance schedule that will help avoid\ncommon wear and tear." })
		}), createVNode($$Card, {
			title: "Troubleshooting Common Tool Issues",
			icon: "rocket",
			children: createVNode(_components.p, { children: "Solutions for frequently encountered issues with Mehta Petro equipment. Advice\non when to seek professional repair services versus performing DIY fixes." })
		})] }),
		"\n",
		createVNode($$Aside, { children: createVNode(_components.p, { children: "Remember that attentiveness to the condition and care of your tools and\nequipment is paramount to ensuring their longevity and reliability. Regular\nmaintenance not only helps prevent downtime but can also ensure the safety of\nthose who use them. For each guide and reference listed here, we offer\nadditional support through our customer service channels should you require\npersonalized assistance." }) })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Equipment Care & Maintenance",
	"description": "Explore Mehta Petro's comprehensive documentation for an in-depth look at our premium tools and construction services.",
	"sidebar": {
		"label": "Equipment Care",
		"order": 2
	}
};
function getHeadings() {
	return [];
}
var url = "src/content/docs/tools/equipment-care.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/tools/equipment-care.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/tools/equipment-care.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

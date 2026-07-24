import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { n as $$Tabs, t as $$TabItem } from "./TabItem_DYri4yRp.mjs";
//#region src/content/docs/guides/intro.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		div: "div",
		h2: "h2",
		p: "p",
		path: "path",
		span: "span",
		svg: "svg"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "As part of our commitment to providing an end-to-end solution for all your construction and hardware needs, we at Mehta Petro are proud to offer a comprehensive suite of professional services. From initial consultations to final inspections, our multifaceted services encompass the entirety of your project, ensuring quality results and client satisfaction. This section of the documentation will guide you through everything you need to know to leverage our expertise to its fullest potential." }),
		"\n",
		createVNode(_components.div, {
			class: "sl-heading-wrapper level-h2",
			children: [createVNode(_components.h2, {
				id: "overview-of-services",
				children: "Overview of Services"
			}), createVNode(_components.a, {
				class: "sl-anchor-link",
				href: "#overview-of-services",
				children: [createVNode(_components.span, {
					"aria-hidden": "true",
					class: "sl-anchor-icon",
					children: createVNode(_components.svg, {
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						children: createVNode(_components.path, { d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 1 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 0 0-1.42-1.42m8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 1 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.88-3.89a4.49 4.49 0 0 0 0-6.33M8.83 15.17a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.92-4.92a1 1 0 1 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42" })
					})
				}), createVNode(_components.span, {
					class: "sr-only",
					"data-pagefind-ignore": true,
					children: "Section titled “Overview of Services”"
				})]
			})]
		}),
		"\n",
		createVNode($$Tabs, { children: [
			createVNode($$TabItem, {
				label: "Tailored Solutions",
				children: createVNode(_components.p, { children: "Each construction project carries its unique challenges and demands. At\nMehta Petro, we customize our services to match your specific needs, ensuring\nthat no matter the scale or complexity of your project, our team is equipped\nto handle it with precision and professionalism." })
			}),
			createVNode($$TabItem, {
				label: "Expert Team",
				children: createVNode(_components.p, { children: "Leverage the skills of our knowledgeable staff, from architects and\nengineers to skilled laborers, each contributing their expertise to bring\nyour vision to life." })
			}),
			createVNode($$TabItem, {
				label: "Commitment to Quality",
				children: createVNode(_components.p, { children: "Quality is at the heart of everything we do. We employ stringent quality\ncontrol measures to assure that the work we deliver meets and exceeds\nindustry standards." })
			}),
			createVNode($$TabItem, {
				label: "Ongoing Support",
				children: createVNode(_components.p, { children: "Our relationship with our clients doesn’t end once the project is completed.\nWe provide continuous support to address any issues and ensure lasting\nsatisfaction with your investment." })
			})
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Introduction to Mehta Petro Services",
	"description": "Explore Mehta Petro's comprehensive documentation for an in-depth look at our premium tools and construction services.",
	"sidebar": {
		"label": "Introduction to Services",
		"order": 2
	}
};
function getHeadings() {
	return [{
		"depth": 2,
		"slug": "overview-of-services",
		"text": "Overview of Services"
	}];
}
var url = "src/content/docs/guides/intro.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/guides/intro.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/guides/intro.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

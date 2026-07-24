import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
import { t as $$CardGrid } from "./CardGrid_DVfEaBZu.mjs";
/* empty css                         */
//#region src/content/docs/welcome-to-docs.mdx
function _createMdxContent(props) {
	const _components = Object.assign({ p: "p" }, props.components);
	return createVNode($$CardGrid, {
		stagger: true,
		children: [
			createVNode($$Card, {
				title: "Quick Start Guides",
				icon: "document",
				children: createVNode(_components.p, { children: "Get up and running swiftly with our straightforward and concise guides,\ntailored for new users and seasoned experts alike." })
			}),
			createVNode($$Card, {
				title: "Tools & Equipment",
				icon: "seti:eslint",
				children: createVNode(_components.p, { children: "Discover the complete lineup of Mehta Petro’s superior quality tools and\nequipment. Each subsection offers detailed specifications, usage instructions,\nand maintenance tips." })
			}),
			createVNode($$Card, {
				title: "Construction Services",
				icon: "seti:puppet",
				children: createVNode(_components.p, { children: "Discover the complete lineup of Mehta Petro’s superior quality tools and\nequipment. Each subsection offers detailed specifications, usage instructions,\nand maintenance tips." })
			}),
			createVNode($$Card, {
				title: "Advanced Topics",
				icon: "seti:terraform",
				children: createVNode(_components.p, { children: "Discover the complete lineup of Mehta Petro’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips." })
			})
		]
	});
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Mehta Petro Docs",
	"head": [{
		"tag": "title",
		"content": "Mehta Petro Docs"
	}],
	"description": "Explore Mehta Petro's comprehensive documentation for an in-depth look at our premium tools and construction services.",
	"template": "splash",
	"editUrl": false,
	"lastUpdated": false,
	"next": false,
	"hero": {
		"title": "Documentation Hub",
		"tagline": "Your central hub for streamlined tool guidance, detailed service docs, and project support.",
		"image": {
			"alt": "Mehta Petro logo",
			"dark": "../../images/starlight/mehta_petro_hero.svg",
			"light": "../../images/starlight/mehta_petro_hero_dark.svg"
		},
		"actions": [{
			"text": "Get started",
			"icon": "right-arrow",
			"variant": "primary",
			"link": "/guides/getting-started/"
		}, {
			"text": "Visit Website",
			"icon": "external",
			"variant": "minimal",
			"link": "https://mehtapetro.com"
		}]
	}
};
function getHeadings() {
	return [];
}
var url = "src/content/docs/welcome-to-docs.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/welcome-to-docs.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/welcome-to-docs.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

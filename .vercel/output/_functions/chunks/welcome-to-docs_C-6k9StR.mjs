import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
import { t as $$CardGrid } from "./CardGrid_DVfEaBZu.mjs";
/* empty css                         */
//#region src/content/docs/zh-cn/welcome-to-docs.mdx
function _createMdxContent(props) {
	const _components = Object.assign({ p: "p" }, props.components);
	return createVNode($$CardGrid, {
		stagger: true,
		children: [
			createVNode($$Card, {
				title: "快速入门指南",
				icon: "document",
				children: createVNode(_components.p, { children: "通过我们简明扼要的指南，快速掌握使用技巧，适用于新手和老手用户。" })
			}),
			createVNode($$Card, {
				title: "工具与设备",
				icon: "seti:eslint",
				children: createVNode(_components.p, { children: "探索 Mehta Petro\n的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。" })
			}),
			createVNode($$Card, {
				title: "施工服务",
				icon: "seti:puppet",
				children: createVNode(_components.p, { children: "探索 Mehta Petro\n的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。" })
			}),
			createVNode($$Card, {
				title: "高级主题",
				icon: "seti:terraform",
				children: createVNode(_components.p, { children: "探索 Mehta Petro 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。" })
			})
		]
	});
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Mehta Petro docs",
	"head": [{
		"tag": "title",
		"content": "Mehta Petro docs"
	}],
	"description": "Explore Mehta Petro's comprehensive documentation for an in-depth look at our premium tools and construction services.",
	"template": "splash",
	"editUrl": false,
	"lastUpdated": false,
	"next": false,
	"hero": {
		"title": "文档中心",
		"tagline": "您的集中式工具指南、详细服务文档和项目支持中心。",
		"image": {
			"alt": "Mehta Petro logo",
			"dark": "../../../images/starlight/mehta_petro_hero.svg",
			"light": "../../../images/starlight/mehta_petro_hero_dark.svg"
		},
		"actions": [{
			"text": "Get started",
			"icon": "right-arrow",
			"variant": "primary",
			"link": "/zh-cn/guides/getting-started/"
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
var url = "src/content/docs/zh-cn/welcome-to-docs.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/zh-cn/welcome-to-docs.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/zh-cn/welcome-to-docs.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

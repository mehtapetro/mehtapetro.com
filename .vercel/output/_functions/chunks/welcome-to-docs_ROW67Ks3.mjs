import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
import { t as $$CardGrid } from "./CardGrid_DVfEaBZu.mjs";
/* empty css                         */
//#region src/content/docs/ja/welcome-to-docs.mdx
function _createMdxContent(props) {
	const _components = Object.assign({ p: "p" }, props.components);
	return createVNode($$CardGrid, {
		stagger: true,
		children: [
			createVNode($$Card, {
				title: "クイックスタートガイド",
				icon: "document",
				children: createVNode(_components.p, { children: "当社のわかりやすく簡潔なガイドで迅速に立ち上がり、新規ユーザーと熟練した専門家の両方に適したものを利用してください。" })
			}),
			createVNode($$Card, {
				title: "ツール＆装備",
				icon: "seti:eslint",
				children: createVNode(_components.p, { children: "Mehta Petroの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。" })
			}),
			createVNode($$Card, {
				title: "建設サービス",
				icon: "seti:puppet",
				children: createVNode(_components.p, { children: "Mehta Petroの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。" })
			}),
			createVNode($$Card, {
				title: "高度なトピック",
				icon: "seti:terraform",
				children: createVNode(_components.p, { children: "Mehta Petroの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。" })
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
		"title": "ドキュメンテーションハブ",
		"tagline": "効率的なツールのガイド、詳細なサービス文書、およびプロジェクトのサポートのための中心的なハブ。",
		"image": {
			"alt": "Mehta Petro logo",
			"dark": "../../../images/starlight/mehta_petro_hero.svg",
			"light": "../../../images/starlight/mehta_petro_hero_dark.svg"
		},
		"actions": [{
			"text": "Get started",
			"icon": "right-arrow",
			"variant": "primary",
			"link": "/ja/guides/getting-started/"
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
var url = "src/content/docs/ja/welcome-to-docs.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/ja/welcome-to-docs.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/ja/welcome-to-docs.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

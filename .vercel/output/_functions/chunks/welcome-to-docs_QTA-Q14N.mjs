import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
import { t as $$CardGrid } from "./CardGrid_DVfEaBZu.mjs";
/* empty css                         */
//#region src/content/docs/fr/welcome-to-docs.mdx
function _createMdxContent(props) {
	const _components = Object.assign({ p: "p" }, props.components);
	return createVNode($$CardGrid, {
		stagger: true,
		children: [
			createVNode($$Card, {
				title: "Guides de Démarrage Rapide",
				icon: "document",
				children: createVNode(_components.p, { children: "Mettez-vous en route rapidement avec nos guides clairs et concis, adaptés aux\nnouveaux utilisateurs et aux experts chevronnés." })
			}),
			createVNode($$Card, {
				title: "Outils et Équipements",
				icon: "seti:eslint",
				children: createVNode(_components.p, { children: "Découvrez la gamme complète d’outils et d’équipements de qualité supérieure de\nMehta Petro. Chaque sous-section offre des spécifications détaillées, des\ninstructions d’utilisation et des conseils de maintenance." })
			}),
			createVNode($$Card, {
				title: "Services de Construction",
				icon: "seti:puppet",
				children: createVNode(_components.p, { children: "Découvrez la gamme complète d’outils et d’équipements de qualité supérieure de\nMehta Petro. Chaque sous-section offre des spécifications détaillées, des\ninstructions d’utilisation et des conseils de maintenance." })
			}),
			createVNode($$Card, {
				title: "Sujets Avancés",
				icon: "seti:terraform",
				children: createVNode(_components.p, { children: "Découvrez la gamme complète d’outils et d’équipements de qualité supérieure de Mehta Petro. Chaque sous-section offre des spécifications détaillées, des instructions d’utilisation et des conseils de maintenance." })
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
		"title": "Hub de Documentation",
		"tagline": "Votre centre central pour l'orientation simplifiée des outils, les documents de service détaillés et le soutien aux projets.",
		"image": {
			"alt": "Mehta Petro logo",
			"dark": "../../../images/starlight/mehta_petro_hero.svg",
			"light": "../../../images/starlight/mehta_petro_hero_dark.svg"
		},
		"actions": [{
			"text": "Get started",
			"icon": "right-arrow",
			"variant": "primary",
			"link": "/fr/guides/getting-started/"
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
var url = "src/content/docs/fr/welcome-to-docs.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/fr/welcome-to-docs.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/fr/welcome-to-docs.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
import { t as $$CardGrid } from "./CardGrid_DVfEaBZu.mjs";
/* empty css                         */
//#region src/content/docs/es/welcome-to-docs.mdx
function _createMdxContent(props) {
	const _components = Object.assign({ p: "p" }, props.components);
	return createVNode($$CardGrid, {
		stagger: true,
		children: [
			createVNode($$Card, {
				title: "Guías de Inicio Rápido",
				icon: "document",
				children: createVNode(_components.p, { children: "Levántate y comienza rápidamente con nuestras guías directas y concisas,\ndiseñadas para nuevos usuarios y expertos experimentados por igual." })
			}),
			createVNode($$Card, {
				title: "Herramientas y Equipos",
				icon: "seti:eslint",
				children: createVNode(_components.p, { children: "Descubre la línea completa de herramientas y equipos de calidad superior de\nMehta Petro. Cada subsección ofrece especificaciones detalladas, instrucciones\nde uso y consejos de mantenimiento." })
			}),
			createVNode($$Card, {
				title: "Servicios de Construcción",
				icon: "seti:puppet",
				children: createVNode(_components.p, { children: "Descubre la línea completa de herramientas y equipos de calidad superior de\nMehta Petro. Cada subsección ofrece especificaciones detalladas, instrucciones\nde uso y consejos de mantenimiento." })
			}),
			createVNode($$Card, {
				title: "Temas Avanzados",
				icon: "seti:terraform",
				children: createVNode(_components.p, { children: "Descubre la línea completa de herramientas y equipos de calidad superior de Mehta Petro. Cada subsección ofrece especificaciones detalladas, instrucciones de uso y consejos de mantenimiento." })
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
		"title": "Centro de Documentación",
		"tagline": "Tu centro central para orientación de herramientas simplificada, documentos de servicio detallados y apoyo al proyecto.",
		"image": {
			"alt": "Mehta Petro logo",
			"dark": "../../../images/starlight/mehta_petro_hero.svg",
			"light": "../../../images/starlight/mehta_petro_hero_dark.svg"
		},
		"actions": [{
			"text": "Get started",
			"icon": "right-arrow",
			"variant": "primary",
			"link": "/es/guides/getting-started/"
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
var url = "src/content/docs/es/welcome-to-docs.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/es/welcome-to-docs.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/es/welcome-to-docs.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

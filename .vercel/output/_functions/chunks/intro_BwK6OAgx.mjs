import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { n as $$Tabs, t as $$TabItem } from "./TabItem_DYri4yRp.mjs";
//#region src/content/docs/es/guides/intro.mdx
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
		createVNode(_components.p, { children: "Como parte de nuestro compromiso de proporcionar una solución integral para todas sus necesidades de construcción y hardware, en Mehta Petro nos enorgullecemos de ofrecer una amplia gama de servicios profesionales. Desde consultas iniciales hasta inspecciones finales, nuestros servicios multifacéticos abarcan la totalidad de su proyecto, garantizando resultados de calidad y satisfacción del cliente. Esta sección de la documentación le guiará a través de todo lo que necesita saber para aprovechar al máximo nuestra experiencia." }),
		"\n",
		createVNode(_components.div, {
			class: "sl-heading-wrapper level-h2",
			children: [createVNode(_components.h2, {
				id: "visión-general-de-los-servicios",
				children: "Visión general de los Servicios"
			}), createVNode(_components.a, {
				class: "sl-anchor-link",
				href: "#visión-general-de-los-servicios",
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
					children: "Sección titulada «Visión general de los Servicios»"
				})]
			})]
		}),
		"\n",
		createVNode($$Tabs, { children: [
			createVNode($$TabItem, {
				label: "Soluciones Personalizadas",
				children: createVNode(_components.p, { children: "Cada proyecto de construcción conlleva sus desafíos y demandas únicas. En\nMehta Petro, personalizamos nuestros servicios para satisfacer sus necesidades\nespecíficas, asegurando que, independientemente de la escala o complejidad\nde su proyecto, nuestro equipo esté equipado para manejarlo con precisión y\nprofesionalismo." })
			}),
			createVNode($$TabItem, {
				label: "Equipo Experto",
				children: createVNode(_components.p, { children: "Aproveche las habilidades de nuestro personal experimentado, desde\narquitectos e ingenieros hasta obreros calificados, cada uno contribuyendo\ncon su experiencia para dar vida a su visión." })
			}),
			createVNode($$TabItem, {
				label: "Compromiso con la Calidad",
				children: createVNode(_components.p, { children: "La calidad está en el corazón de todo lo que hacemos. Implementamos\nrigurosas medidas de control de calidad para asegurar que el trabajo que\nentregamos cumpla y supere los estándares de la industria." })
			}),
			createVNode($$TabItem, {
				label: "Soporte Continuo",
				children: createVNode(_components.p, { children: "Nuestra relación con nuestros clientes no termina una vez que se completa el\nproyecto. Brindamos apoyo continuo para abordar cualquier problema y\ngarantizar una satisfacción duradera con su inversión." })
			})
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Introducción a los Servicios de Mehta Petro",
	"description": "Explora la documentación completa de Mehta Petro para obtener una visión detallada de nuestras herramientas premium y servicios de construcción.",
	"sidebar": {
		"label": "Introduction to Services",
		"order": 2
	}
};
function getHeadings() {
	return [{
		"depth": 2,
		"slug": "visión-general-de-los-servicios",
		"text": "Visión general de los Servicios"
	}];
}
var url = "src/content/docs/es/guides/intro.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/es/guides/intro.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/es/guides/intro.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

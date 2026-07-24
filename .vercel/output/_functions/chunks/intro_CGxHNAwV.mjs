import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { n as $$Tabs, t as $$TabItem } from "./TabItem_DYri4yRp.mjs";
//#region src/content/docs/fr/guides/intro.mdx
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
		createVNode(_components.p, { children: "Dans le cadre de notre engagement à fournir une solution de bout en bout pour tous vos besoins en construction et matériel, nous, chez Mehta Petro, sommes fiers de proposer une suite complète de services professionnels. Des consultations initiales aux inspections finales, nos services polyvalents englobent l’intégralité de votre projet, garantissant des résultats de qualité et la satisfaction du client. Cette section de la documentation vous guidera à travers tout ce que vous devez savoir pour exploiter pleinement notre expertise." }),
		"\n",
		createVNode(_components.div, {
			class: "sl-heading-wrapper level-h2",
			children: [createVNode(_components.h2, {
				id: "aperçu-des-services",
				children: "Aperçu des Services"
			}), createVNode(_components.a, {
				class: "sl-anchor-link",
				href: "#aperçu-des-services",
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
					children: "Section intitulée « Aperçu des Services »"
				})]
			})]
		}),
		"\n",
		createVNode($$Tabs, { children: [
			createVNode($$TabItem, {
				label: "Solutions sur Mesure",
				children: createVNode(_components.p, { children: "Chaque projet de construction comporte ses propres défis et exigences. Chez\nMehta Petro, nous personnalisons nos services pour correspondre à vos besoins\nspécifiques, garantissant que, quelle que soit l’échelle ou la complexité de\nvotre projet, notre équipe est équipée pour le gérer avec précision et\nprofessionnalisme." })
			}),
			createVNode($$TabItem, {
				label: "Équipe d'Experts",
				children: createVNode(_components.p, { children: "Tire parti des compétences de notre personnel qualifié, des architectes et\ningénieurs aux ouvriers qualifiés, chacun contribuant à apporter leur\nexpertise pour donner vie à votre vision." })
			}),
			createVNode($$TabItem, {
				label: "Engagement envers la Qualité",
				children: createVNode(_components.p, { children: "La qualité est au cœur de tout ce que nous faisons. Nous mettons en œuvre\ndes mesures rigoureuses de contrôle de qualité pour garantir que le travail\nque nous livrons répond et dépasse les normes de l’industrie." })
			}),
			createVNode($$TabItem, {
				label: "Support Continu",
				children: createVNode(_components.p, { children: "Notre relation avec nos clients ne se termine pas une fois le projet\nterminé. Nous fournissons un support continu pour résoudre tout problème et\ngarantir une satisfaction durable avec votre investissement." })
			})
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Introduction aux Services Mehta Petro",
	"description": "Explorez la documentation complète de Mehta Petro pour un examen approfondi de nos outils haut de gamme et services de construction.",
	"sidebar": {
		"label": "Introduction to Services",
		"order": 2
	}
};
function getHeadings() {
	return [{
		"depth": 2,
		"slug": "aperçu-des-services",
		"text": "Aperçu des Services"
	}];
}
var url = "src/content/docs/fr/guides/intro.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/fr/guides/intro.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/fr/guides/intro.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

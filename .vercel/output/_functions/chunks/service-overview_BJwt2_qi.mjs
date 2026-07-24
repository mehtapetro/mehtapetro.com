import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
import { t as $$CardGrid } from "./CardGrid_DVfEaBZu.mjs";
//#region src/content/docs/construction/service-overview.mdx
function _createMdxContent(props) {
	const _components = Object.assign({ p: "p" }, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "Welcome to Mehta Petro Construction Services – your trusted partner in bringing complex construction visions to life. Our dedicated team is equipped with state-of-the-art tools and extensive industry knowledge to ensure your projects are completed with precision and efficiency." }),
		"\n",
		createVNode(_components.p, { children: "At Mehta Petro, we specialize in providing a range of services tailored to meet your unique construction needs. From the initial concept to the final touches, our services encompass:" }),
		"\n",
		createVNode($$CardGrid, {
			stagger: true,
			children: [
				createVNode($$Card, {
					title: "Pre-construction Consultations",
					icon: "star",
					children: createVNode(_components.p, { children: "A thorough assessment to understand your project requirements, site\nconditions, and to provide a clear roadmap for your project." })
				}),
				createVNode($$Card, {
					title: "Design and Engineering",
					icon: "star",
					children: createVNode(_components.p, { children: "Leveraging innovative software and expertise to craft bespoke solutions that\nbring your structural vision to life with accuracy and innovation." })
				}),
				createVNode($$Card, {
					title: "Project Management",
					icon: "star",
					children: createVNode(_components.p, { children: "Dedicated on-site leadership to ensure that your project runs smoothly, on\ntime, and within budget." })
				}),
				createVNode($$Card, {
					title: "Construction and Installation",
					icon: "star",
					children: createVNode(_components.p, { children: "Employing the latest tools and technologies along with skilled craftsmanship to execute your project to the highest standard." })
				})
			]
		})
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Comprehensive Service Overview",
	"description": "Explore Mehta Petro's comprehensive documentation for an in-depth look at our premium tools and construction services.",
	"sidebar": {
		"label": "Service Overview",
		"order": 1
	}
};
function getHeadings() {
	return [];
}
var url = "src/content/docs/construction/service-overview.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/construction/service-overview.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/construction/service-overview.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

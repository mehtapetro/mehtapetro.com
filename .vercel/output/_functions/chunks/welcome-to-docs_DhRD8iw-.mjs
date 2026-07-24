import { s as Fragment, t as __astro_tag_component__, w as createVNode } from "./server_B_JYDiiJ.mjs";
import { t as $$Card } from "./Card_Be39421E.mjs";
import { t as $$CardGrid } from "./CardGrid_DVfEaBZu.mjs";
/* empty css                         */
//#region src/content/docs/fa/welcome-to-docs.mdx
function _createMdxContent(props) {
	const _components = Object.assign({ p: "p" }, props.components);
	return createVNode($$CardGrid, {
		stagger: true,
		children: [
			createVNode($$Card, {
				title: "راهنمای شروع سریع",
				icon: "document",
				children: createVNode(_components.p, { children: "با راهنماهای مستقیم و مختصر ما، برای کاربران جدید و کارشناسان تجربه‌یافته،\nبه سرعت به راه بیافتید." })
			}),
			createVNode($$Card, {
				title: "ابزارها و تجهیزات",
				icon: "seti:eslint",
				children: createVNode(_components.p, { children: "تمامی ابزارها و تجهیزات با کیفیت برتر شرکت Mehta Petro را کشف کنید. هر بخش\nشامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است." })
			}),
			createVNode($$Card, {
				title: "خدمات ساخت و ساز",
				icon: "seti:puppet",
				children: createVNode(_components.p, { children: "تمامی ابزارها و تجهیزات با کیفیت برتر شرکت Mehta Petro را کشف کنید. هر بخش\nشامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است." })
			}),
			createVNode($$Card, {
				title: "مباحث پیشرفته",
				icon: "seti:terraform",
				children: createVNode(_components.p, { children: "تمامی ابزارها و تجهیزات با کیفیت برتر شرکت Mehta Petro را کشف کنید. هر بخش\nشامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است." })
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
		"title": "مرکز اسناد",
		"tagline": "مرکز مرکزی شما برای راهنمایی ساده‌سازی شده ابزار، اسناد خدمات تفصیلی و پشتیبانی پروژه.",
		"image": {
			"alt": "Mehta Petro logo",
			"dark": "../../../images/starlight/mehta_petro_hero.svg",
			"light": "../../../images/starlight/mehta_petro_hero_dark.svg"
		},
		"actions": [{
			"text": "Get started",
			"icon": "right-arrow",
			"variant": "primary",
			"link": "/fa/guides/getting-started/"
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
var url = "src/content/docs/fa/welcome-to-docs.mdx";
var file = "/Users/eightharsh/mprl/MPRL/src/content/docs/fa/welcome-to-docs.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/eightharsh/mprl/MPRL/src/content/docs/fa/welcome-to-docs.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

import { D as createAstro, T as unescapeHTML, _ as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, u as renderSlot, v as addAttribute, y as createRenderInstruction } from "./server_B_JYDiiJ.mjs";
import { t as createComponent } from "./astro-component_BGVoGKdk.mjs";
import "./compiler_Bj_GphX0.mjs";
import { t as $$Icon } from "./Icon_Cu5iHAeL.mjs";
import { select } from "hast-util-select";
import { rehype } from "rehype";
import { CONTINUE, SKIP, visit } from "unist-util-visit";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/@astrojs/starlight/user-components/rehype-tabs.ts
var TabItemTagname = "starlight-tab-item";
var focusableElementSelectors = [
	"input:not([disabled]):not([type=hidden])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]",
	"[tabindex]:not([disabled])"
].map((selector) => `${selector}:not([hidden]):not([tabindex="-1"])`).join(",");
var count = 0;
var getIDs = () => {
	const id = count++;
	return {
		panelId: "tab-panel-" + id,
		tabId: "tab-" + id
	};
};
/**
* Rehype processor to extract tab panel data and turn each
* `<starlight-tab-item>` into a `<div>` with the necessary
* attributes.
*/
var tabsProcessor = rehype().data("settings", { fragment: true }).use(function tabs() {
	return (tree, file) => {
		file.data.panels = [];
		let isFirst = true;
		visit(tree, "element", (node) => {
			if (node.tagName !== "starlight-tab-item" || !node.properties) return CONTINUE;
			const { dataLabel, dataIcon } = node.properties;
			const ids = getIDs();
			const panel = {
				...ids,
				label: String(dataLabel)
			};
			if (dataIcon) panel.icon = String(dataIcon);
			file.data.panels?.push(panel);
			delete node.properties.dataLabel;
			delete node.properties.dataIcon;
			node.tagName = "div";
			node.properties.id = ids.panelId;
			node.properties["aria-labelledby"] = ids.tabId;
			node.properties.role = "tabpanel";
			if (!select(focusableElementSelectors, node)) node.properties.tabindex = 0;
			if (isFirst) isFirst = false;
			else node.properties.hidden = true;
			return SKIP;
		});
	};
});
/**
* Process tab panel items to extract data for the tab links and format
* each tab panel correctly.
* @param html Inner HTML passed to the `<Tabs>` component.
*/
var processPanels = (html) => {
	const file = tabsProcessor.processSync({ value: html });
	return {
		/** Data for each tab panel. */
		panels: file.data.panels,
		/** Processed HTML for the tab panels. */
		html: file.toString()
	};
};
//#endregion
//#region node_modules/@astrojs/starlight/user-components/Tabs.astro
createAstro("https://mehtapetro.com");
var $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tabs;
	const { syncKey } = Astro.props;
	const { html, panels } = processPanels(await Astro.slots.render("default"));
	const isSynced = syncKey !== void 0;
	const didRenderSyncedTabsRestoreScriptSymbol = Symbol.for("starlight:did-render-synced-tabs-restore-script");
	const shouldRenderSyncedTabsRestoreScript = isSynced && Astro.locals[didRenderSyncedTabsRestoreScriptSymbol] !== true;
	if (isSynced) Astro.locals[didRenderSyncedTabsRestoreScriptSymbol] = true;
	return renderTemplate`${shouldRenderSyncedTabsRestoreScript && renderTemplate`<script>
(() => {
	class StarlightTabsRestore extends HTMLElement {
		connectedCallback() {
			const starlightTabs = this.closest('starlight-tabs');
			if (!(starlightTabs instanceof HTMLElement) || typeof localStorage === 'undefined') return;
			const syncKey = starlightTabs.dataset.syncKey;
			if (!syncKey) return;
			const label = localStorage.getItem(\`starlight-synced-tabs__\${syncKey}\`);
			if (!label) return;
			const tabs = [...starlightTabs?.querySelectorAll('[role="tab"]')];
			const tabIndexToRestore = tabs.findIndex(
				(tab) => tab instanceof HTMLAnchorElement && tab.textContent?.trim() === label
			);
			const panels = starlightTabs?.querySelectorAll(':scope > [role="tabpanel"]');
			const newTab = tabs[tabIndexToRestore];
			const newPanel = panels[tabIndexToRestore];
			if (tabIndexToRestore < 1 || !newTab || !newPanel) return;
			tabs[0]?.setAttribute('aria-selected', 'false');
			tabs[0]?.setAttribute('tabindex', '-1');
			panels?.[0]?.setAttribute('hidden', 'true');
			newTab.removeAttribute('tabindex');
			newTab.setAttribute('aria-selected', 'true');
			newPanel.removeAttribute('hidden');
		}
	}
	customElements.define('starlight-tabs-restore', StarlightTabsRestore);
})()
<\/script>`}${renderComponent($$result, "starlight-tabs", "starlight-tabs", {
		"data-sync-key": syncKey,
		"class": "astro-hbt4ddzs"
	}, { "default": ($$result) => renderTemplate`${panels && renderTemplate`${maybeRenderHead($$result)}<div class="tablist-wrapper not-content astro-hbt4ddzs"><ul role="tablist" class="astro-hbt4ddzs">${panels.map(({ icon, label, panelId, tabId }, idx) => renderTemplate`<li role="presentation" class="tab astro-hbt4ddzs"><a role="tab"${addAttribute("#" + panelId, "href")}${addAttribute(tabId, "id")}${addAttribute(idx === 0 ? "true" : "false", "aria-selected")}${addAttribute(idx !== 0 ? -1 : 0, "tabindex")} class="astro-hbt4ddzs">${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"class": "astro-hbt4ddzs"
	})}`}${label}</a></li>`)}</ul></div>`}${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(html)}` })}${isSynced && renderTemplate`${renderComponent($$result, "starlight-tabs-restore", "starlight-tabs-restore", { "class": "astro-hbt4ddzs" })}`}` })}${renderScript($$result, "/Users/eightharsh/mprl/MPRL/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/eightharsh/mprl/MPRL/node_modules/@astrojs/starlight/user-components/Tabs.astro", void 0);
//#endregion
//#region node_modules/@astrojs/starlight/user-components/TabItem.astro
createAstro("https://mehtapetro.com");
var $$TabItem = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TabItem;
	const { icon, label } = Astro.props;
	if (!label) throw new Error("Missing prop `label` on `<TabItem>` component.");
	return renderTemplate`${renderComponent($$result, "TabItemTagname", TabItemTagname, {
		"data-label": label,
		"data-icon": icon
	}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "/Users/eightharsh/mprl/MPRL/node_modules/@astrojs/starlight/user-components/TabItem.astro", void 0);
//#endregion
export { $$Tabs as n, $$TabItem as t };

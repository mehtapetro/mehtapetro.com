import { nt as AstroUserError } from "./chunks/errors-data_99NpHCJB.mjs";
import { O as defineMiddleware, _ as sequence } from "./chunks/render_BvZGn8vu.mjs";
import { t as useTranslations } from "./chunks/translations_BzgMLR3I.mjs";
//#region node_modules/@astrojs/starlight/locals.ts
var onRequest$1 = defineMiddleware(async (context, next) => {
	context.locals.t = useTranslations(context.currentLocale);
	initializeStarlightRoute(context);
	return next();
});
/**
* Sets up a `starlightRoute` property on locals. Initially, this will throw an error if accessed.
* When rendering, Starlight’s routes set `starlightRoute` with the resolved route data object for
* the current page.
*
* This ensures Starlight components can easily access `starlightRoute` without needing type guards,
* we can throw a helpful message if `starlightRoute` is accessed on non-Starlight pages, and we
* avoid generating route data in this middleware which also runs for non-Starlight route.
*/
function initializeStarlightRoute(context) {
	if ("starlightRoute" in context.locals) return;
	const state = { routeData: void 0 };
	Object.defineProperty(context.locals, "starlightRoute", {
		get() {
			if (!state.routeData) throw new AstroUserError("`locals.starlightRoute` is not defined", "This usually means a component that accesses `locals.starlightRoute` is being rendered outside of a Starlight page, which is not supported.\n\nIf this is a component you authored, you can do one of the following:\n\n1. Avoid using this component in non-Starlight pages.\n2. Wrap the code that reads `locals.starlightRoute` in a  `try/catch` block and handle the cases where `starlightRoute` is not available.\n\nIf this is a Starlight built-in or third-party component, you may need to report a bug or avoid this use of the component.");
			return state.routeData;
		},
		set(routeData) {
			state.routeData = routeData;
		}
	});
}
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
//#endregion
export { onRequest };

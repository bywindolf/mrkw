"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-collection@1.1.2_@types+react-dom@18.3.6_@types+react@18.3.20__@types+react@1_6lxfwjm37shcpqgk3ly3j4ryoi";
exports.ids = ["vendor-chunks/@radix-ui+react-collection@1.1.2_@types+react-dom@18.3.6_@types+react@18.3.20__@types+react@1_6lxfwjm37shcpqgk3ly3j4ryoi"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-collection@1.1.2_@types+react-dom@18.3.6_@types+react@18.3.20__@types+react@1_6lxfwjm37shcpqgk3ly3j4ryoi/node_modules/@radix-ui/react-collection/dist/index.mjs":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-collection@1.1.2_@types+react-dom@18.3.6_@types+react@18.3.20__@types+react@1_6lxfwjm37shcpqgk3ly3j4ryoi/node_modules/@radix-ui/react-collection/dist/index.mjs ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCollection: () => (/* binding */ createCollection)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.1.1_@types+react@18.3.20_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@18.3.20_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-slot@1.1.2_@types+react@18.3.20_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ createCollection auto */ // packages/react/collection/src/collection.tsx\n\n\n\n\n\nfunction createCollection(name) {\n    const PROVIDER_NAME = name + \"CollectionProvider\";\n    const [createCollectionContext, createCollectionScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)(PROVIDER_NAME);\n    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {\n        collectionRef: {\n            current: null\n        },\n        itemMap: /* @__PURE__ */ new Map()\n    });\n    const CollectionProvider = (props)=>{\n        const { scope, children } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const itemMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef(/* @__PURE__ */ new Map()).current;\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollectionProviderImpl, {\n            scope,\n            itemMap,\n            collectionRef: ref,\n            children\n        });\n    };\n    CollectionProvider.displayName = PROVIDER_NAME;\n    const COLLECTION_SLOT_NAME = name + \"CollectionSlot\";\n    const CollectionSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope, children } = props;\n        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, context.collectionRef);\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot, {\n            ref: composedRefs,\n            children\n        });\n    });\n    CollectionSlot.displayName = COLLECTION_SLOT_NAME;\n    const ITEM_SLOT_NAME = name + \"CollectionItemSlot\";\n    const ITEM_DATA_ATTR = \"data-radix-collection-item\";\n    const CollectionItemSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope, children, ...itemData } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, ref);\n        const context = useCollectionContext(ITEM_SLOT_NAME, scope);\n        react__WEBPACK_IMPORTED_MODULE_0__.useEffect({\n            \"createCollection.CollectionItemSlot.useEffect\": ()=>{\n                context.itemMap.set(ref, {\n                    ref,\n                    ...itemData\n                });\n                return ({\n                    \"createCollection.CollectionItemSlot.useEffect\": ()=>void context.itemMap.delete(ref)\n                })[\"createCollection.CollectionItemSlot.useEffect\"];\n            }\n        }[\"createCollection.CollectionItemSlot.useEffect\"]);\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot, {\n            ...{\n                [ITEM_DATA_ATTR]: \"\"\n            },\n            ref: composedRefs,\n            children\n        });\n    });\n    CollectionItemSlot.displayName = ITEM_SLOT_NAME;\n    function useCollection(scope) {\n        const context = useCollectionContext(name + \"CollectionConsumer\", scope);\n        const getItems = react__WEBPACK_IMPORTED_MODULE_0__.useCallback({\n            \"createCollection.useCollection.useCallback[getItems]\": ()=>{\n                const collectionNode = context.collectionRef.current;\n                if (!collectionNode) return [];\n                const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));\n                const items = Array.from(context.itemMap.values());\n                const orderedItems = items.sort({\n                    \"createCollection.useCollection.useCallback[getItems].orderedItems\": (a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)\n                }[\"createCollection.useCollection.useCallback[getItems].orderedItems\"]);\n                return orderedItems;\n            }\n        }[\"createCollection.useCollection.useCallback[getItems]\"], [\n            context.collectionRef,\n            context.itemMap\n        ]);\n        return getItems;\n    }\n    return [\n        {\n            Provider: CollectionProvider,\n            Slot: CollectionSlot,\n            ItemSlot: CollectionItemSlot\n        },\n        useCollection,\n        createCollectionScope\n    ];\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbGxlY3Rpb25AMS4xLjJfQHR5cGVzK3JlYWN0LWRvbUAxOC4zLjZfQHR5cGVzK3JlYWN0QDE4LjMuMjBfX0B0eXBlcytyZWFjdEAxXzZseGZ3am0zN3NoY3BxZ2szbHkzajRyeW9pL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29sbGVjdGlvbi9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtCO0FBQ2lCO0FBQ0g7QUFDWDtBQXVDZjtBQTFCTixTQUFTLGlCQUFpRSxNQUFjO0lBS3RGLE1BQU0sZ0JBQWdCLE9BQU87SUFDN0IsTUFBTSxDQUFDLHlCQUF5QixxQkFBcUIsSUFBSSwyRUFBa0IsQ0FBQyxhQUFhO0lBVXpGLE1BQU0sQ0FBQyx3QkFBd0Isb0JBQW9CLElBQUksd0JBQ3JELGVBQ0E7UUFBRSxlQUFlO1lBQUUsU0FBUztRQUFLO1FBQUcsU0FBUyxvQkFBSSxJQUFJO0lBQUU7SUFHekQsTUFBTSxxQkFBMkUsQ0FBQztRQUNoRixNQUFNLEVBQUUsT0FBTyxTQUFTLElBQUk7UUFDNUIsTUFBTSxNQUFNLHlDQUFNLENBQTBCLElBQUk7UUFDaEQsTUFBTSxVQUFVLHlDQUFNLENBQWdDLG9CQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2pFLE9BQ0UsdUVBQUM7WUFBdUI7WUFBYztZQUFrQixlQUFlO1lBQ3BFO1FBQUEsQ0FDSDtJQUVKO0lBRUEsbUJBQW1CLGNBQWM7SUFNakMsTUFBTSx1QkFBdUIsT0FBTztJQUVwQyxNQUFNLCtCQUFpQiw2Q0FBTSxDQUMzQixDQUFDLE9BQU87UUFDTixNQUFNLEVBQUUsT0FBTyxTQUFTLElBQUk7UUFDNUIsTUFBTSxVQUFVLHFCQUFxQixzQkFBc0IsS0FBSztRQUNoRSxNQUFNLGVBQWUsNkVBQWUsQ0FBQyxjQUFjLFFBQVEsYUFBYTtRQUN4RSxPQUFPLHVFQUFDLHNEQUFJLEVBQUo7WUFBSyxLQUFLO1lBQWU7UUFBQSxDQUFTO0lBQzVDO0lBR0YsZUFBZSxjQUFjO0lBTTdCLE1BQU0saUJBQWlCLE9BQU87SUFDOUIsTUFBTSxpQkFBaUI7SUFPdkIsTUFBTSxtQ0FBcUIsNkNBQU0sQ0FDL0IsQ0FBQyxPQUFPO1FBQ04sTUFBTSxFQUFFLE9BQU8sVUFBVSxHQUFHLFNBQVMsSUFBSTtRQUN6QyxNQUFNLE1BQU0seUNBQU0sQ0FBb0IsSUFBSTtRQUMxQyxNQUFNLGVBQWUsNkVBQWUsQ0FBQyxjQUFjLEdBQUc7UUFDdEQsTUFBTSxVQUFVLHFCQUFxQixnQkFBZ0IsS0FBSztRQUUxRCw0Q0FBTTs2REFBVTtnQkFDZCxRQUFRLFFBQVEsSUFBSSxLQUFLO29CQUFFO29CQUFLLEdBQUk7Z0JBQWlDLENBQUM7Z0JBQ3RFO3FFQUFPLElBQU0sS0FBSyxRQUFRLFFBQVEsT0FBTyxHQUFHOztZQUM5QyxDQUFDOztRQUVELE9BQ0UsdUVBQUMsc0RBQUksRUFBSjtZQUFNLEdBQUc7Z0JBQUUsQ0FBQyxjQUFjLEdBQUc7WUFBRztZQUFHLEtBQUs7WUFDdEM7UUFBQSxDQUNIO0lBRUo7SUFHRixtQkFBbUIsY0FBYztJQU1qQyxTQUFTLGNBQWMsT0FBWTtRQUNqQyxNQUFNLFVBQVUscUJBQXFCLE9BQU8sc0JBQXNCLEtBQUs7UUFFdkUsTUFBTSxXQUFXLDhDQUFNO29FQUFZO2dCQUNqQyxNQUFNLGlCQUFpQixRQUFRLGNBQWM7Z0JBQzdDLElBQUksQ0FBQyxlQUFnQixRQUFPLENBQUM7Z0JBQzdCLE1BQU0sZUFBZSxNQUFNLEtBQUssZUFBZSxpQkFBaUIsSUFBSSxjQUFjLEdBQUcsQ0FBQztnQkFDdEYsTUFBTSxRQUFRLE1BQU0sS0FBSyxRQUFRLFFBQVEsT0FBTyxDQUFDO2dCQUNqRCxNQUFNLGVBQWUsTUFBTTt5RkFDekIsQ0FBQyxHQUFHLElBQU0sYUFBYSxRQUFRLEVBQUUsSUFBSSxPQUFRLElBQUksYUFBYSxRQUFRLEVBQUUsSUFBSSxPQUFROztnQkFFdEYsT0FBTztZQUNUO21FQUFHO1lBQUMsUUFBUTtZQUFlLFFBQVEsT0FBTztTQUFDO1FBRTNDLE9BQU87SUFDVDtJQUVBLE9BQU87UUFDTDtZQUFFLFVBQVU7WUFBb0IsTUFBTTtZQUFnQixVQUFVO1FBQW1CO1FBQ25GO1FBQ0E7S0FDRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMva3Jpc3RvZmZlcndpbmRvbGYvU2l0ZXMvc3JjL2NvbGxlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0U2NvcGUgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtY29udGV4dCc7XG5pbXBvcnQgeyB1c2VDb21wb3NlZFJlZnMgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzJztcbmltcG9ydCB7IFNsb3QgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3Qtc2xvdCc7XG5cbnR5cGUgU2xvdFByb3BzID0gUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTbG90PjtcbnR5cGUgQ29sbGVjdGlvbkVsZW1lbnQgPSBIVE1MRWxlbWVudDtcbmludGVyZmFjZSBDb2xsZWN0aW9uUHJvcHMgZXh0ZW5kcyBTbG90UHJvcHMge1xuICBzY29wZTogYW55O1xufVxuXG4vLyBXZSBoYXZlIHJlc29ydGVkIHRvIHJldHVybmluZyBzbG90cyBkaXJlY3RseSByYXRoZXIgdGhhbiBleHBvc2luZyBwcmltaXRpdmVzIHRoYXQgY2FuIHRoZW5cbi8vIGJlIHNsb3R0ZWQgbGlrZSBgPENvbGxlY3Rpb25JdGVtIGFzPXtTbG90fT7igKY8L0NvbGxlY3Rpb25JdGVtPmAuXG4vLyBUaGlzIGlzIGJlY2F1c2Ugd2UgZW5jb3VudGVyZWQgaXNzdWVzIHdpdGggZ2VuZXJpYyB0eXBlcyB0aGF0IGNhbm5vdCBiZSBzdGF0aWNhbGx5IGFuYWx5c2VkXG4vLyBkdWUgdG8gY3JlYXRpbmcgdGhlbSBkeW5hbWljYWxseSB2aWEgY3JlYXRlQ29sbGVjdGlvbi5cblxuZnVuY3Rpb24gY3JlYXRlQ29sbGVjdGlvbjxJdGVtRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50LCBJdGVtRGF0YSA9IHt9PihuYW1lOiBzdHJpbmcpIHtcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29sbGVjdGlvblByb3ZpZGVyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgY29uc3QgUFJPVklERVJfTkFNRSA9IG5hbWUgKyAnQ29sbGVjdGlvblByb3ZpZGVyJztcbiAgY29uc3QgW2NyZWF0ZUNvbGxlY3Rpb25Db250ZXh0LCBjcmVhdGVDb2xsZWN0aW9uU2NvcGVdID0gY3JlYXRlQ29udGV4dFNjb3BlKFBST1ZJREVSX05BTUUpO1xuXG4gIHR5cGUgQ29udGV4dFZhbHVlID0ge1xuICAgIGNvbGxlY3Rpb25SZWY6IFJlYWN0LlJlZk9iamVjdDxDb2xsZWN0aW9uRWxlbWVudCB8IG51bGw+O1xuICAgIGl0ZW1NYXA6IE1hcDxcbiAgICAgIFJlYWN0LlJlZk9iamVjdDxJdGVtRWxlbWVudCB8IG51bGw+LFxuICAgICAgeyByZWY6IFJlYWN0LlJlZk9iamVjdDxJdGVtRWxlbWVudCB8IG51bGw+IH0gJiBJdGVtRGF0YVxuICAgID47XG4gIH07XG5cbiAgY29uc3QgW0NvbGxlY3Rpb25Qcm92aWRlckltcGwsIHVzZUNvbGxlY3Rpb25Db250ZXh0XSA9IGNyZWF0ZUNvbGxlY3Rpb25Db250ZXh0PENvbnRleHRWYWx1ZT4oXG4gICAgUFJPVklERVJfTkFNRSxcbiAgICB7IGNvbGxlY3Rpb25SZWY6IHsgY3VycmVudDogbnVsbCB9LCBpdGVtTWFwOiBuZXcgTWFwKCkgfVxuICApO1xuXG4gIGNvbnN0IENvbGxlY3Rpb25Qcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTsgc2NvcGU6IGFueSB9PiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgc2NvcGUsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8Q29sbGVjdGlvbkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGl0ZW1NYXAgPSBSZWFjdC51c2VSZWY8Q29udGV4dFZhbHVlWydpdGVtTWFwJ10+KG5ldyBNYXAoKSkuY3VycmVudDtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbGxlY3Rpb25Qcm92aWRlckltcGwgc2NvcGU9e3Njb3BlfSBpdGVtTWFwPXtpdGVtTWFwfSBjb2xsZWN0aW9uUmVmPXtyZWZ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbGxlY3Rpb25Qcm92aWRlckltcGw+XG4gICAgKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uUHJvdmlkZXIuZGlzcGxheU5hbWUgPSBQUk9WSURFUl9OQU1FO1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbGxlY3Rpb25TbG90XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgY29uc3QgQ09MTEVDVElPTl9TTE9UX05BTUUgPSBuYW1lICsgJ0NvbGxlY3Rpb25TbG90JztcblxuICBjb25zdCBDb2xsZWN0aW9uU2xvdCA9IFJlYWN0LmZvcndhcmRSZWY8Q29sbGVjdGlvbkVsZW1lbnQsIENvbGxlY3Rpb25Qcm9wcz4oXG4gICAgKHByb3BzLCBmb3J3YXJkZWRSZWYpID0+IHtcbiAgICAgIGNvbnN0IHsgc2NvcGUsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb2xsZWN0aW9uQ29udGV4dChDT0xMRUNUSU9OX1NMT1RfTkFNRSwgc2NvcGUpO1xuICAgICAgY29uc3QgY29tcG9zZWRSZWZzID0gdXNlQ29tcG9zZWRSZWZzKGZvcndhcmRlZFJlZiwgY29udGV4dC5jb2xsZWN0aW9uUmVmKTtcbiAgICAgIHJldHVybiA8U2xvdCByZWY9e2NvbXBvc2VkUmVmc30+e2NoaWxkcmVufTwvU2xvdD47XG4gICAgfVxuICApO1xuXG4gIENvbGxlY3Rpb25TbG90LmRpc3BsYXlOYW1lID0gQ09MTEVDVElPTl9TTE9UX05BTUU7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29sbGVjdGlvbkl0ZW1cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBjb25zdCBJVEVNX1NMT1RfTkFNRSA9IG5hbWUgKyAnQ29sbGVjdGlvbkl0ZW1TbG90JztcbiAgY29uc3QgSVRFTV9EQVRBX0FUVFIgPSAnZGF0YS1yYWRpeC1jb2xsZWN0aW9uLWl0ZW0nO1xuXG4gIHR5cGUgQ29sbGVjdGlvbkl0ZW1TbG90UHJvcHMgPSBJdGVtRGF0YSAmIHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICAgIHNjb3BlOiBhbnk7XG4gIH07XG5cbiAgY29uc3QgQ29sbGVjdGlvbkl0ZW1TbG90ID0gUmVhY3QuZm9yd2FyZFJlZjxJdGVtRWxlbWVudCwgQ29sbGVjdGlvbkl0ZW1TbG90UHJvcHM+KFxuICAgIChwcm9wcywgZm9yd2FyZGVkUmVmKSA9PiB7XG4gICAgICBjb25zdCB7IHNjb3BlLCBjaGlsZHJlbiwgLi4uaXRlbURhdGEgfSA9IHByb3BzO1xuICAgICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPEl0ZW1FbGVtZW50PihudWxsKTtcbiAgICAgIGNvbnN0IGNvbXBvc2VkUmVmcyA9IHVzZUNvbXBvc2VkUmVmcyhmb3J3YXJkZWRSZWYsIHJlZik7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29sbGVjdGlvbkNvbnRleHQoSVRFTV9TTE9UX05BTUUsIHNjb3BlKTtcblxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29udGV4dC5pdGVtTWFwLnNldChyZWYsIHsgcmVmLCAuLi4oaXRlbURhdGEgYXMgdW5rbm93biBhcyBJdGVtRGF0YSkgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB2b2lkIGNvbnRleHQuaXRlbU1hcC5kZWxldGUocmVmKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2xvdCB7Li4ueyBbSVRFTV9EQVRBX0FUVFJdOiAnJyB9fSByZWY9e2NvbXBvc2VkUmVmc30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1Nsb3Q+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICBDb2xsZWN0aW9uSXRlbVNsb3QuZGlzcGxheU5hbWUgPSBJVEVNX1NMT1RfTkFNRTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiB1c2VDb2xsZWN0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgZnVuY3Rpb24gdXNlQ29sbGVjdGlvbihzY29wZTogYW55KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbGxlY3Rpb25Db250ZXh0KG5hbWUgKyAnQ29sbGVjdGlvbkNvbnN1bWVyJywgc2NvcGUpO1xuXG4gICAgY29uc3QgZ2V0SXRlbXMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uTm9kZSA9IGNvbnRleHQuY29sbGVjdGlvblJlZi5jdXJyZW50O1xuICAgICAgaWYgKCFjb2xsZWN0aW9uTm9kZSkgcmV0dXJuIFtdO1xuICAgICAgY29uc3Qgb3JkZXJlZE5vZGVzID0gQXJyYXkuZnJvbShjb2xsZWN0aW9uTm9kZS5xdWVyeVNlbGVjdG9yQWxsKGBbJHtJVEVNX0RBVEFfQVRUUn1dYCkpO1xuICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGNvbnRleHQuaXRlbU1hcC52YWx1ZXMoKSk7XG4gICAgICBjb25zdCBvcmRlcmVkSXRlbXMgPSBpdGVtcy5zb3J0KFxuICAgICAgICAoYSwgYikgPT4gb3JkZXJlZE5vZGVzLmluZGV4T2YoYS5yZWYuY3VycmVudCEpIC0gb3JkZXJlZE5vZGVzLmluZGV4T2YoYi5yZWYuY3VycmVudCEpXG4gICAgICApO1xuICAgICAgcmV0dXJuIG9yZGVyZWRJdGVtcztcbiAgICB9LCBbY29udGV4dC5jb2xsZWN0aW9uUmVmLCBjb250ZXh0Lml0ZW1NYXBdKTtcblxuICAgIHJldHVybiBnZXRJdGVtcztcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgeyBQcm92aWRlcjogQ29sbGVjdGlvblByb3ZpZGVyLCBTbG90OiBDb2xsZWN0aW9uU2xvdCwgSXRlbVNsb3Q6IENvbGxlY3Rpb25JdGVtU2xvdCB9LFxuICAgIHVzZUNvbGxlY3Rpb24sXG4gICAgY3JlYXRlQ29sbGVjdGlvblNjb3BlLFxuICBdIGFzIGNvbnN0O1xufVxuXG5leHBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uIH07XG5leHBvcnQgdHlwZSB7IENvbGxlY3Rpb25Qcm9wcyB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-collection@1.1.2_@types+react-dom@18.3.6_@types+react@18.3.20__@types+react@1_6lxfwjm37shcpqgk3ly3j4ryoi/node_modules/@radix-ui/react-collection/dist/index.mjs\n");

/***/ })

};
;
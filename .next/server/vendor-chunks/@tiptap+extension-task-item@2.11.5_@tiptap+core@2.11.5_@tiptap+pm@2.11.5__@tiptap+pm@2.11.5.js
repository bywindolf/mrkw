"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tiptap+extension-task-item@2.11.5_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5";
exports.ids = ["vendor-chunks/@tiptap+extension-task-item@2.11.5_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@tiptap+extension-task-item@2.11.5_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5/node_modules/@tiptap/extension-task-item/dist/index.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tiptap+extension-task-item@2.11.5_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5/node_modules/@tiptap/extension-task-item/dist/index.js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskItem: () => (/* binding */ TaskItem),\n/* harmony export */   \"default\": () => (/* binding */ TaskItem),\n/* harmony export */   inputRegex: () => (/* binding */ inputRegex)\n/* harmony export */ });\n/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ \"(ssr)/./node_modules/.pnpm/@tiptap+core@2.11.5_@tiptap+pm@2.11.5/node_modules/@tiptap/core/dist/index.js\");\n\n\n/**\n * Matches a task item to a - [ ] on input.\n */\nconst inputRegex = /^\\s*(\\[([( |x])?\\])\\s$/;\n/**\n * This extension allows you to create task items.\n * @see https://www.tiptap.dev/api/nodes/task-item\n */\nconst TaskItem = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Node.create({\n    name: 'taskItem',\n    addOptions() {\n        return {\n            nested: false,\n            HTMLAttributes: {},\n            taskListTypeName: 'taskList',\n        };\n    },\n    content() {\n        return this.options.nested ? 'paragraph block*' : 'paragraph+';\n    },\n    defining: true,\n    addAttributes() {\n        return {\n            checked: {\n                default: false,\n                keepOnSplit: false,\n                parseHTML: element => {\n                    const dataChecked = element.getAttribute('data-checked');\n                    return dataChecked === '' || dataChecked === 'true';\n                },\n                renderHTML: attributes => ({\n                    'data-checked': attributes.checked,\n                }),\n            },\n        };\n    },\n    parseHTML() {\n        return [\n            {\n                tag: `li[data-type=\"${this.name}\"]`,\n                priority: 51,\n            },\n        ];\n    },\n    renderHTML({ node, HTMLAttributes }) {\n        return [\n            'li',\n            (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes, {\n                'data-type': this.name,\n            }),\n            [\n                'label',\n                [\n                    'input',\n                    {\n                        type: 'checkbox',\n                        checked: node.attrs.checked ? 'checked' : null,\n                    },\n                ],\n                ['span'],\n            ],\n            ['div', 0],\n        ];\n    },\n    addKeyboardShortcuts() {\n        const shortcuts = {\n            Enter: () => this.editor.commands.splitListItem(this.name),\n            'Shift-Tab': () => this.editor.commands.liftListItem(this.name),\n        };\n        if (!this.options.nested) {\n            return shortcuts;\n        }\n        return {\n            ...shortcuts,\n            Tab: () => this.editor.commands.sinkListItem(this.name),\n        };\n    },\n    addNodeView() {\n        return ({ node, HTMLAttributes, getPos, editor, }) => {\n            const listItem = document.createElement('li');\n            const checkboxWrapper = document.createElement('label');\n            const checkboxStyler = document.createElement('span');\n            const checkbox = document.createElement('input');\n            const content = document.createElement('div');\n            checkboxWrapper.contentEditable = 'false';\n            checkbox.type = 'checkbox';\n            checkbox.addEventListener('mousedown', event => event.preventDefault());\n            checkbox.addEventListener('change', event => {\n                // if the editor isn’t editable and we don't have a handler for\n                // readonly checks we have to undo the latest change\n                if (!editor.isEditable && !this.options.onReadOnlyChecked) {\n                    checkbox.checked = !checkbox.checked;\n                    return;\n                }\n                const { checked } = event.target;\n                if (editor.isEditable && typeof getPos === 'function') {\n                    editor\n                        .chain()\n                        .focus(undefined, { scrollIntoView: false })\n                        .command(({ tr }) => {\n                        const position = getPos();\n                        if (typeof position !== 'number') {\n                            return false;\n                        }\n                        const currentNode = tr.doc.nodeAt(position);\n                        tr.setNodeMarkup(position, undefined, {\n                            ...currentNode === null || currentNode === void 0 ? void 0 : currentNode.attrs,\n                            checked,\n                        });\n                        return true;\n                    })\n                        .run();\n                }\n                if (!editor.isEditable && this.options.onReadOnlyChecked) {\n                    // Reset state if onReadOnlyChecked returns false\n                    if (!this.options.onReadOnlyChecked(node, checked)) {\n                        checkbox.checked = !checkbox.checked;\n                    }\n                }\n            });\n            Object.entries(this.options.HTMLAttributes).forEach(([key, value]) => {\n                listItem.setAttribute(key, value);\n            });\n            listItem.dataset.checked = node.attrs.checked;\n            checkbox.checked = node.attrs.checked;\n            checkboxWrapper.append(checkbox, checkboxStyler);\n            listItem.append(checkboxWrapper, content);\n            Object.entries(HTMLAttributes).forEach(([key, value]) => {\n                listItem.setAttribute(key, value);\n            });\n            return {\n                dom: listItem,\n                contentDOM: content,\n                update: updatedNode => {\n                    if (updatedNode.type !== this.type) {\n                        return false;\n                    }\n                    listItem.dataset.checked = updatedNode.attrs.checked;\n                    checkbox.checked = updatedNode.attrs.checked;\n                    return true;\n                },\n            };\n        };\n    },\n    addInputRules() {\n        return [\n            (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.wrappingInputRule)({\n                find: inputRegex,\n                type: this.type,\n                getAttributes: match => ({\n                    checked: match[match.length - 1] === 'x',\n                }),\n            }),\n        ];\n    },\n});\n\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRpcHRhcCtleHRlbnNpb24tdGFzay1pdGVtQDIuMTEuNV9AdGlwdGFwK2NvcmVAMi4xMS41X0B0aXB0YXArcG1AMi4xMS41X19AdGlwdGFwK3BtQDIuMTEuNS9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tdGFzay1pdGVtL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxVQUFVO0FBQ2hEO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLFlBQVksNkRBQWU7QUFDM0I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsdUNBQXVDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx1QkFBdUI7QUFDbkUsb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksK0RBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVvRDtBQUNyRCIsInNvdXJjZXMiOlsiL1VzZXJzL2tyaXN0b2ZmZXJ3aW5kb2xmL1NpdGVzL21ya3cvbm9kZV9tb2R1bGVzLy5wbnBtL0B0aXB0YXArZXh0ZW5zaW9uLXRhc2staXRlbUAyLjExLjVfQHRpcHRhcCtjb3JlQDIuMTEuNV9AdGlwdGFwK3BtQDIuMTEuNV9fQHRpcHRhcCtwbUAyLjExLjUvbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLXRhc2staXRlbS9kaXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGUsIG1lcmdlQXR0cmlidXRlcywgd3JhcHBpbmdJbnB1dFJ1bGUgfSBmcm9tICdAdGlwdGFwL2NvcmUnO1xuXG4vKipcbiAqIE1hdGNoZXMgYSB0YXNrIGl0ZW0gdG8gYSAtIFsgXSBvbiBpbnB1dC5cbiAqL1xuY29uc3QgaW5wdXRSZWdleCA9IC9eXFxzKihcXFsoWyggfHhdKT9cXF0pXFxzJC87XG4vKipcbiAqIFRoaXMgZXh0ZW5zaW9uIGFsbG93cyB5b3UgdG8gY3JlYXRlIHRhc2sgaXRlbXMuXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnRpcHRhcC5kZXYvYXBpL25vZGVzL3Rhc2staXRlbVxuICovXG5jb25zdCBUYXNrSXRlbSA9IE5vZGUuY3JlYXRlKHtcbiAgICBuYW1lOiAndGFza0l0ZW0nLFxuICAgIGFkZE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgSFRNTEF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICAgICAgdGFza0xpc3RUeXBlTmFtZTogJ3Rhc2tMaXN0JyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmVzdGVkID8gJ3BhcmFncmFwaCBibG9jayonIDogJ3BhcmFncmFwaCsnO1xuICAgIH0sXG4gICAgZGVmaW5pbmc6IHRydWUsXG4gICAgYWRkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBrZWVwT25TcGxpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFyc2VIVE1MOiBlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUNoZWNrZWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhQ2hlY2tlZCA9PT0gJycgfHwgZGF0YUNoZWNrZWQgPT09ICd0cnVlJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbmRlckhUTUw6IGF0dHJpYnV0ZXMgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2hlY2tlZCc6IGF0dHJpYnV0ZXMuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBwYXJzZUhUTUwoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBgbGlbZGF0YS10eXBlPVwiJHt0aGlzLm5hbWV9XCJdYCxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogNTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH0sXG4gICAgcmVuZGVySFRNTCh7IG5vZGUsIEhUTUxBdHRyaWJ1dGVzIH0pIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICBtZXJnZUF0dHJpYnV0ZXModGhpcy5vcHRpb25zLkhUTUxBdHRyaWJ1dGVzLCBIVE1MQXR0cmlidXRlcywge1xuICAgICAgICAgICAgICAgICdkYXRhLXR5cGUnOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG5vZGUuYXR0cnMuY2hlY2tlZCA/ICdjaGVja2VkJyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbJ3NwYW4nXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbJ2RpdicsIDBdLFxuICAgICAgICBdO1xuICAgIH0sXG4gICAgYWRkS2V5Ym9hcmRTaG9ydGN1dHMoKSB7XG4gICAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHtcbiAgICAgICAgICAgIEVudGVyOiAoKSA9PiB0aGlzLmVkaXRvci5jb21tYW5kcy5zcGxpdExpc3RJdGVtKHRoaXMubmFtZSksXG4gICAgICAgICAgICAnU2hpZnQtVGFiJzogKCkgPT4gdGhpcy5lZGl0b3IuY29tbWFuZHMubGlmdExpc3RJdGVtKHRoaXMubmFtZSksXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLm5lc3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3J0Y3V0cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc2hvcnRjdXRzLFxuICAgICAgICAgICAgVGFiOiAoKSA9PiB0aGlzLmVkaXRvci5jb21tYW5kcy5zaW5rTGlzdEl0ZW0odGhpcy5uYW1lKSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGFkZE5vZGVWaWV3KCkge1xuICAgICAgICByZXR1cm4gKHsgbm9kZSwgSFRNTEF0dHJpYnV0ZXMsIGdldFBvcywgZWRpdG9yLCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hTdHlsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjaGVja2JveFdyYXBwZXIuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGVkaXRvciBpc27igJl0IGVkaXRhYmxlIGFuZCB3ZSBkb24ndCBoYXZlIGEgaGFuZGxlciBmb3JcbiAgICAgICAgICAgICAgICAvLyByZWFkb25seSBjaGVja3Mgd2UgaGF2ZSB0byB1bmRvIHRoZSBsYXRlc3QgY2hhbmdlXG4gICAgICAgICAgICAgICAgaWYgKCFlZGl0b3IuaXNFZGl0YWJsZSAmJiAhdGhpcy5vcHRpb25zLm9uUmVhZE9ubHlDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSAhY2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB7IGNoZWNrZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yLmlzRWRpdGFibGUgJiYgdHlwZW9mIGdldFBvcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFpbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9jdXModW5kZWZpbmVkLCB7IHNjcm9sbEludG9WaWV3OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbW1hbmQoKHsgdHIgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0ci5kb2Mubm9kZUF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyLnNldE5vZGVNYXJrdXAocG9zaXRpb24sIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnROb2RlID09PSBudWxsIHx8IGN1cnJlbnROb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Tm9kZS5hdHRycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ydW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlZGl0b3IuaXNFZGl0YWJsZSAmJiB0aGlzLm9wdGlvbnMub25SZWFkT25seUNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgc3RhdGUgaWYgb25SZWFkT25seUNoZWNrZWQgcmV0dXJucyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5vblJlYWRPbmx5Q2hlY2tlZChub2RlLCBjaGVja2VkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9ICFjaGVja2JveC5jaGVja2VkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm9wdGlvbnMuSFRNTEF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdEl0ZW0uZGF0YXNldC5jaGVja2VkID0gbm9kZS5hdHRycy5jaGVja2VkO1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IG5vZGUuYXR0cnMuY2hlY2tlZDtcbiAgICAgICAgICAgIGNoZWNrYm94V3JhcHBlci5hcHBlbmQoY2hlY2tib3gsIGNoZWNrYm94U3R5bGVyKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZChjaGVja2JveFdyYXBwZXIsIGNvbnRlbnQpO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoSFRNTEF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkb206IGxpc3RJdGVtLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRET006IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVkTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkTm9kZS50eXBlICE9PSB0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5kYXRhc2V0LmNoZWNrZWQgPSB1cGRhdGVkTm9kZS5hdHRycy5jaGVja2VkO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdXBkYXRlZE5vZGUuYXR0cnMuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBhZGRJbnB1dFJ1bGVzKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgd3JhcHBpbmdJbnB1dFJ1bGUoe1xuICAgICAgICAgICAgICAgIGZpbmQ6IGlucHV0UmVnZXgsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgICAgICAgIGdldEF0dHJpYnV0ZXM6IG1hdGNoID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG1hdGNoW21hdGNoLmxlbmd0aCAtIDFdID09PSAneCcsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXTtcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IFRhc2tJdGVtLCBUYXNrSXRlbSBhcyBkZWZhdWx0LCBpbnB1dFJlZ2V4IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tiptap+extension-task-item@2.11.5_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5/node_modules/@tiptap/extension-task-item/dist/index.js\n");

/***/ })

};
;
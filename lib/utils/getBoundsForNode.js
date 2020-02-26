"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDocumentScroll() {
    var documentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    var documentScrollLeft = Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft);
    return { documentScrollTop: documentScrollTop, documentScrollLeft: documentScrollLeft };
}
exports.getDocumentScroll = getDocumentScroll;
function getBoundsForNode(node, containerScroll) {
    if (containerScroll === void 0) { containerScroll = { scrollTop: 0, scrollLeft: 0 }; }
    var scrollTop = containerScroll.scrollTop, scrollLeft = containerScroll.scrollLeft;
    var _a = getDocumentScroll(), documentScrollTop = _a.documentScrollTop, documentScrollLeft = _a.documentScrollLeft;
    var rect = node.getClientRects();
    var rects = [];
    for (var i = 0; i < rect.length; i += 1) {
        rects.push({
            top: rect[i].top + documentScrollTop + scrollTop,
            left: rect[i].left + documentScrollLeft + scrollLeft,
            offsetWidth: node.offsetWidth,
            offsetHeight: node.offsetHeight,
            width: rect[i].width,
            height: rect[i].height
        });
    }
    ;
    return rects;
}
exports.getBoundsForNode = getBoundsForNode;
//# sourceMappingURL=getBoundsForNode.js.map
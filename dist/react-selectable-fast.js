!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define(['react'], t)
    : 'object' == typeof exports
    ? (exports['React-Selectable-Fast'] = t(require('react')))
    : (e['React-Selectable-Fast'] = t(e.React))
})(window, function(e) {
  return (function(e) {
    var t = {}
    function o(n) {
      if (t[n]) return t[n].exports
      var r = (t[n] = { i: n, l: !1, exports: {} })
      return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports
    }
    return (
      (o.m = e),
      (o.c = t),
      (o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
      }),
      (o.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (o.t = function(e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var n = Object.create(null)
        if (
          (o.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            o.d(
              n,
              r,
              function(t) {
                return e[t]
              }.bind(null, r)
            )
        return n
      }),
      (o.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return o.d(t, 'a', t), t
      }),
      (o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (o.p = ''),
      o((o.s = 2))
    )
  })([
    function(t, o) {
      t.exports = e
    },
    function(e, t) {},
    function(e, t, o) {
      'use strict'
      o.r(t)
      var n = o(0),
        r = o.n(n),
        l = ['pageX', 'pageY', 'clientX', 'clientY']
      function i(e, t) {
        l.forEach(function(o) {
          void 0 === e[o] && (e[o] = e[t][0][o])
        })
      }
      function c(e) {
        if (e.type.includes('mouse')) return e
        try {
          'touchstart' === e.type
            ? i(e, 'targetTouches')
            : 'touchmove' === e.type && i(e, 'changedTouches')
        } catch (e) {
          alert(e.message)
        }
        return e
      }
      function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        return (
          !(
            (e.metaKey && !o.allowMetaClick) ||
            (e.ctrlKey && !o.allowCtrlClick) ||
            (e.altKey && !o.allowAltClick) ||
            (e.shiftKey && !o.allowShiftClick)
          ) &&
          ('buttons' in e ? e.buttons === t : 'which' in e ? e.which === t : e.button === t - 1)
        )
      }
      function a() {
        return {
          documentScrollTop: Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ),
          documentScrollLeft: Math.max(
            window.pageXOffset,
            document.documentElement.scrollLeft,
            document.body.scrollLeft
          )
        }
      }
      function u(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { scrollTop: 0, scrollLeft: 0 },
            o = t.scrollTop,
            n = t.scrollLeft,
            r = a(),
            l = r.documentScrollTop,
            i = r.documentScrollLeft,
            c = e.getClientRects(),
            s = [],
            u = 0;
          u < c.length;
          u += 1
        )
          s.push({
            top: c[u].top + l + o,
            left: c[u].left + i + n,
            offsetWidth: e.offsetWidth,
            offsetHeight: e.offsetHeight,
            width: c[u].width,
            height: c[u].height
          })
        return s
      }
      var f = function(e, t, o) {
        var n = o.tolerance,
          r = void 0 === n ? 0 : n,
          l = o.useOffsetSize,
          i = void 0 !== l && l,
          c = i ? e.offsetHeight : e.height,
          s = i ? t.offsetHeight : t.height,
          a = i ? e.offsetWidth : e.width,
          u = i ? t.offsetWidth : t.width
        return !(
          e.top + c - r < t.top ||
          e.top + r > t.top + s ||
          e.left + a - r < t.left ||
          e.left + r > t.left + u
        )
      }
      function p(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          r = e instanceof HTMLElement ? u(e) : e,
          l = t instanceof HTMLElement ? u(t) : t
        return f(r, l, { tolerance: o, useOffsetSize: 1 === n })
      }
      function d(e, t) {
        for (; e; ) {
          if (e === t) return !0
          e = e.parentNode
        }
        return !1
      }
      var h = function() {},
        y = r.a.createContext({
          selectable: {
            register: function(e) {},
            unregister: function(e) {},
            selectAll: h,
            clearSelection: h,
            getScrolledContainer: function() {
              return null
            }
          }
        })
      function m(e) {
        return (m =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function b(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function v(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function g(e, t) {
        return !t || ('object' !== m(t) && 'function' != typeof t) ? w(e) : t
      }
      function S(e) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function w(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function O(e, t) {
        return (O =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function C(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = o),
          e
        )
      }
      var x = (function(e) {
        function t() {
          var e, o
          b(this, t)
          for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l]
          return (
            C(w((o = g(this, (e = S(t)).call.apply(e, [this].concat(r))))), 'state', {
              y: 0,
              x: 0,
              width: 0,
              height: 0,
              isSelecting: !1
            }),
            C(w(o), 'selectbox', null),
            C(w(o), 'getRef', function() {
              return o.selectbox
            }),
            C(w(o), 'getSelectboxRef', function(e) {
              o.selectbox = e
            }),
            o
          )
        }
        var o, n, l
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && O(e, t)
          })(t, e),
          (o = t),
          (n = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.fixedPosition,
                  o = e.className,
                  n = {
                    left: this.state.x,
                    top: this.state.y,
                    width: this.state.width,
                    height: this.state.height,
                    zIndex: 9e3,
                    position: t ? 'fixed' : 'absolute',
                    cursor: 'default'
                  }
                return r.a.createElement(
                  'div',
                  null,
                  this.state.isSelecting &&
                    r.a.createElement('div', { ref: this.getSelectboxRef, style: n, className: o })
                )
              }
            }
          ]) && v(o.prototype, n),
          l && v(o, l),
          t
        )
      })(n.Component)
      C(x, 'defaultProps', { className: 'selectable-selectbox' })
      var k = x
      function j(e) {
        return (j =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function L(e, t) {
        var o = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            o.push.apply(o, n)
        }
        return o
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(o), !0).forEach(function(t) {
                A(e, t, o[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : L(Object(o)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
              })
        }
        return e
      }
      function P(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, o = new Array(e.length); t < e.length; t++) o[t] = e[t]
              return o
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance')
          })()
        )
      }
      function I(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function _(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function M(e, t) {
        return !t || ('object' !== j(t) && 'function' != typeof t) ? D(e) : t
      }
      function T(e) {
        return (T = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function D(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function R(e, t) {
        return (R =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function A(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = o),
          e
        )
      }
      var B = (function(e) {
        function t() {
          var e, o
          I(this, t)
          for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l]
          return (
            A(D((o = M(this, (e = T(t)).call.apply(e, [this].concat(r))))), 'state', {
              selectionMode: !1
            }),
            A(D(o), 'mouseDownStarted', !1),
            A(D(o), 'mouseMoveStarted', !1),
            A(D(o), 'mouseMoved', !1),
            A(D(o), 'mouseUpStarted', !1),
            A(D(o), 'selectionStarted', !1),
            A(D(o), 'deselectionStarted', !1),
            A(D(o), 'clickedItem', void 0),
            A(D(o), 'mouseDownData', { selectboxY: 0, selectboxX: 0, target: null }),
            A(D(o), 'registry', new Set()),
            A(D(o), 'selectedItems', new Set()),
            A(D(o), 'selectingItems', new Set()),
            A(D(o), 'ignoreCheckCache', new Map()),
            A(
              D(o),
              'ignoreList',
              o.props.ignoreList.concat(['.selectable-select-all', '.selectable-deselect-all'])
            ),
            A(D(o), 'ignoreListNodes', []),
            A(D(o), 'selectbox', null),
            A(D(o), 'selectableGroup', null),
            A(D(o), 'scrollContainer', null),
            A(D(o), 'maxScrollTop', 0),
            A(D(o), 'maxScrollLeft', 0),
            A(D(o), 'scrollBounds', null),
            A(D(o), 'updateRegistry', function() {
              var e = {
                  scrollTop: o.scrollContainer.scrollTop,
                  scrollLeft: o.scrollContainer.scrollLeft
                },
                t = !0,
                n = !1,
                r = void 0
              try {
                for (
                  var l, i = o.registry.values()[Symbol.iterator]();
                  !(t = (l = i.next()).done);
                  t = !0
                ) {
                  l.value.registerSelectable(e)
                }
              } catch (e) {
                ;(n = !0), (r = e)
              } finally {
                try {
                  t || null == i.return || i.return()
                } finally {
                  if (n) throw r
                }
              }
            }),
            A(D(o), 'registerSelectable', function(e) {
              o.registry.add(e), e.state.isSelected && o.selectedItems.add(e)
            }),
            A(D(o), 'unregisterSelectable', function(e) {
              o.registry.delete(e)
              var t = o.selectedItems.has(e) || o.selectingItems.has(e)
              o.selectedItems.delete(e),
                o.selectingItems.delete(e),
                t && o.props.onSelectionFinish(P(o.selectedItems))
            }),
            A(D(o), 'updateContainerScroll', function(e) {
              var t = o.scrollContainer,
                n = t.scrollTop,
                r = t.scrollLeft
              o.checkScrollTop(e.clientY, n),
                o.checkScrollBottom(e.clientY, n),
                o.checkScrollLeft(e.clientX, r),
                o.checkScrollRight(e.clientX, r)
            }),
            A(D(o), 'getScrollStep', function(e) {
              var t = o.props,
                n = t.minimumSpeedFactor,
                r = t.scrollSpeed
              return Math.max(e, n) * r
            }),
            A(D(o), 'checkScrollTop', function(e, t) {
              var n = o.scrollBounds.top - e
              ;(n > 0 || e < 0) && (o.scrollContainer.scrollTop = t - o.getScrollStep(n))
            }),
            A(D(o), 'checkScrollBottom', function(e, t) {
              var n = e - o.scrollBounds.bottom
              if (n > 0 || e > window.innerHeight) {
                var r = t + o.getScrollStep(n)
                o.scrollContainer.scrollTop = Math.min(r, o.maxScrollTop)
              }
            }),
            A(D(o), 'checkScrollLeft', function(e, t) {
              var n = o.scrollBounds.left - e
              if (n > 0 || e < 0) {
                var r = t - o.getScrollStep(n)
                o.scrollContainer.scrollLeft = r
              }
            }),
            A(D(o), 'checkScrollRight', function(e, t) {
              var n = e - o.scrollBounds.right
              if (n > 0 || e > window.innerWidth) {
                var r = t + o.getScrollStep(n)
                o.scrollContainer.scrollLeft = Math.min(r, o.maxScrollLeft)
              }
            }),
            A(D(o), 'updateSelectBox', function(e) {
              var t = c(e)
              if ((o.updateContainerScroll(t), !o.mouseMoveStarted)) {
                ;(o.mouseMoveStarted = !0), (o.mouseMoved = !0)
                var n = D(o).mouseDownData,
                  r = t.clientX,
                  l = t.clientY,
                  i = o.scrollContainer,
                  s = i.scrollLeft,
                  a = i.scrollTop,
                  u = l - o.scrollBounds.top + a,
                  f = Math.min(u, n.selectboxY),
                  p = r - o.scrollBounds.left + s,
                  d = Math.min(p, n.selectboxX)
                o.selectbox.setState(
                  {
                    x: d,
                    y: f,
                    isSelecting: !0,
                    width: Math.abs(p - n.selectboxX),
                    height: Math.abs(u - n.selectboxY)
                  },
                  function() {
                    o.updateSelecting(),
                      o.props.duringSelection(P(o.selectingItems)),
                      (o.mouseMoveStarted = !1)
                  }
                )
              }
            }),
            A(D(o), 'updateSelecting', function() {
              var e = o.selectbox.getRef()
              if (e) {
                var t = u(e)
                o.selectItems(
                  E({}, t[0], {
                    offsetWidth: t[0].offsetWidth || 1,
                    offsetHeight: t[0].offsetHeight || 1
                  })
                )
              }
            }),
            A(D(o), 'selectItems', function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = o.props,
                r = n.tolerance,
                l = n.enableDeselect,
                i = n.mixedDeselect
              ;(e.top += o.scrollContainer.scrollTop), (e.left += o.scrollContainer.scrollLeft)
              var c = !0,
                s = !1,
                a = void 0
              try {
                for (
                  var u, f = o.registry.values()[Symbol.iterator]();
                  !(c = (u = f.next()).done);
                  c = !0
                ) {
                  var p = u.value
                  o.processItem({
                    item: p,
                    selectboxBounds: e,
                    tolerance: r,
                    mixedDeselect: i,
                    enableDeselect: l,
                    isFromClick: t && t.isFromClick
                  })
                }
              } catch (e) {
                ;(s = !0), (a = e)
              } finally {
                try {
                  c || null == f.return || f.return()
                } finally {
                  if (s) throw a
                }
              }
            }),
            A(D(o), 'clearSelection', function() {
              var e = !0,
                t = !1,
                n = void 0
              try {
                for (
                  var r, l = o.selectedItems.values()[Symbol.iterator]();
                  !(e = (r = l.next()).done);
                  e = !0
                ) {
                  var i = r.value
                  i.setState({ isSelected: !1 }), o.selectedItems.delete(i)
                }
              } catch (e) {
                ;(t = !0), (n = e)
              } finally {
                try {
                  e || null == l.return || l.return()
                } finally {
                  if (t) throw n
                }
              }
              o.setState({ selectionMode: !1 }),
                o.props.onSelectionFinish(P(o.selectedItems)),
                o.props.onSelectionClear()
            }),
            A(D(o), 'selectAll', function() {
              o.updateWhiteListNodes()
              var e = !0,
                t = !1,
                n = void 0
              try {
                for (
                  var r, l = o.registry.values()[Symbol.iterator]();
                  !(e = (r = l.next()).done);
                  e = !0
                ) {
                  var i = r.value
                  o.isInIgnoreList(i.node) ||
                    i.state.isSelected ||
                    (i.setState({ isSelected: !0 }), o.selectedItems.add(i))
                }
              } catch (e) {
                ;(t = !0), (n = e)
              } finally {
                try {
                  e || null == l.return || l.return()
                } finally {
                  if (t) throw n
                }
              }
              o.setState({ selectionMode: !0 }), o.props.onSelectionFinish(P(o.selectedItems))
            }),
            A(D(o), 'mouseDown', function(e) {
              var t =
                !e.type.includes('touch') &&
                !s(e, 1, {
                  allowAltClick: o.props.allowAltClick,
                  allowCtrlClick: o.props.allowCtrlClick,
                  allowMetaClick: o.props.allowMetaClick,
                  allowShiftClick: o.props.allowShiftClick
                })
              if (!(o.mouseDownStarted || o.props.disabled || t))
                if ((o.updateWhiteListNodes(), o.isInIgnoreList(e.target))) o.mouseDownStarted = !1
                else {
                  o.props.resetOnStart && o.clearSelection(),
                    (o.mouseDownStarted = !0),
                    (o.mouseUpStarted = !1)
                  var n = c(e)
                  if (!o.props.globalMouse && !d(n.target, o.selectableGroup)) {
                    var r = u(o.selectableGroup)
                    if (
                      !p(
                        {
                          top: r[0].top,
                          left: r[0].left,
                          width: 0,
                          height: 0,
                          offsetHeight: r[0].offsetHeight,
                          offsetWidth: r[0].offsetWidth
                        },
                        {
                          top: n.pageY,
                          left: n.pageX,
                          width: 0,
                          height: 0,
                          offsetWidth: 0,
                          offsetHeight: 0
                        }
                      )
                    )
                      return
                  }
                  o.updateRootBounds(),
                    o.updateRegistry(),
                    (o.mouseDownData = {
                      target: n.target,
                      selectboxY: n.clientY - o.scrollBounds.top + o.scrollContainer.scrollTop,
                      selectboxX: n.clientX - o.scrollBounds.left + o.scrollContainer.scrollLeft
                    }),
                    n.preventDefault(),
                    document.addEventListener('mousemove', o.updateSelectBox),
                    document.addEventListener('touchmove', o.updateSelectBox),
                    document.addEventListener('mouseup', o.mouseUp),
                    document.addEventListener('touchend', o.mouseUp)
                }
            }),
            A(D(o), 'mouseUp', function(e) {
              if (
                !o.mouseUpStarted &&
                ((o.mouseUpStarted = !0),
                (o.mouseDownStarted = !1),
                o.removeTempEventListeners(),
                o.mouseDownData)
              ) {
                var t = c(e),
                  n = t.pageX,
                  r = t.pageY
                if (!o.mouseMoved && d(t.target, o.selectableGroup)) o.handleClick(t, r, n)
                else {
                  var l = !0,
                    i = !1,
                    s = void 0
                  try {
                    for (
                      var a, u = o.selectingItems.values()[Symbol.iterator]();
                      !(l = (a = u.next()).done);
                      l = !0
                    ) {
                      a.value.setState({ isSelected: !0, isSelecting: !1 })
                    }
                  } catch (e) {
                    ;(i = !0), (s = e)
                  } finally {
                    try {
                      l || null == u.return || u.return()
                    } finally {
                      if (i) throw s
                    }
                  }
                  ;(o.selectedItems = new Set([].concat(P(o.selectedItems), P(o.selectingItems)))),
                    o.selectingItems.clear(),
                    1 === t.which &&
                      o.mouseDownData.target === t.target &&
                      o.preventEvent(t.target, 'click'),
                    o.selectbox.setState({ isSelecting: !1, width: 0, height: 0 }),
                    o.props.onSelectionFinish(P(o.selectedItems))
                }
                o.toggleSelectionMode(), o.cleanUp(), (o.mouseMoved = !1)
              }
            }),
            A(D(o), 'keyListener', function(e) {
              27 === e.keyCode && o.clearSelection()
            }),
            A(D(o), 'getGroupRef', function(e) {
              o.selectableGroup = e
            }),
            A(D(o), 'getSelectboxRef', function(e) {
              o.selectbox = e
            }),
            A(D(o), 'defaultContainerStyle', { position: 'relative' }),
            A(D(o), 'contextValue', {
              selectable: {
                register: o.registerSelectable,
                unregister: o.unregisterSelectable,
                selectAll: o.selectAll,
                clearSelection: o.clearSelection,
                getScrolledContainer: function() {
                  return o.scrollContainer
                }
              }
            }),
            o
          )
        }
        var o, n, l
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && R(e, t)
          })(t, e),
          (o = t),
          (n = [
            {
              key: 'componentDidMount',
              value: function() {
                this.props.scrollContainer
                  ? (this.scrollContainer = document.querySelector(this.props.scrollContainer))
                  : (this.scrollContainer = this.selectableGroup),
                  this.selectableGroup.addEventListener('mousedown', this.mouseDown),
                  this.selectableGroup.addEventListener('touchstart', this.mouseDown),
                  this.props.deselectOnEsc &&
                    (document.addEventListener('keydown', this.keyListener),
                    document.addEventListener('keyup', this.keyListener))
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.selectableGroup.removeEventListener('mousedown', this.mouseDown),
                  this.selectableGroup.removeEventListener('touchstart', this.mouseDown),
                  this.props.deselectOnEsc &&
                    (document.removeEventListener('keydown', this.keyListener),
                    document.removeEventListener('keyup', this.keyListener)),
                  this.removeTempEventListeners()
              }
            },
            {
              key: 'removeTempEventListeners',
              value: function() {
                document.removeEventListener('mousemove', this.updateSelectBox),
                  document.removeEventListener('touchmove', this.updateSelectBox),
                  document.removeEventListener('mouseup', this.mouseUp),
                  document.removeEventListener('touchend', this.mouseUp)
              }
            },
            {
              key: 'updateRootBounds',
              value: function() {
                ;(this.scrollBounds = this.scrollContainer.getBoundingClientRect()),
                  (this.maxScrollTop =
                    this.scrollContainer.scrollHeight - this.scrollContainer.clientHeight),
                  (this.maxScrollLeft =
                    this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth)
              }
            },
            {
              key: 'toggleSelectionMode',
              value: function() {
                var e = this.selectedItems,
                  t = this.state.selectionMode
                e.size && !t && this.setState({ selectionMode: !0 }),
                  !e.size && t && this.setState({ selectionMode: !1 })
              }
            },
            {
              key: 'processItem',
              value: function(e) {
                var t = e.item,
                  o = e.tolerance,
                  n = e.selectboxBounds,
                  r = e.enableDeselect,
                  l = e.mixedDeselect,
                  i = e.isFromClick
                if (this.isInIgnoreList(t.node)) return null
                for (var c = !1, s = 0; s < t.bounds.length; s += 1)
                  c = p(n, t.bounds[s], o, this.props.delta)
                var a = t.state,
                  u = a.isSelecting,
                  f = a.isSelected
                if (i && c)
                  return (
                    f ? this.selectedItems.delete(t) : this.selectedItems.add(t),
                    t.setState({ isSelected: !f }),
                    (this.clickedItem = t)
                  )
                if (!i && c) {
                  if (f && r && (!this.selectionStarted || l))
                    return (
                      t.setState({ isSelected: !1 }),
                      (t.deselected = !0),
                      (this.deselectionStarted = !0),
                      this.selectedItems.delete(t)
                    )
                  var d = l ? !t.deselected : !this.deselectionStarted
                  if (!u && !f && d)
                    return (
                      t.setState({ isSelecting: !0 }),
                      (this.selectionStarted = !0),
                      this.selectingItems.add(t),
                      { updateSelecting: !0 }
                    )
                }
                return !i && !c && u && this.selectingItems.has(t)
                  ? (t.setState({ isSelecting: !1 }),
                    this.selectingItems.delete(t),
                    { updateSelecting: !0 })
                  : null
              }
            },
            {
              key: 'isInIgnoreList',
              value: function(e) {
                if (e) {
                  if (void 0 !== this.ignoreCheckCache.get(e)) return this.ignoreCheckCache.get(e)
                  var t = this.ignoreListNodes.some(function(t) {
                    return e === t || t.contains(e)
                  })
                  return this.ignoreCheckCache.set(e, t), t
                }
              }
            },
            {
              key: 'updateWhiteListNodes',
              value: function() {
                this.ignoreListNodes = Array.from(
                  document.querySelectorAll(this.ignoreList.join(', '))
                )
              }
            },
            {
              key: 'preventEvent',
              value: function(e, t) {
                e.addEventListener(
                  t,
                  function o(n) {
                    e.removeEventListener(t, o, !0), n.preventDefault(), n.stopPropagation()
                  },
                  !0
                )
              }
            },
            {
              key: 'handleClick',
              value: function(e, t, o) {
                if (this.props.selectOnClick) {
                  var n = this.props,
                    r = n.clickClassName,
                    l = n.allowClickWithoutSelected,
                    i = n.onSelectionFinish,
                    c = e.target.classList || [],
                    s = Array.from(c).indexOf(r) > -1
                  ;(l || this.selectedItems.size || s || e.ctrlKey) &&
                    (this.selectItems(
                      { top: t, left: o, width: 0, height: 0, offsetWidth: 0, offsetHeight: 0 },
                      { isFromClick: !0 }
                    ),
                    i(P(this.selectedItems), this.clickedItem),
                    1 === e.which && this.preventEvent(e.target, 'click'),
                    (2 !== e.which && 3 !== e.which) || this.preventEvent(e.target, 'contextmenu'))
                }
              }
            },
            {
              key: 'cleanUp',
              value: function() {
                if (
                  ((this.deselectionStarted = !1),
                  (this.selectionStarted = !1),
                  this.props.mixedDeselect)
                ) {
                  var e = !0,
                    t = !1,
                    o = void 0
                  try {
                    for (
                      var n, r = this.registry.values()[Symbol.iterator]();
                      !(e = (n = r.next()).done);
                      e = !0
                    )
                      n.value.deselected = !1
                  } catch (e) {
                    ;(t = !0), (o = e)
                  } finally {
                    try {
                      e || null == r.return || r.return()
                    } finally {
                      if (t) throw o
                    }
                  }
                }
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.state.selectionMode,
                  t = this.props,
                  o = t.component,
                  n = void 0 === o ? 'div' : o,
                  l = t.className,
                  i = t.style,
                  c = t.selectionModeClass,
                  s = t.fixedPosition,
                  a = t.selectboxClassName,
                  u = t.children
                return r.a.createElement(
                  y.Provider,
                  { value: this.contextValue },
                  r.a.createElement(
                    n,
                    {
                      ref: this.getGroupRef,
                      style: Object.assign({}, this.defaultContainerStyle, i),
                      className: ''.concat(l, ' ').concat(e ? c : '')
                    },
                    r.a.createElement(k, {
                      ref: this.getSelectboxRef,
                      className: a,
                      fixedPosition: s
                    }),
                    u
                  )
                )
              }
            }
          ]) && _(o.prototype, n),
          l && _(o, l),
          t
        )
      })(n.Component)
      A(B, 'defaultProps', {
        clickClassName: '',
        tolerance: 0,
        globalMouse: !1,
        ignoreList: [],
        scrollSpeed: 0.25,
        minimumSpeedFactor: 60,
        duringSelection: h,
        onSelectionFinish: h,
        onSelectionClear: h,
        allowClickWithoutSelected: !0,
        selectionModeClass: 'in-selection-mode',
        resetOnStart: !1,
        disabled: !1,
        deselectOnEsc: !0,
        fixedPosition: !1,
        delta: 1,
        allowAltClick: !1,
        allowCtrlClick: !1,
        allowMetaClick: !1,
        allowShiftClick: !1,
        selectOnClick: !0
      })
      var N = B
      function W(e) {
        return (W =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function H() {
        return (H =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t]
              for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
          }).apply(this, arguments)
      }
      function F(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function G(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function U(e, t) {
        return !t || ('object' !== W(t) && 'function' != typeof t) ? Y(e) : t
      }
      function X(e) {
        return (X = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function Y(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function z(e, t) {
        return (z =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function K(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = o),
          e
        )
      }
      var q = function(e) {
        var t, o
        return (
          (o = t = (function(t) {
            function o() {
              var e, t
              F(this, o)
              for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
                r[l] = arguments[l]
              return (
                K(Y((t = U(this, (e = X(o)).call.apply(e, [this].concat(r))))), 'state', {
                  isSelected: t.props.isSelected,
                  isSelecting: !1
                }),
                K(Y(t), 'node', null),
                K(Y(t), 'bounds', null),
                K(Y(t), 'registerSelectable', function(e) {
                  ;(t.bounds = u(t.node, e)), t.context.selectable.register(Y(t))
                }),
                K(Y(t), 'getSelectableRef', function(e) {
                  t.node = e
                }),
                t
              )
            }
            var n, l, i
            return (
              (function(e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function')
                ;(e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 }
                })),
                  t && z(e, t)
              })(o, t),
              (n = o),
              (l = [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.registerSelectable()
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this.context.selectable.unregister(this)
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    return r.a.createElement(
                      e,
                      H({}, this.props, this.state, { selectableRef: this.getSelectableRef })
                    )
                  }
                }
              ]) && G(n.prototype, l),
              i && G(n, i),
              o
            )
          })(n.Component)),
          K(t, 'contextType', y),
          K(t, 'defaultProps', { isSelected: !1 }),
          o
        )
      }
      function V(e) {
        return (V =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function J() {
        return (J =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t]
              for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
          }).apply(this, arguments)
      }
      function Q(e, t) {
        if (null == e) return {}
        var o,
          n,
          r = (function(e, t) {
            if (null == e) return {}
            var o,
              n,
              r = {},
              l = Object.keys(e)
            for (n = 0; n < l.length; n++) (o = l[n]), t.indexOf(o) >= 0 || (r[o] = e[o])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          for (n = 0; n < l.length; n++)
            (o = l[n]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]))
        }
        return r
      }
      function Z(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function $(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function ee(e, t) {
        return !t || ('object' !== V(t) && 'function' != typeof t) ? oe(e) : t
      }
      function te(e) {
        return (te = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function oe(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function ne(e, t) {
        return (ne =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function re(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = o),
          e
        )
      }
      var le = (function(e) {
        function t() {
          var e, o
          Z(this, t)
          for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l]
          return (
            re(oe((o = ee(this, (e = te(t)).call.apply(e, [this].concat(r))))), 'root', null),
            re(oe(o), 'getRootRef', function(e) {
              o.root = e
            }),
            o
          )
        }
        var o, n, l
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ne(e, t)
          })(t, e),
          (o = t),
          (n = [
            {
              key: 'componentDidMount',
              value: function() {
                this.root.addEventListener('mousedown', function(e) {
                  return e.stopPropagation()
                })
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.component,
                  o = void 0 === t ? 'div' : t,
                  n = e.children,
                  l = e.className,
                  i = void 0 === l ? '' : l,
                  c = Q(e, ['component', 'children', 'className'])
                return r.a.createElement(
                  o,
                  J(
                    {
                      ref: this.getRootRef,
                      className: 'selectable-select-all '.concat(i),
                      onClick: this.context.selectable.selectAll
                    },
                    c
                  ),
                  n
                )
              }
            }
          ]) && $(o.prototype, n),
          l && $(o, l),
          t
        )
      })(n.Component)
      re(le, 'contextType', y)
      var ie = le
      function ce(e) {
        return (ce =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function se() {
        return (se =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t]
              for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
          }).apply(this, arguments)
      }
      function ae(e, t) {
        if (null == e) return {}
        var o,
          n,
          r = (function(e, t) {
            if (null == e) return {}
            var o,
              n,
              r = {},
              l = Object.keys(e)
            for (n = 0; n < l.length; n++) (o = l[n]), t.indexOf(o) >= 0 || (r[o] = e[o])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          for (n = 0; n < l.length; n++)
            (o = l[n]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]))
        }
        return r
      }
      function ue(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function fe(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function pe(e, t) {
        return !t || ('object' !== ce(t) && 'function' != typeof t) ? he(e) : t
      }
      function de(e) {
        return (de = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function he(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function ye(e, t) {
        return (ye =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function me(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = o),
          e
        )
      }
      var be = (function(e) {
        function t() {
          var e, o
          ue(this, t)
          for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l]
          return (
            me(he((o = pe(this, (e = de(t)).call.apply(e, [this].concat(r))))), 'root', null),
            me(he(o), 'getRootRef', function(e) {
              o.root = e
            }),
            o
          )
        }
        var o, n, l
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ye(e, t)
          })(t, e),
          (o = t),
          (n = [
            {
              key: 'componentDidMount',
              value: function() {
                this.root.addEventListener('mousedown', function(e) {
                  return e.stopPropagation()
                })
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.component,
                  o = void 0 === t ? 'div' : t,
                  n = e.children,
                  l = e.className,
                  i = ae(e, ['component', 'children', 'className'])
                return r.a.createElement(
                  o,
                  se(
                    {
                      ref: this.getRootRef,
                      className: 'selectable-select-all '.concat(l),
                      onClick: this.context.selectable.clearSelection
                    },
                    i
                  ),
                  n
                )
              }
            }
          ]) && fe(o.prototype, n),
          l && fe(o, l),
          t
        )
      })(n.Component)
      me(be, 'contextType', y)
      var ve = be,
        ge = o(1)
      o.d(t, 'TSelectableItemProps', function() {
        return ge.TSelectableItemProps
      }),
        o.d(t, 'SelectableGroup', function() {
          return N
        }),
        o.d(t, 'createSelectable', function() {
          return q
        }),
        o.d(t, 'SelectAll', function() {
          return ie
        }),
        o.d(t, 'DeselectAll', function() {
          return ve
        })
    }
  ])
})
//# sourceMappingURL=react-selectable-fast.js.map

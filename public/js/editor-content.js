! function(t, e, i, a) {
    function o(t) {
        return 1 == parseInt(t, 10)
    }

    function r(t) {
        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return e ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16)
        } : {
            r: 0,
            g: 0,
            b: 0
        }
    }
    t.image_map_pro_editor_content = function() {
        var e = t.image_map_pro_editor_current_settings(),
            i = "";
        if ("zoom-in" == e.editor.tool && (i += '<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-zoom-in"></div>'), "zoom-out" == e.editor.tool && (i += '<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-zoom-out"></div>'), ("drag" == e.editor.tool || e.editor.state.dragging) && (i += '<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-drag"></div>'), o(e.layers.enable_layers)) {
            var a = "",
                d = "";
            i += '<select id="select-canvas-layer" data-editor-object-type="17">';
            for (var s = 0; s < e.layers.layers_list.length; s++) e.editor.currentLayer == e.layers.layers_list[s].id ? (a = e.layers.layers_list[s].image_url, d = " selected") : d = "", i += '<option value="' + e.layers.layers_list[s].id + '" ' + d + ">" + e.layers.layers_list[s].title + "</option>";
            i += "</select>", i += '<img id="imp-editor-image" src="' + a + '">'
        } else "" != e.image.url && (i += '<img id="imp-editor-image" src="' + e.image.url + '">');
        i += '<div id="imp-editor-shapes-container">';
        for (s = 0; s < e.spots.length; s++) {
            var l = e.spots[s];
            if (!o(e.layers.enable_layers) || parseInt(l.layerID, 10) == parseInt(e.editor.currentLayer)) {
                if ("spot" == l.type)
                    if (o(l.default_style.use_icon)) {
                        var n = "";
                        n += "left: " + l.x + "%;", n += "top: " + l.y + "%;", n += "width: " + l.width + "px;", n += "height: " + l.height + "px;", n += "margin-left: -" + l.width / 2 + "px;", n += "margin-top: -" + l.height / 2 + "px;", "library" == l.default_style.icon_type ? n += "background-image: none;" : (n += "background-image: url(" + l.default_style.icon_url + ");", n += "background-position: center;", n += "background-repeat: no-repeat;"), i += '<div class="imp-editor-shape imp-editor-spot" data-id="' + l.id + '" data-editor-object-type="1" style="' + n + '"><div class="imp-selection" style="border-radius: ' + l.default_style.border_radius + 'px;"></div>';
                        var p = "";
                        if (o(l.default_style.icon_is_pin) && (p += "top: -50%;", p += "position: absolute;"), "library" == l.default_style.icon_type && (p += "color: " + l.default_style.icon_fill + ";", p += "line-height: " + l.height + "px;", i += '   <div class="imp-editor-spot-fontawesome-icon" style="' + (p += "font-size: " + l.height + "px;") + '">', i += '       <i class="fa fa-' + l.default_style.icon_fontawesome_id + '"></i>', i += "   </div>"), "custom" == l.default_style.icon_type && l.default_style.icon_url.length > 0 && (i += '   <img style="' + p + '" src="' + l.default_style.icon_url + '">'), o(l.default_style.icon_shadow)) {
                            var c = "";
                            c += "width: " + l.width + "px;", c += "height: " + l.height + "px;", o(l.default_style.icon_is_pin) || (c += "top: " + l.height / 2 + "px;"), i += '<div style="' + c + '" class="imp-editor-shape-icon-shadow"></div>'
                        }
                        i += "</div>"
                    } else {
                        var b = r(l.default_style.background_color),
                            y = r(l.default_style.border_color);
                        n = "";
                        n += "left: " + l.x + "%;", n += "top: " + l.y + "%;", n += "width: " + l.width + "px;", n += "height: " + l.height + "px;", n += "margin-left: -" + l.width / 2 + "px;", n += "margin-top: -" + l.height / 2 + "px;", n += "background: rgba(" + b.r + ", " + b.g + ", " + b.b + ", " + l.default_style.background_opacity + ");", n += "border-color: rgba(" + y.r + ", " + y.g + ", " + y.b + ", " + l.default_style.border_opacity + ");", n += "border-width: " + l.default_style.border_width + "px;", n += "border-style: " + l.default_style.border_style + ";", n += "border-radius: " + l.default_style.border_radius + "px;", i += '<div class="imp-editor-shape imp-editor-spot" data-id="' + l.id + '" data-editor-object-type="1" style="' + n + '"><div class="imp-selection" style="border-radius: ' + l.default_style.border_radius + 'px;"></div></div>'
                    } if ("text" == l.type) {
                    var _ = r(l.text.text_color);
                    n = "";
                    n += "left: " + l.x + "%;", n += "top: " + l.y + "%;", n += "font-family: " + l.text.font_family + ";", n += "font-size: " + l.text.font_size * e.editor.zoom + "px;", n += "font-weight: " + l.text.font_weight + ";", n += "color: rgba(" + _.r + ", " + _.g + ", " + _.b + ", " + l.text.text_opacity + ");", i += '<div class="imp-editor-shape imp-editor-text" data-id="' + l.id + '" data-editor-object-type="8" style="' + n + '">', i += l.text.text, i += '   <div class="imp-selection" style="border-radius: ' + l.default_style.border_radius + 'px;"></div>', i += "</div>"
                }
                if ("rect" == l.type) {
                    b = r(l.default_style.background_color), y = r(l.default_style.border_color), n = "";
                    n += "left: " + l.x + "%;", n += "top: " + l.y + "%;", n += "width: " + l.width + "%;", n += "height: " + l.height + "%;", "color" == l.default_style.background_type && (n += "background: rgba(" + b.r + ", " + b.g + ", " + b.b + ", " + l.default_style.background_opacity + ");"), n += "border-color: rgba(" + y.r + ", " + y.g + ", " + y.b + ", " + l.default_style.border_opacity + ");", n += "border-width: " + l.default_style.border_width + "px;", n += "border-style: " + l.default_style.border_style + ";", n += "border-radius: " + l.default_style.border_radius + "px;", i += '<div class="imp-editor-shape imp-editor-rect" data-id="' + l.id + '" data-editor-object-type="3" style="' + n + '">', i += '   <div class="imp-selection" style="border-radius: ' + l.default_style.border_radius + 'px;">', i += '       <div class="imp-selection-translate-boxes">', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>', i += "       </div>", i += "   </div>", i += "</div>"
                }
                if ("oval" == l.type) {
                    b = r(l.default_style.background_color), y = r(l.default_style.border_color), n = "";
                    n += "left: " + l.x + "%;", n += "top: " + l.y + "%;", n += "width: " + l.width + "%;", n += "height: " + l.height + "%;", "color" == l.default_style.background_type && (n += "background: rgba(" + b.r + ", " + b.g + ", " + b.b + ", " + l.default_style.background_opacity + ");"), n += "border-color: rgba(" + y.r + ", " + y.g + ", " + y.b + ", " + l.default_style.border_opacity + ");", n += "border-width: " + l.default_style.border_width + "px;", n += "border-style: " + l.default_style.border_style + ";", n += "border-radius: 100% 100%;", i += '<div class="imp-editor-shape imp-editor-oval" data-id="' + l.id + '" data-editor-object-type="2" style="' + n + '">', i += '   <div class="imp-selection" style="border-radius: 100% 100%;">', i += '       <div class="imp-selection-translate-boxes">', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>', i += "       </div>", i += "   </div>", i += "</div>"
                }
                if ("poly" == l.type && l.points) {
                    if (l.points.length < 3) continue;
                    b = r(l.default_style.background_color);
                    var v = r(l.default_style.stroke_color);
                    n = "";
                    n += "left: " + l.x + "%;", n += "top: " + l.y + "%;", n += "width: " + l.width + "%;", n += "height: " + l.height + "%;";
                    var m = "";
                    m += "width: 100%;", m += "height: 100%;", "color" == l.default_style.background_type ? m += "fill: rgba(" + b.r + ", " + b.g + ", " + b.b + ", " + l.default_style.background_opacity + ");" : m += "fill: rgba(0, 0, 255, 0.25);", m += "stroke: rgba(" + v.r + ", " + v.g + ", " + v.b + ", " + l.default_style.stroke_opacity + ");", m += "stroke-width: " + l.default_style.stroke_width + "px;", m += "stroke-dasharray: " + l.default_style.stroke_dasharray + ";", m += "stroke-linecap: " + l.default_style.stroke_linecap + ";", i += '<div class="imp-editor-shape imp-editor-poly" data-id="' + l.id + '" data-editor-object-type="4" style="' + n + '">', i += '   <div class="imp-editor-poly-svg-temp-control-point" data-editor-object-type="6"></div>';
                    var f = e.general.width * (l.width / 100),
                        g = e.general.height * (l.height / 100);
                    i += '   <div class="imp-editor-svg-wrap" style="padding: ' + l.default_style.stroke_width + "px; left: -" + l.default_style.stroke_width + "px; top: -" + l.default_style.stroke_width + 'px;">', i += '       <svg class="imp-editor-poly-svg" viewBox="0 0 ' + f + " " + g + '" preserveAspectRatio="none" style="' + m + '">', i += '           <polygon points="';
                    for (var u = 0; u < l.points.length; u++) {
                        i += l.default_style.stroke_width + l.points[u].x / 100 * (f - 2 * l.default_style.stroke_width) + "," + (l.default_style.stroke_width + l.points[u].y / 100 * (g - 2 * l.default_style.stroke_width)) + " "
                    }
                    i += '           "></polygon>', i += "       </svg>", i += "   </div>", i += '       <svg class="imp-editor-shape-poly-svg-overlay" viewBox="0 0 ' + f + " " + g + '" preserveAspectRatio="none">', i += '           <polygon points="';
                    for (u = 0; u < l.points.length; u++) {
                        i += l.points[u].x / 100 * f + "," + l.points[u].y / 100 * g + " "
                    }
                    i += '           "></polygon>', i += "       </svg>", i += '   <div class="imp-selection imp-expanded-selection">', i += '       <div class="imp-selection-translate-boxes">', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>', i += "       </div>", i += "   </div>";
                    for (u = 0; u < l.points.length; u++) i += '       <div class="imp-poly-control-point" data-editor-object-type="7" data-index="' + u + '" style="left: ' + l.points[u].x + "%; top: " + l.points[u].y + '%;"></div>';
                    i += "</div>"
                }
                if ("path" == l.type) {
                    var h = "",
                        x = t.svgPathParser(l.d),
                        w = 9999,
                        k = 9999,
                        j = 0,
                        z = 0;
                    for (u = 0; u < x.length; u++) x[u][1] < w && (w = x[u][1]), x[u][2] < k && (k = x[u][2]), x[u][1] > j && (j = x[u][1]), x[u][2] > z && (z = x[u][2]);
                    for (u = 0; u < x.length; u++) {
                        var I, R, T = x[u];
                        h += T[0];
                        for (var A = 1; A < T.length; A++) R = T[A], A % 2 != 0 ? (I = " ", R -= w) : (I = ",", R -= k), h += I + R;
                        h += " "
                    }
                    b = r(l.default_style.background_color), v = r(l.default_style.stroke_color), n = "";
                    n += "left: " + l.x + "%;", n += "top: " + l.y + "%;", n += "width: " + l.width + "%;", n += "height: " + l.height + "%;";
                    m = "";
                    m += "width: 100%;", m += "height: 100%;", "color" == l.default_style.background_type ? m += "fill: rgba(" + b.r + ", " + b.g + ", " + b.b + ", " + l.default_style.background_opacity + ");" : m += "fill: rgba(0, 0, 255, 0.25);", m += "stroke: rgba(" + v.r + ", " + v.g + ", " + v.b + ", " + l.default_style.stroke_opacity + ");", m += "stroke-width: " + l.default_style.stroke_width + "px;", m += "stroke-dasharray: " + l.default_style.stroke_dasharray + ";", m += "stroke-linecap: " + l.default_style.stroke_linecap + ";", i += '<div class="imp-editor-shape imp-editor-path" data-id="' + l.id + '" data-editor-object-type="16" style="' + n + '">';
                    f = e.general.width * (l.width / 100), g = e.general.height * (l.height / 100);
                    i += '   <div class="imp-editor-svg-wrap" style="padding: ' + l.default_style.stroke_width + "px; left: -" + l.default_style.stroke_width + "px; top: -" + l.default_style.stroke_width + 'px;">', i += '       <svg class="imp-editor-path-svg" viewBox="0 0 ' + f + " " + g + '" preserveAspectRatio="none" style="' + m + '">', i += '           <path d="' + h + '"></path>', i += "       </svg>", i += "   </div>", i += '   <div class="imp-selection imp-expanded-selection">', i += '       <div class="imp-selection-translate-boxes">', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>', i += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>', i += "       </div>", i += "   </div>", i += "</div>"
                }
            }
        }
        i += "</div>", i += '<div id="imp-editor-image-backgrounds-container">';
        for (s = 0; s < e.spots.length; s++) {
            n = "";
            n += "left: " + ((l = e.spots[s]).x_image_background + l.default_style.background_image_offset_x) + "%;", n += "top: " + (l.y_image_background + l.default_style.background_image_offset_y) + "%;", n += "width: " + l.width_image_background + "%;", n += "height: " + l.height_image_background + "%;", "image" == l.default_style.background_type && l.default_style.background_image_url && (n += "background-image: url(" + l.default_style.background_image_url + ");", n += "opacity: " + l.default_style.background_image_opacity + ";", n += "transform: scale(" + l.default_style.background_image_scale + ");"), i += '<div class="imp-shape-background-image" style="' + n + '" data-id="' + l.id + '"></div>'
        }
        i += "</div>";
        for (l = void 0, s = 0; s < e.spots.length; s++)
            if (e.spots[s].id == e.editor.selected_shape) {
                l = e.spots[s];
                break
            } if (l && "text" != l.type && o(l.tooltip.enable_tooltip) && o(e.tooltips.enable_tooltips) && !o(l.use_connected_shape_tooltip)) {
            var B = "";
            b = r(l.tooltip_style.background_color), y = r(l.tooltip_style.border_color);
            B += "background: rgba(" + b.r + ", " + b.g + ", " + b.b + ", " + l.tooltip_style.background_opacity + ");", B += "padding: " + l.tooltip_style.padding + "px;", B += "border-radius: " + l.tooltip_style.border_radius + "px;", o(l.tooltip_style.auto_width) || (B += "width: " + l.tooltip_style.width + "px;");
            var q = "";
            "top" == l.tooltip_style.position && (q += '   <div class="hs-arrow hs-arrow-bottom" style="border-top-color: rgba(' + b.r + ", " + b.g + ", " + b.b + ", " + l.tooltip_style.background_opacity + ');"></div>'), "bottom" == l.tooltip_style.position && (q += '   <div class="hs-arrow hs-arrow-top" style="border-bottom-color: rgba(' + b.r + ", " + b.g + ", " + b.b + ", " + l.tooltip_style.background_opacity + ');"></div>'), "left" == l.tooltip_style.position && (q += '   <div class="hs-arrow hs-arrow-right" style="border-left-color: rgba(' + b.r + ", " + b.g + ", " + b.b + ", " + l.tooltip_style.background_opacity + ');"></div>'), "right" == l.tooltip_style.position && (q += '   <div class="hs-arrow hs-arrow-left" style="border-right-color: rgba(' + b.r + ", " + b.g + ", " + b.b + ", " + l.tooltip_style.background_opacity + ');"></div>');
            var D = "";
            D += t.squaresRendererRenderObject(l.tooltip_content.squares_settings);
            var L = "";
            L += '<div id="imp-editor-tooltip-bar-wrap">', o(e.editor.transform_tooltip_mode) ? (L += '<div data-editor-object-type="14" class="imp-editor-tooltip-bar-button"><i class="fa fa-times" aria-hidden="true"></i> Reset</div>', L += '<div data-editor-object-type="13" class="imp-editor-tooltip-bar-button imp-editor-tooltip-bar-button-blue"><i class="fa fa-check" aria-hidden="true"></i> Done</div>') : (L += '<div data-editor-object-type="10" data-wcp-tooltip="Tooltip Style" data-wcp-tooltip-position="top" class="imp-editor-tooltip-bar-button"><i class="fa fa-paint-brush" aria-hidden="true"></i></div>', L += '<div data-editor-object-type="11" data-wcp-tooltip="Transform Tooltip" data-wcp-tooltip-position="top" class="imp-editor-tooltip-bar-button"><i class="fa fa-arrows" aria-hidden="true"></i></div>', L += '<div data-editor-object-type="12" data-wcp-tooltip="Tooltip Content" data-wcp-tooltip-position="top" class="imp-editor-tooltip-bar-button"><i class="fa fa-font" aria-hidden="true"></i></div>');
            var P = "";
            P += '   <div class="imp-selection imp-expanded-selection">', P += '       <div class="imp-selection-translate-boxes">', P += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="15"></div>', P += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="15"></div>', P += "       </div>", i += '<div data-editor-object-type="9" id="imp-editor-shape-tooltip" style="' + B + '"><div id="imp-editor-shape-tooltip-content-wrap">' + D + "</div>" + q + (L += "</div>") + (P += "   </div>") + "</div>"
        }
        return i += "</div>"
    }
}(jQuery, window, document);
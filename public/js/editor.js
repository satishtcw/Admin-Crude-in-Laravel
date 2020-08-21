! function(t, e, o, i) {
    var r = i,
        s = i,
        a = !1,
        n = i,
        l = 0,
        p = i,
        d = i,
        c = "drag",
        h = {
            id: 96,
            editor: {
                selected_shape: "rect-3198"
            },
            general: {
                name: "TourDemo",
                width: 800,
                height: 450,
                naturalWidth: 800,
                naturalHeight: 450
            },
            image: {},
            tooltips: {
                show_title_on_mouseover: 1
            },
            layers: {
                layers_list: [{
                    id: 0,
                    title: "Main Floor",
                    image_url: "https://webcraftplugins.com/uploads/image-map-pro/demo.jpg",
                    image_width: 1280,
                    image_height: 776
                }]
            },
            spots: [{
                id: "rect-3198",
                title: "rect-3198",
                type: "rect",
                x: 9.375,
                y: 60.667,
                width: 16.5,
                height: 26,
                x_image_background: 9.375,
                y_image_background: 60.667,
                width_image_background: 16.5,
                height_image_background: 26,
                default_style: {
                    border_radius: 10,
                    background_opacity: 0,
                    border_width: 2,
                    border_style: "dashed",
                    border_color: "#000000"
                },
                mouseover_style: {
                    border_radius: 10
                },
                tooltip_style: {
                    width: 150,
                    auto_width: 0
                },
                tooltip_content: {
                    squares_settings: {
                        containers: [{
                            id: "sq-container-305521",
                            settings: {
                                elements: [{
                                    settings: {
                                        name: "Paragraph",
                                        iconClass: "fa fa-paragraph"
                                    }
                                }]
                            }
                        }]
                    }
                }
            }, {
                id: "oval-3529",
                title: "oval-3529",
                type: "oval",
                x: 79.875,
                y: 14.223,
                width: 12.25,
                height: 20.667,
                x_image_background: 79.875,
                y_image_background: 14.223,
                width_image_background: 12.25,
                height_image_background: 20.667,
                default_style: {
                    background_opacity: 0
                },
                tooltip_content: {
                    squares_settings: {
                        containers: [{
                            id: "sq-container-403761",
                            settings: {
                                elements: [{
                                    settings: {
                                        name: "Paragraph",
                                        iconClass: "fa fa-paragraph"
                                    }
                                }]
                            }
                        }]
                    }
                }
            }, {
                id: "oval-9040",
                title: "oval-9040",
                type: "oval",
                x: 77.75,
                y: 42.667,
                width: 15.5,
                height: 22.889,
                x_image_background: 77.75,
                y_image_background: 42.667,
                width_image_background: 15.5,
                height_image_background: 22.889,
                default_style: {
                    background_opacity: 0
                },
                tooltip_content: {
                    squares_settings: {
                        containers: [{
                            id: "sq-container-403761",
                            settings: {
                                elements: [{
                                    settings: {
                                        name: "Paragraph",
                                        iconClass: "fa fa-paragraph"
                                    }
                                }]
                            }
                        }]
                    }
                }
            }]
        },
        g = i,
        m = t.imageMapProEditorDefaults,
        _ = t.imageMapProShapeDefaults;

    function u() {
        this.wcpEditorSettings = i, this.actionStack = new Array, this.actionIndex = 0, this.canvasImage = new Image, this.canvasWidth = 0, this.canvasHeight = 0, this.canvas = i, this.ix = 0, this.iy = 0, this.x = 0, this.y = 0, this.dx = 0, this.dy = 0, this.ixss = 0, this.iyss = 0, this.xss = 0, this.yss = 0, this.dxss = 0, this.dyss = 0, this.drawRectWidth = 0, this.drawRectHeight = 0, this.transformX = 0, this.transformY = 0, this.transformWidth = 0, this.transformHeight = 0, this.eventSpotId = i, this.redrawEl = i, this.redrawSvgEl = i, this.redrawPolygonEl = i, this.redrawElBgImage = i, this.redrawTooltip = i, this.tempControlPoint = i, this.tempControlPointLine = i, this.tempControlPointIndex = i, this.controlPointInsertionPointX = 0, this.controlPointInsertionPointY = 0, this.translatedPointIndex = 0, this.translatedPoint = i, this.translatedPointX = 0, this.translatedPointY = 0, this.polyPoints = new Array, this.canvasInitialX = 0, this.canvasInitialY = 0, this.movingTooltipShapeCenterX = 0, this.movingTooltipShapeCenterY = 0, this.movingTooltipCenterX = 0, this.movingTooltipCenterY = 0, this.movingTooltipPosition = i, this.movingTooltipColorRGBA = i, this.movingTooltipArrow = i, this.transformingTooltipStartingWidth = 0, this.transformingTooltipWidth = 0, this.startedSelecting = !1, this.startedMoving = !1, this.startedTransforming = !1, this.didTransforming = !1, this.transformDirection = 0, this.startedTransformingTooltip = !1, this.didTransformTooltip = !1, this.startedDrawingSpot = !1, this.startedDrawingText = !1, this.startedDrawingRect = !1, this.createdDrawingRect = !1, this.startedDrawingOval = !1, this.createdDrawingOval = !1, this.startedDrawingPoly = !1, this.drawingPoly = !1, this.finishedDrawingPoly = !1, this.mouseDownWhileDrawingPoly = !1, this.startedTranslatingControlPoint = !1, this.translatingControlPoint = !1, this.didDeleteControlPoint = !1, this.shouldDeselectShape = !1, this.ctrlKeyDown = !1, this.altKeyDown = !1, this.shiftKeyDown = !1, this.spaceKeyDown = !1, this.commandKeyDown = !1, this.draggingCanvas = !1, this.startedSelectingTooltip = !1, this.movingTooltip = !1, this.selectedSpot = i, this.eventSpot = i, this.shapesFormSpotIndex = i, this.iconsHTML = t.wcpFontawesomeUI, this.zoom = 1, this.canvasX = 0, this.canvasY = 0
    }

    function w(e, o, r, s) {
        e.complete && e.naturalWidth !== i && e.naturalHeight !== i ? r() : (o(), t(e).on("load", function() {
            t(e).off("load"), r()
        }), t(e).on("error", function() {
            t(e).off("error"), s()
        }))
    }

    function y(t) {
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

    function S(t, e, o) {
        return {
            x: Math.round(1e3 * (t - o.offset().left)) / 1e3,
            y: Math.round(1e3 * (e - o.offset().top)) / 1e3
        }
    }

    function f(t, e) {
        return {
            x: e.width * (t.x / 100) + e.x,
            y: e.height * (t.y / 100) + e.y
        }
    }

    function b(t, e) {
        return t < 0 && (t = 0), t > 100 && (t = 100), e < 0 && (e = 0), e > 100 && (e = 100), {
            x: Math.round(1e3 * t) / 1e3,
            y: Math.round(1e3 * e) / 1e3
        }
    }

    function x(t) {
        return 1 == parseInt(t, 10)
    }

    function C(t, e) {
        this.x = t, this.y = e
    }
    t.imageMapProDefaultSettings = t.extend(!0, {}, m), t.imageMapProDefaultSpotSettings = t.extend(!0, {}, _), t.squaresExtendElementDefaults({
        defaultControls: {
            font: {
                text_color: {
                    name: "Text Color",
                    type: "color",
                    default: "#ffffff"
                }
            }
        }
    }), t.squaresUpdatedContent = function(t) {
        r.selectedSpot && (r.selectedSpot.tooltip_content.squares_settings = t), r.addAction()
    }, t.image_map_pro_default_spot_settings = function() {
        return _
    }, t.image_map_pro_init_editor = function(t, e) {
        (r = new u).init(t, e)
    }, t.image_map_pro_editor_current_settings = function() {
        return s
    }, t.image_map_pro_editor_compressed_settings = function() {
        return r.getCompressedSettings()
    }, t.image_map_pro_user_uploaded_image = function() {}, t.wcpEditorSliderStartedDragging = function() {
        a = !0
    }, t.wcpEditorSliderFinishedDragging = function() {
        a = !1
    }, t.wcpTourCoordinatesForTipForStep = function(e) {
        return "Drawing Shapes" == e ? {
            x: t("#wcp-editor-toolbar-wrap").offset().left + t("#wcp-editor-toolbar-wrap").width() + 20,
            y: t("#wcp-editor-toolbar-wrap").offset().top + t("#wcp-editor-toolbar-wrap").height() / 3
        } : "Customize Your Shapes" == e ? {
            x: t("#wcp-editor-object-settings").offset().left - 20,
            y: t("#wcp-editor-object-settings").offset().top + 40
        } : "Edit and Delete Shapes" == e ? {
            x: t("#wcp-editor-object-list-wrap").offset().left - 20,
            y: t("#wcp-editor-object-list-wrap").offset().top + 50
        } : "Edit the Tooltips" == e ? {
            x: t("#imp-editor-tooltip-bar-wrap").offset().left - 20,
            y: t("#imp-editor-tooltip-bar-wrap").offset().top + 10
        } : "Image Map Settings" == e ? {
            x: t("#wcp-editor-button-settings").offset().left + t("#wcp-editor-button-settings").outerWidth() + 20,
            y: t("#wcp-editor-button-settings").offset().top + t("#wcp-editor-button-settings").outerHeight() / 2
        } : "Responsive &amp; Fullscreen Tooltips" == e ? {
            x: t('[data-wcp-main-tab-button-name="Image Map"]').offset().left + 150,
            y: t('[data-wcp-main-tab-button-name="Image Map"]').offset().top + 40
        } : "Preview Mode" == e ? {
            x: t("#wcp-editor-button-preview").offset().left - 20,
            y: t("#wcp-editor-button-preview").offset().top + 32
        } : "Save and Load" == e ? {
            x: t("#wcp-editor-button-load").offset().left + 64,
            y: t("#wcp-editor-button-load").offset().top + 32
        } : "Publish" == e ? {
            x: t("#wcp-editor-button-settings").offset().left + t("#wcp-editor-button-settings").outerWidth() + 20,
            y: t("#wcp-editor-button-settings").offset().top + t("#wcp-editor-button-settings").outerHeight() / 2
        } : "Import and Export" == e ? {
            x: t('[data-wcp-editor-main-button-name="import"]').offset().left - 20,
            y: t('[data-wcp-editor-main-button-name="import"]').offset().top + 32
        } : "Easy Installation" == e ? {
            x: t('[data-wcp-editor-main-button-name="code"]').offset().left - 20,
            y: t('[data-wcp-editor-main-button-name="code"]').offset().top + 32
        } : void 0
    }, t.wcpTourCoordinatesForHighlightRect = function(e) {
        return "Drawing Shapes" == e ? {
            x: t("#wcp-editor-toolbar-wrap").offset().left,
            y: t(".wcp-editor-toolbar").first().offset().top,
            width: t("#wcp-editor-toolbar-wrap").outerWidth(),
            height: t(".wcp-editor-toolbar").last().offset().top - t(".wcp-editor-toolbar").first().offset().top + t(".wcp-editor-toolbar").last().outerHeight()
        } : "Customize Your Shapes" == e ? {
            x: t("#wcp-editor-object-settings").offset().left,
            y: t("#wcp-editor-object-settings").offset().top,
            width: t("#wcp-editor-object-settings").outerWidth(),
            height: t("#wcp-editor-object-settings").outerHeight()
        } : "Edit and Delete Shapes" == e ? {
            x: t("#wcp-editor-object-list-wrap").offset().left,
            y: t("#wcp-editor-object-list-wrap").offset().top,
            width: t("#wcp-editor-object-list-wrap").outerWidth(),
            height: t("#wcp-editor-object-list-wrap").outerHeight()
        } : "Edit the Tooltips" == e ? {
            x: t("#imp-editor-tooltip-bar-wrap").offset().left,
            y: t("#imp-editor-tooltip-bar-wrap").offset().top,
            width: t("#imp-editor-tooltip-bar-wrap").outerWidth(),
            height: t("#imp-editor-tooltip-bar-wrap").outerHeight()
        } : "Image Map Settings" == e ? {
            x: t("#wcp-editor-button-settings").offset().left,
            y: t("#wcp-editor-button-settings").offset().top,
            width: t("#wcp-editor-button-settings").outerWidth(),
            height: t("#wcp-editor-button-settings").outerHeight()
        } : "Responsive &amp; Fullscreen Tooltips" == e ? {
            x: t('[data-wcp-main-tab-button-name="Image Map"]').offset().left,
            y: t('[data-wcp-main-tab-button-name="Image Map"]').offset().top,
            width: t('[data-wcp-main-tab-button-name="Image Map"]').outerWidth(),
            height: t('[data-wcp-main-tab-button-name="Image Map"]').outerHeight()
        } : "Preview Mode" == e ? {
            x: t("#wcp-editor-button-preview").offset().left,
            y: t("#wcp-editor-button-preview").offset().top,
            width: t("#wcp-editor-button-preview").outerWidth(),
            height: t("#wcp-editor-button-preview").outerHeight()
        } : "Save and Load" == e ? {
            x: t("#wcp-editor-button-save").offset().left,
            y: t("#wcp-editor-button-save").offset().top,
            width: t("#wcp-editor-button-save").outerWidth() + t("#wcp-editor-button-load").outerWidth(),
            height: t("#wcp-editor-button-save").outerHeight()
        } : "Publish" == e ? {
            x: t("#wcp-editor-button-settings").offset().left,
            y: t("#wcp-editor-button-settings").offset().top,
            width: t("#wcp-editor-button-settings").outerWidth(),
            height: t("#wcp-editor-button-settings").outerHeight()
        } : "Import and Export" == e ? {
            x: t('[data-wcp-editor-main-button-name="import"]').offset().left,
            y: t('[data-wcp-editor-main-button-name="import"]').offset().top,
            width: t('[data-wcp-editor-main-button-name="import"]').outerWidth() + t('[data-wcp-editor-main-button-name="export"]').outerWidth(),
            height: t('[data-wcp-editor-main-button-name="import"]').outerHeight()
        } : "Easy Installation" == e ? {
            x: t('[data-wcp-editor-main-button-name="code"]').offset().left,
            y: t('[data-wcp-editor-main-button-name="code"]').offset().top,
            width: t('[data-wcp-editor-main-button-name="code"]').outerWidth(),
            height: t('[data-wcp-editor-main-button-name="code"]').outerHeight()
        } : void 0
    }, t.wcpTourEventStarted = function() {}, t.wcpTourEventFinished = function() {}, t.wcpTourEventStepWillChange = function(t) {}, t.wcpEditorGetContentForCanvas = function() {
        return ""
    }, t.wcpEditorGetListItems = function() {
        for (var t = [], e = s.spots.length - 1; e >= 0; e--) {
            var o = s.spots[e];
            t.push({
                id: o.id,
                title: o.title
            })
        }
        return t
    }, t.wcpEditorGetSaves = function(e) {
        t.imp_editor_storage_get_saves_list(function(t) {
            for (var o = new Array, i = 0; i < t.length; i++) {
                var r = {};
                r = t[i].name ? {
                    name: t[i].name,
                    id: t[i].id
                } : {
                    name: "Untitled",
                    id: t[i].id
                }, o.push(r)
            }
            e(o)
        })
    }, t.wcpEditorGetExportJSON = function() {
        return JSON.stringify(r.getCompressedSettings())
    }, t.wcpEditorGetSettingsForm = function() {
        return t.wcpFormGenerateHTMLForForm("Image Map Settings")
    }, t.wcpEditorGetSettingsFormTitle = function() {
        return "Image Map Settings"
    }, t.wcpEditorEventNewButtonPressed = function() {
        var e = {
            name: "create_new",
            title: "Create New",
            buttons: [{
                name: "cancel",
                title: "Cancel",
                class: ""
            }, {
                name: "primary",
                title: "Create",
                class: "primary",
                id: "wcp-editor-button-create-new-instance"
            }],
            width: 500,
            body: t.wcpFormGenerateHTMLForForm("New Image Map")
        };
        t.wcpEditorPresentModal(e), t.wcpFormUpdateForm("New Image Map"), r.updateNewImageMapFormState()
    }, t.wcpEditorEventSaveButtonPressed = function() {
        t.wcpEditorPresentLoadingScreen("Saving..."), t.imp_editor_storage_store_save(r.getCompressedSettings(), function(e) {
            if (e) t.wcpEditorHideLoadingScreenWithMessage("Saved!", !1, !1);
            else {
                t.wcpEditorHideLoadingScreenWithMessage("There was an error saving the image map!", !0, !1);
                var o = "";
                o += '<div class="modal-info-text">Please save this code in order to preserve your work and try again later. <br>This code can be imported any time by opening an existing image map and pressing the Import button. <br>You can also <a href="https://webcraftplugins.com/support">contact us</a>!</div>', o += '<textarea id="textarea-error-saving">' + JSON.stringify(r.getCompressedSettings()) + "</textarea>", setTimeout(function() {
                    t.wcpEditorPresentModal({
                        name: "error-saving",
                        title: "Error Saving Image Map",
                        buttons: [{
                            class: "primary",
                            name: "primary",
                            title: "Done"
                        }],
                        body: o
                    })
                }, 1e3)
            }
        })
    }, t.wcpEditorEventLoadButtonPressed = function() {}, t.wcpEditorEventUndoButtonPressed = function() {
        r.undo()
    }, t.wcpEditorEventRedoButtonPressed = function() {
        r.redo()
    }, t.wcpEditorEventPreviewButtonPressed = function() {
        t.wcpEditorIsFloatingWindowOpen() && t.wcpEditorCloseFloatingWindow()
    }, t.wcpEditorEventEnteredPreviewMode = function() {
        s.editor.previewMode = 1, r.redraw()
    }, t.wcpEditorEventExitedPreviewMode = function() {
        s.editor.previewMode = 0, r.redraw()
    }, t.wcpEditorEventListItemMouseover = function(e) {
        for (var o = i, r = 0; r < s.spots.length; r++) s.spots[r].id == e && (o = s.spots[r].title), x(s.editor.previewMode) && t.imageMapProUnhighlightShape(s.general.name, s.spots[r].title);
        x(s.editor.previewMode) && t.imageMapProHighlightShape(s.general.name, o)
    }, t.wcpEditorEventListItemSelected = function(t) {
        r.selectSpot(t), r.redraw()
    }, t.wcpEditorEventListItemMoved = function(t, e, o) {
        o = s.spots.length - 1 - o, e = s.spots.length - 1 - e, o > s.spots.length - 1 && (o = s.spots.length - 1), s.spots.splice(o, 0, s.spots.splice(e, 1)[0]), r.updateShapesList(), r.redraw()
    }, t.wcpEditorEventObjectListButtonPressed = function(e) {
        if (r.selectedSpot) {
            if ("duplicate" == e) {
                var o = t.extend(!0, {}, r.selectedSpot);
                "spot" == o.type && (o.id = r.createIdForSpot()), "rect" == o.type && (o.id = r.createIdForRect()), "oval" == o.type && (o.id = r.createIdForOval()), "poly" == o.type && (o.id = r.createIdForPoly()), "text" == o.type && (o.id = r.createIdForText()), o.title += " Copy", s.spots.push(o), r.redraw(), r.addAction()
            }
            if ("copy" == e && (n = {
                    text: t.extend(!0, {}, r.selectedSpot.text),
                    default_style: t.extend(!0, {}, r.selectedSpot.default_style),
                    mouseover_style: t.extend(!0, {}, r.selectedSpot.mouseover_style),
                    tooltip_style: t.extend(!0, {}, r.selectedSpot.tooltip_style)
                }), "paste" == e) {
                var i = r.selectedSpot.text.text;
                r.selectedSpot.text = t.extend(!0, {}, n.text), r.selectedSpot.default_style = t.extend(!0, {}, n.default_style), r.selectedSpot.mouseover_style = t.extend(!0, {}, n.mouseover_style), r.selectedSpot.tooltip_style = t.extend(!0, {}, n.tooltip_style), r.selectedSpot.text.text = i, r.redraw(), r.addAction()
            }
            if ("delete" == e && (l = r.getIndexOfSpotWithId(r.selectedSpot.id), t.wcpEditorPresentModal({
                    name: "confirm-delete-shape",
                    title: "Confirm Delete",
                    buttons: [{
                        name: "cancel",
                        title: "Cancel",
                        class: ""
                    }, {
                        name: "primary",
                        title: "Delete",
                        class: "danger"
                    }],
                    body: "Delete this shape?"
                })), "rename" == e) {
                var a = '<div class="wcp-form-form-control">';
                a += "<label>Shape Name</label>", a += '<input type="text" id="input-shape-name">', a += "</div>", a += '<div class="modal-error-text" id="rename-shape-error" style="margin-top: 10px; display: none;"></div>', t.wcpEditorPresentModal({
                    name: "confirm-rename-shape",
                    title: "Rename Shape",
                    buttons: [{
                        name: "cancel",
                        title: "Cancel",
                        class: ""
                    }, {
                        name: "primary",
                        title: "Rename",
                        class: "primary"
                    }],
                    body: a
                }), t("#input-shape-name").val(r.selectedSpot.title)
            }
        }
    }, t.wcpEditorEventSelectedTool = function(t) {
        s.editor.tool = t, r.redraw()
    }, t.wcpEditorEventPressedTool = function(t) {
        "reset" == t && r.zoomReset()
    }, t.wcpEditorEventMainButtonClick = function(e) {
        if ("code" == e) {
            var o = "";
            o += '<div id="imp-generated-code-wrap">', o += '<div class="generated-code-help">', o += "    This is a sample HTML document, showing how to install the plugin in your website.", o += "</div>", o += "<pre>", o += "&lt;!doctype html&gt;<br>", o += "&lt;html&gt;<br>", o += "&lt;head&gt;<br>", o += '    <strong><span class="em-code">&lt;link rel=&quot;stylesheet&quot; href=&quot;css/image-map-pro.min.css&quot;&gt;</span></strong><br>', o += "&lt;/head&gt;<br>", o += "&lt;body&gt;<br>", o += '    &lt;div id=&quot;<strong><span class="em-code">image-map-pro-container</span></strong>&quot;&gt;&lt;/div&gt;<br><br>', o += "    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;<br>", o += '    <strong><span class="em-code">&lt;script src=&quot;js/image-map-pro.min.js&quot;&gt;&lt;/script&gt;</span></strong><br>', o += "    &lt;script type=&quot;text/javascript&quot;&gt;<br>", o += "        ;(function ($, window, document, undefined) {<br>", o += "            $(document).ready(function() {<br>", o += "</pre>", o += '<div class="generated-code-help">The code that contains all settings and initializes the plugin:</div>', o += '<textarea id="textarea-generated-code" rows="4"></textarea>', o += "    <pre>", o += "            });<br>", o += "        })(jQuery, window, document);<br>", o += "    &lt;/script&gt;<br>", o += "&lt;/body&gt;<br>", o += "&lt;/html&gt;<br>", o += "</pre>", o += "</div>", t.wcpEditorPresentModal({
                name: "code",
                title: "Code",
                buttons: [{
                    name: "primary",
                    title: "Done",
                    class: "primary"
                }],
                body: o
            }), t("#textarea-generated-code").val("$('#image-map-pro-container').imageMapPro(" + JSON.stringify(r.getCompressedSettings()) + ");")
        }
        if ("activate" == e) {
            o = '<div class="wcp-form-form-control">';
            o += '<label>Purchase Code <a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-" target="_blank"><i class="fa fa-question-circle" aria-hidden="true" data-wcp-tooltip="Trouble finding your purchase code?" data-wcp-tooltip-position="right"></i></a></label>', o += '<input type="text" id="input-purchase-code">', o += "</div>", t.wcpEditorPresentModal({
                name: "activate",
                title: "Activate",
                buttons: [{
                    name: "cancel",
                    title: "Cancel",
                    class: "default"
                }, {
                    name: "primary",
                    title: "Activate",
                    class: "primary"
                }],
                body: o
            })
        }
        if ("help" == e && (g = s, s = h, r.shapesFormSpotIndex = -1, r.parseSettings(), r.redraw(), t("#wcp-editor-main-buttons").addClass("wcp-expanded"), t.wcpTourEventFinished = function() {
                s = g, r.redraw()
            }, t.wcpTourRestart("Image Map Pro Editor Tour")), "import" == e) {
            t.wcpFormCreateForm({
                name: "Import",
                controls: [{
                    label_width: 104,
                    name: "import_format",
                    title: "Import Format",
                    type: "button group",
                    options: [{
                        value: "imp_code",
                        title: "Image Map Pro Code"
                    }, {
                        value: "svg_code",
                        title: "SVG XML Code"
                    }],
                    value: "imp_code"
                }, {
                    label_width: 104,
                    name: "code",
                    title: "Paste code to import",
                    type: "textarea",
                    value: ""
                }, {
                    type: "info",
                    name: "invalid_code",
                    title: "Invalid Code",
                    value: "Invalid Code",
                    options: {
                        style: "red"
                    }
                }]
            });
            var i = {
                name: "import",
                title: "Import",
                buttons: [{
                    name: "cancel",
                    title: "Cancel",
                    class: ""
                }, {
                    name: "primary",
                    title: "Import",
                    class: "primary",
                    id: "wcp-editor-confirm-import"
                }],
                body: t.wcpFormGenerateHTMLForForm("Import"),
                width: 700
            };
            t.wcpEditorPresentModal(i), t.wcpFormUpdateForm("Import"), t.wcpFormHideControl("Import", "invalid_code")
        }
    }, t.wcpEditorEventModalButtonClicked = function(e, o) {
        if ("create_new" == e && ("cancel" == o && t.wcpEditorCloseModal(), "primary" == o))
            if (0 == (S = t.wcpFormGetModel("New Image Map")).name && (S.name = "Untitled"), S.name = S.name.replace(/\W/g, ""), (s = t.extend(!0, {}, m)).id = Math.round(1e4 * Math.random()) + 1, s.general.name = S.name, s.general.shortcode = S.name.replace(/[^\w]/g, ""), t.wcpEditorCloseModal(), t.wcpEditorPresentLoadingScreen("Creating..."), "countries" == S.template) t.imageMapProCountriesGetCountrySVG(S.country, function(e) {
                r.parseSVG(e);
                for (var o = 0; o < s.spots.length; o++) s.spots[o].default_style.background_color = "#0258CF", s.spots[o].default_style.background_opacity = 1, s.spots[o].default_style.stroke_color = "#ffffff", s.spots[o].default_style.stroke_width = 1, s.spots[o].default_style.stroke_opacity = 1, s.spots[o].mouseover_style.background_color = "#00357D", s.spots[o].mouseover_style.background_opacity = 1, s.spots[o].mouseover_style.stroke_color = "#ffffff", s.spots[o].mouseover_style.stroke_width = 1, s.spots[o].mouseover_style.stroke_opacity = 1;
                s.tooltips.sticky_tooltips = 1, t.imp_editor_storage_store_save(r.getCompressedSettings(), function() {
                    t.imp_editor_storage_set_last_save(s.id, function() {
                        r.launch(), t.wcpEditorHideLoadingScreenWithMessage("Created!", !1, !1)
                    })
                })
            });
            else t.imp_editor_storage_store_save(r.getCompressedSettings(), function() {
                t.imp_editor_storage_set_last_save(s.id, function() {
                    r.launch(), t.wcpEditorHideLoadingScreenWithMessage("Created!", !1, !1)
                })
            });
        if ("modal-choose-icon" == e && "cancel" == o && t.wcpEditorCloseModal(), "load" == e && "cancel" == o && t.wcpEditorCloseModal(), "confirm-delete-shape" == e && ("primary" == o && (s.editor.selected_shape == s.spots[l].id && r.deselectSpot(), s.spots.splice(l, 1), t.wcpEditorCloseModal(), r.redraw(), r.addAction()), "cancel" == o && t.wcpEditorCloseModal()), "code" == e && "primary" == o && t.wcpEditorCloseModal(), "export" == e && "primary" == o && t.wcpEditorCloseModal(), "import" == e && ("cancel" == o && t.wcpEditorCloseModal(), "primary" == o)) {
            if ("imp_code" == (S = t.wcpFormGetModel("Import")).import_format) {
                var a = S.code,
                    n = i;
                try {
                    n = JSON.parse(a)
                } catch (t) {
                    console.log("error decoding JSON!")
                }
                if (n === i) t.wcpFormShowControl("Import", "invalid_code");
                else {
                    t.wcpEditorCloseModal(), t.wcpFormHideControl("Import", "invalid_code");
                    var c = s.general.name,
                        h = s.id;
                    (s = t.extend(!0, {}, n)).general.name = c, s.id = h, r.launch()
                }
            }
            if ("svg_code" == S.import_format) {
                var g = t.extend(!0, {}, s);
                t.wcpFormHideControl("Import", "invalid_code");
                try {
                    r.parseSVG(S.code), r.redraw(), t.wcpEditorCloseModal()
                } catch (e) {
                    s = t.extend(!0, {}, g), t.wcpFormShowControl("Import", "invalid_code")
                }
            }
        }
        if ("error-saving" == e && "primary" == o && t.wcpEditorCloseModal(), "activate" == e && ("cancel" == o && t.wcpEditorCloseModal(), "primary" == o && (t.wcpEditorCloseModal(), t.wcpEditorPresentLoadingScreen("Validating Purchase Code..."), t.wcpValidatePurchaseCode ? t.wcpValidatePurchaseCode(t("#input-purchase-code").val(), function(e, o) {
                e ? (t.wcpEditorHideLoadingScreenWithMessage("Success!", !1, !1), t.wcpEditorHideExtraMainButton("activate")) : t.wcpEditorHideLoadingScreenWithMessage("Failed to validate your purchase code.", !0, !1)
            }) : t.wcpEditorHideLoadingScreenWithMessage("Failed to validate your purchase code.</div>", !0, !0))), "confirm-rename-shape" == e && ("cancel" == o && t.wcpEditorCloseModal(), "primary" == o)) {
            var _ = t("#input-shape-name").val();
            if (0 == _.length) return void t("#rename-shape-error").show().html("Please enter a new name for the shape, or press Cancel.");
            for (var u = !1, w = 0; w < s.spots.length; w++)
                if (s.spots[w].title == _ && s.spots[w].id != r.selectedSpot.id) {
                    u = !0;
                    break
                } if (u || 0 == _.length) return void t("#rename-shape-error").show().html("A shape with this name already exists!");
            r.selectedSpot.title = _, t.wcpEditorCloseModal(), r.redraw()
        }
        if ("modal-add-layer" == e && ("cancel" == o && t.wcpEditorCloseModal(), "primary" == o)) {
            var y = !1;
            if (0 == (S = t.wcpFormGetModel("New/Edit Layer")).name.length ? (t.wcpFormSetErrorStateForControl("New/Edit Layer", "name", !0), y = !0) : t.wcpFormSetErrorStateForControl("New/Edit Layer", "name", !1), 0 == S.url.length) return t.wcpFormSetErrorStateForControl("New/Edit Layer", "url", !0), void(y = !0);
            t.wcpFormSetErrorStateForControl("New/Edit Layer", "url", !1), r.processNewLayerImage(S.url, function(e, o, i) {
                if (e ? t.wcpFormSetErrorStateForControl("New/Edit Layer", "url", !1) : (y = !0, t.wcpFormSetErrorStateForControl("New/Edit Layer", "url", !0)), !y) {
                    var a = {
                        id: r.createIdForLayer(),
                        title: S.name,
                        image_url: S.url,
                        image_width: o,
                        image_height: i
                    };
                    s.layers.layers_list.push(a), r.updateImageMapForm(), r.redraw(), t.wcpEditorCloseModal()
                }
            })
        }
        if ("modal-edit-layer" == e && ("cancel" == o && t.wcpEditorCloseModal(), "primary" == o)) {
            var S;
            y = !1;
            if (0 == (S = t.wcpFormGetModel("New/Edit Layer")).name.length ? (t.wcpFormSetErrorStateForControl("New/Edit Layer", "name", !0), y = !0) : t.wcpFormSetErrorStateForControl("New/Edit Layer", "name", !1), 0 == S.url.length) return t.wcpFormSetErrorStateForControl("New/Edit Layer", "url", !0), void(y = !0);
            t.wcpFormSetErrorStateForControl("New/Edit Layer", "url", !1), r.processNewLayerImage(S.url, function(e, o, i) {
                if (e ? t.wcpFormSetErrorStateForControl("New/Edit Layer", "url", !1) : (y = !0, t.wcpFormSetErrorStateForControl("New/Edit Layer", "url", !0)), !y) {
                    for (var a = 0; a < s.layers.layers_list.length; a++)
                        if (s.layers.layers_list[a].id == d) {
                            s.layers.layers_list[a].title = S.name, s.layers.layers_list[a].image_url = S.url, s.layers.layers_list[a].image_width = o, s.layers.layers_list[a].image_height = i;
                            break
                        } r.updateImageMapForm(), r.redraw(), t.wcpEditorCloseModal()
                }
            })
        }
        if ("modal-confirm-delete-floor" == e && ("cancel" == o && t.wcpEditorCloseModal(), "primary" == o)) {
            if (1 == s.layers.layers_list.length) {
                t.wcpEditorCloseModal();
                var f = "";
                return f += "Unable to delete, there is only one floor left.", void t.wcpEditorPresentModal({
                    name: "modal-delete-floor-error",
                    title: "Error",
                    buttons: [{
                        name: "ok",
                        title: "OK",
                        class: "default",
                        id: "imp-editor-button-delete-floor-error-ok"
                    }],
                    body: f
                })
            }
            for (w = 0; w < s.layers.layers_list.length; w++) s.layers.layers_list[w].id == p && s.layers.layers_list.splice(w, 1);
            s.editor.currentLayer = s.layers.layers_list[0].id;
            var v = [];
            for (w = 0; w < s.spots.length; w++)
                if (s.spots[w].layerID != p) {
                    var b = t.extend(!0, {}, s.spots[w]);
                    v.push(b)
                } s.spots = v, t.wcpEditorCloseModal(), r.updateImageMapForm(), r.updateShapesList(), r.redraw()
        }
        "modal-delete-floor-error" == e && "ok" == o && t.wcpEditorCloseModal()
    }, t.wcpEditorEventModalClosed = function(t) {}, t.wcpEditorEventLoadSaveWithID = function(e) {
        t.wcpEditorPresentLoadingScreen("Loading Image Map..."), t.imp_editor_storage_get_save(e, function(e) {
            e ? (s = e, t.imp_editor_storage_set_last_save(s.id, function() {
                t.wcpEditorHideLoadingScreen(), r.launch()
            })) : t.wcpEditorHideLoadingScreenWithMessage("Error loading image map.", !0, !1)
        })
    }, t.wcpEditorEventDeleteSaveWithID = function(e, o) {
        t.imp_editor_storage_delete_save(e, function() {
            o()
        })
    }, t.wcpEditorEventHelpButtonPressed = function() {}, t.wcpFormEventFormUpdated = function(e) {
        if ("Image Map Settings" == e) {
            var o = t.wcpFormGetModel(e);
            if (o.image.image_url && o.image.image_url.length > 0 && s.image.url !== o.image.image_url) s.image.url = o.image.image_url, r.canvasImage.src = o.image.image_url, w(r.canvasImage, function() {
                t.wcpEditorPresentLoadingScreen("Loading Image...")
            }, function() {
                r.canvas_events(), t.wcpEditorHideLoadingScreen(), s.general.width = r.canvasImage.naturalWidth, s.general.height = r.canvasImage.naturalHeight, s.general.naturalWidth = r.canvasImage.naturalWidth, s.general.naturalHeight = r.canvasImage.naturalHeight, t.wcpFormSetControlValue("Image Map Settings", "image_map_width", s.general.width), t.wcpFormSetControlValue("Image Map Settings", "image_map_height", s.general.height), t.wcpFormUpdateForm("Image Map Settings"), r.redraw(), r.addAction()
            }, function() {
                t.wcpEditorHideLoadingScreenWithMessage("Error Loading Image!", !0, !1)
            });
            else if (s.image.url !== o.image.image_url) s.image.url = o.image.image_url, r.canvasImage.src = o.image.image_url, r.canvas_events(), s.general.width = m.general.naturalWidth, s.general.height = m.general.naturalHeight, s.general.naturalWidth = m.general.naturalWidth, s.general.naturalHeight = m.general.naturalHeight, t.wcpFormSetControlValue("Image Map Settings", "image_map_width", m.general.width), t.wcpFormSetControlValue("Image Map Settings", "image_map_height", m.general.height), t.wcpFormUpdateForm("Image Map Settings"), r.redraw(), r.addAction();
            else {
                s.general.name = o.general.image_map_name.trim(), o.general.image_map_shortcode && (s.general.shortcode = o.general.image_map_shortcode.replace(/[\[\]']+/g, "").trim()), s.general.width = o.general.image_map_width, s.general.height = o.general.image_map_height, s.general.responsive = o.general.responsive, s.general.preserve_quality = o.general.preserve_quality, s.general.center_image_map = o.general.center_image_map, s.image.url = o.image.image_url, s.shapes.pageload_animation = o.shapes.pageload_animation, s.shapes.glowing_shapes = o.shapes.glowing_shapes, s.shapes.glowing_shapes_color = o.shapes.glowing_shapes_color, s.shapes.glow_opacity = o.shapes.glow_opacity, s.shapes.stop_glowing_on_mouseover = o.shapes.stop_glowing_on_mouseover, s.tooltips.enable_tooltips = o.tooltips.enable_tooltips, s.tooltips.show_tooltips = o.tooltips.show_tooltips, s.tooltips.show_title_on_mouseover = o.tooltips.show_title_on_mouseover, s.tooltips.sticky_tooltips = o.tooltips.sticky_tooltips, s.tooltips.constrain_tooltips = o.tooltips.constrain_tooltips, s.tooltips.tooltip_animation = o.tooltips.tooltip_animation, s.tooltips.fullscreen_tooltips = o.tooltips.fullscreen_tooltips, s.fullscreen.enable_fullscreen_mode = o.fullscreen.enable_fullscreen_mode, s.fullscreen.start_in_fullscreen_mode = o.fullscreen.start_in_fullscreen_mode, s.fullscreen.fullscreen_background = o.fullscreen.fullscreen_background, s.fullscreen.fullscreen_button_position = o.fullscreen.fullscreen_button_position, s.fullscreen.fullscreen_button_type = o.fullscreen.fullscreen_button_type, s.fullscreen.fullscreen_button_color = o.fullscreen.fullscreen_button_color, s.fullscreen.fullscreen_button_text_color = o.fullscreen.fullscreen_button_text_color, s.zooming.enable_zooming = o.zooming.enable_zooming, s.zooming.max_zoom = o.zooming.max_zoom, s.zooming.limit_max_zoom_to_image_size = o.zooming.limit_max_zoom_to_image_size, s.zooming.enable_navigator = o.zooming.enable_navigator, s.zooming.enable_zoom_buttons = o.zooming.enable_zoom_buttons, s.zooming.zoom_button_text_color = o.zooming.zoom_button_text_color, s.zooming.zoom_button_background_color = o.zooming.zoom_button_background_color, s.zooming.hold_ctrl_to_zoom = o.zooming.hold_ctrl_to_zoom, s.layers.enable_layers = o.layers.enable_layers, s.layers.layers_list = o.layers.layers_list, x(s.layers.enable_layers) && 0 == s.layers.layers_list.length && (s.layers.layers_list = [{
                    id: 0,
                    title: "Main Floor",
                    image_url: s.image.url,
                    image_width: s.general.width,
                    image_height: s.general.height
                }], r.updateImageMapForm()), s.shapes_menu.enable_shapes_menu = o.shapes_menu.enable_shapes_menu, s.shapes_menu.detached_menu = o.shapes_menu.detached_menu, s.shapes_menu.menu_position = o.shapes_menu.menu_position, s.shapes_menu.enable_search = o.shapes_menu.enable_search, s.shapes_menu.group_by_floor = o.shapes_menu.group_by_floor, s.shapes_menu.hide_children_of_connected_shapes = o.shapes_menu.hide_children_of_connected_shapes;
                var n = '<div data-imp-detached-menu="' + s.id + '"></div>';
                t.wcpFormSetControlValue("Image Map Settings", "detached_menu_info", n), o.custom_code && (s.custom_code.custom_css = o.custom_code.custom_css, s.custom_code.custom_js = o.custom_code.custom_js), r.redraw(), r.addAction()
            }
        }
        if ("Shape Settings" == e && r.selectedSpot !== i) {
            var l = r.selectedSpot,
                p = t.wcpFormGetModel("Shape Settings");
            l.title = p.general.shape_title, l.x = p.general.x, l.y = p.general.y, l.width = p.general.width, l.height = p.general.height, l.connected_to = p.general.connected_to, l.use_connected_shape_tooltip = p.general.use_connected_shape_tooltip, l.static = p.general.static, l.text.text = p.text.text, l.text.font_family = p.text.font_family, l.text.font_size = p.text.font_size, l.text.font_weight = p.text.font_weight, l.text.text_color = p.text.text_color, l.text.text_opacity = p.text.text_opacity, l.actions.click = p.actions.click, l.actions.link = p.actions.link, l.actions.script = p.actions.script, l.actions.open_link_in_new_window = p.actions.open_link_in_new_window, l.default_style.opacity = p.default_style.opacity, l.default_style.icon_fill = p.default_style.icon_fill, l.default_style.border_radius = p.default_style.border_radius, l.default_style.background_type = p.default_style.background_type, l.default_style.background_image_url = p.default_style.background_image_url, l.default_style.background_image_opacity = p.default_style.background_image_opacity, l.default_style.background_image_scale = p.default_style.background_image_scale, l.default_style.background_image_offset_x = p.default_style.background_image_offset_x, l.default_style.background_image_offset_y = p.default_style.background_image_offset_y, l.default_style.background_color = p.default_style.background_color, l.default_style.background_opacity = p.default_style.background_opacity, l.default_style.border_width = p.default_style.border_width, l.default_style.border_style = p.default_style.border_style, l.default_style.border_color = p.default_style.border_color, l.default_style.border_opacity = p.default_style.border_opacity, l.default_style.stroke_color = p.default_style.stroke_color, l.default_style.stroke_opacity = p.default_style.stroke_opacity, l.default_style.stroke_width = p.default_style.stroke_width, l.default_style.stroke_dasharray = p.default_style.stroke_dasharray, l.default_style.stroke_linecap = p.default_style.stroke_linecap, l.default_style.use_icon = p.icon.use_icon, l.default_style.icon_type = p.icon.icon_type, l.default_style.icon_svg_path = p.icon.icon_svg_path, l.default_style.icon_svg_viewbox = p.icon.icon_svg_viewbox, l.default_style.icon_url = p.icon.icon_url, l.default_style.icon_is_pin = p.icon.icon_is_pin, l.default_style.icon_shadow = p.icon.icon_shadow, l.mouseover_style.opacity = p.mouseover_style.mouseover_opacity, l.mouseover_style.background_image_url = p.mouseover_style.mouseover_background_image_url, l.mouseover_style.background_image_opacity = p.mouseover_style.mouseover_background_image_opacity, l.mouseover_style.background_image_scale = p.mouseover_style.mouseover_background_image_scale, l.mouseover_style.background_image_offset_x = p.mouseover_style.mouseover_background_image_offset_x, l.mouseover_style.background_image_offset_y = p.mouseover_style.mouseover_background_image_offset_y, l.mouseover_style.background_color = p.mouseover_style.mouseover_background_color, l.mouseover_style.background_opacity = p.mouseover_style.mouseover_background_opacity, l.mouseover_style.icon_fill = p.mouseover_style.mouseover_icon_fill, l.mouseover_style.border_radius = p.mouseover_style.mouseover_border_radius, l.mouseover_style.border_width = p.mouseover_style.mouseover_border_width, l.mouseover_style.border_style = p.mouseover_style.mouseover_border_style, l.mouseover_style.border_color = p.mouseover_style.mouseover_border_color, l.mouseover_style.border_opacity = p.mouseover_style.mouseover_border_opacity, l.mouseover_style.stroke_color = p.mouseover_style.mouseover_stroke_color, l.mouseover_style.stroke_opacity = p.mouseover_style.mouseover_stroke_opacity, l.mouseover_style.stroke_width = p.mouseover_style.mouseover_stroke_width, l.mouseover_style.stroke_dasharray = p.mouseover_style.mouseover_stroke_dasharray, l.mouseover_style.stroke_linecap = p.mouseover_style.mouseover_stroke_linecap, l.tooltip.enable_tooltip = p.tooltip.enable_tooltip, r.redraw(), a || r.addAction()
        }
        if ("Tooltip Style" == e && r.selectedSpot !== i) {
            l = r.selectedSpot, p = t.wcpFormGetModel("Tooltip Style");
            l.tooltip_style.border_radius = p.tooltip_border_radius, l.tooltip_style.padding = p.tooltip_padding, l.tooltip_style.background_color = p.tooltip_background_color, l.tooltip_style.background_opacity = p.tooltip_background_opacity, l.tooltip_style.position = p.tooltip_position, l.tooltip_style.width = p.tooltip_width, l.tooltip_style.auto_width = p.tooltip_auto_width, r.redraw(), a || r.addAction()
        }
        "New Image Map" == e && r.updateNewImageMapFormState()
    }, t.wcpEditorEventFloatingWindowClosed = function(t) {
        "Tooltip Content" == t && r.redraw()
    }, t.wcpEditorSettingsWindowOpened = function() {
        r.redraw()
    }, t.wcpEditorSettingsWindowClosed = function() {
        r.redraw()
    }, u.prototype.init = function(e, o) {
        var i = this;
        i.events(), i.wcpEditorSettings = o, s = t.extend(!0, {}, m), t.wcpEditorWebsiteSettings ? t.wcpTourIsFinished("Image Map Pro Editor Tour") ? (s = t.wcpEditorWebsiteSettings(), i.launch()) : (g = s, s = h, t.wcpEditorInit(this.wcpEditorSettings), r.shapesFormSpotIndex = -1, r.parseSettings(), r.redraw(), t("#wcp-editor-main-buttons").addClass("wcp-expanded"), t.wcpTourStart("Image Map Pro Editor Tour"), t.wcpTourEventFinished = function(e) {
            "Image Map Pro Editor Tour" == e && (s = t.wcpEditorWebsiteSettings(), i.launch())
        }) : (t.wcpEditorInit(this.wcpEditorSettings), e ? (s = e, i.launch()) : t.imp_editor_storage_get_last_save(function(e) {
            e ? t.wcpTourIsFinished("Whats New 5.0") ? (t.wcpEditorPresentLoadingScreen("Loading Image Map..."), t.imp_editor_storage_get_save(parseInt(e, 10), function(e) {
                e ? (s = e, r.launch()) : (t.wcpEditorHideLoadingScreenWithMessage("Error loading image map.", !0, !1), (s = t.extend(!0, {}, m)).general.name = "Untitled", s.id = Math.round(1e4 * Math.random()) + 1, i.launch())
            })) : (t.wcpTourStart("Whats New 5.0"), t.wcpTourEventFinished = function(o) {
                "Whats New 5.0" == o && (t.wcpEditorPresentLoadingScreen("Loading Image Map..."), t.imp_editor_storage_get_save(parseInt(e, 10), function(e) {
                    e ? (s = e, r.launch()) : (t.wcpEditorHideLoadingScreenWithMessage("Error loading image map.", !0, !1), (s = t.extend(!0, {}, m)).general.name = "Untitled", s.id = Math.round(1e4 * Math.random()) + 1, i.launch())
                }))
            }) : t.imp_editor_storage_get_saves_list(function(e) {
                e.length > 0 ? t.wcpTourIsFinished("Whats New 5.0") ? ((s = t.extend(!0, {}, m)).general.name = "Untitled", s.id = Math.round(1e4 * Math.random()) + 1, i.launch(), t.wcpEditorPresentLoadModal()) : (t.wcpTourStart("Whats New 5.0"), t.wcpTourEventFinished = function(e) {
                    "Whats New 5.0" == e && ((s = t.extend(!0, {}, m)).general.name = "Untitled", s.id = Math.round(1e4 * Math.random()) + 1, i.launch(), t.wcpEditorPresentLoadModal())
                }) : t.wcpTourIsFinished("Image Map Pro Editor Tour") ? (t.wcpTourDisable("Whats New 5.0"), (s = t.extend(!0, {}, m)).general.name = "Untitled", s.id = Math.round(1e4 * Math.random()) + 1, i.launch()) : (g = s, s = h, r.shapesFormSpotIndex = -1, r.parseSettings(), r.redraw(), t("#wcp-editor-main-buttons").addClass("wcp-expanded"), t.wcpTourStart("Image Map Pro Editor Tour"), t.wcpTourEventFinished = function(e) {
                    "Image Map Pro Editor Tour" == e && ((s = t.extend(!0, {}, m)).general.name = "Untitled", s.id = Math.round(1e4 * Math.random()) + 1, i.launch())
                })
            })
        }))
    }, u.prototype.launch = function() {
        var e = this;
        t.wcpEditorInit(this.wcpEditorSettings), t("#wcp-editor-canvas").attr("data-editor-object-type", "0"), this.selectedSpot = i, this.eventSpot = i, this.shapesFormSpotIndex = i, this.parseSettings(), s.image.url && s.image.url.length > 0 || x(s.layers.enable_layers) && s.layers.layers_list.length > 0 ? (x(s.layers.enable_layers) && s.layers.layers_list.length > 0 ? this.canvasImage.src = s.layers.layers_list[0].image_url : this.canvasImage.src = s.image.url, w(this.canvasImage, function() {
            t.wcpEditorPresentLoadingScreen("Loading Image...")
        }, function() {
            e.canvas_events(), s.general.naturalWidth = e.canvasImage.naturalWidth, s.general.naturalHeight = e.canvasImage.naturalHeight, s.editor.state = {
                dragging: !1,
                canvasX: 0,
                canvasY: 0,
                canvasZoom: 1
            }, e.redraw(), e.selectSpot(s.editor.selected_shape), t.wcpEditorHideLoadingScreen()
        }, function() {
            t.wcpEditorHideLoadingScreenWithMessage("Error Loading Image!", !0, !1)
        })) : (e.canvas_events(), s.editor.state = {
            dragging: !1,
            canvasX: 0,
            canvasY: 0,
            canvasZoom: 1
        }, e.redraw(), e.selectSpot(s.editor.selected_shape), t.wcpEditorHideLoadingScreen()), this.actionIndex = -1, this.actionStack = new Array, this.addAction(), this.canvas = t("#wcp-editor-canvas"), t.wcpEditorSelectTool(s.editor.tool), this.updateImageMapForm(), t.wcpEditorModifyForPublish && t.wcpEditorModifyForPublish()
    }, u.prototype.parseSettings = function() {
        for (var e = 0; e < s.spots.length; e++) {
            if (s.spots[e] = t.extend(!0, {}, _, s.spots[e]), -1 != s.spots[e].x_image_background && -1 != s.spots[e].y_image_background || (s.spots[e].x_image_background = s.spots[e].x, s.spots[e].y_image_background = s.spots[e].y, s.spots[e].width_image_background = s.spots[e].width, s.spots[e].height_image_background = s.spots[e].height), "poly" == s.spots[e].type && (s.spots[e].default_style.fill && (s.spots[e].default_style.background_color = s.spots[e].default_style.fill, s.spots[e].default_style.fill = i), s.spots[e].default_style.fill_opacity && (s.spots[e].default_style.background_opacity = s.spots[e].default_style.fill_opacity, s.spots[e].default_style.fill_opacity = i)), s.spots[e].tooltip_content.title || s.spots[e].tooltip_content.text) {
                var o = "";
                s.spots[e].tooltip_content.title && (o += "<h3>" + s.spots[e].tooltip_content.title + "</h3>"), s.spots[e].tooltip_content.text && (o += "<p>" + s.spots[e].tooltip_content.text + "</p>"), s.spots[e].tooltip_content.plain_text = o, s.spots[e].tooltip_content = {
                    content_type: s.spots[e].tooltip_content.content_type,
                    plain_text: s.spots[e].tooltip_content.plain_text,
                    plain_text_color: s.spots[e].tooltip_content.plain_text_color,
                    squares_json: s.spots[e].tooltip_content.squares_json
                }
            }
            if (s.spots[e].tooltip_content.squares_json) try {
                s.spots[e].tooltip_content.squares_settings = JSON.parse(s.spots[e].tooltip_content.squares_json), s.spots[e].tooltip_content.squares_json = ""
            } catch (t) {}
            s.spots[e].title || (s.spots[e].title = s.spots[e].id), "show-tooltip" == s.spots[e].actions.click && (s.spots[e].actions.click = "no-action"), "[object Array]" !== Object.prototype.toString.call(s.spots[e].points) && (s.spots[e].points = []), "[object Array]" !== Object.prototype.toString.call(s.spots[e].vs) && (s.spots[e].vs = [])
        }
        for (e = 0; e < s.spots.length; e++) {
            if ((n = s.spots[e]).tooltip_content && n.tooltip_content.title && (n.title = n.tooltip_content.title, n.tooltip_content.title = i), n.tooltip_style && n.tooltip_style.enable_tooltip && (n.tooltip.enable_tooltip = n.tooltip_style.enable_tooltip, n.tooltip_style.enable_tooltip = i), n.tooltip_content.plain_text && "content-builder" != n.tooltip_content.content_type) {
                var r = {
                    containers: [{
                        id: "sq-container-160121",
                        settings: {
                            elements: [{
                                settings: {
                                    name: "Paragraph",
                                    iconClass: "fa fa-paragraph"
                                },
                                options: {
                                    text: {
                                        text: n.tooltip_content.plain_text
                                    },
                                    font: {
                                        text_color: n.tooltip_content.plain_text_color
                                    }
                                }
                            }]
                        }
                    }]
                };
                n.tooltip_content.squares_settings = r, n.tooltip_content.content_type = i, n.tooltip_content.plain_text = i, n.tooltip_content.plain_text_color = i
            }
            n.default_style && n.default_style.fill && (n.default_style.background_color = n.default_style.fill, delete n.default_style.fill), n.default_style && n.default_style.fill_opacity && (n.default_style.background_opacity = n.default_style.fill_opacity, delete n.default_style.fill_opacity), n.mouseover_style && n.mouseover_style.fill && (n.mouseover_style.background_color = n.mouseover_style.fill, delete n.mouseover_style.fill), n.mouseover_style && n.mouseover_style.fill_opacity && (n.mouseover_style.background_opacity = n.mouseover_style.fill_opacity, delete n.mouseover_style.fill_opacity)
        }
        s.shapes || (s.shapes = t.imageMapProDefaultSettings.shapes, s.general && s.general.pageload_animation && (s.shapes.pageload_animation = s.general.pageload_animation, s.general.pageload_animation = i));
        var a = [];
        for (e = 0; e < s.spots.length; e++) {
            var n;
            if ((n = s.spots[e]).x = parseFloat(n.x), n.y = parseFloat(n.y), n.width && (n.width = parseFloat(n.width)), n.height && (n.height = parseFloat(n.height)), "poly" == n.type) {
                if (n.points.length < 3) continue;
                if (n.points)
                    for (var l = 0; l < n.points.length; l++) n.points[l].x = parseFloat(n.points[l].x), n.points[l].y = parseFloat(n.points[l].y);
                if (n.vs)
                    for (l = 0; l < n.vs.length; l++)
                        for (var p = 0; p < n.vs[l].length; p++) n.vs[l][0] = parseFloat(n.vs[l][0]), n.vs[l][1] = parseFloat(n.vs[l][1])
            }
            a.push(n)
        }
        s.spots = a, s.general = t.extend(!0, {}, m.general, s.general), s.image = t.extend(!0, {}, m.image, s.image), s.shapes = t.extend(!0, {}, m.shapes, s.shapes), s.tooltips = t.extend(!0, {}, m.tooltips, s.tooltips), s.fullscreen = t.extend(!0, {}, m.fullscreen, s.fullscreen), s.zooming = t.extend(!0, {}, m.zooming, s.zooming), s.editor = t.extend(!0, {}, m.editor, s.editor), s.custom_code = t.extend(!0, {}, m.custom_code, s.custom_code), s.layers = t.extend(!0, {}, m.layers, s.layers), s.shapes_menu = t.extend(!0, {}, m.shapes_menu, s.shapes_menu), s.general.width = parseInt(s.general.width), s.general.height = parseInt(s.general.height), s.general.image_url && (s.image.url = s.general.image_url, s.general.image_url = i), s.general.sticky_tooltips && (s.tooltips.sticky_tooltips = s.general.sticky_tooltips, s.general.sticky_tooltips = i), s.general.constrain_tooltips && (s.tooltips.constrain_tooltips = s.general.constrain_tooltips, s.general.constrain_tooltips = i), s.general.fullscreen_tooltips && (s.tooltips.fullscreen_tooltips = s.general.fullscreen_tooltips, s.general.fullscreen_tooltips = i), s.general.tooltip_animation && (s.tooltips.tooltip_animation = s.general.tooltip_animation, s.general.tooltip_animation = i);
        for (e = 0; e < s.spots.length; e++) s.spots[e].tooltip_content.squares_settings || (s.spots[e].tooltip_content.squares_settings = t.extend(!0, {}, _.tooltip_content.squares_settings));
        s.general.imageurl && (s.image.url = s.general.imageurl), s.general.name = s.general.name.trim(), s.general.shortcode = s.general.shortcode.trim()
    }, u.prototype.redraw = function() {
        if (x(s.editor.previewMode)) {
            o = this.getCanvasDefaultSize();
            "" != s.image.url ? t("#wcp-editor-canvas").css({
                width: "auto",
                height: "auto",
                "max-width": o.w,
                "max-height": o.h
            }) : t("#wcp-editor-canvas").css({
                width: "100%",
                height: "auto",
                "max-width": o.w,
                "max-height": o.h
            });
            var e = t.extend(!0, {}, s);
            e.fullscreen.start_in_fullscreen_mode = 0, e.shapes_menu.detached_menu = 0, t("#wcp-editor-canvas").imageMapPro(e), 1 != this.zoom && this.zoomReset(), t.wcpEditorSetPreviewModeOn()
        } else {
            var o = this.getCanvasDefaultSize();
            this.canvasWidth = o.w * this.zoom, this.canvasHeight = o.h * this.zoom, t("#wcp-editor-canvas").css({
                width: this.canvasWidth,
                height: this.canvasHeight,
                "max-width": "none",
                "max-height": "none"
            }), t("#wcp-editor-canvas").html(t.image_map_pro_editor_content()), t("#imp-editor-image").css({
                width: this.canvasWidth,
                height: this.canvasHeight
            }), t.wcpEditorSetPreviewModeOff()
        }
        this.redrawSpotSelection(), this.redrawSelectedSpotTooltip(), this.updateShapesForm(), this.updateShapesFormState(), this.updateShapesList(), this.updateImageMapFormState(), this.drawingPoly && this.redrawTempPoly()
    }, u.prototype.redrawCanvas = function() {
        this.canvas.css({
            transform: "translate(" + this.canvasX + "px, " + this.canvasY + "px)"
        })
    }, u.prototype.getCanvasDefaultSize = function() {
        var e = {
                w: 0,
                h: 0
            },
            o = t("#wcp-editor-center").width() - 80,
            i = t("#wcp-editor-center").height() - 80,
            r = 0,
            a = 0;
        if (x(s.layers.enable_layers)) {
            for (var n = 0; n < s.layers.layers_list.length; n++)
                if (parseInt(s.layers.layers_list[n].id, 10) == parseInt(s.editor.currentLayer, 10)) {
                    r = s.layers.layers_list[n].image_width, a = s.layers.layers_list[n].image_height;
                    break
                }
        } else r = s.general.width, a = s.general.height;
        if (r > o || a > i) {
            var l = r / a;
            l <= o / i ? (e.w = i * l, e.h = t("#wcp-editor-center").height() - 80) : (e.w = t("#wcp-editor-center").width() - 80, e.h = o / l)
        } else e.w = r, e.h = a;
        return e
    }, u.prototype.redrawSpotSelection = function() {
        var e = this;
        if (t(".imp-editor-shape").removeClass("selected"), t("#imp-editor-shape-tooltip").removeClass("selected"), -1 != s.editor.selected_shape) {
            var o = e.getIndexOfSpotWithId(s.editor.selected_shape);
            if (o == i) return void(s.editor.selected_shape = -1);
            if (this.tooltipTransformMode) return t("#imp-editor-shape-tooltip").addClass("selected"), void t("#wcp-editor-tooltip").remove();
            t('.imp-editor-shape[data-id="' + s.editor.selected_shape + '"]').addClass("selected"), e.selectedSpot = s.spots[o], "poly" == e.selectedSpot.type && (e.tempControlPoint = t('.imp-editor-poly[data-id="' + s.editor.selected_shape + '"]').find(".imp-editor-poly-svg-temp-control-point"), e.tempControlPointLine = t('.imp-editor-poly[data-id="' + s.editor.selected_shape + '"]').find(".imp-editor-poly-svg-temp-control-point-line"))
        } else e.selectedSpot = i
    }, u.prototype.redrawSelectedSpotTooltip = function() {
        if (this.selectedSpot && "text" != this.selectedSpot.type) {
            var e = t("#imp-editor-shape-tooltip");
            if (0 == e.length) return;
            var o = 0,
                i = 0,
                r = this.selectedSpot,
                s = e[0].getBoundingClientRect().width / this.canvasWidth * 100,
                a = e[0].getBoundingClientRect().height / this.canvasHeight * 100,
                n = 20 / this.canvasWidth * 100,
                l = 20 / this.canvasHeight * 100,
                p = r.width,
                d = r.height,
                c = r.x,
                h = r.y;
            "spot" == r.type && (p = r.width / this.canvasWidth * 100, d = r.height / this.canvasHeight * 100, c = r.x - p / 2, h = r.y - d / 2, x(r.default_style.icon_is_pin) && x(r.default_style.use_icon) && (h -= d / 2)), "top" == r.tooltip_style.position && (o = c + p / 2 - s / 2, i = h - a - l), "bottom" == r.tooltip_style.position && (o = c + p / 2 - s / 2, i = h + d + l), "left" == r.tooltip_style.position && (o = c - s - n, i = h + d / 2 - a / 2), "right" == r.tooltip_style.position && (o = c + p + n, i = h + d / 2 - a / 2), o += r.tooltip_style.offset_x, i += r.tooltip_style.offset_y, e.css({
                left: o + "%",
                top: i + "%",
                width: s + "%"
            })
        }
    }, u.prototype.events = function() {
        var e = this;
        t(o).off("squares_image_loaded"), t(o).on("squares_image_loaded", function() {
            e.redrawSelectedSpotTooltip()
        }), t(o).off("button-choose-icon-clicked"), t(o).on("button-choose-icon-clicked", function() {
            t.wcpEditorPresentModal({
                name: "modal-choose-icon",
                title: "Choose Icon",
                buttons: [{
                    name: "cancel",
                    title: "Cancel",
                    class: "default",
                    id: "imp-editor-button-cancel-choose-icon"
                }],
                body: e.iconsHTML
            })
        }), t(o).off("button-copy-from-default-styles-clicked"), t(o).on("button-copy-from-default-styles-clicked", function() {
            e.selectedSpot.mouseover_style.opacity = e.selectedSpot.default_style.opacity, e.selectedSpot.mouseover_style.background_image_url = e.selectedSpot.default_style.background_image_url, e.selectedSpot.mouseover_style.background_image_opacity = e.selectedSpot.default_style.background_image_opacity, e.selectedSpot.mouseover_style.background_image_scale = e.selectedSpot.default_style.background_image_scale, e.selectedSpot.mouseover_style.background_image_offset_x = e.selectedSpot.default_style.background_image_offset_x, e.selectedSpot.mouseover_style.background_image_offset_y = e.selectedSpot.default_style.background_image_offset_y, e.selectedSpot.mouseover_style.background_color = e.selectedSpot.default_style.background_color, e.selectedSpot.mouseover_style.background_opacity = e.selectedSpot.default_style.background_opacity, e.selectedSpot.mouseover_style.icon_fill = e.selectedSpot.default_style.icon_fill, e.selectedSpot.mouseover_style.border_radius = e.selectedSpot.default_style.border_radius, e.selectedSpot.mouseover_style.border_width = e.selectedSpot.default_style.border_width, e.selectedSpot.mouseover_style.border_style = e.selectedSpot.default_style.border_style, e.selectedSpot.mouseover_style.border_color = e.selectedSpot.default_style.border_color, e.selectedSpot.mouseover_style.border_opacity = e.selectedSpot.default_style.border_opacity, e.selectedSpot.mouseover_style.stroke_color = e.selectedSpot.default_style.stroke_color, e.selectedSpot.mouseover_style.stroke_opacity = e.selectedSpot.default_style.stroke_opacity, e.selectedSpot.mouseover_style.stroke_width = e.selectedSpot.default_style.stroke_width, e.selectedSpot.mouseover_style.stroke_dasharray = e.selectedSpot.default_style.stroke_dasharray, e.selectedSpot.mouseover_style.stroke_linecap = e.selectedSpot.default_style.stroke_linecap, e.redraw(), e.addAction()
        }), t(o).off("button-reset-size-clicked"), t(o).on("button-reset-size-clicked", function() {
            "" != s.image.url ? (s.general.width = e.canvasImage.naturalWidth, s.general.height = e.canvasImage.naturalHeight) : (s.general.width = m.general.naturalWidth, s.general.height = m.general.naturalHeight, s.general.naturalWidth = m.general.naturalWidth, s.general.naturalHeight = m.general.naturalHeight), e.updateImageMapForm(), e.redraw()
        }), t(o).off("button-launch-content-builder-clicked"), t(o).on("button-launch-content-builder-clicked", function() {
            e.launchTooltipContentBuilder()
        }), t(o).off("click", ".fontawesome-icon-wrap"), t(o).on("click", ".fontawesome-icon-wrap", function() {
            t.wcpEditorCloseModal(), e.selectedSpot.default_style.icon_fontawesome_id = t(this).data("fontawesome-id"), e.redraw(), e.addAction()
        }), t(o).off("click", ".category-title-wrap"), t(o).on("click", ".category-title-wrap", function() {
            t(this).toggleClass("active"), t(this).next().toggle()
        }), t(o).off("click", "#imp-editor-done-editing-tooltip, #imp-editor-tooltip-content-builder-close"), t(o).on("click", "#imp-editor-done-editing-tooltip, #imp-editor-tooltip-content-builder-close", function() {
            t("#imp-editor-tooltip-content-builder-wrap").removeClass("imp-visible"), setTimeout(function() {
                t("#imp-editor-tooltip-content-builder-wrap").hide()
            }, 250), e.doneEditingTooltip(), t.squaresHideEditorWindow()
        }), t(o).on("mouseout", "#wcp-editor-right", function(e) {
            if (x(s.editor.previewMode))
                for (var o = 0; o < s.spots.length; o++) t.imageMapProUnhighlightShape(s.general.name, s.spots[o].title)
        }), t(o).off("click", "#wcp-editor-control-import-type .wcp-editor-control-button-group-button"), t(o).on("click", "#wcp-editor-control-import-type .wcp-editor-control-button-group-button", function() {
            t(this).addClass("active").siblings().removeClass("active"), t("#wcp-editor-control-import-type").data("value", t(this).data("button-value")), "svg-xml-code" == t("#wcp-editor-control-import-type").data("value") ? t("#wcp-editor-import-info").show() : t("#wcp-editor-import-info").hide()
        }), t(o).off("event-layers-list-add"), t(o).on("event-layers-list-add", function() {
            t.wcpEditorPresentModal({
                name: "modal-add-layer",
                title: "Add Layer",
                buttons: [{
                    name: "cancel",
                    title: "Cancel",
                    class: "default",
                    id: "imp-editor-button-cancel-add-layer"
                }, {
                    name: "primary",
                    title: "Create",
                    class: "primary",
                    id: "imp-editor-button-create-layer"
                }],
                body: t.wcpFormGenerateHTMLForForm("New/Edit Layer")
            }), t.wcpFormSetControlValue("New/Edit Layer", "name", "Untitled"), t.wcpFormSetControlValue("New/Edit Layer", "url", ""), t.wcpFormUpdateForm("New/Edit Layer")
        }), t(o).off("event-layers-list-remove"), t(o).on("event-layers-list-remove", function(e, o) {
            p = o;
            var i = "";
            i += "Are you sure you want to permanently delete this floor and all shapes in it?", t.wcpEditorPresentModal({
                name: "modal-confirm-delete-floor",
                title: "Delete Floor",
                buttons: [{
                    name: "cancel",
                    title: "Cancel",
                    class: "default",
                    id: "imp-editor-button-cancel-delete-floor"
                }, {
                    name: "primary",
                    title: "Delete",
                    class: "danger",
                    id: "imp-editor-button-delete-floor"
                }],
                body: i
            })
        }), t(o).off("event-layers-list-duplicate"), t(o).on("event-layers-list-duplicate", function(o, i) {
            for (var r = 0; r < s.layers.layers_list.length; r++) {
                var a = e.createIdForLayer();
                if (s.layers.layers_list[r].id == i) {
                    var n = {
                        id: a,
                        image_height: s.layers.layers_list[r].image_height,
                        image_width: s.layers.layers_list[r].image_width,
                        image_url: s.layers.layers_list[r].image_url,
                        title: s.layers.layers_list[r].title + " Copy"
                    };
                    s.layers.layers_list.splice(r + 1, 0, n);
                    break
                }
            }
            var l = s.spots.length;
            for (r = 0; r < l; r++) {
                var p = s.spots[r];
                if (p.layerID == i) {
                    var d = t.extend(!0, {}, p);
                    d.layerID = a, "spot" == d.type && (d.id = e.createIdForSpot()), "rect" == d.type && (d.id = e.createIdForRect()), "oval" == d.type && (d.id = e.createIdForOval()), "poly" == d.type && (d.id = e.createIdForPoly()), "text" == d.type && (d.id = e.createIdForText()), s.spots.push(d)
                }
            }
            e.updateImageMapForm(), e.redraw()
        }), t(o).off("event-layers-list-up"), t(o).on("event-layers-list-up", function() {}), t(o).off("event-layers-list-down"), t(o).on("event-layers-list-down", function() {}), t(o).off("event-layers-list-edit"), t(o).on("event-layers-list-edit", function(e, o) {
            d = o, t.wcpEditorPresentModal({
                name: "modal-edit-layer",
                title: "Edit Layer",
                buttons: [{
                    name: "cancel",
                    title: "Cancel",
                    class: "default",
                    id: "imp-editor-button-cancel-add-layer"
                }, {
                    name: "primary",
                    title: "Done",
                    class: "primary",
                    id: "imp-editor-button-edit-layer-done"
                }],
                body: t.wcpFormGenerateHTMLForForm("New/Edit Layer")
            });
            var i = t('[data-wcp-form-layers-list-control-option-id="' + o + '"]');
            t.wcpFormSetControlValue("New/Edit Layer", "name", i.data("wcp-form-layers-list-control-option-title")), t.wcpFormSetControlValue("New/Edit Layer", "url", i.data("wcp-form-layers-list-control-option-image-url")), t.wcpFormUpdateForm("New/Edit Layer")
        }), t(o).off("change", "#select-canvas-layer"), t(o).on("change", "#select-canvas-layer", function() {
            s.editor.currentLayer = t("#select-canvas-layer").val(), e.updateShapesList(), e.deselectSpot(), e.redraw()
        }), t(o).off("button-reset-tooltip-position-clicked"), t(o).on("button-reset-tooltip-position-clicked", function() {
            e.selectedSpot && (e.selectedSpot.tooltip_style.offset_x = t.imageMapProDefaultSpotSettings.tooltip_style.offset_x, e.selectedSpot.tooltip_style.offset_y = t.imageMapProDefaultSpotSettings.tooltip_style.offset_y, e.selectedSpot.tooltip_style.position = t.imageMapProDefaultSpotSettings.tooltip_style.position), e.addAction(), e.redraw()
        }), t(o).off("button-reset-tooltip-size-clicked"), t(o).on("button-reset-tooltip-size-clicked", function() {
            e.selectedSpot && (e.selectedSpot.tooltip_style.width = t.imageMapProDefaultSpotSettings.tooltip_style.width), e.addAction(), e.redraw()
        }), t(o).off("button-edit-tooltip-style-clicked"), t(o).on("button-edit-tooltip-style-clicked", function() {
            if (1 == s.editor.transform_tooltip_mode && (s.editor.transform_tooltip_mode = 0, e.tooltipTransformMode = !1, e.redraw()), t.wcpEditorIsFloatingWindowOpen()) return t.wcpEditorCloseFloatingWindow(), void e.redraw();
            var o = t('[data-editor-object-type="10"]').parent(),
                i = o.offset().left,
                r = o.offset().top,
                a = o.width(),
                n = t.wcpFormGenerateHTMLForForm("Tooltip Style"),
                l = {
                    x: Math.round(i + a + 10),
                    y: Math.round(r),
                    padding: !0,
                    title: "Tooltip Style",
                    width: 300,
                    content: n
                };
            t.wcpEditorCreateFloatingWindow(l), e.updateShapesForm(), e.redraw()
        }), t(o).off("button-edit-tooltip-position-clicked"), t(o).on("button-edit-tooltip-position-clicked", function() {
            t.wcpEditorIsFloatingWindowOpen() && t.wcpEditorCloseFloatingWindow(), 1 == s.editor.transform_tooltip_mode ? (s.editor.transform_tooltip_mode = 0, e.tooltipTransformMode = !1, e.redraw()) : (s.editor.transform_tooltip_mode = 1, e.tooltipTransformMode = !0, e.transformingTooltipStartingWidth = t("#imp-editor-shape-tooltip").outerWidth(), e.redraw())
        }), t(o).off("button-edit-tooltip-content-clicked"), t(o).on("button-edit-tooltip-content-clicked", function() {
            if (1 == s.editor.transform_tooltip_mode && (s.editor.transform_tooltip_mode = 0, e.tooltipTransformMode = !1, e.redraw()), t.wcpEditorIsFloatingWindowOpen()) return t.wcpEditorCloseFloatingWindow(), void e.redraw();
            var o = t('[data-editor-object-type="10"]').parent(),
                i = o.offset().left,
                r = o.offset().top,
                a = o.width();
            t.squaresInitWithSettings(t("#imp-editor-shape-tooltip-content-wrap"), e.selectedSpot.tooltip_content.squares_settings);
            var n = t.squaresGetEditorWindowContents(),
                l = {
                    x: Math.round(i + a + 10),
                    y: Math.round(r),
                    padding: !1,
                    title: "Tooltip Content",
                    content: n,
                    width: 394
                };
            t.wcpEditorCreateFloatingWindow(l)
        })
    }, u.prototype.canvas_events = function() {
        var i = this;
        t(e).off("resize.imp-redraw"), t(e).on("resize.imp-redraw", function() {
            i.redraw()
        }), t(o).off("mousedown", "#wcp-editor-center"), t(o).on("mousedown", "#wcp-editor-center", function(t) {
            i.handleMouseDown(t)
        }), t(o).off("mousemove", "#wcp-editor"), t(o).on("mousemove", "#wcp-editor", function(t) {
            i.handleMouseMove(t)
        }), t(o).off("mouseup", "#wcp-editor"), t(o).on("mouseup", "#wcp-editor", function(t) {
            i.handleMouseUp(t)
        }), t("body").on("contextmenu", function(t) {
            if (i.didDeleteControlPoint) return i.didDeleteControlPoint = !1, !1
        }), t(o).off("keydown.canvasEvents"), t(o).on("keydown.canvasEvents", function(t) {
            return i.handleKeyDown(t)
        }), t(o).off("keyup.canvasEvents"), t(o).on("keyup.canvasEvents", function(t) {
            return i.handleKeyUp(t)
        })
    }, u.prototype.addAction = function() {
        var e = this;
        e.actionIndex < e.actionStack.length - 1 && e.actionStack.splice(e.actionIndex + 1, e.actionStack.length), e.actionStack.push(t.extend(!0, {}, s)), e.actionIndex++, e.actionStack.length > 100 && (e.actionStack.splice(0, 1), e.actionIndex--), t("#button-save").html('<span class="glyphicon glyphicon-hdd"></span> Save')
    }, u.prototype.undo = function() {
        var e = this;
        e.actionIndex > 0 && e.actionIndex--, s = t.extend(!0, {}, e.actionStack[e.actionIndex]), e.redraw(), e.updateImageMapForm(), e.updateImageMapFormState(), e.updateShapesForm(), e.updateShapesFormState()
    }, u.prototype.redo = function() {
        var e = this;
        e.actionIndex < e.actionStack.length - 1 && e.actionIndex++, s = t.extend(!0, {}, e.actionStack[e.actionIndex]), e.redraw(), e.updateImageMapForm(), e.updateImageMapFormState(), e.updateShapesForm(), e.updateShapesFormState()
    }, u.prototype.handleMouseDown = function(e) {
        var o = this;
        if ("wcp-editor-toolbar" != t(e.target).attr("id") && 1 != t(e.target).closest("#wcp-editor-toolbar").length && "wcp-editor-extra-main-buttons" != t(e.target).attr("id") && 1 != t(e.target).closest("#wcp-editor-extra-main-buttons").length && !(t(e.target).closest("#wcp-editor-floating-window").length > 0 || "wcp-editor-floating-window" == t(e.target).attr("id") || "imp-poly-tooltip-close-button" == t(e.target).attr("id") || x(s.editor.previewMode) || t("body").hasClass("modal-open"))) {
            var i = S(e.pageX, e.pageY, o.canvas);
            o.ix = i.x, o.iy = i.y, o.ixss = e.pageX, o.iyss = e.pageY;
            var r = !1;
            i.x > 0 && i.x < o.canvasWidth * o.zoom && i.y > 0 && i.y < o.canvasHeight * o.zoom && (r = !0);
            var a = t(e.target).data("editor-object-type") || t(e.target).closest("[data-editor-object-type]").data("editor-object-type");
            if ((o.spaceKeyDown || s.editor.tool == c) && r) return o.draggingCanvas = !0, o.canvasInitialX = o.canvasX, void(o.canvasInitialY = o.canvasY);
            if ("zoom-in" == s.editor.tool && "wcp-editor-center" != t(e.target).attr("id")) return o.zoomIn(e), void(this.shouldDeselectShape = !0);
            if ("zoom-out" == s.editor.tool && "wcp-editor-center" != t(e.target).attr("id")) return o.zoomOut(e), void(this.shouldDeselectShape = !0);
            if (o.drawingPoly) return t(e.target).is("circle") && 0 == t(e.target).data("index") ? (o.drawingPoly = !1, void(o.finishedDrawingPoly = !0)) : (o.placePointForTempPoly(o.ix, o.iy), o.redrawTempPoly(), void(o.mouseDownWhileDrawingPoly = !0));
            if (s.editor.tool == c && "wcp-editor-center" != t(e.target).attr("id")) return o.startedDraggingCanvas = !0, void(this.shouldDeselectShape = !0);
            if (7 == a) return t(e.target).addClass("active"), o.translatedPointIndex = t(e.target).data("index"), 2 == e.button ? (o.selectedSpot.points.splice(o.translatedPointIndex, 1), o.updateBoundingBoxForPolygonSpot(o.selectedSpot), o.redraw(), o.addAction(), void(o.didDeleteControlPoint = !0)) : (o.translatingControlPoint = !0, o.translatedPointX = o.selectedSpot.points[o.translatedPointIndex].x, o.translatedPointY = o.selectedSpot.points[o.translatedPointIndex].y, o.translatedPoint = t(e.target), void(o.redrawPolygonEl = t(e.target).closest(".imp-editor-shape").find(".imp-editor-poly-svg polygon")));
            if (6 == a) return o.selectedSpot.points.splice(o.tempControlPointIndex + 1, 0, {
                x: o.controlPointInsertionPointX,
                y: o.controlPointInsertionPointY
            }), o.redraw(), (i = t('.imp-editor-shape[data-id="' + o.selectedSpot.id + '"]').find('.imp-poly-control-point[data-index="' + (o.tempControlPointIndex + 1) + '"]')).addClass("active"), o.translatedPointIndex = i.data("index"), o.translatingControlPoint = !0, o.translatedPointX = o.selectedSpot.points[o.translatedPointIndex].x, o.translatedPointY = o.selectedSpot.points[o.translatedPointIndex].y, o.translatedPoint = i, void(o.redrawPolygonEl = i.closest(".imp-editor-shape").find(".imp-editor-poly-svg polygon"));
            if (5 != a)
                if (9 != a) {
                    if (15 == a && (this.transformDirection = t(e.target).data("transform-direction"), this.startedTransformingTooltip = !0, this.didTransformTooltip = !1, this.redrawTooltip = t("#imp-editor-shape-tooltip")), 10 != a && 11 != a && 12 != a && 13 != a && 14 != a && !this.tooltipTransformMode) {
                        for (n = s.spots.length - 1; n >= 0; n--)
                            if ("poly" == s.spots[n].type && (!x(s.layers.enable_layers) || s.spots[n].layerID == s.editor.currentLayer) && o.shouldSelectPoly(s.spots[n].id)) return o.eventSpotId = s.spots[n].id, void(o.startedSelecting = !0);
                        if ((t(e.target).hasClass("imp-editor-shape") || t(e.target).closest(".imp-editor-shape").length > 0) && !t(e.target).hasClass("imp-editor-poly") && 0 == t(e.target).closest(".imp-editor-poly").length) return o.eventSpotId = t(e.target).data("id") || t(e.target).closest(".imp-editor-shape").data("id"), void(o.startedSelecting = !0);
                        if (r) {
                            if ("spot" == s.editor.tool) return void(o.startedDrawingSpot = !0);
                            if ("rect" == s.editor.tool) return void(o.startedDrawingRect = !0);
                            if ("oval" == s.editor.tool) return void(o.startedDrawingOval = !0);
                            if ("poly" == s.editor.tool) return o.startedDrawingPoly = !0, o.deselectSpot(), o.redraw(), o.polyPoints = new Array, t("#imp-editor-shapes-container").append('<svg id="temp-poly" width="' + o.canvasWidth + 'px" height="' + o.canvasHeight + 'px" viewBox="0 0 ' + o.canvasWidth + " " + o.canvasHeight + '" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>'), o.placePointForTempPoly(o.ix, o.iy), o.redrawTempPoly(), o.mouseDownWhileDrawingPoly = !0, void(o.drawingPoly = !0);
                            if ("text" == s.editor.tool) return void(o.startedDrawingText = !0)
                        }
                        "select" != s.editor.tool || 0 != a ? "wcp-editor-center" == t(e.target).attr("id") && this.selectedSpot && (this.shouldDeselectShape = !0) : this.shouldDeselectShape = !0
                    }
                } else this.tooltipTransformMode && (this.startedSelectingTooltip = !0);
            else if (o.startedTransforming = !0, o.transformDirection = t(e.target).data("transform-direction"), o.redrawEl = t(e.target).closest(".imp-editor-shape"), o.redrawElBgImage = t('.imp-editor-shape-background-image[data-id="' + o.selectedSpot.id + '"]'), "poly" == o.selectedSpot.type) {
                o.redrawSvgEl = o.redrawEl.find(".imp-editor-poly-svg"), o.redrawPolygonEl = o.redrawSvgEl.find("polygon"), o.polyPoints = new Array;
                for (var n = 0; n < o.selectedSpot.points.length; n++) o.polyPoints.push({
                    x: o.selectedSpot.points[n].x,
                    y: o.selectedSpot.points[n].y
                })
            }
        }
    }, u.prototype.handleMouseMove = function(e) {
        if (!x(s.editor.previewMode)) {
            var o = S(e.pageX, e.pageY, this.canvas);
            if (this.x = o.x, this.y = o.y, this.dx = (this.x - this.ix) / this.canvasWidth * 100, this.dy = (this.y - this.iy) / this.canvasHeight * 100, this.dx = Math.round(1e3 * this.dx) / 1e3, this.dy = Math.round(1e3 * this.dy) / 1e3, this.xss = e.pageX, this.yss = e.pageY, this.dxss = this.xss - this.ixss, this.dyss = this.yss - this.iyss, this.startedSelectingTooltip) {
                this.movingTooltip = !0, this.startedSelectingTooltip = !1, this.redrawTooltip = t("#imp-editor-shape-tooltip"), this.movingTooltipPosition = this.selectedSpot.tooltip_style.position;
                var i = y(this.selectedSpot.default_style.background_color);
                this.movingTooltipColorRGBA = "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + this.selectedSpot.tooltip_style.background_opacity + ")", this.movingTooltipArrow = this.redrawTooltip.find(".hs-arrow"), "spot" != this.selectedSpot.type ? (this.movingTooltipShapeCenterX = this.selectedSpot.x + this.selectedSpot.width / 2, this.movingTooltipShapeCenterY = this.selectedSpot.y + this.selectedSpot.height / 2, this.movingTooltipShapeCenterX = this.movingTooltipShapeCenterX / 100 * this.canvasWidth, this.movingTooltipShapeCenterY = this.movingTooltipShapeCenterY / 100 * this.canvasHeight) : (this.movingTooltipShapeCenterX = this.selectedSpot.x / 100 * this.canvasWidth + this.selectedSpot.width / 2, this.movingTooltipShapeCenterY = this.selectedSpot.y / 100 * this.canvasHeight + this.selectedSpot.height / 2), this.movingTooltipCenterX = this.redrawTooltip.position().left + this.redrawTooltip.outerWidth() / 2, this.movingTooltipCenterY = this.redrawTooltip.position().top + this.redrawTooltip.outerHeight() / 2
            }
            if (this.movingTooltip && this.redrawTooltip) {
                this.redrawTooltip.css({
                    transform: "translate(" + (this.x - this.ix) + "px," + (this.y - this.iy) + "px)"
                });
                var r = this.movingTooltipCenterX + (this.x - this.ix) - this.movingTooltipShapeCenterX,
                    a = this.movingTooltipCenterY + (this.y - this.iy) - this.movingTooltipShapeCenterY,
                    n = 180 * Math.atan2(a, r) / Math.PI;
                n > -135 && n < -45 && (this.movingTooltipPosition = "top", this.movingTooltipArrow.attr("class", "hs-arrow hs-arrow-bottom"), this.movingTooltipArrow.css("border-top-color", this.movingTooltipColorRGBA), this.movingTooltipArrow.css("border-bottom-color", ""), this.movingTooltipArrow.css("border-left-color", ""), this.movingTooltipArrow.css("border-right-color", "")), (n > 135 && n < 180 || n > -180 && n < -135) && (this.movingTooltipPosition = "left", this.movingTooltipArrow.attr("class", "hs-arrow hs-arrow-right"), this.movingTooltipArrow.css("border-top-color", ""), this.movingTooltipArrow.css("border-bottom-color", ""), this.movingTooltipArrow.css("border-left-color", this.movingTooltipColorRGBA), this.movingTooltipArrow.css("border-right-color", "")), n > -45 && n < 45 && (this.movingTooltipPosition = "right", this.movingTooltipArrow.attr("class", "hs-arrow hs-arrow-left"), this.movingTooltipArrow.css("border-top-color", ""), this.movingTooltipArrow.css("border-bottom-color", ""), this.movingTooltipArrow.css("border-left-color", ""), this.movingTooltipArrow.css("border-right-color", this.movingTooltipColorRGBA)), n > 45 && n < 135 && (this.movingTooltipPosition = "bottom", this.movingTooltipArrow.attr("class", "hs-arrow hs-arrow-top"), this.movingTooltipArrow.css("border-top-color", ""), this.movingTooltipArrow.css("border-bottom-color", this.movingTooltipColorRGBA), this.movingTooltipArrow.css("border-left-color", ""), this.movingTooltipArrow.css("border-right-color", ""))
            }
            if (this.draggingCanvas) {
                var l = this.canvasInitialX + this.dxss,
                    p = this.canvasInitialY + this.dyss;
                this.canvasX = this.canvasInitialX + this.dxss, this.canvasY = this.canvasInitialY + this.dyss, this.redrawCanvas()
            }
            if (this.startedSelecting && (this.redrawTooltip = t("#imp-editor-shape-tooltip"), this.selectedSpot && this.eventSpotId != this.selectedSpot.id && this.redrawTooltip.remove(), this.selectSpot(this.eventSpotId), this.redrawEl = t('.imp-editor-shape[data-id="' + this.eventSpotId + '"]'), this.redrawElBgImage = t('.imp-editor-shape-background-image[data-id="' + this.eventSpotId + '"]'), this.redrawSpotSelection(), this.startedMoving = !0, this.startedSelecting = !1), this.startedMoving) {
                var d = b(this.selectedSpot.x + this.dx, this.selectedSpot.y + this.dy);
                "rect" != this.selectedSpot.type && "oval" != this.selectedSpot.type && "poly" != this.selectedSpot.type || (d.x + this.selectedSpot.width > 100 && (d.x = 100 - this.selectedSpot.width), d.y + this.selectedSpot.height > 100 && (d.y = 100 - this.selectedSpot.height)), this.redrawEl.css({
                    left: d.x + "%",
                    top: d.y + "%"
                }), this.redrawElBgImage && this.redrawElBgImage.css({
                    left: d.x + "%",
                    top: d.y + "%"
                });
                var c = (d.x - this.selectedSpot.x) / 100 * this.canvasWidth,
                    h = (d.y - this.selectedSpot.y) / 100 * this.canvasHeight;
                this.redrawTooltip && this.redrawTooltip.css({
                    transform: "translate(" + c + "px," + h + "px)"
                })
            } else if (this.startedTransforming) {
                if (this.didTransform = !0, this.shiftKeyDown) {
                    var g = this.selectedSpot.width / this.selectedSpot.height;
                    1 != this.transformDirection && 5 != this.transformDirection || (this.dy = this.dx / g), 3 != this.transformDirection && 7 != this.transformDirection || (this.dy = -this.dx / g)
                }
                if (1 == this.transformDirection && (d = {
                        x: this.selectedSpot.x + this.dx,
                        y: this.selectedSpot.y + this.dy
                    }, C = {
                        x: this.selectedSpot.width - this.dx,
                        y: this.selectedSpot.height - this.dy
                    }), 2 == this.transformDirection && (d = {
                        x: this.selectedSpot.x,
                        y: this.selectedSpot.y + this.dy
                    }, C = {
                        x: this.selectedSpot.width,
                        y: this.selectedSpot.height - this.dy
                    }), 3 == this.transformDirection && (d = {
                        x: this.selectedSpot.x,
                        y: this.selectedSpot.y + this.dy
                    }, C = {
                        x: this.selectedSpot.width + this.dx,
                        y: this.selectedSpot.height - this.dy
                    }), 4 == this.transformDirection && (d = {
                        x: this.selectedSpot.x,
                        y: this.selectedSpot.y
                    }, C = {
                        x: this.selectedSpot.width + this.dx,
                        y: this.selectedSpot.height
                    }), 5 == this.transformDirection && (d = {
                        x: this.selectedSpot.x,
                        y: this.selectedSpot.y
                    }, C = {
                        x: this.selectedSpot.width + this.dx,
                        y: this.selectedSpot.height + this.dy
                    }), 6 == this.transformDirection && (d = {
                        x: this.selectedSpot.x,
                        y: this.selectedSpot.y
                    }, C = {
                        x: this.selectedSpot.width,
                        y: this.selectedSpot.height + this.dy
                    }), 7 == this.transformDirection && (d = {
                        x: this.selectedSpot.x + this.dx,
                        y: this.selectedSpot.y
                    }, C = {
                        x: this.selectedSpot.width - this.dx,
                        y: this.selectedSpot.height + this.dy
                    }), 8 == this.transformDirection && (d = {
                        x: this.selectedSpot.x + this.dx,
                        y: this.selectedSpot.y
                    }, C = {
                        x: this.selectedSpot.width - this.dx,
                        y: this.selectedSpot.height
                    }), d.x < 0 && (C.x = this.selectedSpot.x + this.selectedSpot.width, d.x = 0), d.y < 0 && (d.y = 0, C.y = this.selectedSpot.y + this.selectedSpot.height), C.x + d.x > 100 && (C.x = 100 - d.x), C.y + d.y > 100 && (C.y = 100 - d.y), d.x > this.selectedSpot.x + this.selectedSpot.width && (d.x = this.selectedSpot.x + this.selectedSpot.width), d.y > this.selectedSpot.y + this.selectedSpot.height && (d.y = this.selectedSpot.y + this.selectedSpot.height), C.x < 0 && (C.x = 0), C.y < 0 && (C.y = 0), this.transformX = d.x, this.transformY = d.y, this.transformWidth = C.x, this.transformHeight = C.y, this.redrawEl.css({
                        left: this.transformX + "%",
                        top: this.transformY + "%",
                        width: this.transformWidth + "%",
                        height: this.transformHeight + "%"
                    }), this.redrawElBgImage.css({
                        left: this.transformX + "%",
                        top: this.transformY + "%",
                        width: this.transformWidth + "%",
                        height: this.transformHeight + "%"
                    }), "poly" == this.selectedSpot.type) {
                    var m = s.general.width * (C.x / 100),
                        _ = s.general.height * (C.y / 100);
                    this.redrawSvgEl[0].setAttribute("viewBox", "0 0 " + m + " " + _);
                    for (var u = "", w = 0; w < this.selectedSpot.points.length; w++) {
                        var v = this.selectedSpot.points[w];
                        u += (l = this.selectedSpot.default_style.stroke_width + v.x / 100 * (m - 2 * this.selectedSpot.default_style.stroke_width)) + "," + (p = this.selectedSpot.default_style.stroke_width + v.y / 100 * (_ - 2 * this.selectedSpot.default_style.stroke_width)) + " "
                    }
                    this.redrawPolygonEl.attr("points", u)
                }
            } else {
                if (this.startedTransformingTooltip) {
                    this.didTransformTooltip = !0;
                    var C = this.ix - this.x;
                    "top" == this.selectedSpot.tooltip_style.position || "bottom" == this.selectedSpot.tooltip_style.position ? (4 == this.transformDirection && (this.transformingTooltipWidth = this.transformingTooltipStartingWidth - 2 * C), 8 == this.transformDirection && (this.transformingTooltipWidth = this.transformingTooltipStartingWidth + 2 * C)) : (4 == this.transformDirection && (this.transformingTooltipWidth = this.transformingTooltipStartingWidth - C), 8 == this.transformDirection && (this.transformingTooltipWidth = this.transformingTooltipStartingWidth + C));
                    var F = this.redrawTooltip,
                        k = (l = 0, p = 0, this.selectedSpot),
                        M = this.transformingTooltipWidth / this.canvasWidth * 100,
                        I = F.outerHeight() / this.canvasHeight * 100,
                        H = 20 / this.canvasWidth * 100,
                        T = 20 / this.canvasHeight * 100,
                        E = k.width,
                        P = k.height,
                        W = k.x,
                        D = k.y;
                    "spot" == k.type && (E = k.width / this.canvasWidth * 100, P = k.height / this.canvasHeight * 100, W = k.x - E / 2, D = k.y - P / 2, x(k.default_style.icon_is_pin) && (D -= P / 2)), "top" == k.tooltip_style.position && (l = W + E / 2 - M / 2, p = D - I - T), "bottom" == k.tooltip_style.position && (l = W + E / 2 - M / 2, p = D + P + T), "left" == k.tooltip_style.position && (l = W - M - H, p = D + P / 2 - I / 2), "right" == k.tooltip_style.position && (l = W + E + H, p = D + P / 2 - I / 2), l += k.tooltip_style.offset_x, p += k.tooltip_style.offset_y, this.redrawTooltip.css({
                        width: this.transformingTooltipWidth,
                        left: l + "%",
                        top: p + "%"
                    })
                }
                if (this.startedDrawingRect) {
                    o = S(e.pageX, e.pageY, this.canvas);
                    this.createdDrawingRect || (this.createdDrawingRect = !0, this.eventSpot = this.createRect(), this.eventSpot.x = this.x / this.canvasWidth * 100, this.eventSpot.y = this.y / this.canvasHeight * 100, this.eventSpot.x = Math.round(1e3 * this.eventSpot.x) / 1e3, this.eventSpot.y = Math.round(1e3 * this.eventSpot.y) / 1e3, this.redraw(), this.redrawEl = t('.imp-editor-shape[data-id="' + this.eventSpot.id + '"]'));
                    C = {
                        x: this.dx,
                        y: this.dy
                    };
                    if (this.eventSpot.x + C.x > 100 && (C.x = 100 - this.eventSpot.x), this.eventSpot.y + C.y > 100 && (C.y = 100 - this.eventSpot.y), this.drawRectWidth = C.x, this.drawRectHeight = C.y, this.shiftKeyDown) {
                        g = this.canvasWidth / this.canvasHeight;
                        this.drawRectHeight = this.drawRectWidth * g
                    }
                    this.redrawEl.css({
                        width: this.drawRectWidth + "%",
                        height: this.drawRectHeight + "%"
                    })
                } else if (this.startedDrawingOval) {
                    o = S(e.pageX, e.pageY, this.canvas);
                    this.createdDrawingOval || (this.createdDrawingOval = !0, this.eventSpot = this.createOval(), this.eventSpot.x = this.x / this.canvasWidth * 100, this.eventSpot.y = this.y / this.canvasHeight * 100, this.eventSpot.x = Math.round(1e3 * this.eventSpot.x) / 1e3, this.eventSpot.y = Math.round(1e3 * this.eventSpot.y) / 1e3, this.eventSpot.x_image_background = this.eventSpot.x, this.eventSpot.y_image_background = this.eventSpot.y, this.redraw(), this.redrawEl = t('.imp-editor-shape[data-id="' + this.eventSpot.id + '"]'));
                    C = {
                        x: this.dx,
                        y: this.dy
                    };
                    if (this.eventSpot.x + C.x > 100 && (C.x = 100 - this.eventSpot.x), this.eventSpot.y + C.y > 100 && (C.y = 100 - this.eventSpot.y), this.drawRectWidth = C.x, this.drawRectHeight = C.y, this.shiftKeyDown) {
                        g = this.canvasWidth / this.canvasHeight;
                        this.drawRectHeight = this.drawRectWidth * g
                    }
                    this.redrawEl.css({
                        width: this.drawRectWidth + "%",
                        height: this.drawRectHeight + "%"
                    })
                } else {
                    if (this.mouseDownWhileDrawingPoly) return this.polyPoints[this.polyPoints.length - 1].x = this.x / this.zoom, this.polyPoints[this.polyPoints.length - 1].y = this.y / this.zoom, void this.redrawTempPoly();
                    if (this.translatingControlPoint) {
                        if (!this.startedTranslatingControlPoint) {
                            this.startedTranslatingControlPoint = !0, t(e.target).closest(".imp-editor-shape").find(".imp-selection").hide(), t(e.target).closest(".imp-editor-shape").css({
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%"
                            }), t(e.target).closest(".imp-editor-shape").find(".imp-editor-poly-svg")[0].setAttribute("viewBox", "0 0 " + s.general.width + " " + s.general.height);
                            for (var z = 0; z < this.selectedSpot.points.length; z++) t('.imp-editor-shape[data-id="' + this.selectedSpot.id + '"]').find('.imp-poly-control-point[data-index="' + z + '"]').css({
                                left: f(this.selectedSpot.points[z], this.selectedSpot).x + "%",
                                top: f(this.selectedSpot.points[z], this.selectedSpot).y + "%"
                            })
                        }
                        f({
                            x: this.translatedPointX,
                            y: this.translatedPointY
                        }, this.selectedSpot).x + this.dx < 0 && (this.dx = -f({
                            x: this.translatedPointX,
                            y: this.translatedPointY
                        }, this.selectedSpot).x), f({
                            x: this.translatedPointX,
                            y: this.translatedPointY
                        }, this.selectedSpot).x + this.dx > 100 && (this.dx = 100 - f({
                            x: this.translatedPointX,
                            y: this.translatedPointY
                        }, this.selectedSpot).x), f({
                            x: this.translatedPointX,
                            y: this.translatedPointY
                        }, this.selectedSpot).y + this.dy < 0 && (this.dy = -f({
                            x: this.translatedPointX,
                            y: this.translatedPointY
                        }, this.selectedSpot).y), f({
                            x: this.translatedPointX,
                            y: this.translatedPointY
                        }, this.selectedSpot).y + this.dy > 100 && (this.dy = 100 - f({
                            x: this.translatedPointX,
                            y: this.translatedPointY
                        }, this.selectedSpot).y);
                        c = this.dx / (this.selectedSpot.width / 100 * this.canvasWidth / this.canvasWidth), h = this.dy / (this.selectedSpot.height / 100 * this.canvasHeight / this.canvasHeight);
                        this.selectedSpot.points[this.translatedPointIndex].x = this.translatedPointX + c, this.selectedSpot.points[this.translatedPointIndex].y = this.translatedPointY + h, this.translatedPoint.css({
                            left: f(this.selectedSpot.points[this.translatedPointIndex], this.selectedSpot).x + "%",
                            top: f(this.selectedSpot.points[this.translatedPointIndex], this.selectedSpot).y + "%"
                        });
                        for (u = "", w = 0; w < this.selectedSpot.points.length; w++) {
                            v = f(this.selectedSpot.points[w], this.selectedSpot);
                            u += (l = this.selectedSpot.default_style.stroke_width + v.x / 100 * (s.general.width - 2 * this.selectedSpot.default_style.stroke_width)) + "," + (p = this.selectedSpot.default_style.stroke_width + v.y / 100 * (s.general.height - 2 * this.selectedSpot.default_style.stroke_width)) + " "
                        }
                        this.redrawPolygonEl.attr("points", u)
                    } else this.selectedSpot && "poly" == this.selectedSpot.type && this.redrawSelectedPolyTempPoint(e)
                }
            }
        }
    }, u.prototype.handleMouseUp = function(e) {
        if (!x(s.editor.previewMode)) {
            "imp-poly-tooltip-close-button" == t(e.target).attr("id") && t("#imp-poly-tooltip").remove();
            var o = t(e.target).data("editor-object-type") || t(e.target).closest("[data-editor-object-type]").data("editor-object-type");
            if (this.startedDrawingSpot)(p = this.createSpot()).x = this.ix / this.canvasWidth * 100, p.y = this.iy / this.canvasHeight * 100, p.x = Math.round(1e3 * p.x) / 1e3, p.y = Math.round(1e3 * p.y) / 1e3, this.selectSpot(p.id), this.redraw(), this.addAction();
            else if (this.startedDrawingRect && this.createdDrawingRect) {
                var i = b(this.dx, this.dy);
                this.eventSpot.width = Math.round(1e3 * this.drawRectWidth) / 1e3, this.eventSpot.height = Math.round(1e3 * this.drawRectHeight) / 1e3, this.eventSpot.x_image_background = this.eventSpot.x, this.eventSpot.y_image_background = this.eventSpot.y, this.eventSpot.width_image_background = this.eventSpot.width, this.eventSpot.height_image_background = this.eventSpot.height, this.selectSpot(this.eventSpot.id), this.redraw(), this.addAction()
            } else if (this.startedDrawingOval && this.createdDrawingOval) {
                i = b(this.dx, this.dy);
                this.eventSpot.width = Math.round(1e3 * this.drawRectWidth) / 1e3, this.eventSpot.height = Math.round(1e3 * this.drawRectHeight) / 1e3, this.eventSpot.x_image_background = this.eventSpot.x, this.eventSpot.y_image_background = this.eventSpot.y, this.eventSpot.width_image_background = this.eventSpot.width, this.eventSpot.height_image_background = this.eventSpot.height, this.selectSpot(this.eventSpot.id), this.redraw(), this.addAction()
            } else if (this.finishedDrawingPoly) {
                t("#temp-poly").remove();
                var r = this.createPoly(this.polyPoints);
                this.selectSpot(r.id), r.x_image_background = r.x, r.y_image_background = r.y, r.width_image_background = r.width, r.height_image_background = r.height, this.addAction(), this.redraw()
            } else if (this.startedDrawingText) {
                (p = this.createText()).x = this.ix / this.canvasWidth * 100, p.y = this.iy / this.canvasHeight * 100, p.x = Math.round(1e3 * p.x) / 1e3, p.y = Math.round(1e3 * p.y) / 1e3, this.selectSpot(p.id), this.redraw(), this.addAction()
            } else if (this.startedMoving) {
                i = b(this.selectedSpot.x + this.dx, this.selectedSpot.y + this.dy);
                "rect" != this.selectedSpot.type && "oval" != this.selectedSpot.type && "poly" != this.selectedSpot.type || (i.x + this.selectedSpot.width > 100 && (i.x = 100 - this.selectedSpot.width), i.y + this.selectedSpot.height > 100 && (i.y = 100 - this.selectedSpot.height)), this.selectedSpot.x = Math.round(1e3 * i.x) / 1e3, this.selectedSpot.y = Math.round(1e3 * i.y) / 1e3, this.selectedSpot.x_image_background = this.selectedSpot.x, this.selectedSpot.y_image_background = this.selectedSpot.y, this.redraw(), this.addAction()
            } else if (this.startedTransforming && this.didTransform) this.selectedSpot.x = Math.round(1e3 * this.transformX) / 1e3, this.selectedSpot.y = Math.round(1e3 * this.transformY) / 1e3, this.selectedSpot.width = Math.round(1e3 * this.transformWidth) / 1e3, this.selectedSpot.height = Math.round(1e3 * this.transformHeight) / 1e3, this.selectedSpot.x_image_background = this.selectedSpot.x, this.selectedSpot.y_image_background = this.selectedSpot.y, this.selectedSpot.width_image_background = this.selectedSpot.width, this.selectedSpot.height_image_background = this.selectedSpot.height, this.redraw(), this.addAction();
            else if (this.startedTransformingTooltip && this.didTransformTooltip) this.selectedSpot.tooltip_style.width = this.transformingTooltipWidth, this.selectedSpot.tooltip_style.auto_width = 0, this.addAction(), this.redraw();
            else if (this.translatingControlPoint) {
                this.dx, this.selectedSpot.width, this.canvasWidth, this.canvasWidth, this.dy, this.selectedSpot.height, this.canvasHeight, this.canvasHeight;
                this.updateBoundingBoxForPolygonSpot(this.selectedSpot), this.redraw(), this.addAction()
            } else if (this.startedSelecting) this.selectedSpot && this.selectedSpot.id != this.eventSpotId && this.deselectSpot(), this.selectSpot(this.eventSpotId), this.redraw(), this.addAction();
            else if (this.shouldDeselectShape) this.deselectSpot(), this.redraw(), this.addAction();
            else if (this.movingTooltip) {
                var a = this.redrawTooltip,
                    n = 0,
                    l = 0,
                    p = this.selectedSpot,
                    d = a.outerWidth() / this.canvasWidth * 100,
                    c = a.outerHeight() / this.canvasHeight * 100,
                    h = 20 / this.canvasWidth * 100,
                    g = 20 / this.canvasHeight * 100,
                    m = p.width,
                    _ = p.height,
                    u = p.x,
                    w = p.y;
                "spot" == p.type && (m = p.width / this.canvasWidth * 100, _ = p.height / this.canvasHeight * 100, u = p.x - m / 2, w = p.y - _ / 2, x(p.default_style.icon_is_pin) && (w -= _ / 2)), "top" == this.movingTooltipPosition && (n = u + m / 2 - d / 2, l = w - c - g), "bottom" == this.movingTooltipPosition && (n = u + m / 2 - d / 2, l = w + _ + g), "left" == this.movingTooltipPosition && (n = u - d - h, l = w + _ / 2 - c / 2), "right" == this.movingTooltipPosition && (n = u + m + h, l = w + _ / 2 - c / 2);
                var y = n + d / 2,
                    S = l + c / 2,
                    f = (this.redrawTooltip.position().left + this.redrawTooltip.outerWidth() / 2) / this.canvasWidth * 100 - y,
                    v = (this.redrawTooltip.position().top + this.redrawTooltip.outerHeight() / 2) / this.canvasHeight * 100 - S;
                this.selectedSpot.tooltip_style.offset_x = f, this.selectedSpot.tooltip_style.offset_y = v, this.selectedSpot.tooltip_style.position = this.movingTooltipPosition, this.addAction(), this.redraw()
            }
            if (10 == o) {
                if (t.wcpEditorIsFloatingWindowOpen()) return t.wcpEditorCloseFloatingWindow(), void this.redraw();
                var C = (H = t('[data-editor-object-type="10"]').parent()).offset().left,
                    F = H.offset().top,
                    k = H.width(),
                    M = t.wcpFormGenerateHTMLForForm("Tooltip Style"),
                    I = {
                        x: Math.round(C + k + 10),
                        y: Math.round(F),
                        padding: !0,
                        title: "Tooltip Style",
                        width: 300,
                        content: M
                    };
                return t.wcpEditorCreateFloatingWindow(I), this.updateShapesForm(), void this.redraw()
            }
            if (11 == o) return t.wcpEditorIsFloatingWindowOpen() && t.wcpEditorCloseFloatingWindow(), s.editor.transform_tooltip_mode = 1, this.tooltipTransformMode = !0, this.transformingTooltipStartingWidth = t("#imp-editor-shape-tooltip").outerWidth(), void this.redraw();
            if (12 != o) {
                if (13 == o) return s.editor.transform_tooltip_mode = 0, this.tooltipTransformMode = !1, this.addAction(), void this.redraw();
                if (14 == o) return this.selectedSpot.tooltip_style.offset_x = 0, this.selectedSpot.tooltip_style.offset_y = 0, this.selectedSpot.tooltip_style.width = this.transformingTooltipStartingWidth, this.addAction(), void this.redraw();
                this.draggingCanvas = !1, this.startedSelecting = !1, this.startedMoving = !1, this.startedTransforming = !1, this.didTransform = !1, this.startedTransformingTooltip = !1, this.didTransformTooltip = !1, this.transformDirection = 0, this.startedDrawingSpot = !1, this.startedDrawingText = !1, this.startedDrawingRect = !1, this.createdDrawingRect = !1, this.startedDrawingOval = !1, this.createdDrawingOval = !1, this.startedDrawingPoly = !1, this.finishedDrawingPoly = !1, this.mouseDownWhileDrawingPoly = !1, this.translatingControlPoint = !1, this.startedTranslatingControlPoint = !1, this.shouldDeselectShape = !1, this.startedSelectingTooltip = !1, this.movingTooltip = !1
            } else {
                if (t.wcpEditorIsFloatingWindowOpen()) return t.wcpEditorCloseFloatingWindow(), void this.redraw();
                var H;
                C = (H = t('[data-editor-object-type="10"]').parent()).offset().left, F = H.offset().top, k = H.width();
                t.squaresInitWithSettings(t("#imp-editor-shape-tooltip-content-wrap"), this.selectedSpot.tooltip_content.squares_settings);
                M = t.squaresGetEditorWindowContents(), I = {
                    x: Math.round(C + k + 10),
                    y: Math.round(F),
                    padding: !1,
                    title: "Tooltip Content",
                    content: M,
                    width: 394
                };
                t.wcpEditorCreateFloatingWindow(I)
            }
        }
    }, u.prototype.handleKeyDown = function(e) {
        var o = i;
        return t("input:focus").length > 0 || t("textarea:focus").length > 0 || (32 == e.keyCode && (this.spaceKeyDown = !0, this.enterCanvasDragMode(), o = !1), 91 == e.keyCode && (this.commandKeyDown = !0, o = !0), 17 == e.keyCode && (this.ctrlKeyDown = !0, o = !0), 16 == e.keyCode && (this.shiftKeyDown = !0, o = !0), 187 != e.keyCode && 107 != e.keyCode || (this.ctrlKeyDown || this.commandKeyDown) && (this.zoomIn(), o = !1), 189 != e.keyCode && 109 != e.keyCode || (this.ctrlKeyDown || this.commandKeyDown) && (this.zoomOut(), o = !1), 48 == e.keyCode && (this.ctrlKeyDown || this.commandKeyDown) && (this.zoomReset(), o = !1), o)
    }, u.prototype.handleKeyUp = function(e) {
        var o = !1;
        if (t("input:focus").length > 0 || t("textarea:focus").length > 0) return !0;
        if (32 == e.keyCode && (this.spaceKeyDown = !1, this.exitCanvasDragMode(), o = !1), 91 == e.keyCode && (this.commandKeyDown = !1, o = !0), 17 == e.keyCode && (this.ctrlKeyDown = !1, o = !0), 16 == e.keyCode && (this.shiftKeyDown = !1, o = !0), 27 == e.keyCode && (this.drawingPoly ? (this.drawingPoly = !1, this.startedDrawingPoly = !1, this.mouseDownWhileDrawingPoly = !1, t("#temp-poly").remove()) : this.tooltipTransformMode ? (this.tooltipTransformMode = !1, s.editor.transform_tooltip_mode = 0, this.redraw()) : t.wcpEditorCloseModal()), 13 == e.keyCode)
            if (this.drawingPoly) {
                this.drawingPoly = !1, this.finishedDrawingPoly = !1, t("#temp-poly").remove();
                var i = this.createPoly(this.polyPoints);
                this.selectSpot(i.id), this.addAction(), this.redraw()
            } else this.tooltipTransformMode && (this.tooltipTransformMode = !1, s.editor.transform_tooltip_mode = 0, this.redraw());
        return 46 == e.keyCode && (o = !0, this.selectedSpot && (l = r.getIndexOfSpotWithId(this.selectedSpot.id), t.wcpEditorPresentModal({
            name: "confirm-delete-shape",
            title: "Confirm Delete",
            buttons: [{
                name: "cancel",
                title: "Cancel",
                class: ""
            }, {
                name: "primary",
                title: "Delete",
                class: "danger"
            }],
            body: "Delete this shape?"
        }))), t("#input-icon-search").is(":focus") && t.wcpFontawesomeSearch(t("#input-icon-search").val()), o
    }, u.prototype.getIndexOfSpotWithId = function(t) {
        for (var e = 0; e < s.spots.length; e++)
            if (s.spots[e].id == t) return e
    }, u.prototype.selectSpot = function(t) {
        s.editor.selected_shape = t
    }, u.prototype.deselectSpot = function() {
        t.wcpEditorCloseFloatingWindow(), s.editor.selected_shape = -1, s.editor.transform_tooltip_mode = 0, this.tooltipTransformMode = !1
    }, u.prototype.createIdForSpot = function() {
        var t = 0,
            e = !1;
        do {
            t = "spot-" + Math.floor(9999 * Math.random()), e = !1;
            for (var o = 0; o < s.spots.length; o++)
                if (s.spots[o].id == t) {
                    e = !0;
                    break
                }
        } while (e);
        return t
    }, u.prototype.createIdForRect = function() {
        var t = 0,
            e = !1;
        do {
            t = "rect-" + Math.floor(9999 * Math.random()), e = !1;
            for (var o = 0; o < s.spots.length; o++)
                if (s.spots[o].id == t) {
                    e = !0;
                    break
                }
        } while (e);
        return t
    }, u.prototype.createIdForOval = function() {
        var t = 0,
            e = !1;
        do {
            t = "oval-" + Math.floor(9999 * Math.random()), e = !1;
            for (var o = 0; o < s.spots.length; o++)
                if (s.spots[o].id == t) {
                    e = !0;
                    break
                }
        } while (e);
        return t
    }, u.prototype.createIdForPoly = function() {
        var t = 0,
            e = !1;
        do {
            t = "poly-" + Math.floor(9999 * Math.random()), e = !1;
            for (var o = 0; o < s.spots.length; o++)
                if (s.spots[o].id == t) {
                    e = !0;
                    break
                }
        } while (e);
        return t
    }, u.prototype.createIdForText = function() {
        var t = 0,
            e = !1;
        do {
            t = "text-" + Math.floor(9999 * Math.random()), e = !1;
            for (var o = 0; o < s.spots.length; o++)
                if (s.spots[o].id == t) {
                    e = !0;
                    break
                }
        } while (e);
        return t
    }, u.prototype.createIdForPath = function() {
        var t = 0,
            e = !1;
        do {
            t = "path-" + Math.floor(9999 * Math.random()), e = !1;
            for (var o = 0; o < s.spots.length; o++)
                if (s.spots[o].id == t) {
                    e = !0;
                    break
                }
        } while (e);
        return t
    }, u.prototype.createIdForLayer = function() {
        for (var t = 0, e = 0; e < s.layers.layers_list.length; e++) s.layers.layers_list[e].id > t && (t = s.layers.layers_list[e].id);
        return ++t
    }, u.prototype.createTitleForSpot = function() {
        var t = "Spot " + s.editor.shapeCounter.spots;
        return s.editor.shapeCounter.spots++, t
    }, u.prototype.createTitleForRect = function() {
        var t = "Rect " + s.editor.shapeCounter.rects;
        return s.editor.shapeCounter.rects++, t
    }, u.prototype.createTitleForOval = function() {
        var t = "Oval " + s.editor.shapeCounter.ovals;
        return s.editor.shapeCounter.ovals++, t
    }, u.prototype.createTitleForPoly = function() {
        var t = "Poly " + s.editor.shapeCounter.polys;
        return s.editor.shapeCounter.polys++, t
    }, u.prototype.createTitleForText = function() {
        var t = "Text " + s.editor.shapeCounter.texts;
        return s.editor.shapeCounter.texts++, t
    }, u.prototype.createTitleForPath = function() {
        var t = "Path " + s.editor.shapeCounter.paths;
        return s.editor.shapeCounter.paths++, t
    }, u.prototype.createSpot = function() {
        var e = t.extend(!0, {}, _);
        return e.type = "spot", e.id = this.createIdForSpot(), e.title = this.createTitleForSpot(), e.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = e.title, x(s.layers.enable_layers) ? e.layerID = s.editor.currentLayer : s.layers.layers_list[0] ? e.layerID = s.layers.layers_list[0].id : e.layerID = 0, s.spots.push(e), e
    }, u.prototype.createRect = function() {
        var e = t.extend(!0, {}, _);
        return e.type = "rect", e.default_style.border_radius = 10, e.mouseover_style.border_radius = 10, e.id = this.createIdForRect(), e.title = this.createTitleForRect(), e.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = e.title, x(s.layers.enable_layers) ? e.layerID = s.editor.currentLayer : s.layers.layers_list[0] ? e.layerID = s.layers.layers_list[0].id : e.layerID = 0, s.spots.push(e), e
    }, u.prototype.createOval = function() {
        var e = t.extend(!0, {}, _);
        return e.type = "oval", e.id = this.createIdForOval(), e.title = this.createTitleForOval(), e.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = e.title, x(s.layers.enable_layers) ? e.layerID = s.editor.currentLayer : s.layers.layers_list[0] ? e.layerID = s.layers.layers_list[0].id : e.layerID = 0, s.spots.push(e), e
    }, u.prototype.createPoly = function(e) {
        var o = t.extend(!0, {}, _);
        o.type = "poly", o.id = this.createIdForPoly(), o.title = this.createTitleForPoly(), o.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = o.title;
        for (var i = 99999, r = 99999, a = 0, n = 0, l = 0; l < e.length; l++) {
            var p = e[l];
            p.x < i && (i = p.x), p.x > a && (a = p.x), p.y < r && (r = p.y), p.y > n && (n = p.y)
        }
        var d = a - i,
            c = n - r;
        o.x = i / this.canvasWidth * 100 * this.zoom, o.y = r / this.canvasHeight * 100 * this.zoom, o.width = d / this.canvasWidth * 100 * this.zoom, o.height = c / this.canvasHeight * 100 * this.zoom;
        for (l = 0; l < e.length; l++) o.points.push({
            x: (e[l].x - i) / d * 100,
            y: (e[l].y - r) / c * 100
        });
        return x(s.layers.enable_layers) ? o.layerID = s.editor.currentLayer : s.layers.layers_list[0] ? o.layerID = s.layers.layers_list[0].id : o.layerID = 0, s.spots.push(o), o
    }, u.prototype.createText = function() {
        var e = t.extend(!0, {}, _);
        return e.type = "text", e.id = this.createIdForText(), e.title = this.createTitleForText(), e.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = e.title, x(s.layers.enable_layers) ? e.layerID = s.editor.currentLayer : s.layers.layers_list[0] ? e.layerID = s.layers.layers_list[0].id : e.layerID = 0, s.spots.push(e), e
    }, u.prototype.createPath = function(e, o, r, a) {
        var n = t.extend(!0, {}, _);
        n.type = "path", n.id = this.createIdForPath(), n.title = this.createTitleForPath(), n.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = n.title, n.d = e;
        var l = t.svgPathParser(e);
        if (r != i && a != i) {
            for (var p = 0; p < l.length; p++)
                for (var d = l[p], c = 1; c < d.length; c++) d[c] += c % 2 == 0 ? a : r;
            n.d = "";
            for (p = 0; p < l.length; p++) {
                var h, g, m = l[p];
                n.d += m[0];
                for (c = 1; c < m.length; c++) g = m[c], h = c % 2 != 0 ? " " : ",", n.d += h + g;
                n.d += " "
            }
        }
        var u = 9999,
            w = 9999,
            y = 0,
            S = 0;
        for (p = 0; p < l.length; p++) l[p][1] < u && (u = l[p][1]), l[p][2] < w && (w = l[p][2]), l[p][1] > y && (y = l[p][1]), l[p][2] > S && (S = l[p][2]);
        for (p = 0; p < l.length; p++) {
            m = l[p];
            n.vs.push([m[1], m[2]])
        }
        var f = y - u,
            v = S - w;
        return n.x = u / s.general.width * 100, n.y = w / s.general.height * 100, n.width = f / s.general.width * 100, n.height = v / s.general.height * 100, o !== i && (n.connected_to = o, n.use_connected_shape_tooltip = 1), x(s.layers.enable_layers) ? n.layerID = s.editor.currentLayer : s.layers.layers_list[0] ? n.layerID = s.layers.layers_list[0].id : n.layerID = 0, s.spots.push(n), n
    }, u.prototype.enterCanvasDragMode = function() {
        s.editor.state.dragging || (s.editor.state.dragging = !0, this.canvas.append('<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-drag"></div>'))
    }, u.prototype.exitCanvasDragMode = function() {
        s.editor.state.dragging && (s.editor.state.dragging = !1, this.canvas.find("#imp-editor-canvas-overlay-drag").remove())
    }, u.prototype.zoomIn = function(e) {
        if (this.zoom *= 2, s.editor.zoom = this.zoom, this.zoom > 32) this.zoom = 32;
        else {
            var o, i, r = 0,
                a = 0;
            if (e) r = this.ix, a = this.iy;
            else if (this.selectedSpot) "spot" != this.selectedSpot.type ? (r = this.selectedSpot.x + this.selectedSpot.width / 2, a = this.selectedSpot.y + this.selectedSpot.height / 2, r = r / 100 * this.canvasWidth, a = a / 100 * this.canvasHeight) : (r = this.selectedSpot.x / 100 * this.canvasWidth + this.selectedSpot.width / 2, a = this.selectedSpot.y / 100 * this.canvasHeight + this.selectedSpot.height / 2);
            else {
                var n = t("#wcp-editor-center"),
                    l = S(n.offset().left + n.width() / 2, n.offset().top + n.height() / 2, this.canvas);
                r = l.x, a = l.y
            }
            o = this.canvasWidth / 2 - r, i = this.canvasHeight / 2 - a, this.canvasX += o, this.canvasY += i, this.redrawCanvas(), this.redraw()
        }
    }, u.prototype.zoomOut = function(e) {
        if (this.zoom /= 2, s.editor.zoom = this.zoom, this.zoom < 1) this.zoom = 1, s.editor.zoom = 1;
        else {
            var o, i, r = 0,
                a = 0;
            if (e) r = this.ix, a = this.iy;
            else {
                var n = t("#wcp-editor-center"),
                    l = S(n.offset().left + n.width() / 2, n.offset().top + n.height() / 2, this.canvas);
                r = l.x, a = l.y
            }
            o = this.canvasWidth / 2 - r, i = this.canvasHeight / 2 - a, this.canvasX -= o / 2, this.canvasY -= i / 2, this.redrawCanvas(), this.redraw()
        }
        1 == this.zoom && (this.canvasX = 0, this.canvasY = 0, this.redrawCanvas())
    }, u.prototype.zoomReset = function() {
        this.zoom = 1, s.editor.zoom = this.zoom, this.canvasX = 0, this.canvasY = 0, this.redrawCanvas(), this.redraw()
    }, u.prototype.shouldSelectPoly = function(t) {
        for (var e, o = this, i = 0; i < s.spots.length; i++) s.spots[i].id == t && (e = s.spots[i]);
        var r = o.ix - e.x / 100 * o.canvasWidth,
            a = o.iy - e.y / 100 * o.canvasHeight;
        r = r / (e.width / 100 * o.canvasWidth) * 100, a = a / (e.height / 100 * o.canvasHeight) * 100;
        var n = new Array;
        for (i = 0; i < e.points.length; i++) n.push([e.points[i].x, e.points[i].y]);
        return !! function(t, e) {
            for (var o = t.x, i = t.y, r = !1, s = 0, a = e.length - 1; s < e.length; a = s++) {
                var n = e[s][0],
                    l = e[s][1],
                    p = e[a][0],
                    d = e[a][1],
                    c = l > i != d > i && o < (p - n) * (i - l) / (d - l) + n;
                c && (r = !r)
            }
            return r
        }({
            x: r,
            y: a
        }, n)
    }, u.prototype.placePointForTempPoly = function(t, e) {
        this.polyPoints.push({
            x: t / this.zoom,
            y: e / this.zoom
        })
    }, u.prototype.redrawTempPoly = function() {
        for (var e = this, o = '<polygon points="', i = 0; i < e.polyPoints.length; i++) {
            o += e.polyPoints[i].x * e.zoom + "," + e.polyPoints[i].y * e.zoom + " "
        }
        o += '" />';
        for (i = 0; i < e.polyPoints.length; i++) {
            o += '<circle cx="' + e.polyPoints[i].x * e.zoom + '" cy="' + e.polyPoints[i].y * e.zoom + '" r="4" data-index="' + i + '" />'
        }
        0 == t("#temp-poly").length && t("#imp-editor-shapes-container").append('<svg id="temp-poly" width="' + e.canvasWidth + 'px" height="' + e.canvasHeight + 'px" viewBox="0 0 ' + e.canvasWidth + " " + e.canvasHeight + '" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>'), t("#temp-poly").html(o);
        o = "";
        1 != localStorage["image-map-pro-seen-poly-tooltip"] && (localStorage["image-map-pro-seen-poly-tooltip"] = 1, o += '<div id="imp-poly-tooltip" style="left: ' + e.polyPoints[0].x * e.zoom + "px; top: " + e.polyPoints[0].y * e.zoom + 'px;">Click the first point or press ENTER to finish <i class="fa fa-times" aria-hidden="true" id="imp-poly-tooltip-close-button"></i></div>', t("#imp-editor-shapes-container").append(o), t("#imp-poly-tooltip").css({
            left: t("#imp-poly-tooltip").position().left - t("#imp-poly-tooltip").outerWidth() - 20,
            top: t("#imp-poly-tooltip").position().top - t("#imp-poly-tooltip").outerHeight() / 2
        }))
    }, u.prototype.redrawSelectedPolyTempPoint = function(t) {
        var e, o = this,
            i = o.selectedSpot.width / 100 * o.canvasWidth,
            r = o.selectedSpot.height / 100 * o.canvasHeight,
            s = (o.x - o.selectedSpot.x / 100 * o.canvasWidth) / i * 100,
            a = (o.y - o.selectedSpot.y / 100 * o.canvasHeight) / r * 100;
        (e = o.shouldShowTempControlPoint(s, a, o.selectedSpot.points, t)) ? (o.tempControlPoint.show(), o.tempControlPointLine.show(), o.tempControlPoint.css({
            left: e.x + "%",
            top: e.y + "%"
        }), o.controlPointInsertionPointX = e.x, o.controlPointInsertionPointY = e.y) : (o.tempControlPoint.hide(), o.tempControlPointLine.hide())
    }, u.prototype.shouldShowTempControlPoint = function(e, o, r, s) {
        if (7 == (t(s.target).data("editor-object-type") || t(s.target).closest("[data-editor-object-type]").data("editor-object-type"))) return !1;
        for (var a = {
                x: e,
                y: o
            }, n = 9999, l = -1, p = !1, d = 2e3 / (this.canvasWidth * (this.selectedSpot.width / 100)), c = 0; c < r.length; c++) {
            var h = {
                    x: r[c].x,
                    y: r[c].y
                },
                g = i;
            g = r[c + 1] ? {
                x: r[c + 1].x,
                y: r[c + 1].y
            } : {
                x: r[0].x,
                y: r[0].y
            };
            var m = new C(a.x, a.y).closestPointOnLine(new C(h.x, h.y), new C(g.x, g.y)),
                _ = Math.sqrt(Math.pow(a.x - m.x, 2) + Math.pow(a.y - m.y, 2));
            _ < n && _ < d && (this.tempControlPointIndex = c, n = _, l = c, p = {
                x: m.x,
                y: m.y
            })
        }
        return -1 != l && p
    }, u.prototype.updateBoundingBoxForPolygonSpot = function(t) {
        for (var e = 99999, o = 99999, i = -99999, r = -99999, s = 0; s < t.points.length; s++) {
            (d = t.points[s]).x < e && (e = d.x), d.x > i && (i = d.x), d.y < o && (o = d.y), d.y > r && (r = d.y)
        }
        var a, n, l = f({
                x: e,
                y: o
            }, t),
            p = f({
                x: i,
                y: r
            }, t);
        for (s = 0; s < t.points.length; s++) {
            var d, c = f(d = t.points[s], t),
                h = (a = c, n = {
                    x: l.x,
                    y: l.y,
                    width: p.x - l.x,
                    height: p.y - l.y
                }, {
                    x: (a.x - n.x) / n.width * 100,
                    y: (a.y - n.y) / n.height * 100
                });
            d.x = h.x, d.y = h.y
        }
        t.x = l.x, t.y = l.y, t.width = p.x - l.x, t.height = p.y - l.y
    }, u.prototype.updateShapesList = function() {
        for (var e = [], o = s.spots.length - 1; o >= 0; o--) {
            var i = s.spots[o];
            x(s.layers.enable_layers) && parseInt(i.layerID, 10) != parseInt(s.editor.currentLayer, 10) || e.push({
                id: i.id,
                title: i.title
            })
        }
        t.wcpEditorSetListItems(e), t.wcpEditorSelectListItem(s.editor.selected_shape)
    }, u.prototype.launchTooltipContentBuilder = function() {
        if (0 == t("#imp-editor-tooltip-content-builder-wrap").length) {
            var e = "";
            e += '<div id="imp-editor-tooltip-content-builder-wrap">', e += '   <div id="imp-editor-tooltip-content-builder-background"></div>', e += '   <div id="imp-editor-tooltip-content-builder-close"><i class="fa fa-times" aria-hidden="true"></i></div>', e += '   <div id="imp-editor-tooltip-content-builder-tooltip-wrap" class="squares">', e += '       <div id="imp-editor-tooltip-content-builder" class="squares"></div>', e += "   </div>", e += '   <div id="imp-editor-tooltip-content-builder-description">', e += "       <p>Press the Done button when you are done editing, or click the Close button in the upper-right corner.</p>", e += "   </div>", e += '   <div class="wcp-editor-control-button" id="imp-editor-done-editing-tooltip">Done</div>', e += "</div>", t("body").append(e)
        } else t("#imp-editor-tooltip-content-builder-wrap").show();
        setTimeout(function() {
            t("#imp-editor-tooltip-content-builder-wrap").addClass("imp-visible")
        }, 10);
        var o = this.selectedSpot.tooltip_style.width,
            i = y(this.selectedSpot.tooltip_style.background_color),
            r = "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + this.selectedSpot.tooltip_style.background_opacity + ")";
        t("#imp-editor-tooltip-content-builder-tooltip-wrap").css({
            width: o,
            background: r
        }), t.squaresInitWithSettings(t("#imp-editor-tooltip-content-builder"), this.selectedSpot.tooltip_content.squares_settings), t.squaresShowEditorWindow(20, 20)
    }, u.prototype.doneEditingTooltip = function() {
        var e = t.squaresGetCurrentSettings(t("#imp-editor-tooltip-content-builder"));
        t.squaresGenerateHTML(t("#imp-editor-tooltip-content-builder"));
        this.selectedSpot.tooltip_content.squares_settings = e, this.redraw()
    }, u.prototype.processNewLayerImage = function(t, e) {
        var o = new Image;
        o.src = t, w(o, function() {}, function() {
            e(!0, o.naturalWidth, o.naturalHeight)
        }, function() {
            e(!1)
        })
    }, u.prototype.getCompressedSettings = function() {
        for (var e = t.extend(!0, {}, s), o = [], i = 0; i < e.spots.length; i++) o[i] = t.wcpCompress(e.spots[i], _), o[i].x = Math.round(1e3 * o[i].x) / 1e3, o[i].y = Math.round(1e3 * o[i].y) / 1e3, o[i].width && (o[i].width = Math.round(1e3 * o[i].width) / 1e3), o[i].height && (o[i].height = Math.round(1e3 * o[i].height) / 1e3);
        return (e = t.wcpCompress(s, m)).spots = o, e
    }, u.prototype.updateShapesForm = function() {
        var e = this.getIndexOfSpotWithId(s.editor.selected_shape),
            o = s.spots[e];
        if (o) {
            if (t.wcpFormSetControlValue("Shape Settings", "shape_title", o.title), t.wcpFormSetControlValue("Shape Settings", "x", o.x), t.wcpFormSetControlValue("Shape Settings", "y", o.y), t.wcpFormSetControlValue("Shape Settings", "width", o.width), t.wcpFormSetControlValue("Shape Settings", "height", o.height), t.wcpFormSetControlValue("Shape Settings", "connected_to", o.connected_to), t.wcpFormSetControlValue("Shape Settings", "use_connected_shape_tooltip", o.use_connected_shape_tooltip), t.wcpFormSetControlValue("Shape Settings", "text", o.text), t.wcpFormSetControlValue("Shape Settings", "static", o.static), t.wcpFormSetControlValue("Shape Settings", "text", o.text.text), t.wcpFormSetControlValue("Shape Settings", "font_family", o.text.font_family), t.wcpFormSetControlValue("Shape Settings", "font_size", o.text.font_size), t.wcpFormSetControlValue("Shape Settings", "font_weight", o.text.font_weight), t.wcpFormSetControlValue("Shape Settings", "text_color", o.text.text_color), t.wcpFormSetControlValue("Shape Settings", "text_opacity", o.text.text_opacity), t.wcpFormSetControlValue("Shape Settings", "click", o.actions.click), t.wcpFormSetControlValue("Shape Settings", "link", o.actions.link), t.wcpFormSetControlValue("Shape Settings", "script", o.actions.script), t.wcpFormSetControlValue("Shape Settings", "open_link_in_new_window", o.actions.open_link_in_new_window), t.wcpFormSetControlValue("Shape Settings", "use_icon", o.default_style.use_icon), t.wcpFormSetControlValue("Shape Settings", "icon_type", o.default_style.icon_type), t.wcpFormSetControlValue("Shape Settings", "icon_svg_path", o.default_style.icon_svg_path), t.wcpFormSetControlValue("Shape Settings", "icon_svg_viewbox", o.default_style.icon_svg_viewbox), t.wcpFormSetControlValue("Shape Settings", "icon_url", o.default_style.icon_url), t.wcpFormSetControlValue("Shape Settings", "icon_is_pin", o.default_style.icon_is_pin), t.wcpFormSetControlValue("Shape Settings", "icon_shadow", o.default_style.icon_shadow), t.wcpFormSetControlValue("Shape Settings", "opacity", o.default_style.opacity), t.wcpFormSetControlValue("Shape Settings", "icon_fill", o.default_style.icon_fill), t.wcpFormSetControlValue("Shape Settings", "border_radius", o.default_style.border_radius), t.wcpFormSetControlValue("Shape Settings", "background_type", o.default_style.background_type), t.wcpFormSetControlValue("Shape Settings", "background_image_url", o.default_style.background_image_url), t.wcpFormSetControlValue("Shape Settings", "background_image_opacity", o.default_style.background_image_opacity), t.wcpFormSetControlValue("Shape Settings", "background_image_scale", o.default_style.background_image_scale), t.wcpFormSetControlValue("Shape Settings", "background_image_offset_x", o.default_style.background_image_offset_x), t.wcpFormSetControlValue("Shape Settings", "background_image_offset_y", o.default_style.background_image_offset_y), t.wcpFormSetControlValue("Shape Settings", "background_color", o.default_style.background_color), t.wcpFormSetControlValue("Shape Settings", "background_opacity", o.default_style.background_opacity), t.wcpFormSetControlValue("Shape Settings", "border_width", o.default_style.border_width), t.wcpFormSetControlValue("Shape Settings", "border_style", o.default_style.border_style), t.wcpFormSetControlValue("Shape Settings", "border_color", o.default_style.border_color), t.wcpFormSetControlValue("Shape Settings", "border_opacity", o.default_style.border_opacity), t.wcpFormSetControlValue("Shape Settings", "stroke_color", o.default_style.stroke_color), t.wcpFormSetControlValue("Shape Settings", "stroke_opacity", o.default_style.stroke_opacity), t.wcpFormSetControlValue("Shape Settings", "stroke_width", o.default_style.stroke_width), t.wcpFormSetControlValue("Shape Settings", "stroke_dasharray", o.default_style.stroke_dasharray), t.wcpFormSetControlValue("Shape Settings", "stroke_linecap", o.default_style.stroke_linecap), t.wcpFormSetControlValue("Shape Settings", "mouseover_opacity", o.mouseover_style.opacity), t.wcpFormSetControlValue("Shape Settings", "mouseover_icon_fill", o.mouseover_style.icon_fill), t.wcpFormSetControlValue("Shape Settings", "mouseover_border_radius", o.mouseover_style.border_radius), t.wcpFormSetControlValue("Shape Settings", "mouseover_background_image_url", o.mouseover_style.background_image_url), t.wcpFormSetControlValue("Shape Settings", "mouseover_background_image_opacity", o.mouseover_style.background_image_opacity), t.wcpFormSetControlValue("Shape Settings", "mouseover_background_image_scale", o.mouseover_style.background_image_scale), t.wcpFormSetControlValue("Shape Settings", "mouseover_background_image_offset_x", o.mouseover_style.background_image_offset_x), t.wcpFormSetControlValue("Shape Settings", "mouseover_background_image_offset_y", o.mouseover_style.background_image_offset_y), t.wcpFormSetControlValue("Shape Settings", "mouseover_background_color", o.mouseover_style.background_color), t.wcpFormSetControlValue("Shape Settings", "mouseover_background_opacity", o.mouseover_style.background_opacity), t.wcpFormSetControlValue("Shape Settings", "mouseover_border_width", o.mouseover_style.border_width), t.wcpFormSetControlValue("Shape Settings", "mouseover_border_style", o.mouseover_style.border_style), t.wcpFormSetControlValue("Shape Settings", "mouseover_border_color", o.mouseover_style.border_color), t.wcpFormSetControlValue("Shape Settings", "mouseover_border_opacity", o.mouseover_style.border_opacity), t.wcpFormSetControlValue("Shape Settings", "mouseover_stroke_color", o.mouseover_style.stroke_color), t.wcpFormSetControlValue("Shape Settings", "mouseover_stroke_opacity", o.mouseover_style.stroke_opacity), t.wcpFormSetControlValue("Shape Settings", "mouseover_stroke_width", o.mouseover_style.stroke_width), t.wcpFormSetControlValue("Shape Settings", "mouseover_stroke_dasharray", o.mouseover_style.stroke_dasharray), t.wcpFormSetControlValue("Shape Settings", "mouseover_stroke_linecap", o.mouseover_style.stroke_linecap), t.wcpFormSetControlValue("Tooltip Style", "tooltip_border_radius", o.tooltip_style.border_radius, !0), t.wcpFormSetControlValue("Tooltip Style", "tooltip_padding", o.tooltip_style.padding, !0), t.wcpFormSetControlValue("Tooltip Style", "tooltip_background_color", o.tooltip_style.background_color, !0), t.wcpFormSetControlValue("Tooltip Style", "tooltip_background_opacity", o.tooltip_style.background_opacity, !0), t.wcpFormSetControlValue("Tooltip Style", "tooltip_position", o.tooltip_style.position, !0), t.wcpFormSetControlValue("Tooltip Style", "tooltip_width", o.tooltip_style.width, !0), t.wcpFormSetControlValue("Tooltip Style", "tooltip_auto_width", o.tooltip_style.auto_width, !0), t.wcpFormSetControlValue("Shape Settings", "enable_tooltip", o.tooltip.enable_tooltip), e == this.shapesFormSpotIndex) return;
            this.shapesFormSpotIndex = e;
            var i = t.wcpFormGenerateHTMLForForm("Shape Settings");
            t.wcpEditorSetObjectSettingsContent(i), t.wcpFormUpdateForm("Shape Settings");
            for (var r = '<option value="">(Not Connected)</option>', a = 0; a < s.spots.length; a++) s.spots[a].id != s.editor.selected_shape && "" == s.spots[a].connected_to && (r += '<option value="' + s.spots[a].id + '">' + s.spots[a].title + "</option>");
            t("#wcp-form-form-control-connected_to select").html(r), t("#wcp-form-form-control-connected_to select").val(o.connected_to)
        } else this.shapesFormSpotIndex = -1, t.wcpEditorSetObjectSettingsContent('<div id="imp-editor-no-shape-selected-wrap"><span>No shape selected</span></div>')
    }, u.prototype.updateShapesFormState = function() {
        var e = this.getIndexOfSpotWithId(s.editor.selected_shape),
            o = s.spots[e];
        o && (x(o.tooltip.enable_tooltip) ? (t.wcpFormShowControl("Shape Settings", "reset_tooltip_position"), t.wcpFormShowControl("Shape Settings", "reset_tooltip_size"), t.wcpFormShowControl("Shape Settings", "edit_tooltip_style"), t.wcpFormShowControl("Shape Settings", "edit_tooltip_position"), t.wcpFormShowControl("Shape Settings", "edit_tooltip_content")) : (t.wcpFormHideControl("Shape Settings", "reset_tooltip_position"), t.wcpFormHideControl("Shape Settings", "reset_tooltip_size"), t.wcpFormHideControl("Shape Settings", "edit_tooltip_style"), t.wcpFormHideControl("Shape Settings", "edit_tooltip_position"), t.wcpFormHideControl("Shape Settings", "edit_tooltip_content")), "spot" == o.type && (t.wcpFormHideControlsGroup("Shape Settings", "text"), t.wcpFormHideControl("Shape Settings", "stroke_color"), t.wcpFormHideControl("Shape Settings", "stroke_opacity"), t.wcpFormHideControl("Shape Settings", "stroke_width"), t.wcpFormHideControl("Shape Settings", "stroke_dasharray"), t.wcpFormHideControl("Shape Settings", "stroke_linecap"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_color"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_opacity"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_width"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_dasharray"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_linecap")), "rect" == o.type && (t.wcpFormHideControlsGroup("Shape Settings", "text"), t.wcpFormHideControlsGroup("Shape Settings", "icon"), t.wcpFormHideControl("Shape Settings", "icon_fill"), t.wcpFormHideControl("Shape Settings", "mouseover_icon_fill"), t.wcpFormHideControl("Shape Settings", "stroke_color"), t.wcpFormHideControl("Shape Settings", "stroke_opacity"), t.wcpFormHideControl("Shape Settings", "stroke_width"), t.wcpFormHideControl("Shape Settings", "stroke_dasharray"), t.wcpFormHideControl("Shape Settings", "stroke_linecap"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_color"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_opacity"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_width"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_dasharray"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_linecap")), "oval" == o.type && (t.wcpFormHideControlsGroup("Shape Settings", "text"), t.wcpFormHideControlsGroup("Shape Settings", "icon"), t.wcpFormHideControl("Shape Settings", "icon_fill"), t.wcpFormHideControl("Shape Settings", "mouseover_icon_fill"), t.wcpFormHideControl("Shape Settings", "border_radius"), t.wcpFormHideControl("Shape Settings", "mouseover_border_radius"), t.wcpFormHideControl("Shape Settings", "stroke_color"), t.wcpFormHideControl("Shape Settings", "stroke_opacity"), t.wcpFormHideControl("Shape Settings", "stroke_width"), t.wcpFormHideControl("Shape Settings", "stroke_dasharray"), t.wcpFormHideControl("Shape Settings", "stroke_linecap"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_color"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_opacity"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_width"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_dasharray"), t.wcpFormHideControl("Shape Settings", "mouseover_stroke_linecap")), "poly" != o.type && "path" != o.type || (t.wcpFormHideControlsGroup("Shape Settings", "text"), t.wcpFormHideControlsGroup("Shape Settings", "icon"), t.wcpFormHideControl("Shape Settings", "icon_fill"), t.wcpFormHideControl("Shape Settings", "mouseover_icon_fill"), t.wcpFormHideControl("Shape Settings", "opacity"), t.wcpFormHideControl("Shape Settings", "border_radius"), t.wcpFormHideControl("Shape Settings", "border_width"), t.wcpFormHideControl("Shape Settings", "border_style"), t.wcpFormHideControl("Shape Settings", "border_color"), t.wcpFormHideControl("Shape Settings", "border_opacity"), t.wcpFormHideControl("Shape Settings", "mouseover_opacity"), t.wcpFormHideControl("Shape Settings", "mouseover_border_radius"), t.wcpFormHideControl("Shape Settings", "mouseover_border_width"), t.wcpFormHideControl("Shape Settings", "mouseover_border_style"), t.wcpFormHideControl("Shape Settings", "mouseover_border_color"), t.wcpFormHideControl("Shape Settings", "mouseover_border_opacity")), "text" == o.type && (t.wcpFormHideControl("Shape Settings", "width"), t.wcpFormHideControl("Shape Settings", "height"), t.wcpFormHideControl("Shape Settings", "connected_to"), t.wcpFormHideControlsGroup("Shape Settings", "actions"), t.wcpFormHideControlsGroup("Shape Settings", "icon"), t.wcpFormHideControlsGroup("Shape Settings", "default_style"), t.wcpFormHideControlsGroup("Shape Settings", "mouseover_style"), t.wcpFormHideControlsGroup("Shape Settings", "tooltip"), t.wcpFormShowControlsGroup("Shape Settings", "text")), "color" == o.default_style.background_type ? (t.wcpFormHideControl("Shape Settings", "background_image_url"), t.wcpFormHideControl("Shape Settings", "background_image_opacity"), t.wcpFormHideControl("Shape Settings", "background_image_scale"), t.wcpFormHideControl("Shape Settings", "background_image_offset_x"), t.wcpFormHideControl("Shape Settings", "background_image_offset_y"), t.wcpFormHideControl("Shape Settings", "mouseover_background_image_url"), t.wcpFormHideControl("Shape Settings", "mouseover_background_image_opacity"), t.wcpFormHideControl("Shape Settings", "mouseover_background_image_scale"), t.wcpFormHideControl("Shape Settings", "mouseover_background_image_offset_x"), t.wcpFormHideControl("Shape Settings", "mouseover_background_image_offset_y"), t.wcpFormShowControl("Shape Settings", "background_color"), t.wcpFormShowControl("Shape Settings", "background_opacity"), t.wcpFormShowControl("Shape Settings", "mouseover_background_color"), t.wcpFormShowControl("Shape Settings", "mouseover_background_opacity")) : (t.wcpFormShowControl("Shape Settings", "background_image_url"), t.wcpFormShowControl("Shape Settings", "background_image_opacity"), t.wcpFormShowControl("Shape Settings", "background_image_scale"), t.wcpFormShowControl("Shape Settings", "background_image_offset_x"), t.wcpFormShowControl("Shape Settings", "background_image_offset_y"), t.wcpFormShowControl("Shape Settings", "mouseover_background_image_url"), t.wcpFormShowControl("Shape Settings", "mouseover_background_image_opacity"), t.wcpFormShowControl("Shape Settings", "mouseover_background_image_scale"), t.wcpFormShowControl("Shape Settings", "mouseover_background_image_offset_x"), t.wcpFormShowControl("Shape Settings", "mouseover_background_image_offset_y"), t.wcpFormHideControl("Shape Settings", "background_color"), t.wcpFormHideControl("Shape Settings", "background_opacity"), t.wcpFormHideControl("Shape Settings", "mouseover_background_color"), t.wcpFormHideControl("Shape Settings", "mouseover_background_opacity")), "spot" == o.type && (x(o.default_style.use_icon) ? (t.wcpFormShowControl("Shape Settings", "choose_icon_from_library"), t.wcpFormShowControl("Shape Settings", "icon_type"), t.wcpFormShowControl("Shape Settings", "icon_url"), t.wcpFormShowControl("Shape Settings", "icon_is_pin"), t.wcpFormShowControl("Shape Settings", "icon_shadow"), t.wcpFormShowControl("Shape Settings", "icon_fill"), t.wcpFormHideControl("Shape Settings", "border_radius"), t.wcpFormHideControl("Shape Settings", "background_type"), t.wcpFormHideControl("Shape Settings", "background_color"), t.wcpFormHideControl("Shape Settings", "background_opacity"), t.wcpFormHideControl("Shape Settings", "border_width"), t.wcpFormHideControl("Shape Settings", "border_style"), t.wcpFormHideControl("Shape Settings", "border_color"), t.wcpFormHideControl("Shape Settings", "border_opacity"), t.wcpFormShowControl("Shape Settings", "mouseover_icon_fill"), t.wcpFormHideControl("Shape Settings", "mouseover_border_radius"), t.wcpFormHideControl("Shape Settings", "mouseover_background_color"), t.wcpFormHideControl("Shape Settings", "mouseover_background_opacity"), t.wcpFormHideControl("Shape Settings", "mouseover_border_width"), t.wcpFormHideControl("Shape Settings", "mouseover_border_style"), t.wcpFormHideControl("Shape Settings", "mouseover_border_color"), t.wcpFormHideControl("Shape Settings", "mouseover_border_opacity")) : (t.wcpFormHideControl("Shape Settings", "choose_icon_from_library"), t.wcpFormHideControl("Shape Settings", "icon_type"), t.wcpFormHideControl("Shape Settings", "icon_url"), t.wcpFormHideControl("Shape Settings", "icon_is_pin"), t.wcpFormHideControl("Shape Settings", "icon_shadow"), t.wcpFormHideControl("Shape Settings", "icon_fill"), t.wcpFormShowControl("Shape Settings", "border_radius"), t.wcpFormShowControl("Shape Settings", "background_type"), t.wcpFormShowControl("Shape Settings", "background_color"), t.wcpFormShowControl("Shape Settings", "background_opacity"), t.wcpFormShowControl("Shape Settings", "border_width"), t.wcpFormShowControl("Shape Settings", "border_style"), t.wcpFormShowControl("Shape Settings", "border_color"), t.wcpFormShowControl("Shape Settings", "border_opacity"), t.wcpFormHideControl("Shape Settings", "mouseover_icon_fill"), t.wcpFormShowControl("Shape Settings", "mouseover_border_radius"), t.wcpFormShowControl("Shape Settings", "mouseover_background_color"), t.wcpFormShowControl("Shape Settings", "mouseover_background_opacity"), t.wcpFormShowControl("Shape Settings", "mouseover_border_width"), t.wcpFormShowControl("Shape Settings", "mouseover_border_style"), t.wcpFormShowControl("Shape Settings", "mouseover_border_color"), t.wcpFormShowControl("Shape Settings", "mouseover_border_opacity")), "library" == o.default_style.icon_type && t.wcpFormHideControl("Shape Settings", "icon_url"), "custom" == o.default_style.icon_type && t.wcpFormHideControl("Shape Settings", "choose_icon_from_library")), "follow-link" == o.actions.click ? (t.wcpFormShowControl("Shape Settings", "link"), t.wcpFormShowControl("Shape Settings", "open_link_in_new_window")) : (t.wcpFormHideControl("Shape Settings", "link"), t.wcpFormHideControl("Shape Settings", "open_link_in_new_window")), "run-script" == o.actions.click ? t.wcpFormShowControl("Shape Settings", "script") : t.wcpFormHideControl("Shape Settings", "script"), "" != o.connected_to ? (t.wcpFormShowControl("Shape Settings", "use_connected_shape_tooltip"), x(o.use_connected_shape_tooltip) ? t.wcpFormHideControlsGroup("Shape Settings", "tooltip") : t.wcpFormShowControlsGroup("Shape Settings", "tooltip")) : t.wcpFormHideControl("Shape Settings", "use_connected_shape_tooltip"))
    }, u.prototype.updateImageMapForm = function() {
        t.wcpFormSetControlValue("Image Map Settings", "image_map_name", s.general.name), t.wcpFormSetControlValue("Image Map Settings", "image_map_shortcode", s.general.shortcode), t.wcpFormSetControlValue("Image Map Settings", "image_map_width", s.general.width), t.wcpFormSetControlValue("Image Map Settings", "image_map_height", s.general.height), t.wcpFormSetControlValue("Image Map Settings", "responsive", s.general.responsive), t.wcpFormSetControlValue("Image Map Settings", "preserve_quality", s.general.preserve_quality), t.wcpFormSetControlValue("Image Map Settings", "center_image_map", s.general.center_image_map), t.wcpFormSetControlValue("Image Map Settings", "image_url", s.image.url), t.wcpFormSetControlValue("Image Map Settings", "pageload_animation", s.shapes.pageload_animation), t.wcpFormSetControlValue("Image Map Settings", "glowing_shapes", s.shapes.glowing_shapes), t.wcpFormSetControlValue("Image Map Settings", "glowing_shapes_color", s.shapes.glowing_shapes_color), t.wcpFormSetControlValue("Image Map Settings", "glow_opacity", s.shapes.glow_opacity), t.wcpFormSetControlValue("Image Map Settings", "stop_glowing_on_mouseover", s.shapes.stop_glowing_on_mouseover), t.wcpFormSetControlValue("Image Map Settings", "enable_tooltips", s.tooltips.enable_tooltips), t.wcpFormSetControlValue("Image Map Settings", "show_tooltips", s.tooltips.show_tooltips), t.wcpFormSetControlValue("Image Map Settings", "show_title_on_mouseover", s.tooltips.show_title_on_mouseover), t.wcpFormSetControlValue("Image Map Settings", "sticky_tooltips", s.tooltips.sticky_tooltips), t.wcpFormSetControlValue("Image Map Settings", "constrain_tooltips", s.tooltips.constrain_tooltips), t.wcpFormSetControlValue("Image Map Settings", "tooltip_animation", s.tooltips.tooltip_animation), t.wcpFormSetControlValue("Image Map Settings", "fullscreen_tooltips", s.tooltips.fullscreen_tooltips), t.wcpFormSetControlValue("Image Map Settings", "enable_fullscreen_mode", s.fullscreen.enable_fullscreen_mode), t.wcpFormSetControlValue("Image Map Settings", "start_in_fullscreen_mode", s.fullscreen.start_in_fullscreen_mode), t.wcpFormSetControlValue("Image Map Settings", "fullscreen_background", s.fullscreen.fullscreen_background), t.wcpFormSetControlValue("Image Map Settings", "fullscreen_button_position", s.fullscreen.fullscreen_button_position), t.wcpFormSetControlValue("Image Map Settings", "fullscreen_button_type", s.fullscreen.fullscreen_button_type), t.wcpFormSetControlValue("Image Map Settings", "fullscreen_button_color", s.fullscreen.fullscreen_button_color), t.wcpFormSetControlValue("Image Map Settings", "fullscreen_button_text_color", s.fullscreen.fullscreen_button_text_color), t.wcpFormSetControlValue("Image Map Settings", "enable_zooming", s.zooming.enable_zooming), t.wcpFormSetControlValue("Image Map Settings", "max_zoom", s.zooming.max_zoom), t.wcpFormSetControlValue("Image Map Settings", "limit_max_zoom_to_image_size", s.zooming.limit_max_zoom_to_image_size), t.wcpFormSetControlValue("Image Map Settings", "enable_navigator", s.zooming.enable_navigator), t.wcpFormSetControlValue("Image Map Settings", "enable_zoom_buttons", s.zooming.enable_zoom_buttons), t.wcpFormSetControlValue("Image Map Settings", "zoom_button_text_color", s.zooming.zoom_button_text_color), t.wcpFormSetControlValue("Image Map Settings", "zoom_button_background_color", s.zooming.zoom_button_background_color), t.wcpFormSetControlValue("Image Map Settings", "hold_ctrl_to_zoom", s.zooming.hold_ctrl_to_zoom), t.wcpFormSetControlValue("Image Map Settings", "custom_css", s.custom_code.custom_css), t.wcpFormSetControlValue("Image Map Settings", "custom_js", s.custom_code.custom_js), t.wcpFormSetControlValue("Image Map Settings", "enable_layers", s.layers.enable_layers), t.wcpFormSetControlValue("Image Map Settings", "layers_list", s.layers.layers_list);
        var e = '<div data-imp-detached-menu="' + s.id + '"></div>';
        t.wcpFormSetControlValue("Image Map Settings", "enable_shapes_menu", s.shapes_menu.enable_shapes_menu), t.wcpFormSetControlValue("Image Map Settings", "detached_menu", s.shapes_menu.detached_menu), t.wcpFormSetControlValue("Image Map Settings", "detached_menu_info", e), t.wcpFormSetControlValue("Image Map Settings", "menu_position", s.shapes_menu.menu_position), t.wcpFormSetControlValue("Image Map Settings", "enable_search", s.shapes_menu.enable_search), t.wcpFormSetControlValue("Image Map Settings", "group_by_floor", s.shapes_menu.group_by_floor), t.wcpFormSetControlValue("Image Map Settings", "hide_children_of_connected_shapes", s.shapes_menu.hide_children_of_connected_shapes), t.wcpFormUpdateForm("Image Map Settings")
    }, u.prototype.updateImageMapFormState = function() {
        x(s.general.responsive) ? (t.wcpFormHideControl("Image Map Settings", "image_map_width"), t.wcpFormHideControl("Image Map Settings", "image_map_height"), t.wcpFormHideControl("Image Map Settings", "reset_size"), t.wcpFormShowControl("Image Map Settings", "preserve_quality")) : (t.wcpFormShowControl("Image Map Settings", "image_map_width"), t.wcpFormShowControl("Image Map Settings", "image_map_height"), t.wcpFormShowControl("Image Map Settings", "reset_size"), t.wcpFormHideControl("Image Map Settings", "preserve_quality")), x(s.fullscreen.enable_fullscreen_mode) ? (t.wcpFormShowControl("Image Map Settings", "start_in_fullscreen_mode"), t.wcpFormShowControl("Image Map Settings", "fullscreen_background"), t.wcpFormShowControl("Image Map Settings", "fullscreen_button_position"), t.wcpFormShowControl("Image Map Settings", "fullscreen_button_type"), t.wcpFormShowControl("Image Map Settings", "fullscreen_button_color"), t.wcpFormShowControl("Image Map Settings", "fullscreen_button_text_color")) : (t.wcpFormHideControl("Image Map Settings", "start_in_fullscreen_mode"), t.wcpFormHideControl("Image Map Settings", "fullscreen_background"), t.wcpFormHideControl("Image Map Settings", "fullscreen_button_position"), t.wcpFormHideControl("Image Map Settings", "fullscreen_button_type"), t.wcpFormHideControl("Image Map Settings", "fullscreen_button_color"), t.wcpFormHideControl("Image Map Settings", "fullscreen_button_text_color")), x(s.tooltips.enable_tooltips) ? (t.wcpFormShowControl("Image Map Settings", "show_tooltips"), t.wcpFormShowControl("Image Map Settings", "sticky_tooltips"), t.wcpFormShowControl("Image Map Settings", "constrain_tooltips"), t.wcpFormShowControl("Image Map Settings", "tooltip_animation"), t.wcpFormShowControl("Image Map Settings", "fullscreen_tooltips")) : (t.wcpFormHideControl("Image Map Settings", "show_tooltips"), t.wcpFormHideControl("Image Map Settings", "sticky_tooltips"), t.wcpFormHideControl("Image Map Settings", "constrain_tooltips"), t.wcpFormHideControl("Image Map Settings", "tooltip_animation"), t.wcpFormHideControl("Image Map Settings", "fullscreen_tooltips")), "click" == s.tooltips.show_tooltips ? t.wcpFormShowControl("Image Map Settings", "show_title_on_mouseover") : t.wcpFormHideControl("Image Map Settings", "show_title_on_mouseover"), x(s.zooming.enable_zooming) ? (t.wcpFormShowControl("Image Map Settings", "max_zoom"), t.wcpFormShowControl("Image Map Settings", "limit_max_zoom_to_image_size"), t.wcpFormShowControl("Image Map Settings", "enable_zoom_buttons"), t.wcpFormShowControl("Image Map Settings", "enable_navigator"), t.wcpFormShowControl("Image Map Settings", "hold_ctrl_to_zoom")) : (t.wcpFormHideControl("Image Map Settings", "max_zoom"), t.wcpFormHideControl("Image Map Settings", "limit_max_zoom_to_image_size"), t.wcpFormHideControl("Image Map Settings", "enable_zoom_buttons"), t.wcpFormHideControl("Image Map Settings", "enable_navigator"), t.wcpFormHideControl("Image Map Settings", "hold_ctrl_to_zoom")), x(s.zooming.enable_zoom_buttons) && x(s.zooming.enable_zooming) ? (t.wcpFormShowControl("Image Map Settings", "zoom_button_text_color"), t.wcpFormShowControl("Image Map Settings", "zoom_button_background_color")) : (t.wcpFormHideControl("Image Map Settings", "zoom_button_text_color"), t.wcpFormHideControl("Image Map Settings", "zoom_button_background_color")), x(s.layers.enable_layers) ? (t.wcpFormShowControl("Image Map Settings", "layers_list"), t.wcpFormHideControlsGroup("Image Map Settings", "image")) : (t.wcpFormHideControl("Image Map Settings", "layers_list"), t.wcpFormShowControlsGroup("Image Map Settings", "image")), x(s.shapes_menu.enable_shapes_menu) ? (t.wcpFormShowControl("Image Map Settings", "detached_menu"), t.wcpFormShowControl("Image Map Settings", "menu_position"), t.wcpFormShowControl("Image Map Settings", "enable_search"), t.wcpFormShowControl("Image Map Settings", "group_by_floor"), t.wcpFormShowControl("Image Map Settings", "hide_children_of_connected_shapes"), x(s.shapes_menu.detached_menu) ? (t.wcpFormShowControl("Image Map Settings", "detached_menu_info"), t.wcpFormHideControl("Image Map Settings", "menu_position")) : (t.wcpFormHideControl("Image Map Settings", "detached_menu_info"), t.wcpFormShowControl("Image Map Settings", "menu_position"))) : (t.wcpFormHideControl("Image Map Settings", "detached_menu"), t.wcpFormHideControl("Image Map Settings", "menu_position"), t.wcpFormHideControl("Image Map Settings", "detached_menu_info"), t.wcpFormHideControl("Image Map Settings", "enable_search"), t.wcpFormHideControl("Image Map Settings", "group_by_floor"), t.wcpFormHideControl("Image Map Settings", "hide_children_of_connected_shapes")), x(s.shapes.glowing_shapes) ? (t.wcpFormShowControl("Image Map Settings", "glowing_shapes_color"), t.wcpFormShowControl("Image Map Settings", "glow_opacity")) : (t.wcpFormHideControl("Image Map Settings", "glowing_shapes_color"), t.wcpFormHideControl("Image Map Settings", "glow_opacity"))
    }, u.prototype.updateNewImageMapFormState = function() {
        "blank" == t.wcpFormGetModel("New Image Map").template ? t.wcpFormHideControl("New Image Map", "country") : t.wcpFormShowControl("New Image Map", "country")
    }, u.prototype.parseSVG = function(e) {
        var o = t.parseXML(e);
        s.general.width = parseInt(t(o).find("svg").attr("width"), 10), s.general.height = parseInt(t(o).find("svg").attr("height"), 10), s.general.naturalWidth = parseInt(t(o).find("svg").attr("width"), 10), s.general.naturalHeight = parseInt(t(o).find("svg").attr("height"), 10);
        for (var r = t(o).find("g"), a = 0; a < r.length; a++) {
            var n = t(r[a]);
            if (0 == n.find("g").length) {
                var l = n.find("rect, polygon, ellipse, circle, path"),
                    p = 0,
                    d = 0;
                if (n.attr("transform")) p = parseFloat(n.attr("transform").match(/\d+\.+\d+/g)[0]), d = parseFloat(n.attr("transform").match(/\d+\.+\d+/g)[1]);
                if (n.parent().is("svg"))
                    for (var c = 1; c < l.length; c++) this.parseSVGShape(t(l[c]), i, p, d);
                else {
                    t(l[0]).attr("id", t(n).attr("id"));
                    var h = this.parseSVGShape(t(l[0]), i, p, d);
                    for (c = 1; c < l.length; c++) t(l[c]).attr("id", t(n).attr("id")), this.parseSVGShape(t(l[c]), h, p, d)
                }
            } else
                for (l = n.children("rect, polygon, ellipse, circle, path"), c = 0; c < l.length; c++) {
                    var g = l[c];
                    this.parseSVGShape(t(g))
                }
        }
    }, u.prototype.parseSVGShape = function(t, e, o, i) {
        var a = 0;
        if (t.is("polygon")) {
            for (var n = t.attr("points").split(" "), l = [], p = 0; p < n.length - 2; p++)
                if (p % 2 == 0) {
                    var d = parseFloat(n[p]),
                        c = parseFloat(n[p + 1]);
                    l.push({
                        x: d,
                        y: c
                    })
                } var h = r.createPoly(l);
            a = h.id, t.attr("id") && (h.title = t.attr("id"), h.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = t.attr("id"))
        }
        if (t.is("rect")) {
            var g = r.createRect();
            g.x = t.attr("x") / s.general.naturalWidth * 100, g.y = t.attr("y") / s.general.naturalHeight * 100, g.width = t.attr("width") / s.general.naturalWidth * 100, g.height = t.attr("height") / s.general.naturalHeight * 100, a = g.id, t.attr("id") && (g.title = t.attr("id"), g.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = t.attr("id"))
        }
        if (t.is("circle")) {
            var m = r.createOval();
            m.x = (t.attr("cx") - t.attr("r")) / s.general.naturalWidth * 100, m.y = (t.attr("cy") - t.attr("r")) / s.general.naturalHeight * 100, m.width = 2 * t.attr("r") / s.general.naturalWidth * 100, m.height = 2 * t.attr("r") / s.general.naturalHeight * 100, a = m.id, t.attr("id") && (m.title = t.attr("id"), m.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = t.attr("id"))
        }
        if (t.is("ellipse")) {
            var _ = r.createOval();
            _.x = (t.attr("cx") - t.attr("rx")) / s.general.naturalWidth * 100, _.y = (t.attr("cy") - t.attr("ry")) / s.general.naturalHeight * 100, _.width = 2 * t.attr("rx") / s.general.naturalWidth * 100, _.height = 2 * t.attr("ry") / s.general.naturalHeight * 100, a = _.id, t.attr("id") && (_.title = t.attr("id"), _.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = t.attr("id"))
        }
        if (t.is("path")) {
            var u = r.createPath(t.attr("d"), e, o, i);
            a = u.id, t.attr("id") && (u.title = t.attr("id"), u.tooltip_content.squares_settings.containers[0].settings.elements[0].options.heading.text = t.attr("id"))
        }
        return a
    }, C.prototype.add = function(t) {
        return new C(this.x + t.x, this.y + t.y)
    }, C.prototype.subtract = function(t) {
        return new C(this.x - t.x, this.y - t.y)
    }, C.prototype.scale = function(t) {
        return new C(this.x * t, this.y * t)
    }, C.prototype.normalized = function() {
        var t = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return new C(this.x / t, this.y / t)
    }, C.prototype.dot = function(t) {
        return this.x * t.x + this.y * t.y
    }, C.prototype.closestPointOnLine = function(t, e) {
        function o(t, e) {
            return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
        }
        var i = o(t, e);
        if (0 == i) return o(this, v);
        var r = ((this.x - t.x) * (e.x - t.x) + (this.y - t.y) * (e.y - t.y)) / i;
        return r < 0 ? t : r > 1 ? e : new C(t.x + r * (e.x - t.x), t.y + r * (e.y - t.y))
    }, C.prototype.vector2Args = function(t, e) {
        return t = t || 0, e = e || 0, [this.x + t, this.y + e]
    }
}(jQuery, window, document);
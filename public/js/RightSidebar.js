var RightSidebar = (function() {

    var filterOptionAllFutures = 
        "#filter-option-market-category,"
        + "#filter-option-cot-extreme-analysis,"
        + "#filter-option-long-term-trend,"
        + "#filter-option-vol-ol-analysis"

    var filterOptionSubCategory =
        "#filter-option-cot-change-parameters,"
        + "#filter-option-all-columns"

    function initEventListener () {
        // COT Report Data Type
        // Radio( "#form-control-report-type-classic", function(res) {
        //     if( res ) {

        //     } else {

        //     }
        // })

        // Radio( "#form-control-report-type-tiff", function(res) {
        //     if( res ) {

        //     } else {

        //     }
        // })

        // Radio( "#form-control-report-type-cit", function(res) {
        //     if( res ) {

        //     } else {

        //     }
        // })
        
        Radio(".wcp-form-control-switch", function(res) {
            if( res ) {

            } else {

            }
        })

        $("#wcp-editor-button-menu").click(function() {
            var filerOptionPanel = $("#wcp-editor-right")
                , fancyBodyContent = $(".fancy-panel-body")
                , buttonIcon = $("i.fa", this)

            var fancyBodyWidth = fancyBodyContent.outerWidth()
                , windowOuterWidth = $(window).outerWidth()
            
            var marginWidth = windowOuterWidth - fancyBodyWidth - 260

            if( filerOptionPanel.is(':visible') ) {
                filerOptionPanel.hide()
                fancyBodyContent.css('width', fancyBodyWidth + marginWidth);

                if( buttonIcon.hasClass("fa-arrow-right") ) {
                    buttonIcon.removeClass("fa-arrow-right")
                    if( !buttonIcon.hasClass("fa-arrow-left") )
                        buttonIcon.addClass("fa-arrow-left")
                }

            } else {
                filerOptionPanel.show()
                fancyBodyContent.css('width', fancyBodyWidth - 360);

                if( buttonIcon.hasClass("fa-arrow-left") ) {
                    buttonIcon.removeClass("fa-arrow-left")
                    if( !buttonIcon.hasClass("fa-arrow-right") )
                        buttonIcon.addClass("fa-arrow-right")
                }
            }
        })
    }

    return {
        init: function() {
            initEventListener()
            RightSidebar.hideFilterOptionSubCategory()
        },

        showFilterOptionAllFuture: function() {
            $(filterOptionAllFutures).show()
        },

        hideFilterOptionAllFuture: function() {
            $(filterOptionAllFutures).hide()
        },

        showFilterOptionSubCategory: function() {
            $(filterOptionSubCategory).show()
        },

        hideFilterOptionSubCategory: function() {
            $(filterOptionSubCategory).hide()
        },
    }
})();
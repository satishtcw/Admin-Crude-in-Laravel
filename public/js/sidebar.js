var Sidebar = (function() {
    
    var categoryData = []
        currentLocation = "category_menu_all_futures"

    function getListData() {
        $.ajax({
            url: apiURL,
            method: 'GET',
            success: function(res) {
                categoryData = res
                displayListData()
            },
            failed: function(err) {

            }
        })
    }

    function displayData() {

    }

    return {
        init: function() {
            //getListData()
            //displayData()

            $(".wcp-form-tab-button").click(function() {
                var isClosed = $(this).parent().hasClass('wcp-form-tab-closed')

                if( isClosed ) {
                    $(this).parent().removeClass('wcp-form-tab-closed')
                } else {
                    $(this).parent().addClass('wcp-form-tab-closed')
                }
            })

            $(".category-menu-item").click(function() {
                var obj = $(this)
                    , id = $(this).attr('id')

                $('li', "#wcp-editor-left").removeClass("active")
                obj.addClass("active")
                // DataTable Update
                // Filter Setting Update
				
				
						$("#container").empty()
						SubcategoryTable.init(id)
                        RightSidebar.hideFilterOptionAllFuture()
                        RightSidebar.showFilterOptionSubCategory()
				/*
                switch( id ) {
                    case "category_menu_all_futures":
                        if( currentLocation !== "category_menu_all_futures" ) {
                            $("#container").empty()
                            AllFutureTable.init()
                            currentLocation = "category_menu_all_futures"
                        }

                        RightSidebar.showFilterOptionAllFuture()
                        RightSidebar.hideFilterOptionSubCategory()
                    break;

                    default:
                        if( currentLocation === "category_menu_all_futures" ) {
                            $("#container").empty()
                            SubcategoryTable.init('3')
                            currentLocation = "subcategory"
                        }

                        RightSidebar.hideFilterOptionAllFuture()
                        RightSidebar.showFilterOptionSubCategory()
                    break;
                }    */     
            })
        }
    }
})();
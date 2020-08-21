
function Radio(selector, callback) {
    
    $(selector).click(function() {
        if( $(this).hasClass('active') ) {
            
            $(this).removeClass('active')
            callback(false)
        
        } else {
            
            $(this).addClass('active')
            callback(true)
        
        }
    })
    
}
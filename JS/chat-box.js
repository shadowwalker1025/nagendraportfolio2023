$(document).ready(function(){
    $('.chat_icon').click(function(event){
        $('.chat_box').toggleClass('active_chatbox')
    })
    $('.conv-form-wrapper').convform({selectInputStyle: 'disable'});
});
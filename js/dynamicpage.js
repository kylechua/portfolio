$(function() {

    $(document).ready(function() {

        $('.menu-item a').click(function(e) {
            e.preventDefault();
            $('#content').load(e.target.href);
            $(document).prop('title', $(e.target).attr("name"));
            $('#headerimg').attr({"src": "images/smolsprite.png"});
        });

        $('#btnHome').click(function(e) {
            e.preventDefault();
            $('#content').html("");
            $(document).prop('title', "Kyle Chua");
            $('#headerimg').attr({"src": "images/bigsprite.png"});
        })

    });

});
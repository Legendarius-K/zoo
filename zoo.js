/* Global JS file, must be included in all pages */
$(() => {

    $(".side-bar-animal").on("click", function() {
        $(".side-bar-animal").removeClass("active");
        $(this).addClass("active");
    });
});
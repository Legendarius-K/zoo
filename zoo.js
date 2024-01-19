/* Global JS file, must be included in all pages */
$(() => {

    $(".side-bar-animal").on("click", function() {
        $(".side-bar-animal").removeClass("active");
        $(this).addClass("active");
    });

    const toggleOverflow = () => {
        const body = document.body;
        body.style.overflow = menuToggle.checked ? "hidden" : "auto";
    };

    document.getElementById("menuToggle").addEventListener("click", toggleOverflow);
});
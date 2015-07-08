$( document ).ready(function() {

    switchSection();
    goToHomePage();



    function switchSection(){
        $(".nav-selection").on("click", function() {
            // hide all sections
            $(".section").addClass("hidden");
            // only shows selected section
            var buttonValue = $(this).attr("name");
            $("." + buttonValue + "-section").removeClass("hidden");
        });
    }

    function goToHomePage(){
        $(".logo").on("click", function() {
            console.log("test");
        });
    }
});
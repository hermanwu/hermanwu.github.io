$( document ).ready(function() {

    //startPage();

    switchFrame();



    function startPage(){

        //$(".section").fadeIn("slow");

    }


    //switchSection();
    //goToHomePage();

    function switchFrame(){
        var iframe = $("#projects-page-iframe");
        $(".project-button").on("click", function() {
            $(".project-button").removeClass("active");
            var selectedProject = $(this);
            var website = selectedProject.attr("value");
            selectedProject.addClass("active");
            iframe.attr("src", website, function(){
                this.fadeIn("slow");
            });
        });

        //console.log(iframe.contents().height() + 'is the height');
        //iframe.attr("src", "http://www.cnn.com");
    }



    /*
    function switchSection(){
        $(".nav-selection").on("click", function() {
            // hide all sections
            $(".section").hide();
            // only shows selected section
            var clicked = $(this).attr("name");
            $("." + clicked + "-section").fadeIn("slow");

        });
    }

    function goToHomePage(){
        $(".section").hide();
        $(".home-page-section").fadeIn("slow");

        $(".logo-anchor").on("click", function() {
            $(".section").hide();
            // only shows selected section
            $(".home-page-section").fadeIn("slow");
        });
    }
    */
});
$( document ).ready(function() {

    readUrl();
    switchSection();

    function readUrl(){
        urlSectionInfo = window.location.search.slice(1);
        if(urlSectionInfo.length > 0 && $("."+urlSectionInfo).length > 0 ) {
            var selectedSectionDom = $("."+urlSectionInfo);
            if(selectedSectionDom.length > 0) {
                $(".project-button").removeClass("active");
                selectedSectionDom.addClass("active");
                var website = "project/" + selectedSectionDom.attr("value");
                switchiframe($("#projects-page-iframe"), website);
            }
        }
    }


    function switchSection(){
        var iframe = $("#projects-page-iframe");
        $(".project-button").on("click", function() {
            var selectedProject = $(this);
            var selectedProjectValue = selectedProject.attr("value");
            location.href = "projects.html?" + selectedProjectValue.substring(0, selectedProjectValue.length-5);
        });
    }

    function switchiframe(iframe, website) {
            iframe.attr("src", website);
            iframe.hide();
            iframe.fadeIn("slow");
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
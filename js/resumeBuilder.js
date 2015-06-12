// created by Herman Wu

var bio = {
	"name": "Herman Wu",
	"role": "Typical Asian who likes Design",
	"contacts": {
		"mobile": "678-986-1999",
		"email": "herman.wrt@gmail.com",
		"github": "hermanwu",
		"location": "Washington D.C."
	},
	"welcomeMessage":" 😄😄😄 If you are interested in knowing more about me 😄😄😄",
	"skills": ["Photograph", "Graphic Design", "Lego Building", "Water Sports", "Cooking Chinese Food"],
	"bioPic": "images/herman.jpg",
}

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);


	// contact html
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLgithub.replace("%data%", bio.contacts.location);
	//
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}



var work = {
	"jobs":[
		{
			"title": "Technical Account Manager",
			"employer": "VMware - AirWatch",
			"employerWebsite": "https://www.vmware.com/enterprise-mobility-management",
			"dates":  "JAN 2014 - APR 2015",
			"description": "Act as a single point of contact for 4 enterprise level customers",
			"location": "Atlanta, GA, US"
		},
		{
			"title": "Software Engineer Co-op",
			"employer": "CafePress",
			"employerWebsite": "https://www.cafepress.com",
			"dates": "JAN 2012 - AUG 2013",
			"description": "build supply chain management software using Visual Studio",
			"location": "Shanghai, China"
		},
		{
			"title": "Student Researcher",
			"employer": "UPS",
			"employerWebsite": "https://www.ups.com",
			"dates": "JAN 2013 - MAY 2013",
			"description": "Package flow modeling and simulation, aircraft ",
			"location": "Metz, France"
		}
	]
};

work.display = function()
{
	if(work.jobs.length > 0){
		$("#workExperience").append(HTMLworkStart);
		for(jobIndex in work.jobs){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedWithUrl = formattedEmployerTitle.replace("#", work.jobs[jobIndex].employerWebsite)
			$(".work-entry:last").append(formattedWithUrl);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobIndex].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var project = {
	"projects":[
		{
		 	"title": "Lego London Tower Bridge",
		 	"dates": "JAN 2014",
		 	"description": "One of the largest Lego sets",
		 	"images": [
		 	"http://ecx.images-amazon.com/images/I/91YSGYQaqLL._SL1500_.jpg",
		 	"http://cache.lego.com/r/www/r/creator/-/media/franchises/creator/products/10214/10214_scala.jpg"
		 	]
		}
	]
};

project.display = function(){
	if(project.projects.length > 0){
		$("#projects").append(HTMLprojectStart);
		for(projectIndex in project.projects){
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[projectIndex].title);
			$(".project-entry:last").append(formattedTitle);
	
			var formattedDates = HTMLprojectDates.replace("%data%", project.projects[projectIndex].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[projectIndex].description);
			$(".project-entry:last").append(formattedDescription);
			
			for(projectImageIndex in project.projects[projectIndex].images){
				var formattedImage = HTMLprojectImage.replace("%data%", project.projects[projectIndex].images[projectImageIndex]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}


var education = {
	"schools": [
		{
			"name": "Georgia Tech",
			"location": "Atlanta, GA, US",
			"degree": "B.A.",
			"major": ["Computer Science"],
			"dates": 2013,
			"url": ""
		},
		{
			"name": "Georgia Tech",
			"location": "Atlanta, GA, US",
			"degree": "B.A.",
			"major": ["Industrial Engineering"],
			"dates": 2012,
			"url": ""
		}
	],
	"onlineCourses": [
		{
			"title": "Model Thinking",
			"school": "Coursera",
			"date": "2015",
			"url": "https://www.coursera.org/course/modelthinking",
			"certifcateUrl": "Expected: Nov 2015"
		},
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
			"certifcateUrl": "Expected: AUG 2015"
		}
	]
};

education.display = function(){
	if(education.schools.length > 0){
		$("#education").append(HTMLschoolStart);
		//iterate through schools
		for(schoolIndex in education.schools){
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolIndex].name);
			$(".education-entry:last").append(formattedSchoolName);
	
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schoolIndex].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolIndex].degree);
			$(".education-entry:last").append(formattedSchoolDegree);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolIndex].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolIndex].major[0]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	if(education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		for(courseIndex in education.onlineCourses){
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courseIndex].title);
			var formattedWithUrl = formattedTitle.replace("#", education.onlineCourses[courseIndex].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courseIndex].school);
			var formattedTitleWithSchool = formattedWithUrl + formattedSchool;
	    	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courseIndex].date);
			var formattedCertificateURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courseIndex].certifcateUrl);

			$(".education-entry:last").append(formattedTitleWithSchool);
			$(".education-entry:last").append(formattedDates); 
			$(".education-entry:last").append(formattedCertificateURL);
		}

	}
}




bio.display();
work.display();
project.display();
education.display();
$("#mapDiv").append(googleMap);
initializeMap();




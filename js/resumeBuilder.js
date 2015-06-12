//Object Definitions
var bio = {
	"name" : "Pooja Mehta",
	"role" : "Front End Developer",
	"contacts" : {
		"mobile" : "0123456789",
		"email" : "to.poojamehta@gmail.com",
		"github" : "pooja0131",
		"twitter" : "@PoojaShukla09",
		"location" : "Jersey City, NJ"
	},
	"welcome_message" : "Welcome to my Resume!",
	"skills" : ["HTML & CSS", "Javascript", "jQuery", "Python"],
	"bioPic" : "images/title-img.jpg"
}

var work = {
	"jobs":[
	{
		"employer" : "C-DAC",
		"title"  : "Trainee",
		"location" : "Pune",
		"dates" : "December 2008 - April 2009",
		"descriprion" : "Worked on C-DAC Medical Informatics Standards Software Development Kit for DICOM, a toolkit that provides APIs for applications/ medical devices to comply with NEMA DICOM Standard."
	},
	{
		"employer" : "Aadhya (My Daughter)",
		"title"  : "Mother",
		"location" : "Jersey City",
		"dates" : "2013 - Future",
		"descriprion" : "Being Mother to Aadhya. It is a lifetime job and also the coolest job ever! "
	}]
}

var projects = {
	"projects":[
	{
		"title" : "Hello World",
		"dates" : "May 2015",
		"description" : "This was my first assignment in the class. Through this assignment I learned how to write a basic HTML and CSS and how to link them. I also learned how to upload a project using github.",
		"images" : []
	},
	{
		"title" : "Line Around Text",
		"dates" : "May 2015",
		"description" : "HTML page designed to draw line around text. I wanted to have line around text to make it look better. So I tried and tested it here.",
		"images" : []
	},
	{
		"title" : "Mockup Portfolio",
		"dates" : "May 2015",
		"description" : "HTML Portfolio mockup page. Doing this I learned bootstrap framework.",
		"images" : []
	},
	{
		"title" : "My Portfolio",
		"dates" : "May 2015",
		"description" : "My Portfolio page. this was the first project for completing the Front end Nanodegree. ",
		"images" : []
	}]
}

var education = {
	"schools": [
	{
		"name" : "GGS Indraprastha University",
		"location" : "New Delhi",
		"degree" : "Bachelor of Computer Science(BCA)",
		"majors" : ["Computer Science"],
		"minor" : ["Physics"],
		"dates" : "2003 - 2006",
		"url" : "http://www.jimsd.org/index.php"
	},
	{
		"name" : "BVP University",
		"location" : "Pune",
		"degree" : "Master of Computer Science(MCA)",
		"majors" : ["Computer Science"],
		"minor" : ["English"],
		"dates" : "2006 - 2009",
		"url" : "http://imed.bharatividyapeeth.edu/default.aspx"
	},
	{
		"name" : "IIT Kharagpur",
		"location" : "Kharagpur",
		"degree" : "Computer Network Management",
		"majors" : ["Network Management"],
		"minor" : [],
		"dates" : "15,June 2007 - 9,July 2007",
		"url" : "http://www.nettech.in/"
	}],
  
	"onlineCourses" : [
	{
		"title" : "Front End Developer NanoDegree",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Introduction to HTML & CSS",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Responsive Images",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "How to use Git and Github",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Intro to Computer Science",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Programming Foundations with Python",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Intro to jQuery",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com"
	}]
}


//Encapsulated functions
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
	var formattedMoblie = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	
	$("#header").prepend(formattedName + formattedRole);
	$(".header-content").prepend(formattedMessage);
	$("#topContacts").append(formattedMoblie + formattedEmail + formattedGithub + formattedTwitter + formattedlocation);
	$("#header").prepend(formattedBioPic);
		
    /*$("#header").append(HTMLskillsStart);
	if(bio.skills.length > 0){
		for(skill in bio.skills){				
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}*/
};

work.display = function(){
	for(job in work.jobs){
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descriprion);
		
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer);
		$(".work-entry:last").append(formattedWorkTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};

projects.display = function(){
	for(project in projects.projects){
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

education.display = function(){
	//Show education content
	$("#education").append('<div class="education-content"></div>');
	$(".education-content").append(HTMLschoolStart);
	for(school in education.schools){
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[school].url);
		var formattedMajors = [];
		if(education.schools[school].majors.length > 0){
			for(major in education.schools[school].majors){
				formattedMajors.push(HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]));
			}
		}
				
		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		
		for(major in formattedMajors){
			$(".education-entry:last").append(formattedMajors[major]);
		}
		$(".education-entry:last").append(formattedUrl);
	}
	//Show Online Course content	
	$(".education-content").append(HTMLonlineClasses);
	var count = 0;
	for(onlineCourse in education.onlineCourses){
		if(count === 0){
				$(".education-content").append('<div class="education-entry"></div>');
		}
		$(".education-entry:last").append('<div class="online-entry"></div>');	
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
					
		$(".online-entry:last").append(formattedTitle + formattedSchool);
		$(".online-entry:last").append(formattedDate);
		$(".online-entry:last").append(formattedUrl);
				
		count = count + 1;
		if(count === 1){
			count = 1;
		}
	}
};

//Invoke functions and append Google Maps
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
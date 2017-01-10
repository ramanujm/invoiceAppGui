/**
 * This file contains applications common variable and pages get/post methods.
 */

var serviceURL = "http://ec2-35-160-18-61.us-west-2.compute.amazonaws.com:8080/invoiceapp/register";

function registerB() {
	  jQuery.ajax ({
	   url: serviceURL,
	    //url: "http://localhost:9091/register",
	    type: "POST",
	    data: JSON.stringify({ username: "John", password: "test" , industry : "wiring" }),
	    dataType: "json",
	    contentType: "application/json; charset=utf-8",
	    success: function(data){
		    if (data.result == 'Success')
	    	     $.mobile.changePage("home.html", { transition: "slideup", changeHash: false });
		    else{
                 //show the alerts or error message;;
			    }
			    		    
	      //  alert(data.result);
	       // alert(data.code);
	    },
	    error : function(error) {
		}
	});	
}
function estimate() {
	   $.mobile.changePage("home.html", { transition: "slideup", changeHash: false });
}
function clients() {
	   $.mobile.changePage("clients.html", { transition: "slideup", changeHash: false });
}
function invoice() {
	   $.mobile.changePage("invoice.html", { transition: "slideup", changeHash: false });
}
function settings() {
	   $.mobile.changePage("settings.html", { transition: "slideup", changeHash: false });
}

function register() {
	   $.mobile.changePage("home.html", { transition: "slideup", changeHash: false });
}

function myAccountPage() {
	   $.mobile.changePage("accountSettings.html", { transition: "slideup", changeHash: false });
}

function myCompanyPage() {
	   $.mobile.changePage("companySettings.html", { transition: "slideup", changeHash: false });
}

function preferncePage() {
	   $.mobile.changePage("preferenceSettings.html", { transition: "slideup", changeHash: false });
}

function docSettingsPage() {
	   $.mobile.changePage("docSettings.html", { transition: "slideup", changeHash: false });
}

function itemsPage() {
	   $.mobile.changePage("itemSettings.html", { transition: "slideup", changeHash: false });
}

function helpPage() {
	   $.mobile.changePage("helpPage.html", { transition: "slideup", changeHash: false });
}

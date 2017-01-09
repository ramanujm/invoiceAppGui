/**
 * This file contains applications common variable and pages get/post methods.
 */

var serviceURL = "http://homechichester.chickenkiller.com:59091/register";

function register() {
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
function validateform() {
	var a=document.forms["myform"]["fname"].value;
	if(a==null||a==""){
		alert("htis is required");
		return false;
	}
	
}
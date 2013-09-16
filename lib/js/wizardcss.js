$(function () {
	//Dropdown menu -Script-
	$(".bt-menu-dropdown").toggle(

		function(){
			$(".navbar-top-comps").addClass("menu-dropdown-active");
		},
		function(){
			$(".navbar-top-comps").removeClass("menu-dropdown-active");
		}

	);
});
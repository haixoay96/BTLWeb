// $(document).ready(function(){
// 	$("img.tree-toggle").click(function(){
// 		if (this.nextSibling.nextSibling.nextSibling.style.display == "") {
// 			this.nextSibling.nextSibling.nextSibling.style.display = "none";
// 			this.src = "images/plus.gif";
// 		} else {
// 			this.nextSibling.nextSibling.nextSibling.style.display = "";
// 			this.src = "images/minus.gif";
// 		}
// 	});
// });

$(document).ready(function(){
/*	$("a.tree-toggle1").click(function(){
		$("li.no-child1").toggle();
	});
	$("a.tree-toggle2").click(function(){
		$("li.no-child2").toggle();
	});*/
	$('#tree').click(function (event) {
		 var id = event.target.id;
		 if(id !== undefined){
			// $('#'+id).toggle();
		 }
	});
});

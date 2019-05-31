//will assign css class .selection to the odd numbered table rows
 $(document).ready(function(){
    $("tr:nth-child(even)").addClass("selection-red");
    $("tr:nth-child(odd)").addClass("selection-pink");
    $("th").click(function(){
     	$("tr").children().removeClass("selection")
    	$(this).siblings().addClass("selection");

});
    
  });
$(document).ready(function(){
  function lunbo() {
  	$("#csContainer").animate({left:'-=122'}, 800, function() {
      $(this).find("a:first").appendTo($(this)).parent().css("left", "0");
    });
  }
  $("#csContainer").hover(function(){
  	clearInterval(t);
  }, function() {
  	t = setInterval(lunbo, 1600);
  })

  var t = setInterval(lunbo, 1600);

  function bgLunbo(index) {
    $("#index span").eq(index).addClass("on").siblings().removeClass("on")
                    .parent().parent().parent()
                    .removeClass().addClass("pp"+index);
  }

  $("#index span").click(function() {
  	clearInterval(t2);
    var index = $(this).index();
    bgLunbo(index);

    return false;
  });

  function loop2() {
  	var index = $("#index .on").index();
    index = index == 2 ? 0 : index+1;
    bgLunbo(index);
  }

  var t2 = setInterval(loop2, 2000);
});
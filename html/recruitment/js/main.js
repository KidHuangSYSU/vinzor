$(document).ready(function(){
  $(".linav").click(function(){
    $(this).find(".ss1").removeClass("ss1").addClass("sss1").end()
           .next().slideDown().parent().siblings()
           .find(".sss1").removeClass("sss1").addClass("ss1").end()
           .find(".text").slideUp();
  });
  $(".items li:first .linav").click();
});
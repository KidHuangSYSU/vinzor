$(document).ready(function(){
  $("._form input[type=button]").click(function() {
    if ($(this).prevAll(".ok").length == 4) {
      alert("submit successfully");
      $("input[name='_name']").val('').next().removeClass("err ok");
      $("input[name='_email']").val('').next().removeClass("err ok");
      $("input[name='_phone']").val('').next().removeClass("err ok");
      $("textarea").val('').next().removeClass("err ok");
    }
  });

  $("input[name='_name']").blur(function() {
    var str = $(this).val();
    if (str.length < 6 || str.length > 10) {
      $(this).val('').next().addClass("err").removeClass("ok").text("Error");
    } else {
      $(this).next().removeClass("err").addClass("ok").text("OK");
    }
  });

  $("input[name='_email']").blur(function() {
    var str = $(this).val();
    if (str.search(/^(\w)+(\.\w+)*@(\w)+((\.\w{2,4}){1,3})$/) === -1) {
      $(this).val('').next().addClass("err").removeClass("ok").text("Error");
    } else {
      $(this).next().removeClass("err").addClass("ok").text("OK");
    }
  });  

  $("input[name='_phone']").blur(function() {
    var str = $(this).val();
    if (str.search(/^[1][358][0-9]{9}$/) === -1) {
      $(this).val('').next().addClass("err").removeClass("ok").text("Error");
    } else {
      $(this).next().removeClass("err").addClass("ok").text("OK");
    }
  }); 

  $("textarea").blur(function() {
    var str = $(this).val();
    if (str.length == 0) {
      $(this).next().addClass("err").removeClass("ok").text("No message");
    } else {
      $(this).next().removeClass("err").addClass("ok").text("OK");
    }
  });   
});
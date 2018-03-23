$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var age = $("#age").val();
    var phpTrack1 = $("#php-track1").val();
    var phpTrack2 = $("#php-track2").val();
    var javaTrack1 = $("#java-track1").val();
    var cssTrack1 = $("#css-track1").val();
    console.log(name);
    console.log(age);
    console.log(phpTrack1);
    console.log(phpTrack2);
    console.log(javaTrack1);
    console.log(cssTrack1);

  });
});

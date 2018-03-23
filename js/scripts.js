$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var campus = $("#campus").val();
    var phpTrack1 = $("#php-track1").val();
    var javaTrack1 = $("#java-track1").val();
    var cssTrack1 = $("#css-track1").val();
    var result;

    // hide results from any previous attempts
    $("#trackPHP").hide();
    $("#trackJava").hide();
    $("#trackCSS").hide();
    $("#undecided").hide();

    // add name and campus values
    $(".name").text(name);
    $(".campus").text(campus);

    console.log(name);
    console.log(campus);
    console.log(phpTrack1);
    console.log(javaTrack1);
    console.log(cssTrack1);

    // determine result value
    if (phpTrack1 === "true" && cssTrack1 === "false" && javaTrack1 === "false") {
      result = "php";
    }

    else if (phpTrack1 === "false" && cssTrack1 === "false" && javaTrack1 === "true") {
      result = "java";
    }

    else if (phpTrack1 === "false" && cssTrack1 === "true" && javaTrack1 === "false") {
      result = "css";
    }

    else if (phpTrack1 === "true" && cssTrack1 === "true" && javaTrack1 === "true") {
      result = false;
    }

    else {
      result = false;
    }

    console.log(result);

    // determine which result to display
    if (result === "php") {
      $("#trackPHP").show();
    }

    else if (result === "java") {
      $("#trackJava").show();
    }

    else if (result === "css") {
      $("#trackCSS").show();
    }

    else {
      $("#undecided").show();
    }

  });
});

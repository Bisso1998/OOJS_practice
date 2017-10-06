var Course = {};

$( document ).ready(function() {
    console.log( "ready!" );
    var i=0;
    var courseName = "NULL", courseCode = "NULL";
    // makes the DOM ready for manipulation
    $('.addData > input').addClass('courseData');
    console.log("i am out!!!");
    $( '#showAll' ).click(function() {
      var allInputs = $( "input.courseData" );
      // storing all the inputs in an array allInputs by the class name courseData
      console.log(allInputs[0].value);
      // extracting the values indexwise from the array
      console.log(allInputs[1].value);
      console.log(allInputs);
      courseName = allInputs[0].value;
      courseCode = allInputs[1].value;
      Course[i]  = {
        name : courseName,
        code : courseCode,
      };
      $( "#addCards" ).append( "Added " + Course[i].name + " with course code "+ Course[i].code + "<br>");
      i++;
    });
    // adding courseData class to all input fields under addData class
});

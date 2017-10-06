var Course = {};
$(document ).ready(function() {
    console.log( "ready!" );
    var i=0;
    var courseName = "NULL", courseCode = "NULL";
    deleteRec =     function () {
         console.log("Deleted!");
       }
    // makes the DOM ready for manipulation
    $('.addData > input').addClass('courseData');
    console.log("i am out!!!");

    $( '#showAll' ).click(function() {
      var allInputs = $( "input.courseData" );
      // storing all the inputs in an array allInputs by the class name courseData
      // extracting the values indexwise from the array
      courseName = allInputs[0].value;
      courseCode = allInputs[1].value;
      Course[i]  = {
        name : courseName,
        code : courseCode,
      };
      $( "#addCards" ).append( "<p id=" +i+  "> Added " + Course[i].name + " with course code "+ Course[i].code + "  <button id="+ i +  " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "<br> </p>");
      i++;
    });
    // adding courseData class to all input fields under addData class
});
function deleteMe(i) {
  delete Course[i];
  $('#'+i).remove();

}

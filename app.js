var Course = {};
$(document ).ready(function() {
    console.log( "ready!" );
    var i=0;
    var courseName = "NULL", courseCode = "NULL";
    deleteRec =     function () {
         console.log("Deleted!");
       }
    $('.addData > input').addClass('courseData');
    console.log("i am out!!!");

    $( '#showAll' ).click(function() {
      var allInputs = $( "input.courseData" );
      courseName = allInputs[0].value;
      courseCode = allInputs[1].value;
      Course[i]  = {
        name : courseName,
        code : courseCode,
      };
      $( "#addCards" ).append( "<p id=" +i+"p"+  "> Added " + Course[i].name + " with course code "+ Course[i].code + "  <button id="+ i +  " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "  <button id="+ i +  " "+'onclick="editMe('+ i +')"' +'> Edit </button>'+  "<br> </p>");
      i++;
    });
});
function deleteMe(i) {
  delete Course[i];
  $('#'+i+"p").remove();
};
function editMe(i) {
  var name = prompt("Enter name....");
  Course[i].name = name;
  $( "#"+i+"p" ).html( "<p id=" +i+ "p"+ "> Added " + Course[i].name + " with course code "+ Course[i].code + "  <button id="+ i + "p" + " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "  <button id="+ i + "p" +  " "+'onClick="editMe('+ i +')"' +'> Edit </button>'+  "<br> </p>");
}

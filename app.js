var Course = {};
var count = 0;
$(document ).ready(function() {
    console.log( "ready!" );
    var i=0;
    var courseName = "NULL", courseCode = "NULL";
    $('.addData > input').addClass('courseData');
    $( '#showAll' ).click(function() {
      var allInputs = $( "input.courseData" );
      courseName = allInputs[0].value;
      courseCode = allInputs[1].value;
      Course[i]  = {
        name : courseName,
        code : courseCode,
      };
      count++;
      $( "#addCards" ).append( "<p id=" +i+"p"+  "> Added " + Course[i].name + " with course code "+ Course[i].code + "  <button id="+ i +  " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "  <button id="+ i +  " "+'onclick="editMe('+ i +')"' +'> Edit </button>'+  "<br> </p>");
      i++;
    });
    $('#sortUs').click(function() {
      console.log("Hello is selected");
      var code = [],k=0;
      for(var i=0;i<count;i++)
      {
        code[i] = Course[i].code;
      }
      console.log("code is: "+ code);
      // code = code.filter(function( element ) {
      //   return element !== undefined;
      // });
      code  = code.sort();
      console.log("sorted: " + code);
      // for(var i=0;i<count;i++)
      // {
      //
      // }
      // $( "#sortedCards" ).append( "<p id=" +i+"p"+  "> Added " + Course[i].name + " with course code "+ Course[i].code + "  <button id="+ i +  " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "  <button id="+ i +  " "+'onclick="editMe('+ i +')"' +'> Edit </button>'+  "<br> </p>");

    });
});
function deleteMe(i) {
    // Course.splice(i,1);
  delete Course[i];
  // Course.splice(i,1);
  $('#'+i+"p").remove();
  count--;
};
function editMe(i) {
  var name = prompt("Enter name....");
  Course[i].name = name;
  $( "#"+i+"p" ).html( "<p id=" +i+ "p"+ "> Added " + Course[i].name + " with course code "+ Course[i].code + "  <button id="+ i + "p" + " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "  <button id="+ i + "p" +  " "+'onClick="editMe('+ i +')"' +'> Edit </button>'+  "<br> </p>");
}

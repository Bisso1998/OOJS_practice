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
      $( "#addCards" ).append( "<li><p id=" +i+"p"+  "> Added " + Course[i].name + " with course code "+ Course[i].code + "  <button id="+ i +  " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "  <button id="+ i +  " "+'onclick="editMe('+ i +')"' +'> Edit </button>'+  "<br> </p></li>");
      i++;
    });

});
function deleteMe(i) {
    // Course.splice(i,1);
  delete Course[i];
  // Course.splice(0,1);
  // Course.splice(i,1);
  $('#'+i+"p").remove();
  count--;
};
function editMe(i) {
  var name = prompt("Enter name....");
  Course[i].name = name;
  $( "#"+i+"p" ).html( "<li><p id=" +i+ "p"+ "> Added " + "<b>"+ Course[i].name + "</b>" + " with course code "+ Course[i].code + "  <button id="+ i + "p" + " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "  <button id="+ i + "p" +  " "+'onClick="editMe('+ i +')"' +'> Edit </button>'+  "<br> </p><li>");
}

function searchAll() {
  console.log("Input keyup");
  var input, filter, ul, li, p, i;
  input = document.getElementById('inputTake');
  filter = input.value.toUpperCase();
  ul = document.getElementById("addCards");
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
      p = li[i].getElementsByTagName("p")[0];
      console.log("val of p is "+ p.innerHTML);
      // a =  li[i].getElementById('sarchMe');
      if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

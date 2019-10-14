var message = '';
var student;

function print(message) {
  //document.write(message);
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for(var prop in students)
{
  
   message += '<h2>Name: ' + students[prop].name +'</h2>';
   message += '<p>track: ' + students[prop].track + '</p>';
   message += '<p>achievments: ' + students[prop].achievments + '</p>';
   message += '<p>points: ' + students[prop].points + '</p>';
   print(message);
}

//teacher's solution  
//for (var i = 0; i < students.length; i +=1)
//{
//  student = students[i];
//  message += '<h2>Name: ' + student.name +'</h2>';
//  message += '<p>track: ' + student.track + '</p>';
//  message += '<p>achievments: ' + student.achievments + '</p>';
//  message += '<p>points: ' + student.points + '</p>';
//  print(message);
//}
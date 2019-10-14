var message = '';
var search;

function print(message) {
  //document.write(message);
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//message += '<p>You typed: ' + search + '</p>';

while (true)
{
  search = prompt('Search student records type a name (or type "quit" to end).');
  search = search.toLocaleLowerCase();
  for(var prop in students)
  {
     if (search === students[prop].name.toLocaleLowerCase())
     {
       message += '<h2>Name: ' + students[prop].name +'</h2>';
       message += '<p>track: ' + students[prop].track + '</p>';
       message += '<p>achievments: ' + students[prop].achievments + '</p>';
       message += '<p>points: ' + students[prop].points + '</p>';
     }
    else if (search === 'quit')
    {
      break;
    }
    {
      message = '<p>Stuent not found.</p>';
    }
    
    print(message);
  }
}


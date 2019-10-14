var students = [
  {
    name: 'Troy Rios',
    track: 'Front-End Web Development',
    achievments: 13,
    points: 689
  },
  {
    name: 'Debbie Worthing',
    track: 'iOS Development',
    achievments: 40,
    points: 6969
  },
  {
    name: 'Cassiah Allison',
    track: 'Web Design',
    achievments: 18,
    points: 6913
  },
  {
    name: 'Keturah Duffin',
    track: 'Mobile Development',
    achievments: 25,
    points: 1013
  },
  {
    name: 'Dustin Rios',
    track: 'CMS Development',
    achievments: 55,
    points: 3056
  },
];
  
function print(message) {
  document.write(message);
}
  
 var message = '';
 for(var prop in students)
{
   message = '<h2>Name: ' + students[prop].name +'</h2>';
   message += '<p>track: ' + students[prop].track + '</p>';
   message += '<p>achievments: ' + students[prop].achievments + '</p>';
   message += '<p>points: ' + students[prop].points + '</p>';
   print(message);
}
  
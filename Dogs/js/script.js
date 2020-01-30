console.log('Hey my script is working');

var dogs = [
{
    name: 'Britty',
    id  :  101,
    breed: 'Australian Bulldog',
    Age  :  40,
    photo:  "images/p1.jpeg",
    height:  40
},
{
    name: 'Browny',
    id  :  102,
    breed: 'British Bulldog',
    Age  :  55,
    photo:  "images/p2.jpeg",
    height:  50
},
{
    name: 'Alasky',
    id  :  103,
    breed: 'American Staffordshire',
    Age  :  25,
    photo:  "images/p3.jpeg",
    height:  42
},
{
    name: 'Beagie',
    id  :  104,
    breed: 'Beagle',
    Age  :  44,
    photo:  "images/p4.jpeg",
    height:  27
},
{
    name: 'Rusky',
    id  :  105,
    breed: 'Australian Bulldog',
    Age  :  57,
    photo:  "images/p5.jpeg",
    height:  30
}
];

//All Dogs

function allDogs(){
  document.getElementById('dogs').innerHTML = " ";
  for (var i = 0; i < dogs.length; i++) {
    document.getElementById('dogs').innerHTML
    += '<h4 class= "text-danger ml-5 mt-5">&nbsp;&nbsp;&nbsp;&nbsp;' + dogs[i].name + '</h4>'
    +  '<div class= "row border border-info rounded-pill mb-5">'
    +  '<div class= "col">'
    +  '<img class= "img-thumbnail ml-5 mt-4 myDogs" src="' + dogs[i].photo + '" alt="Dog"/>'
    +  '</div>'
    +  '<div class= "col">'
    +  '<br><h4 class= "text-danger">Breed: ' + dogs[i].breed + '</h4>'
    +  '<br><h4 class= "text-danger">Age:' + dogs[i].Age + '</h4>'
    +  '<br><h4 class= "text-danger">Height: ' + dogs[i].height + ' cm</h4>';
    +  '</div>'
  }
}


document.getElementById('all').addEventListener('click', function(){
  allDogs();
})

document.getElementById('bullDog').addEventListener('click', function(){
  document.getElementById('dogs').innerHTML = " ";
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed.indexOf("Bulldog") > (-1)) {
      console.log('hey bulldog');
      document.getElementById('dogs').innerHTML
      += '<h4 class= "text-success ml-5 mt-5 border border-info rounded-pill ">&nbsp;&nbsp;&nbsp;&nbsp;' + dogs[i].name + '</h4>'
      +  '<div class= "row mb-5 sec">'
      +  '<div class= "col">'
      +  '<img class= "img-thumbnail ml-5 mt-4 myDogs" src="' + dogs[i].photo + '" alt="Dog"/>'
      +  '</div>'
      +  '<div class= "col">'
      +  '<br><h4 class= "text-danger">Breed: ' + dogs[i].breed + '</h4>'
      +  '<br><h4 class= "text-danger">Age:' + dogs[i].Age + '</h4>'
      +  '<br><h4 class= "text-danger">Height: ' + dogs[i].height + ' cm</h4>';
      +  '</div>'
    }
  }
});

document.getElementById('age').addEventListener('click', function(){
  document.getElementById('dogs').innerHTML = " ";
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].Age >= 50) {
      console.log('Age >=50');
      document.getElementById('dogs').innerHTML
      += '<h4 class= "text-success ml-5  mt-5 border border-info rounded-pill ">&nbsp;&nbsp;&nbsp;&nbsp;' + dogs[i].name + '</h4>'
      +  '<div class= "row mb-5">'
      +  '<div class= "col">'
      +  '<img class= "img-thumbnail myDogs ml-5 mt-4" src="' + dogs[i].photo + '" alt="Dog"/>'
      +  '</div>'
      +  '<div class= "col">'
      +  '<h4 class= "text-danger">breed: ' + dogs[i].breed + '</h4>'
      +  '<h4 class= "text-danger">Age: ' + dogs[i].Age + '</h4>'
      +  '<h4 class= "text-danger">Height: ' + dogs[i].height + ' cm</h4>';
    }
  }
});


//Change name

document.getElementById('changeName').addEventListener('click', function(){
  var oldName = document.getElementById('oldName').value;
  var newName = document.getElementById('newName').value;
  console.log(oldName, newName);
  //document.getElementById('dogs').innerHTML = " ";
  for (var i = 0; i < dogs.length; i++) {
  if (oldName === dogs[i].name) {
      dogs[i].name = newName;
      alert('Name has been changed successfully');
    }
  }
  allDogs();
});

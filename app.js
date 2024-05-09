let persons = [

{name :" ELLLEY",
 age : 22 ,
 hobby : "reading book",   
},


{name :" ewLEY",
 age : 25 ,
 hobby : "SWIMMING",   
},



{name :" QWLLEY",
 age : 24 ,
 hobby : "HOCKEY",   
},



{name :" RLLLEY",
 age : 28 ,
 hobby : "CRICKET",   
}


]
const div = document.querySelector('div')


for (let i = 0; i < persons.length; i++) {

    console.log(persons[i].name);
    console.log(persons[i].age);
    console.log(persons[i].hobby);
  div.innerHTML +=`  <h1>${persons[i].name}</h1><h2> AGE IS ${persons[i].age}</h2> <h2>HOBBY IS ${persons[i].hobby}</h2> <hr> `
    
}
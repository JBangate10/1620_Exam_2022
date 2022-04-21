// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here

document.getElementById('contactname').value = contactList.name;
document.getElementById('contactphone').value = contactList.phone;
document.getElementById('contactaddress').value = contactList.address;
document.getElementById('contactemail').value = contactList.email;

function createSingleIndex(Contact) {

  let a = document.createElement('a')
      a.href ="page3.html"
  
  let div = document.createElement('div')
      div.classList.add("contact")
      
  let p = document.createElement('p')
      p.textContent = Contact.name
   
      a.append(div)
      div.append(p)
    
  return a
}


function renderView(contact) {

  let divmain = document.createElement('div');
  divmain.setAttribute('class', 'main');
  let header = document.getElementsByTagName('header')[0];
  header.insertAdjacentElement('afterend', divmain);

  let divcinfo = document.createElement('div');
  divcinfo.setAttribute('class', 'contactinfo');
  divmain.appendChild(divcinfo);

  let divcname = document.createElement('div');
  divcname.setAttribute('class', 'contactname');
  divcname.innerHTML = contact.name + '<img src="./img/aramaki.png" class="profilepic" alt="Profile picture">';
  divcinfo.appendChild(divcname);

  let divcemail = document.createElement('div');
  divcemail.setAttribute('class', 'contactemail');
  divcemail.innerHTML = 'email: ' + contact.email;
  divcinfo.appendChild(divcemail);

  let divcphone = document.createElement('div');
  divcphone.setAttribute('class', 'contactphone');
  divcphone.innerHTML = 'cell: ' + contact.phone
  divcinfo.appendChild(divcphone);

  let divcadd = document.createElement('div');
  divcadd.setAttribute('class', 'contactaddress');
  divcadd.innerHTML = 'address: ' + contact.address;
  divcinfo.appendChild(divcadd);

  let divcbutt = document.createElement('div');
  divcbutt.setAttribute('class', 'buttons');
  divcbutt.innerHTML = '<button class="button edit" value="Edit">Edit</button><button class="button close" value="Close">Close</button>';
  divcinfo.appendChild(divcbutt);

}

function renderIndex(contactList) {
  for (let i = 0; i < contactList.length; i++) {
    addItemToMain(contactList[i]["name"])
  }
}

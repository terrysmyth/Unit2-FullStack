/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const ul = document.querySelector("ul.student-list");
const ulPag = document.querySelector("ul.pagination");
const header = document.querySelector(".page-header");
const searchResults = document.querySelector(".searchResults");
let newList = [];


let currentPage = 0;

const list = [{
        name: "Terry Smith",
        email: "twayburne@gmail.com",
        joined: "07/15/15",
        img: "https://randomuser.me/api/portraits/thumb/women/67.jpg"

    },
    {
        name: "Brad",
        email: "brad@gmail.com",
        joined: "08/15/20",
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        name: "Smith Ash",
        email: "ash@gmail.com",
        joined: "05/10/18",
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg"

    },
    {
        name: "David",
        email: "david@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Dawnna",
        email: "dawnna@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    }, {
        name: "Terry",
        email: "twayburne@gmail.com",
        joined: "07/15/15",
        img: "https://randomuser.me/api/portraits/thumb/women/67.jpg"

    },
    {
        name: "Brad",
        email: "brad@gmail.com",
        joined: "08/15/20",
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        name: "Ash Person",
        email: "ash@gmail.com",
        joined: "05/10/18",
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg"

    },
    {
        name: "David",
        email: "david@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Jess Heller",
        email: "dawnna@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    }, {
        name: "Harry Person",
        email: "twayburne@gmail.com",
        joined: "07/15/15",
        img: "https://randomuser.me/api/portraits/thumb/women/67.jpg"

    },
    {
        name: "Brad",
        email: "brad@gmail.com",
        joined: "08/15/20",
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        name: "Ash",
        email: "ash@gmail.com",
        joined: "05/10/18",
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg"

    },
    {
        name: "Jake Smith",
        email: "david@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Dawnna Smith",
        email: "dawnna@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    }, {
        name: "Terry Wayburne",
        email: "twayburne@gmail.com",
        joined: "07/15/15",
        img: "https://randomuser.me/api/portraits/thumb/women/67.jpg"

    },
    {
        name: "Brad Donald",
        email: "brad@gmail.com",
        joined: "08/15/20",
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        name: "Ash Smith",
        email: "ash@gmail.com",
        joined: "05/10/18",
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg"

    },
    {
        name: "David Smith",
        email: "david@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Dawnna Wayburne",
        email: "dawnna@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "David Wayburne-Smith",
        email: "david@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Lovisa",
        email: "something@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/men/62.jpg"

    }, {
        name: "Jeff Caller",
        email: "twayburne@gmail.com",
        joined: "07/15/15",
        img: "https://randomuser.me/api/portraits/thumb/women/67.jpg"

    },
    {
        name: "Brad Smither",
        email: "brad@gmail.com",
        joined: "08/15/20",
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        name: "Ash",
        email: "ash@gmail.com",
        joined: "05/10/18",
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg"

    },
    {
        name: "David",
        email: "david@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Jennifer Smithy",
        email: "jennifer@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/men/62.jpg"

    }, {
        name: "Terry",
        email: "twayburne@gmail.com",
        joined: "07/15/15",
        img: "https://randomuser.me/api/portraits/thumb/women/67.jpg"

    },
    {
        name: "Brad",
        email: "brad@gmail.com",
        joined: "08/15/20",
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        name: "Ash Smith",
        email: "ash@gmail.com",
        joined: "05/10/18",
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg"

    },
    {
        name: "David",
        email: "david@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Dawnna Smith-Jones",
        email: "dawnna@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    }, {
        name: "Terry",
        email: "twayburne@gmail.com",
        joined: "07/15/15",
        img: "https://randomuser.me/api/portraits/thumb/women/67.jpg"

    },
    {
        name: "Brad Aller-Smith",
        email: "brad@gmail.com",
        joined: "08/15/20",
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        name: "Ash",
        email: "ash@gmail.com",
        joined: "05/10/18",
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg"

    },
    {
        name: "David",
        email: "david@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Dawnna Smith-Co",
        email: "dawnna@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    }, {
        name: "Terry",
        email: "twayburne@gmail.com",
        joined: "07/15/15",
        img: "https://randomuser.me/api/portraits/thumb/women/67.jpg"

    },
    {
        name: "Brad",
        email: "brad@gmail.com",
        joined: "08/15/20",
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        name: "Ash",
        email: "ash@gmail.com",
        joined: "05/10/18",
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg"

    },
    {
        name: "Jake",
        email: "david@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Dawnna",
        email: "dawnna@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    },
    {
        name: "Belinda",
        email: "Belinda@gmail.com",
        joined: "01/21/01",
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        name: "Jess",
        email: "dawnna@gmail.com",
        joined: "08/08/08",
        img: "https://randomuser.me/api/portraits/thumb/women/38.jpg"

    }


];

let currentList = list;


// SHOWPAGE FUNCTION

function showPage(page = 0, l) {
    ul.innerHTML = "";

    const spliceList = l.slice(page * 10, (page * 10) + 10);

    for (let i = 0; i < spliceList.length; i++) {
        ul.innerHTML += `<li class="student-item cf">
                          <div class="student-details">
                              <img class="avatar" src="${spliceList[i].img}">
                              <h3>${spliceList[i].name}</h3>
                              <span class="email">${spliceList[i].email}</span>
                          </div>
                          <div class="joined-details">
                                 <span class="date">Joined ${spliceList[i].joined}</span>
                         </div>
                      </li>`
    }

}

showPage(0, list);




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


// CREATE LINKS
function appendPageLinks(list) {

    ulPag.innerHTML = "";
    const paginationLength = Math.ceil(list.length / 10);

    for (var i = 0; i < paginationLength; i++) {

        const li = document.createElement("li");
        const a = document.createElement("a");

        if (i == currentPage) {

            li.className = "current";
        } else {
            li.className = "";
        }

        a.href = "#";
        a.textContent = i;
        li.appendChild(a);


        ulPag.appendChild(li);
    }

}

appendPageLinks(list);

// SHOW DIFFERENT PAGE

ulPag.addEventListener("click", (e) => {
    e.preventDefault();
    currentPage = e.target.textContent;
    showPage(currentPage, currentList);
    appendPageLinks(currentList);

})


// Dynamically insert Form
const searchDiv = document.createElement("div");
searchDiv.className = "student-search";
header.appendChild(searchDiv);
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search for student..."
const searchButton = document.createElement("button");
searchButton.textContent = "Search";
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);
const searchResult = document.createElement("p");
searchResults.appendChild(searchResult);


searchDiv.addEventListener("click", (e) => {

    if (e.target.tagName == "BUTTON") {

        if (e.target.textContent == "Search" && searchInput.value != "") {

            e.target.textContent = "Cancel"
            const search = searchInput.value;
            filterPage(search);


        } else {
            e.target.textContent = "Search";
            searchInput.value = "";
            searchResult.textContent = ``;
            currentList = list;
            showPage(currentPage, currentList);
            appendPageLinks(currentList);
        }



    }

});


function filterPage(search) {


    newList = [];
    for (var i = 0; i < list.length; i++) {

        const listName = list[i].name.toLowerCase();
        const searchName = search.toLowerCase();


        if (listName.includes(searchName)) {

            newList.push(list[i]);

        }

    }
    currentList = newList;
    searchResult.textContent = `Search result/s: ${newList.length}`;

    showPage(0, currentList);
    appendPageLinks(currentList);

}





// Remember to delete the comments that came with this file, and replace them with your own code comments.
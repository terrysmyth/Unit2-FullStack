const page = document.querySelector(".page");
const ul = document.querySelector("ul.student-list");
const ulPag = document.createElement("ul");
const header = document.querySelector(".page-header");
const searchResults = document.querySelector(".searchResults");
let newList = [];
let currentPage = 1;


// GET ALL STUDENTS FROM THE HTML AND STORE THEM
let allList = document.getElementsByClassName("student-item");
const list = [];

for (var i = 0; i < allList.length; i++) {
    let name = allList[i].querySelector("h3")
    let img = allList[i].querySelector("img")
    let joined = allList[i].querySelector(".date")
    let email = allList[i].querySelector(".email")
    list.push({
        name: name.textContent,
        email: email.textContent ,
        img: img.src,
        joined: joined.textContent
    })
}

let currentList = list;
console.log(list.length)
console.log(list)

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


// CREATE LINKS
function appendPageLinks(list) {
    ulPag.className = "pagination";
    page.appendChild(ulPag);

    ulPag.innerHTML = "";
    const paginationLength = Math.ceil(list.length / 10);

    for (var i = 0; i < paginationLength; i++) {

        const li = document.createElement("li");
        const a = document.createElement("a");

        if (i == currentPage-1) {

            li.className = "current";
        } else {
            li.className = "";
        }

        a.href = "#";
        a.textContent = i+1 ;
        li.appendChild(a);
        ulPag.appendChild(li);
    }

}
appendPageLinks(list);


// SHOW DIFFERENT PAGE
ulPag.addEventListener("click", (e) => {
    e.preventDefault();
    currentPage = e.target.textContent;
    showPage(currentPage-1, currentList);
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
            showPage(currentPage-1, currentList);
            appendPageLinks(currentList);
        }
    }

});

// FILTER
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
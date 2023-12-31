let searchForm = document.getElementById("searchForm");
let pageLinks = document.getElementsByClassName("page-link");

if (searchForm) {
  for (let i = 0; pageLinks.length > i; i++) {
    pageLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      let page = this.dataset.page;
      searchForm.innerHTML += `<input value=${page} name="page" hidden/>`;
      searchForm.submit();
    });
  }
}

// remove tags when clicked

let tags = document.getElementsByClassName('project-tag')

for (let i=0; tags.length > i; i++){
    tags[i].addEventListener('click', (e)=> {
       let tagId = e.target.dataset.tag
       let projectId = e.target.dataset.project

       fetch('https://8000-dayanan-devsearchdjango-1atwf0ootv3.ws-eu101.gitpod.io/api/remove-tag/', {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({'project': projectId, 'tag': tagId})
       })
       .then(response => response.json())
       .then(data => {
        e.target.remove()
       })
    })
}
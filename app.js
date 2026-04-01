// CREATE PORTFOLIO
async function createPortfolio(){
    let res = await fetch("http://localhost:5000/api/portfolio/create",{method:"POST"});
    let data = await res.json();
    window.location="editor.html?id="+data.id;
}

// DRAG ELEMENTS
function addText(){
    let el = document.createElement("p");
    el.contentEditable = true;
    el.innerText="Edit text";
    document.getElementById("canvas").appendChild(el);
}

function addImage(){
    let el = document.createElement("img");
    el.src="https://via.placeholder.com/150";
    document.getElementById("canvas").appendChild(el);
}

// GALLERY
function addGallery(){
    let div = document.createElement("div");
    div.innerHTML = "<p>Gallery Section</p>";
    document.getElementById("canvas").appendChild(div);
}

// CONTACT FORM
function addForm(){
    let form = document.createElement("form");
    form.innerHTML = "<input placeholder='Name'><br><input placeholder='Email'>";
    document.getElementById("canvas").appendChild(form);
}

// SAVE
async function save(){
    let id = new URLSearchParams(window.location.search).get("id");

    let html = document.getElementById("canvas").innerHTML;

    await fetch("http://localhost:5000/api/portfolio/save/"+id,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({html})
    });

    alert("Saved!");
}
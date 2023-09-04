async function APIfetch(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    const divcards= document.getElementById("cards");
    for(let i=0; i<result.length; i++){
        const a = document.createElement("div");
        a.innerHTML = `<div class="card mb-3 h-100 shadow" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title mb-3">Name: ${result[i].name}</h5>
          <p class="card-text">Email: ${result[i].email}</p>
          <p class="card-text">Street: ${result[i].address.street}</p>
          <p class="card-text">City: ${result[i].address.city}</p>
        </div>
      </div>`
        divcards.append(a);

    }
}
APIfetch();
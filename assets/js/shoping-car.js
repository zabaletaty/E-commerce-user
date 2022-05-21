

function printShopingCar(products){
    const container_2 = document.getElementById("container_2");
    let html = ``
    products.forEach(products => {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${products.name}</h5>
                            <img src="${products.image}" style="width: 100%;" alt="${products.name}">
                            <p class="card-text">${products.price}</p>
                        </div>
                    </div>
                </div>`
    });

    container_2.innerHTML = html;
    
}


let array = JSON.parse (localStorage.getItem("producto"));
console.log(array);
let arreglo = [];


function getShopingCar() {

    for (let i = 0; i <= array.length; i++){
        
        let get = JSON.parse(localStorage.getItem(i));
        arreglo.push(get);

    }
    printShopingCar(array);
      

}

getShopingCar();


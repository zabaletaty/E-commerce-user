

const baseUrl = `https://e-commerce-api-academlo.herokuapp.com/api`;

function getProducts() {
    axios.get(`https://e-commerce-api-academlo.herokuapp.com/api/products`)
        .then(function (response) {
            const products = response.data;
            console.log(products);
            printProducts(products);
        })
        .catch(function (error) {
            console.log(error);
        })
}

getProducts();

function printProducts(products){
    const container = document.getElementById("container");
    html = ``;
    products.forEach(products => {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${products.name}</h5>
                            <img src="${products.image}" style="width: 100%;" alt="${products.name}">
                            <p class="card-text">${products.price}</p>
                        </div>
                        <div class="text-end">
                            <button class="btn btn-primary" onclick="saveProduct(${products.id})" >
                                <i class="fas fa-shopping-cart"></i>
                            </button>                           
                        </div>
                    </div>
                </div>`
    });

    container.innerHTML = html;
}


let array = [];
function saveProduct(id){
    axios.get(`${baseUrl}/products/${id}`)
        .then(function(response){
            editingID = id;
            let product = response.data;
            array.push(product);
            console.log(array);
            localStorage.setItem("producto", JSON.stringify(array) );
            alert("se guardo el producto");
            
        })
        .catch(function(){
            alert("No se edito el producto")
        })
    
}














let productList = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4','Oppo A5s','Iphone 11 Pro'];

function showProduct() {
    let value = "";

    for (let i = 0; i < productList.length; i++) {
        if (i % 2 == 0) {
            value += '<tr>\n' +
                '        <td class="tr1">' + productList[i] + '</td>\n' +
                '        <td class="tr2"><button class="but1" onclick="editProduct(' + i + ')">Edit</button></td>\n' +
                '        <td><button class="but1" onclick="deleteProduct(' + i + ')">Delete</button></td>\n' +
                '    </tr>'
        } else {
            value += '<tr class="color">\n' +
                '        <td class="tr1">' + productList[i] + '</td>\n' +
                '        <td class="tr2"><button class="but1" onclick="editProduct(' + i + ')">Edit</button></td>\n' +
                '        <td><button class="but1" onclick="deleteProduct(' + i + ')">Delete</button></td>\n' +
                '    </tr>'
        }
    }
    document.getElementById("display").innerHTML = value;
    document.getElementById("sumProduct").innerText = productList.length + " products"
}

showProduct();

function creatProduct() {
    let newP = document.getElementById("products").value;
    if(newP!=""){
        productList.push(newP);
    }else {
        alert("Bạn cần nhập thông tin ")
    }
    showProduct()
    document.getElementById("products").value = "";
}

function deleteProduct(index) {
    let secondValue = confirm("Bạn có muốn xóa không? ")
    if(secondValue===true){
        productList.splice(index, 1);
    }
    showProduct()
}

function editProduct(index) {
    let newValue = prompt("Mời nhập vào tên sản phẩm mới: ", productList[index])
    if(newValue!=""){
        productList[index] = newValue;
    }else {
        alert("Bạn cần nhập thông tin ")
    }
    showProduct()
}
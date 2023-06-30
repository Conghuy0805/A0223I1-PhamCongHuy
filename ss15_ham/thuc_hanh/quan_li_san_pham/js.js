productList = ["Sony Xperia", "Samsung", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S"];

function showAllProduct() {
    let content = "";
    for (let i = 0; i < productList.length; i++) {
        content += '<tr>\n' +
            '            <td>' + productList[i] + '</td>\n' +
            '            <td c>\n' +
            '                <button type="submit"  onclick="editProduct(' + i + ')">Edit</button>\n' +
            '            </td>\n' +
            '            <td>\n' +
            '                <button type="submit" onclick="deleteProduct(' + i + ')">Delete</button>\n' +
            '            </td>\n' +
            '        </tr>'
    }
    document.getElementById("products").innerHTML = content;
    document.getElementById("sumProduct").innerText = productList.length + " products"
}

showAllProduct();

function createProduct() {
    let newPro = document.getElementById("newProduct").value;
    if (newPro !== "") {
        productList.push(newPro);
    }else {
        alert("Bạn cần nhập thông tin");
    }
    showAllProduct();
    document.getElementById("newProduct").value = ""
}

function editProduct(index) {
    let newValue = prompt("Mời bạn nhập vào sản phẩm cần sửa:", productList[index]);
    if (newValue !== "") {
        productList[index] = newValue;

    } else {
        alert("Bạn cần nhập thông tin ");
    }
    showAllProduct();
}

function deleteProduct(index) {
    let deletePro = confirm("Bạn có muốn xóa sản phẩm không?");
    if (deletePro === true) {
        productList.splice(index, 1);

    }
    showAllProduct();
}
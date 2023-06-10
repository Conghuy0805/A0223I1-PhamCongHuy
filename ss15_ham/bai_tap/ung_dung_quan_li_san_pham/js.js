let productList = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Oppo A71"];
// tên hàm: showAllProduct
// ds tham số: không có
// dữ liệu trả về: không có
// chức năng: lặp danh sách sản phẩm, điền vào trong thẻ có id products

function showAllProduct() {
    let content = "";
    for (let i = 0; i < productList.length; i++) {
        content += '<tr>\n' +
            '            <td>' + productList[i] + '</td>\n' +
            '            <td>\n' +
            '                <button type="submit" onclick="editProduct(' + i + ')">Edit</button>\n' +
            '            </td>\n' +
            '            <td>\n' +
            '                <button type="submit" onclick="deleteProduct(' + i + ')">Delete</button>\n' +
            '            </td>\n' +
            '            </tr>'
    }
    document.getElementById("products").innerHTML = content;
    document.getElementById("sumProduct").innerText = productList.length + " products"
}

showAllProduct()

// tên hàm: createProduct
// ds tham số: không có
// dữ liệu trả về: không có
// chức năng:
// - lấy dữ liệu
// - push vào mảng
// - hiển thị lại dữ liệu

function createProduct() {
    let newPro = document.getElementById("newProduct").value;
    if (newPro !== "") {
        productList.push(newPro);
    } else {
        alert("Bạn cần nhập thông tin")
    }

    showAllProduct();
    document.getElementById("newProduct").value = ""
}

// tên hàm: deleteProduct
// ds tham số: index
// dữ liệu trả về: không có
// chức năng: xóa sản phẩm theo index
// hiển thị lại danh sách

function deleteProduct(index) {
    let deletePro = confirm("Bạn có muốn xóa không?")
    if (deletePro === true) {
        productList.splice(index, 1);
    }
    showAllProduct();
}

// tên hàm: editProduct
// ds tham số: index
// dữ liệu trả về: không có
// chức năng: sửa sản phẩm theo index
// 1. cho người dùng nhập vào sản phẩm mới
// 2. gán lại sản phẩm mới cho sản phẩm cũ
// 3. hiển thị lại danh sách

function editProduct(index) {
    let newValue = prompt("Mời bạn nhập vào sản phẩm mới ", productList[index]);
    if (newValue !== "") {
        productList[index] = newValue;
    } else {
        alert("Bạn cần nhập thông tin");
    }
    showAllProduct()
}

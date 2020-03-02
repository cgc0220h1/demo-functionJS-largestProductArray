let arr = [];

function addNumberArray(array) {
    let index = 1;
    let input = 0;
    while (input !== null) {
        input = prompt("Nhập vào số thứ: " + index + " của mảng. Nhấn cancel để lưu lại mảng");
        if (isNaN(input)) {
            alert("Số không hợp lệ do dữ liệu nhập vào là ký tự. Vui lòng nhập lại.");
        } else if (input === "") {
            alert("Trường không được để trống, vui lòng nhập số vào")
        } else {
            array.push(input);
            index++;
        }
    }
    array.pop();
    return array;
}

function findMaxProduct(array) {
    let result = [];
    let maxProduct = array[0] * array[1];
    for (let index = 1; index < array.length; index++) {
        if ((array[index] * array[index + 1]) > maxProduct) {
            maxProduct = array[index] * array[index + 1];
            result = [];
            result.push(array[index]);
            result.push(array[index + 1]);
            result.push(maxProduct);
        }
    }
    return result;   //Mảng được tạo bao gồm phần tử lấy tích và tích của chúng.
}

function createArray() {
    addNumberArray(arr);
    alert("Mảng được tạo là: " + arr.join(", "));
    document.getElementById('display-array').innerHTML = "Mảng được tạo là: " + "[" + arr.join(", ") + "]";
}

function findItem() {
    let item = findMaxProduct(arr);
    console.log(item);
    document.getElementById('result').innerHTML = "Tích lớn nhất trong mảng là: " + item[2]
        + "<br>" + "Là tích của phần tử thứ " + arr.indexOf(item[0]) + " có giá trị là: " + item[0] + " và phần tử thứ "
        + arr.indexOf(item[1]) + " có giá trị là: " + item[1];

}




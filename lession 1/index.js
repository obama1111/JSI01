function Check_SnT(nums) { // Kiểm tra số nguyên tố
    var number_check = true;

    if (nums < 2) {
        number_check = false;
    } else {
        for (var i = 2; i <= Math.sqrt(nums); i++) {
            if (nums % i == 0) {
                number_check = false;
                break;
            }
        }
    }

    return number_check;
}

document.getElementById("result").addEventListener("click", function() {
    var a = parseInt(document.getElementById("Anum").value);
    var b = parseInt(document.getElementById("Bnum").value);
    var sum = 0;
    var final = document.getElementById("final");
    
    if (isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập số hợp lệ cho cả hai hệ số A và B");
        return;
    }

    if (a >= b) {
        alert("Hệ số A phải nhỏ hơn hệ số B");
        return;
    }

    for (var i = a; i <= b; i++) {
        if (Check_SnT(i)) {
            sum += i;
        }
    } 
    
    final.insertAdjacentHTML("afterbegin", 
    'Tổng các số nguyên tố từ ' + a + ' đến ' + b + ' là ' + sum +`<br>`);
});

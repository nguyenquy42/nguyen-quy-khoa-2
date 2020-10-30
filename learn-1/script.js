function loc() {

    let ketqua = []
    let text1 = document.getElementById("textA").value;
    let text2 = document.getElementById("textB").value;
    let lenA = text1.split('');
    let lenB = text2.split('');
    let lenAB = lenA.length + lenB.length;
    let kiemtra = false
    let k = 0;

    for (let i = 0; i < lenAB; i++) {
        if (i < lenA.length) {
            for (let j = 0; j < lenB.length; j++) {
                if (lenA[i] == lenB[j]) {
                    kiemtra = true
                }
            }
            if (!kiemtra) {
                ketqua.push(lenA[i])
                kiemtra = false
            } else {
                kiemtra = false
            }
        }
        else {
            for (let t = 0; t < lenA.length; t++) {
                if (lenA[t] == lenB[k]) {
                    kiemtra = true
                    break;
                }
            }
            if (!kiemtra) {
                ketqua.push(lenB[k])
                k++;
                kiemtra = false
            }
            else {
                kiemtra = false
                k++
            }
        }
    }
    alert(ketqua)
}
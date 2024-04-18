document.getElementById('generateButton').addEventListener('click', generateOutput);

function generateOutput() {
    let fir, sec, thi;
    fir = Math.floor(Math.random() * 3);
    sec = Math.floor(Math.random() * 3) + 1;
    thi = Math.floor(Math.random() * 3);
    let totnum = fir + sec + thi;
    let ans = sec + thi;

    totnum = Math.floor(Math.random() * (totnum - 1));

    let arr = [];
    let arn = [];
    for (let i = 0; i < sec; i++) {
        let temp = Math.floor(Math.random() * 9) + 1;
        arr.push(temp);
    }

    for (let i = 0; i < fir; i++) {
        arn.push(0);
    }
    for (let i = 0; i < sec; i++) {
        arn.push(arr[i]);
    }
    for (let i = 0; i < thi; i++) {
        arn.push(0);
    }
    let theta = 0;
    let fin = [];
    for (let i = ans + fir; i > 0; i--) {
        if (totnum === i && totnum !== 0) {
            fin.push('.');
            theta++;
        }
        if (arn[(ans + fir) - i] !== undefined) {
            fin.push(arn[(ans + fir) - i]);
        }
    }

    let outputDiv = document.getElementById('output');
    let ansDiv = document.getElementById('ans');
    outputDiv.innerHTML = ""; 
    ansDiv.innerHTML = ""; 
    for (let i = 0; i < ans + fir + theta; i++) {
        outputDiv.textContent += fin[i];
    }

    ansDiv.textContent = "Answer: " + ans;
}

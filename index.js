function compareCode() {
    const code1 = document.getElementById('code1').value.split('\n');
    const code2 = document.getElementById('code2').value.split('\n');
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');

    let diff1 = '';
    let diff2 = '';

    const maxLength = Math.max(code1.length, code2.length);

    for (let i = 0; i < maxLength; i++) {
        const line1 = code1[i] || '';
        const line2 = code2[i] || '';
        const lineDiff1 = [];
        const lineDiff2 = [];

        const maxLengthLine = Math.max(line1.length, line2.length);

        for (let j = 0; j < maxLengthLine; j++) {
            if (line1[j] !== line2[j]) {
                if (line1[j] !== undefined) {
                    lineDiff1.push(`<span class="diff-removed">${line1[j]}</span>`);
                } else {
                    lineDiff1.push(`<span class="diff-removed"> </span>`);
                }

                if (line2[j] !== undefined) {
                    lineDiff2.push(`<span class="diff-added">${line2[j]}</span>`);
                } else {
                    lineDiff2.push(`<span class="diff-added"> </span>`);
                }
            } else {
                lineDiff1.push(line1[j] || ' ');
                lineDiff2.push(line2[j] || ' ');
            }
        }

        diff1 += `<div>${lineDiff1.join('')}</div>`;
        diff2 += `<div>${lineDiff2.join('')}</div>`;
    }

    result1.innerHTML = diff1;
    result2.innerHTML = diff2;
}

document.getElementById('year').textContent = new Date().getFullYear();

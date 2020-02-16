function centuryFromYear(year) {
    const yearStr = year.toString();
    let centStr;
    let decStr

    if (yearStr.length == 4) {
        centStr = yearStr.slice(0, 2);
        decStr = yearStr.slice(2, 4);
    }
    else if (yearStr.length == 3) {
        centStr = yearStr.slice(0, 1);
        decStr = yearStr.slice(1, 3);
    }

    let centNum = parseInt(centStr, 10);

    if (decStr !== '00' && yearStr.length > 2) {
        centNum++;
    }
    else if (yearStr.length <= 2) {
        centNum = 1;
    }

    console.log(centNum);
}

centuryFromYear(45);  //expected output: 1
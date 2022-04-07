
for (let x = 1; x <= 4; x++) {
    for (let y = 1; y <= 4; y++) {
        console.log(x, y);
    }
}

let table = [];
for (let x = 1; x <= 4; x++) {
    let row = [];
    for (let y = 1; y <= 4; y++) {
        let field = [x, y];
        row.push(field);
    }

    table.push(row);
}

console.log(table);

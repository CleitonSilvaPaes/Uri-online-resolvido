x = 7
y = 4
for (let i = 1; i < 10; i++) {
    iniFin(i, x, y)
    i++
    x+=2
    y+=2
}

function iniFin(i, x, y) {
    for (let j = x; j > y; j--) {
        document.writeln(`I=${i} J=${j}`)
        document.write("<br/>")
    }
}
// letter
const letter = [];
letter["a"] = "..######..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n";
letter["b"] = "..######..\n..#....#..\n..#####...\n..#....#..\n..######..\n\n";
letter["c"] = "..######..\n..#.......\n..#.......\n..#.......\n..######..\n\n";
letter["d"] = "..#####...\n..#....#..\n..#....#..\n..#....#..\n..#####...\n\n";
letter["e"] = "..######..\n..#.......\n..#####...\n..#.......\n..######..\n\n";
letter["f"] = "..######..\n..#.......\n..#####...\n..#.......\n..#.......\n\n";
letter["g"] = "..######..\n..#.......\n..#####...\n..#....#..\n..#####...\n\n";
letter["h"] = "..#....#..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n";
letter["i"] = "..######..\n....##....\n....##....\n....##....\n..######..\n\n";
letter["j"] = "..######..\n....##....\n....##....\n..#.##....\n..####....\n\n";
letter["k"] = "..#...#...\n..#..#....\n..##......\n..#..#....\n..#...#...\n\n";
letter["l"] = "..#.......\n..#.......\n..#.......\n..#.......\n..######..\n\n";
letter["m"] = "..#....#..\n..##..##..\n..#.##.#..\n..#....#..\n..#....#..\n\n";
letter["n"] = "..#....#..\n..##...#..\n..#.#..#..\n..#..#.#..\n..#...##..\n\n";
letter["o"] = "..######..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n";
letter["p"] = "..######..\n..#....#..\n..######..\n..#.......\n..#.......\n\n";
letter["q"] = "..######..\n..#....#..\n..#.#..#..\n..#..#.#..\n..######..\n\n";
letter["r"] = "..######..\n..#....#..\n..#.##...\n..#...#...\n..#....#..\n\n";
letter["s"] = "..######..\n..#.......\n..######..\n.......#..\n..######..\n\n";
letter["t"] = "..######..\n....##....\n....##....\n....##....\n....##....\n\n";
letter["u"] = "..#....#..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n";
letter["v"] = "..#....#..\n..#....#..\n..#....#..\n...#..#...\n....##....\n\n";
letter["w"] = "..#....#..\n..#....#..\n..#.##.#..\n..##..##..\n..#....#..\n\n";
letter["x"] = "..#....#..\n...#..#...\n....##....\n...#..#...\n..#....#..\n\n";
letter["y"] = "..#....#..\n...#..#...\n....##....\n....##....\n....##....\n\n";
letter["z"] = "..######..\n......#...\n.....#....\n....#.....\n..######..\n\n";
letter["spc"] = "..........\n..........\n..........\n..........\n\n";
letter["dot"] = "----..----\n\n";

// create name
function createName() {
    const dom = document.querySelector("body");
    const username = prompt("Enter your name: ");
    if (username != null) {
        for (nameLetter of username.toLowerCase()) {
            if (nameLetter == "a") {
                console.log(letter.a);
            } else if (nameLetter == "b") {
                console.log(letter.b);
            } else if (nameLetter == "c") {
                console.log(letter.c);
            } else if (nameLetter == "d") {
                console.log(letter.d);
            } else if (nameLetter == "e") {
                console.log(letter.e);
            } else if (nameLetter == "f") {
                console.log(letter.f);
            } else if (nameLetter == "g") {
                console.log(letter.g);
            } else if (nameLetter == "i") {
                console.log(letter.i);
            } else if (nameLetter == "j") {
                console.log(letter.j);
            } else if (nameLetter == "k") {
                console.log(letter.k);
            } else if (nameLetter == "l") {
                console.log(letter.l);
            } else if (nameLetter == "m") {
                console.log(letter.m);
            } else if (nameLetter == "n") {
                console.log(letter.n);
            } else if (nameLetter == "o") {
                console.log(letter.o);
            } else if (nameLetter == "p") {
                console.log(letter.p);
            } else if (nameLetter == "q") {
                console.log(letter.q);
            } else if (nameLetter == "r") {
                console.log(letter.r);
            } else if (nameLetter == "s") {
                console.log(letter.s);
            } else if (nameLetter == "t") {
                console.log(letter.t);
            } else if (nameLetter == "w") {
                console.log(letter.w);
            } else if (nameLetter == "x") {
                console.log(letter.x);
            } else if (nameLetter == "y") {
                console.log(letter.y);
            } else if (nameLetter == "z") {
                console.log(letter.z);
            } else if (nameLetter == "h") {
                console.log(letter.h);
            } else if (nameLetter == "u") {
                console.log(letter.u);
            } else if (nameLetter == "v") {
                console.log(letter.v);
            } else if (nameLetter == " ") {
                console.log(letter.spc);
            } else if (nameLetter == ".") {
                console.log(letter.dot);
            }
        }
    }
}

createName();

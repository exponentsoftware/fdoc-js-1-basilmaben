/* Q1a */

function Q1a(p, w1, w2) {
    p= p.toLowerCase().split``.filter(x => /[a-z ]/.exec(x)).join``.split``;
    return (p.filter(x=> x === w1).length > p.filter(x=> x === w2).length ? `The word "${w1}" is more frequently occured than "${w2}".\n`
        : `The word "${w2}" is more frequently occured than "${w1}".`)
};

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(Q1a(paragraph,'love', 'you'));

/* Q1b */

function Q1b(p) {
    return p.split``.filter(x => /[a-z ,.?]/i.exec(x)).join``;
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(Q1b(sentence));


/* Q1c */

function Q1c(p) {
    return p.toLowerCase().split``.filter(x => /[a-z ]/.exec(x)).join``.split` `.filter(x => x.length > 1).length;
}

const sent =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(Q1c(sent));


/* Q1d */
function Q1d(p) {
    return new Set(p.toLowerCase().split``.filter(x => /[a-z ]/.exec(x)).join``.split` `).size;
}

console.log(Q1d(sent))

/* Q2a */

function Q2a() {
    for(let i = 1; i <= 7; i++) {
        console.log('#'.repeat(i))
    }
}
Q2a();

/* Q2b */

function Q2b() {
    let s = new Set();
    while(s.size < 7)
        s.add(Math.floor(Math.random() * 10));
    return [...s]
}
console.table(Q2b())

/* Q2c */

function Q2c(arr) {
    let out = [];
    for(let i = arr.length - 1; i >= 0; i--)
        out.push(arr[i]);
    return out;
}

console.log(Q2c(["A", "B", "C"]));

/* Q2d */

function Q2d(arr) {
    return (new Set(arr)).size === arr.length;
}

const arrOne = [1, 4, 6, 2, 1];
console.log(Q2d(arrOne));
const arrTwo = [1, 4, 6, 2, 3]
console.log(Q2d(arrTwo));
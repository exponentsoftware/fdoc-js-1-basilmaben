function Q1a(p, w1, w2) {
    p= p.toLowerCase().split``.filter(x => /[a-z ]/.exec(x)).join``.split``;
    return (p.filter(x=> x === w1).length > p.filter(x=> x === w2).length ? `The word "${w1}" is more frequently occured than "${w2}".\n`
        : `The word "${w2}" is more frequently occured than "${w1}".`)
};

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(Q1a(paragraph,'love', 'you'));


function Q1b(p) {
    return p.split``.filter(x => /[a-z ,.?]/i.exec(x)).join``;
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(Q1b(sentence));


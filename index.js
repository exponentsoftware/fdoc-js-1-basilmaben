function Q1a(p, w1, w2) {
    p= p.toLowerCase().split``.filter(x => /[a-z ]/.exec(x)).join``.split``;
    return (p.filter(x=> x === w1).length > p.filter(x=> x === w2).length ? `The word "${w1}" is more frequently occured than "${w2}".`
        : `The word "${w2}" is more frequently occured than "${w1}".`)
};

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(Q1a(paragraph,'love', 'you'));

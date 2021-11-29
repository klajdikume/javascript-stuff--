function foo(x): string[] {

    return [];
}

foo(2);


// dynamic type system perform type equivalence at runtime

// Intersection Types in TS

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

function makeWeek(): Date  & { end: Date} {

    const start = new Date()
    const end = new Date(start.valueOf() + ONE_WEEK)

    return { ...start, end } // kind of Object.assign
}

const thisWeek = makeWeek();
thisWeek.toISOString();
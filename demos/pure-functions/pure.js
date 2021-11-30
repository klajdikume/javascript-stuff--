// same given input -> same output
// does't affect global scope (no side effect)
// must not mutate external state

// exe

// impure addToCard mutates existing cart

const addToCard = (card, item, quantity) => {
    card.items.push({
        item,
        quantity
    });
    return cart;
};

test('addToCart()', assert => {
    const msg = 'addToCart() should add a new item to the cart.';
    const originalCart = { 
        items: []
    };

    const cart = addToCard(
        originalCart,
        {
            name: "Digital SLR Camera",
            price: '192'
        },
        1
    );

    const expected = 1;
    const actual = cart.items.length;

    assert.equal(actual, expected, msg);

    assert.deepEqual(originalCart, cart, 'mutates original cart.');
    assert.end();
})


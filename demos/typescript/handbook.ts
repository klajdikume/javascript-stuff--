// consistenly chack if primitives are assigned
// type-system that accepts JavaScript code but has types

// Types by Interface

let helloWorld = "Hellow";

const user: User = {
    name: "Hayes",
    id: 0
};

// descripe the object's shape
interface User {
    name: string;
    id: number;
};


class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
}

const userClass: User = new UserAccount("ab", 11);

// annotate parameters and return values to functions

function getAdminUser(): User {
    const user = {
        name: "a",
        id: 2
    };
   
    return user;
}

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

const add = (a: number, b: number): number => {

    return a + b;
};


// composing types

// combining simple types -> with unions and generics

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }

    return obj;
}

// Generics

// provide variables to types

type StringArray = Array<string>;
type ObjectWithNameArray = Array<{ name: string }>;

// create your own types that use generics
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// constant called `backpack`
declare const backpack: Backpack<string>;

// object is a string, iit is declared above as the variable part of Backpack.
const object = backpack.get();

backpack.add("a");

// Structural Type System

// type checking focuses on the shape that values have

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };

logPoint(point);



// round 2

// TS for functional dev

// 1 f syntax including parameter names
let fst: (a: any, b: any) => any = (a, b) => a;

let fst1: <T, U>(a: T, b: U) => T = (a, b) => a;

// 2 Object literal type syntax closley mirrors object literal value syntax

let o: { n: number; xs: object[] } = { n: 1, xs: [] };


// 3 [T, T] is a subtype of T[]

const anys = [];
anys.push(1);
anys.push("string");
anys.push({ porperty: "string" });

anys.map(anys[1]);


// TS Fundamentals
// vars, types, enums (set of named constants)

// build in types
// undefined, null, any, void 
// union type

function log(msg: string) : void { }


const sampleProducts = [
    {
        id: 10,
        name: 'Pizza slice',
        
    },
    {
        id: 10,
        name: 'Pizza slice',
        
    },
    {
        id: 10,
        name: 'Pizza slice',
        
    },
    {
        id: 10,
        name: 'Pizza slice',
        
    }
];

function getProductNames(): string[] {

    return sampleProducts.map((p) => p.name);
}


type ProductType = {
    id: number;
    name: string;
};

function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find(p => p.id === id);
}

function displayProducts(products: ProductType[]) {
    const productNames = products.map(p => {
        const name = p.name.toLowerCase();
        return name;
    });

    const msg = `Sample products include: ${productNames.join('. ')}`;

}

async function getProducts(): Promise<ProductType[]> {
    const response: Response = await fetch('url');
    
    const products: ProductType[] = await response.json();

    return products
}

function createProduct(name: string): ProductType {

    const getRandomInt = (max: number) => Math.floor(Math.random() * max);

    const id = getRandomInt(1000);

    return {
        id, name
    }
}

function buildAddress(street: string, city: string, ...restOfAddress: string[]) {
    const address = `${street} ${city}`;
    return address;
}

// interface -> shape of an object-like ds
// type -> represent primitive types and object-like ds

class ProductBase {
    constructor(public id: number, public name: string) {}

    validate(): boolean {
        throw new Error('Not implemented');
    }
}


export class FoodProduct extends ProductBase{
    validate(): boolean {
        return !!this.id && !!this.name;
    }
}

async function runtheLearningSamples() {
    function whatIsIt_number(arg: number) : number {
        return arg;
    }

    function whatIsIt_string(arg: string) : string {
        return arg;
    }

    function whatIsIt_typed<T>(arg: T): T {

        return arg;
    }

    let n: number = whatIsIt_typed<number>(11);
    let n13: string = whatIsIt_typed<string>('wa');

}

const getProductsAsync = async function getProducts(): Promise<FoodProduct[]> {
    const response: Response = await fetch('url');
    const products: FoodProduct[] = await response.json();

    return products
}


async function getList<T>(url: string): Promise<T[]> {
    const response: Response = await fetch('url');
    const items: T[] = await response.json();

    return items;
}

interface Model<T> {
    items: T[] | undefined;
    getItems: () => Promise<T[]>;
    getItemsById: (id: number) => T | undefined;
}

class FoodModel implements Model<FoodProduct> {
    public items: FoodProduct[] | undefined;
    
    async getItems(): Promise<FoodProduct[]> {
        this.items = await getList<FoodProduct>('url');
        return this.items;
    }
    
    getItemsById(id: number): FoodProduct | undefined {
        return this.items ? this.items.find((item) => (id === item.id)) : undefined;
    }
}

// function that accespts 2 generics types T and U
// 1st parameter is a function with T parameter and returns U type
// 2nd parameter is a array of T
// map function returns an array of U; 
declare function map<T, U>(f: (t: T) => U, ts: T[]): U[];
let sns = map((n) => n.toString(), [1,2,3]);


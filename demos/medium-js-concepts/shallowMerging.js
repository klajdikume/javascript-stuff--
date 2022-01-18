// updating the state
// problem is setState does a shallow merge

// cares about the first level of the object
// will replace anything deeper than the first level

var state = {
    fruit: "apple",

    bird: {
        short: "hummingbird",
        tall: "ostrich"
    }
}

// setState will wipe out everything in bird if you do

// this.setState({ bird, {tall: "Emu"} })

state = {
    fruit: "apple",

    bird: {
        tall: "emu"
    }
}

// it will recreate bird object
// with tall prop only


// accepts a function rather an object

/**

    this.setState((prevState, currentProps) => ({
        bird: { ...prevState, tall: 'emu' }
    )});

    // results in this :D

    state =  {
    fruit: “apple”,
    bird: { 
             short: "hummingbird", 
             tall: "emu" 
     }
}

 */
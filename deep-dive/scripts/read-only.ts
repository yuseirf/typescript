function readOnly(config: {
    readonly bar: number,
    readonly bas: number
}) {
    // 
}

let config = { bar: 123, bas: 456 };
readOnly(config);
console.log(config.bar)
// You can be sure that `config` isn't changed πΉ

// type
type TypeReadOnly = {
    readonly typeBar: number;
    readonly typeBas: number;
}

// Initialization is okay
let TypeReadOnly: TypeReadOnly = { typeBar: 123, typeBas: 456 };

// Mutation is not
// TypeReadOnly.typeBar = 456; // Error: θͺ­γΏεγε°η¨γγ­γγγ£γ§γγγγγ'typeBar' γ«δ»£ε₯γγγγ¨γ―γ§γγΎγγγ

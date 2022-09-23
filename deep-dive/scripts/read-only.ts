function readOnly(config: {
    readonly bar: number,
    readonly bas: number
}) {
    // 
}

let config = { bar: 123, bas: 456 };
readOnly(config);
console.log(config.bar)
// You can be sure that `config` isn't changed 🌹

// type
type TypeReadOnly = {
    readonly typeBar: number;
    readonly typeBas: number;
}

// Initialization is okay
let TypeReadOnly: TypeReadOnly = { typeBar: 123, typeBas: 456 };

// Mutation is not
// TypeReadOnly.typeBar = 456; // Error: 読み取り専用プロパティであるため、'typeBar' に代入することはできません。

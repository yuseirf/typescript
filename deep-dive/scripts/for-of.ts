// for...inとfor...ofとの比較
var someArray = [9, 2, 5];
for (var item in someArray) {
    // itemはstring
    console.log(typeof(item)); 
    console.log(item); // 0,1,2
}

// for...ofのメリットは、開発者の意図がより明確になりますし、コードの量が減ります(そして、頭からひねり出さないといけない変数名も減ります)。
var someArray = [9, 2, 5];
for (var num of someArray) {
    console.log(num); // 9,2,5
}

// for...inを辞書型にすると、valueじゃなくてkeyが見れる
const xDictionary: { [key: string]: number} = {};
xDictionary['a'] = 10;
xDictionary['b'] = 20;
for (var x in xDictionary) {
    console.log(x);
}
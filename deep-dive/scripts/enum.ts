enum ColorComponent {
    Red,
    Green,
    Blue
}
var numRed = ColorComponent.Red;
numRed = 0; // Effectively same as Color.Red
console.log(numRed);

// var strGreen = ColorComponent.Green;
// strGreen = '100'; // Error: 型 '"100"' を型 'ColorComponent' に割り当てることはできません。
// console.log(strGreen);

// var Tristate;
// (function (Tristate) {
//     Tristate[Tristate["False"] = 0] = "False";
//     Tristate[Tristate["True"] = 1] = "True";
//     Tristate[Tristate["Unknown"] = 2] = "Unknown";
// })(Tristate || (Tristate = {}));

enum Tristate {
    False,
    True,
    Unknown
}
console.log(Tristate[0]); // "False"
console.log(Tristate["False"]); // 0
console.log(Tristate[Tristate.False]); // "False" because `Tristate.False == 0`

export enum EvidenceTypeEnum {
    UNKNOWN = '',
    PASSPORT_VISA = 'passport_visa',
    PASSPORT = 'passport',
    SIGHTED_STUDENT_CARD = 'sighted_tertiary_edu_id',
    SIGHTED_KEYPASS_CARD = 'sighted_keypass_card',
    SIGHTED_PROOF_OF_AGE_CARD = 'sighted_proof_of_age_card',
}
const value = EvidenceTypeEnum;

// // Sample use in code
if (value['PASSPORT'] === EvidenceTypeEnum.PASSPORT){
    console.log('You provided a passport');
    console.log(value); 
}

// Enum with static functions
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
namespace Weekday {
    export function isBusinessDay(day: Weekday) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false
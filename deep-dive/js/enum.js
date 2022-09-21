"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceTypeEnum = void 0;
var ColorComponent;
(function (ColorComponent) {
    ColorComponent[ColorComponent["Red"] = 0] = "Red";
    ColorComponent[ColorComponent["Green"] = 1] = "Green";
    ColorComponent[ColorComponent["Blue"] = 2] = "Blue";
})(ColorComponent || (ColorComponent = {}));
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
var Tristate;
(function (Tristate) {
    Tristate[Tristate["False"] = 0] = "False";
    Tristate[Tristate["True"] = 1] = "True";
    Tristate[Tristate["Unknown"] = 2] = "Unknown";
})(Tristate || (Tristate = {}));
console.log(Tristate[0]); // "False"
console.log(Tristate["False"]); // 0
console.log(Tristate[Tristate.False]); // "False" because `Tristate.False == 0`
var EvidenceTypeEnum;
(function (EvidenceTypeEnum) {
    EvidenceTypeEnum["UNKNOWN"] = "";
    EvidenceTypeEnum["PASSPORT_VISA"] = "passport_visa";
    EvidenceTypeEnum["PASSPORT"] = "passport";
    EvidenceTypeEnum["SIGHTED_STUDENT_CARD"] = "sighted_tertiary_edu_id";
    EvidenceTypeEnum["SIGHTED_KEYPASS_CARD"] = "sighted_keypass_card";
    EvidenceTypeEnum["SIGHTED_PROOF_OF_AGE_CARD"] = "sighted_proof_of_age_card";
})(EvidenceTypeEnum = exports.EvidenceTypeEnum || (exports.EvidenceTypeEnum = {}));
const value = EvidenceTypeEnum;
// // Sample use in code
if (value['PASSPORT'] === EvidenceTypeEnum.PASSPORT) {
    console.log('You provided a passport');
    console.log(value);
}
// Enum with static functions
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
(function (Weekday) {
    function isBusinessDay(day) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
    Weekday.isBusinessDay = isBusinessDay;
})(Weekday || (Weekday = {}));
const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false
//# sourceMappingURL=enum.js.map
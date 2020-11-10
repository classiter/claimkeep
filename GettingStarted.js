var student = "Chris";
var twitterHandle = "None";
var age = 31;

function whoAmI(myName,myNickname,myAge) {
    console.log(`
        Hi, I'm ${myName} (aka ${myNickname}),
        and I'm ${myAge} years old.
    `);
}

whoAmI(student,twitterHandle,age)
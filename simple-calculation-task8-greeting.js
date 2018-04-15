function greeting([arg1, arg2, arg3, arg4]) {
    let firstName = arg1;
    let lastName = arg2;
    let age = arg3;
    let homeTown = arg4;

    console.log(`Hello, ${firstName} ${lastName} you are ${age} years old from ${homeTown}.`);
}
greeting(["Ivan", "Gogov", 24, "Plovdiv"])
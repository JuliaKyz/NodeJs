import colors from "colors";
// console.log(colors.red("Hello World!"));

let arg1 = Number(process.argv[2]);
let arg2 = Number(process.argv[3]);

function simpleNumbers(arg1, arg2) {
    let numbers = [];

    for (let i = arg1; i <= arg2; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j < i) {
                break;
            } else if (j === i) {
                numbers = [...numbers, i];
            }
        }
    }

    let nums = numbers.forEach((n, i) => {
        if (i % 3 === 0) {
            console.log(colors.red(n));
        } else if (i % 3 === 1) {
            console.log(colors.yellow(n));
        } else {
            console.log(colors.green(n));
        }
        return n;
    });


    if (
        typeof arg1 !== "number" ||
        isNaN(arg1) ||
        typeof arg2 !== "number" ||
        isNaN(arg2)
    ) {
        console.error(
            colors.red(
                "Диапазон должен содержать только цифры"
            )
        );
    } else if (numbers.length === 0) {
        console.error(
            colors.red("Простые чисела не найдены")
        );
    }
    console.log(nums);
}

simpleNumbers(arg1, arg2);
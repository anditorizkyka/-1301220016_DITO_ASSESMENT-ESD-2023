console.log("SOAL 6");

jomokFriedChicken("Rehan Whangsap", 2, "Ayam Bakar", 1, "Es teh")
jomokFriedChicken("Amba roni", 1, "Ayam Puk Puk", 3 , "Es teh")
jomokFriedChicken("Faiz Ngawi",1, "All", 1, "All");


function jomokFriedChicken(name, nFood,food, nDrink,drink) {
    let sumFood = 0
    if (food == "Ayam Bakar") {
        sumFood = nFood * 20000
    } else if (food == "Ayam Puk Puk") {
        sumFood = nFood * 13000
    } else if (food == "Ayam Goreng Krispi") {
        sumFood = nFood * 15000
    } else if (food == "All") {
        sumFood = nFood * (20000+13000+15000)
    } else {
        console.log("Menu not available");
    }
    sumFood =sumFood * 0.05 + sumFood;

    let sumDrink = 0
    if (drink == "Es teh") {
        sumDrink = nDrink * 5000
    } else if (drink == "Es jeruk") {
        sumDrink = nDrink * 7000
    } else if (drink == "All") {
        sumDrink = nDrink * ( 5000+7000)
    } else {
        console.log("Menu not available");
    }
    sumDrink = sumDrink * 0.03 + sumDrink;

    let total = ((sumDrink + sumFood) * 0.15) + (sumDrink + sumFood)
    console.log(`${name} should pay ${total} with ${sumFood} and ${sumDrink}`)
}
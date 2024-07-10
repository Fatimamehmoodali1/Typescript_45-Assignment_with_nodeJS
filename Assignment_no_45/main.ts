function Create_Car(manufacture,model,...options){
    let car = {
        manufacture: manufacture,
        model: model,
    }
    options.forEach(option =>{
        let [key, value] = option.split(":")
        car [key.trim()] = value.trim();
    });
    return car;
}

let my_car = Create_Car("Toyato","Corrolla","Color:Black","Sunroof:true")

console.log(my_car);

function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}

function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}

let magicians_Names = ["Fatima","Qirat","Habiba"]

let copy_magicians_names = magicians_Names.slice()

let copy_great_magicians = make_great(copy_magicians_names)

console.log("Orignal Array\n");
show_magicians(magicians_Names)

console.log("\nCopied Array\n");
show_magicians(copy_great_magicians)
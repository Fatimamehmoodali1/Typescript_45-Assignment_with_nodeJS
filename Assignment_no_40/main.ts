function make_Album(artist_Name:string,album_Title:string,tracks?:number){
    let album : {artist:string,title: string,tracks?:number} = {
        artist: artist_Name ,
        title: album_Title,
    }
    if (tracks !== undefined){
        album.tracks = tracks
    }
    return album
}
let album1 = make_Album("Fatima","album title 1")

let album2 = make_Album("Qirat","album title 2")

let album3 = make_Album("Habiba","album title 3",10)

console.log(album1);

console.log(album2);

console.log(album3);



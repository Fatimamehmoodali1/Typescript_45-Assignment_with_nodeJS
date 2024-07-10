function make_Album(artist_Name, album_Title, tracks) {
    var album = {
        artist: artist_Name,
        title: album_Title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_Album("Fatima", "album title 1");
var album2 = make_Album("Qirat", "album title 2");
var album3 = make_Album("Habiba", "album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);

function Song(name) {
    this.name = name;
    this.played = Math.floor(Math.random() * 10);
}
var collection = [
    song1 = new Song("Closer"),
    song2 = new Song("Starboy"),
    song3 = new Song("Paris"),
    song4 = new Song("Mercy"),
    song5 = new Song("Caroline")
];

function favoriteSong(arr) {
    arr.forEach(function(item, i) {
        for (var key in item){
            console.log(key + ":" + item[key]);
        }
        console.log ("index: " + i);
    });
}
favoriteSong(collection);
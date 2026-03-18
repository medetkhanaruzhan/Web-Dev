from models import Song, Film

song = Song("Blinding Lights", 3, "Pop", "The Weeknd")
film = Film("Inception", 148, "Sci-Fi", "Christopher Nolan")

media_list = [song, film]

for m in media_list:
    print(m)
    print(m.play())
    print(m.stop())

    if isinstance(m, Song):
        print(m.repeat())
    elif isinstance(m, Film):
        print(m.pause())

    print("---")
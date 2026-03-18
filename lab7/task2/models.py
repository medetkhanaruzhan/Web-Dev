class Media:
    def __init__(self, title, duration, genre):
        self.title = title
        self.duration = duration
        self.genre = genre

    def play(self):
        return f"Playing {self.title}"

    def stop(self):
        return f"Stopped {self.title}"

    def __str__(self):
        return f"{self.title} ({self.genre}, {self.duration} min)"


class Song(Media):
    def __init__(self, title, duration, genre, artist):
        super().__init__(title, duration, genre)
        self.artist = artist

    def play(self):
        return f"Playing song '{self.title}' by {self.artist}"

    def repeat(self):
        return f"Repeating '{self.title}'"


class Film(Media):
    def __init__(self, title, duration, genre, director):
        super().__init__(title, duration, genre)
        self.director = director

    def play(self):
        return f"Playing film '{self.title}' directed by {self.director}"

    def pause(self):
        return f"Paused '{self.title}'"
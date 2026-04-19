export class Series {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webLink: string;
    image: string;

    public constructor(id: number, name: string, channel: string, seasons: number, description: string, webLink: string, image: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webLink = webLink;
        this.image = image;
    }
}

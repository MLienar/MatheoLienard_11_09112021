interface Host {
    name: string,
    picture: string
}

export interface House {
    id: string,
    title: string,
    cover: string,
    pictures: string[],
    description: string,
    host: Host,
    rating: number,
    location: string,
    equipments: string[],
    tags: string[]
}

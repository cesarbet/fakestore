export interface IStore {
    //atributos del store
    id: number | undefined;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    // rating: string es un array de dos objetos todavia noc cmo hacerlo
}

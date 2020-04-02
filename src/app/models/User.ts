export default class User {
    id: string;
    nom: string;
    email: string;

    constructor(id: string, nom: string, email: string) {
        this.id = id;
        this.nom = nom;
        this.email = email;
    }
}

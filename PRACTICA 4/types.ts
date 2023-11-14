export type Dimensiones = {
    id: string,
    idPlanetario: Planetas[],
}

export type Planetas = {
    id: string,
    idPeople: Personas[],
}

export type Personas = { 
    id: string
    nombre: string
}

export type Tardis = {
    camuflaje: string,
    numRegeneracion: number,
    año: number,    
    idDimension: Dimensiones[],
}

//Creo las interfaces
interface InterfazComun{
    dispositivos:Dispositivo[];
    paquetes:Paquetes[];
}

interface Dispositivo{
    tipo: "enrutadores"|"switches"|"servidores";
    capacidad:number;
}

interface Paquetes{
    tipo: "texto"|"imagenes"|"video";
    tamaño:number;
}

 class Dispositivos implements Dispositivo{
    constructor(public tipo:"enrutadores"|"switches"|"servidores",
        public capacidad:number){}
        
    procesamiento(){
    }
    
 }

 
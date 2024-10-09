//Los proyectos pertenecen a diferentes áreas
//Los miembros del equipo desempeñan diferentes roles

//Sistema debe crear proyectos, asinar miembros de equipos
//y estionar la asinación de tareas a los miembros

//Creo interfaces para los Proyectos, miembros del equipo
//y tareas


//Declaro la interfaz para los proyectos
interface Proyectos{
    ID:number;
    tipo_proyecto?:"desarrollo web"|"diseño grafico "|"marketing";
    nombre:string;
    fechaInicio:string;
    framework?:string;
}

//Declo la interfaz para los miembros
interface Miembros{
    ID:number;
    nombre:string;
    rol: "desarrollador"|"diseñador"|"gerente"; //Tipos literales
}

//Declaro la interfaz para las tareas
interface Tareas{
    ID:number;
    descripcion:string;
    estado: "pendiente" | "completada"; //Tipos literales
}

//| g

//Creo las clases para los Proyectos, Miembros del equipo y Tareas
class Proyecto{

    //Defino el constructor que inicialice las propiedades del objeto al momento de instanciar uno a esta clase
    //E implemento las propiedades definidas por la interfaz, puesto que esta clase implementa dicha interfaz
    /*constructor(public ID:number,public tipo_proyecto:"desarrollo web"|"diseño grafico "|"marketing",
        public nombre:string, public fechaInicio:string, public framework?:string){}
    */
    //Creo los metodos correspondientes para la clase Proyecto
    
    //guardare los proyectos en un array y sera del tipo que contenga elementos de tipo definidos por la interfaz Proyectos
    //Esta variable de la clase sera protegida
    protected proyectos:Proyectos[]=[];
    

    //Metodo para crear proyectos.
    //El parametro que acepta este metodo sera del tipo "Proyectos" definido por la interfaz
    crearProyecto(proyecto:Proyectos){
        //Agrego el proyecto al array que almacena los proyectos
        console.log("Proyecto creado:",proyecto);
        this.proyectos.push(proyecto);
    }

    //Ahora, para ver los proyectos, creare un modificador de acceso "get" para
    //poder visualizar los proyectos creados, puesto que la variable "proyectos"
    //es protegida y no puede acceder directamente desde el objeto instanciado
    get verProyectos(){
        //Muestro los proyectos
        console.log(this.proyectos);
        return this.proyectos;
    }
}

//Creo la clase para crear los miembros, por lo que implemento la interfaz Miembros al crear la clase
class Miembro{
    //Defino el constructor e inicializo las propiedades definidas por su interfaz
    /*constructor(public ID:number,public nombre:string,
        public rol: "desarrollador"|"diseñador"|"gerente"){}*/
    
    //Creo el array que almacenara elementos de SOLO el tipo definido por la interfaz Miembros
    protected miembros:Miembros[]=[];

    //Creo el metodo para agregar los miembros del equipo
    //El parametro sera solo del tipo definida por la interfaz Miembros
    agrearMiembros(miembro:Miembros){
        //Agrego el miembro pasado por parametro al arreglo que almacenara los miembros del equipo
        this.miembros.push(miembro);
    }

    //Defino el metodo para ver los miembros del grupo
    //Uso "get", pues miembros es una variable protegida
    get verMiembros(){
        //Muestro los miembros del equipo
        console.log(this.miembros);
        return this.miembros;
    }
}

//Creo la clase Tarea y defino sus metodos correspondientes
class Tarea{
    //Defino el constructor
    /*constructor(public ID:number, public descripcion:string,
        public estado:"pendiente"|"completada"){}*/
    
    //Creo el array que almacenara las tareas
    protected tareas:Tareas[] = [];

    //Defino los metodos

    //Asignar tareas debe ser de manera asincrona con un tiempo de dos
    //Creo una funcion que se encargara de asignar tareas y retornara una promesa
    //pues se usara async/await
    asignarTareas(tareas:Tareas):Promise<Tareas[]>{
        return new Promise((resolve,reject)=>{
            //Simulo un tiempo de espera de dos segundos, como se especifica
            setTimeout(()=>{
                //Asigno las tareas
                this.tareas.push(tareas);
                //La promesa se resolvera y devolvera el arreglo de tareas que las almacena
                resolve(this.tareas);
            },2000);
        })
    }
}

//Creo una funcion asincrona para manejar el metodo que devuelve una promesa y usar async/await
//Y usando las clases implementadas
async function Sistema(){
    //Creo un proyecto
    const proyectos=new Proyecto();
    //Creo proyectos
    const proyecto1:Proyectos={ID:1,nombre:"Sitio Web XYZ",
        fechaInicio:"2024-10-01",framework:"React"}
    
    //Creo el proyecto para almacenarlo
    proyectos.crearProyecto(proyecto1);

    //Creo miembros
    const grupo=new Miembro();
    //Creo los miembros
    const miembro1:Miembros={ID:1,nombre:"Ana",rol:"desarrollador"}

    //Y lueo seguir probando para agrear miembros al equipo, asi como 
    //crear proyectos y asignar tareas

}
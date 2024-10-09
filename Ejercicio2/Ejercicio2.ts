//Creo la interfaz de la materia
interface Materia{
    materia:string;
    calificacion:number;
}

//Creo la interfaz del estudiante
interface Estudiante{
    ID:number;
    nombre:string;
    calificaciones:Materia[]; //Las calificaciones seran del tipo definidas por la interfaz materia
}

//Creo una clase estudiante para definir los metodos correspondientes
class Alumno implements Estudiante{
    //Defino el constructor
    constructor(public ID:number,public nombre:string,
        public calificaciones:Materia[]){}
    
    //Defino el metodo que agrega las calificaciones del alumno
    protected materias:Materia[]=[];

    agregarCalificaciones(materia:Materia){
        this.materias.push(materia);
    }

    //Defino el metodo asíncrono que calcula el promedio de las calificaciones del alumno
    //Pues se especifica que la obtencion de datos debe ser asincrona
    obtenerPromedio():Promise<number>{
        return new Promise((resolve)=>{
            //Simulo un tiempo de espera para obtener el promedio del estudiante
            setTimeout(()=>{
                //Obtengo la suma de las calificaciones con reduce
              const suma_total=this.materias.reduce((actual,materia)=>{
            return actual + materia.calificacion
            },0)

            //Ya que calcule la suma total, ahora calculo el promedio
            const promedio=suma_total/this.materias.length;
        
           //Imprimo y retorno el promedio
           console.log(`El promedio del alumno es ${promedio}`);

           //La promesa se resuelve devolviendo el promedio del estudiante
           resolve(promedio);
            },2000);
        })
    }

    //Defino el metodo que muestre si el alumno aprobo/desaprobo
    aproboDesaprobo(promedio:number):Promise<string>{
        return new Promise((resolve,reject)=>{
            //Simulo el tiempo de espera para obtener informacion como se especifica
            setTimeout(()=>{
                if (promedio>=50){
                    console.log(`Promedio: ${promedio}`);
                    //La promesa se resuelve
                    resolve("El estudiante aprobó");
                }
                //Si el promedio es menor a 50
                else{
                    //La promesa se rechaza
                    reject("El estudiante desaprobó");
                }
              },2000); //Simulo un tiempo de espera de 2 segundos para obtener el promedio

            }); 
        }
}

async function Prueba(){
    //Creo un nuevo alumno
    const alumno=new Alumno(1,"Juan",[{materia:"Matematicas",calificacion:90}]);

    //Agrego calificaciones al alumno
    alumno.agregarCalificaciones({materia:"Quimica",calificacion:70});
    alumno.agregarCalificaciones({materia:"Ingles",calificacion:80});

    //Obtengo el promedio. Al ser una promesa, uso await para obtener la calificacion
    const resultado=await alumno.obtenerPromedio()
    console.log(`El resultado del alumno es ${resultado}`);
}
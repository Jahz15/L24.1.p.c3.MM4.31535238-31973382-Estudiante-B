let estudiante = [
    { nombre: 'Luis', semestre: 5, nota: 14 },
    { nombre: 'Pedro', semestre: 6, nota: 20 },
    { nombre: 'Maria', semestre: 5, nota: 15 },
    { nombre: 'Ana', semestre: 7, nota: 8 },
    { nombre: 'Carlos', semestre: 5, nota: 9 },
    { nombre: 'Luisa', semestre: 4, nota: 16 },] 

let nombresDeAprobados = (estudiante) => {
    let aprobados = [];
    for (let i = 0; i < estudiante.length; i++) {
        if (estudiante[i].nota >= 10) {
            aprobados.push(estudiante[i].nombre);
        }
    }
    return aprobados;
}
let salida = document.getElementById('salida');
let estudianteA= nombresDeAprobados(estudiante);
salida.innerHTML = `Estudiantes aprobados: <br>`;
estudianteA.forEach(estudiante => {
    salida.innerHTML += `["${estudiante}"]<br>`;
})
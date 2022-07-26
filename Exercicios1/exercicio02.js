// Exercício número 02)
function Triangulo(a, b, c){
    if (a<b+c && b<a+c && c<a+b){
        return tipoDeTriangulo()
    }else{
        return 'invalido'
    }
function tipoDeTriangulo(){
    if ( a==b && b==c  ){
        return 'Triangulo Equilátero'
    }else if (a==b || a==c || b==c){
        return 'Triangulo Isósceles'
    }else if(a!=b && b!=c){
        return 'Triangulo Escaleno'
    }

}
}
console.log(Triangulo(1,2,3));
console.log(Triangulo(3,3,3));
console.log(Triangulo(3,3,4));
console.log(Triangulo(3,4,5));

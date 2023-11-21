const productos = [
{
    id:'1',
    nombre: 'Royal Canin Small Adult',
    precio: 300,
    categoria: 'perros',
    img:  'http://rockmastercoder.com/img/productos_perro_11.png',
    stock:5,
    descripcion:'Alimento Premium para Adulto Raza Pequeña'

},
{
    id:'2',
    nombre: 'Royal Canin Large Adult',
    precio: 250,
    categoria: 'perros',
    img:'http://rockmastercoder.com/img/productos_perro_2.png',
    stock:10,
    descripcion:'Alimento Premium para Raza Grande Adulto'

},
{
    id:'3',
    nombre: 'Royal Canin Kitten',
    precio: 200,
    categoria: 'gatos',
    img:'http://rockmastercoder.com/img/productos_gato_1.png',
    stock:8,
    descripcion:'Alimento Premium para Gato'

},
{
    id:'4',
    nombre: 'Placas Identificación',
    precio: 100,
    categoria: 'accesorios',
    img:'http://rockmastercoder.com/img/productos_accesorios_1.png',
    stock:20,
    descripcion:'Placa de Identificación Personalizada para Mascota'

},
{
    id:'5',
    nombre: 'Productos de Entrenamiento',
    precio: 450,
    categoria: 'accesorios',
    img:'http://rockmastercoder.com/img/productos_accesorios_6.png',
    stock:18,
    descripcion:'Atrayente y Repelente de Alta Eficacia'

},
{
    id:'6',
    nombre: 'Suplementos Alimenticios',
    precio: 285,
    categoria: 'suplementos',
    img:'http://rockmastercoder.com/img/productos_medicamentos_2.png',
    stock:20,
    descripcion:'Productos Naturales para la salud de tu peludo'

}
]

export const getProductos = () => {
    return new Promise((resolve) => {
       setTimeout(() => {
           resolve(productos)
        },100)
    })
}

export const getProductosbyId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
         },100)
    })
}

export const getProductosbyCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoriaId))
         },100)
    })
}
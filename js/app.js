
let dia, hora,
    nav = document.getElementById("nav"),
    catalogo = document.getElementById("catalogo"),
    productos = document.getElementById("productos"),
    nosotros = document.getElementById("nosotros"),
    modal = document.getElementById("myModal"),
    cajaProductos = document.getElementById("caja-productos"),
    span = document.getElementsByClassName("close"),
    textoModdal = '';
    arrProductos = [
    {
        nombre: 'tuna',
        precio: 50,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://image.freepik.com/foto-gratis/cactus-espinoso-verde-sobre-fondo-rosa_23-2147842416.jpg',
        categoria: 'sombra',
        stock: 15,
        fecha: "Jue, 1 Octubre 2020 04:53:09 PM",
    },
    {
        nombre: 'Nopal',
        precio: 50,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum aut non nostrumaut non nostrumaut non nostrum aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://image.freepik.com/foto-gratis/planta-oficina_23-2148003008.jpg',
        categoria: 'sombra',
        stock: 15,
        fecha: "Jue, 1 Octubre 2020 04:53:09 PM",
    },
    {
        nombre: 'Suculenta 3',
        precio: 40,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://image.freepik.com/foto-gratis/disparo-aislado-selectivo-vertical-planta-cactus-verde-maceta-blanca_181624-2682.jpg',
        categoria: 'sombra',
        stock: 15,
        fecha: "Jue, 1 Octubre 2020 04:53:09 PM",

    },
    {
        nombre: 'Abuelito',
        precio: 30,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://image.freepik.com/foto-gratis/coleccion-cactus-plantas-suculentas-vasos-papel_128711-3193.jpg',
        categoria: 'sol',
        stock: 15, 
        fecha: "Jue, 1 Octubre 2020 04:53:09 PM",

    },
    {
        nombre: 'Tulipan',
        precio: 80,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://images.pexels.com/photos/931166/pexels-photo-931166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        categoria: 'sombra',
        stock: 15,
        fecha: "Jue, 1 Octubre 2020 04:53:09 PM",

    }
];


productos.style.display = 'none';
nosotros.style.display = 'none';

window.onscroll = function () {
    /* console.log("Vertical: " + window.scrollY); */

    if (window.scrollY > 100) {
        nav.classList.remove("caja-nav");
        nav.classList.add("caja-nav-move");
        nav.classList.add("difuminar");
    } else {
        nav.classList.add("caja-nav");
        nav.classList.remove("caja-nav-move");
        nav.classList.remove("difuminar");
    }
};

function showArea(i) {
    if (i == 1) {
        catalogo.style.display = 'block';
        productos.style.display = 'none';
        nosotros.style.display = 'none';
    }
    if (i == 2) {
        catalogo.style.display = 'none';
        productos.style.display = 'block';
        nosotros.style.display = 'none';
    }
    if (i == 3) {
        catalogo.style.display = 'none';
        productos.style.display = 'none';
        nosotros.style.display = 'block';
    }
}

function showCatalogo() {
    document.getElementById("catalogo").innerHTML = `
        <div class="container" id="caja-catalogo">
        </div>
    `;
    let cajaCatalogo = document.getElementById("caja-catalogo");
    for (let index = 0; index < arrProductos.length; index++) {
        const element = arrProductos[index];
        let divNew = document.createElement("div"),
            divImg = document.createElement("div"),
            divTexto = document.createElement("div"),
            divDesc = document.createElement("div"),
            divButtons = document.createElement("div"),
            img = document.createElement("img"),
            cat = document.createElement("div"), 
            contenidoCat = document.createTextNode(element.categoria),
            desc = document.createElement("p"),
            contenidoDesc= document.createTextNode(element.descripcion),
            precio = document.createElement("p"),
            contenidoPrecio = document.createTextNode(element.precio),
            nombre = document.createElement("h3"),
            contenidoNombre = document.createTextNode(element.nombre),
            but = document.createElement("button"),
            contenidoBut = document.createTextNode("comprar"),
            but2 = document.createElement("button"),
            contenidoBut2 = document.createTextNode("Dettalles")
            
        ;
        
        divImg.classList.add("img-card");
        divTexto.classList.add("txt-card");
        
        img.setAttribute("src", element.foto);
        divImg.appendChild(img);


        cat.appendChild(contenidoCat);
        cat.classList.add("categoria");
        if (element.categoria == "sombra" ){
            cat.classList.add("sombra");
        }
        if (element.categoria == "sol" ){
            cat.classList.add("sol");
        }
        divTexto.appendChild(cat);


        nombre.appendChild(contenidoNombre);
        nombre.classList.add("title-card");
        divTexto.appendChild(nombre);

        precio.innerHTML = `$ ${element.precio}`;
        precio.classList.add("price-card");
        divTexto.appendChild(precio);

        desc.appendChild(contenidoDesc)
        divDesc.append(desc)
        divDesc.classList.add("description-card");
        divTexto.appendChild(divDesc);
        
        but.appendChild(contenidoBut);
        but.classList.add("buy-button");

        but.setAttribute("onclick", `shoppingCart(${index}) `)
        but2.appendChild(contenidoBut2);
        but2.classList.add("details-button");



        divButtons.classList.add("caja-buttons")
        divButtons.appendChild(but2);
        divButtons.appendChild(but);

        divTexto.appendChild(divButtons);
        

        divNew.appendChild(divImg);
        divNew.appendChild(divTexto);
        cajaCatalogo.appendChild(divNew);
        divNew.classList.add("wow");
        divNew.classList.add("bounceInRight");
        divNew.classList.add("animated");
        divNew.classList.add("card-catalogo");
        divNew.setAttribute("data-wow-delay", ".5s");
        divNew.setAttribute("data-wow-duration", ".5s");
        
    }

}

showCatalogo();

function create() {
    fecha();
    let created = dia+hora;
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = parseInt(document.getElementById('precio').value);
    let foto = document.getElementById('foto').value;
    let categoria = document.getElementById('categoria').value;
    let stock = document.getElementById('stock').value;

    
    // console.log(nombre, descripcion, precio, foto);

    if (nombre != '' && descripcion != '' && precio != 0 && foto != '' && categoria != 'categoria'  && stock != 0) {

        let productNew = {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            foto: foto,
            categoria: categoria,
            stock: stock,
            fecha: created
        }
        arrProductos.push(productNew);
        // console.table(arrProductos);

        read();
        clean();
        closeModal();
        // alert("guardado");
        Swal.fire(
            'Excelente!',
            'Nuevo producto creado correctamente!',
            'success'
        );
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa los campos!',
            /* footer: '<a href>Why do I have this issue?</a>' */
        });
    }
}


function read() {
    document.getElementById('contenedor-tabla').innerHTML = `
        <div>
            <div class="float-right">
                <button onclick="showModal()" class="boton-nuevo">Nuevo Producto</button>
            </div>

            <table id="data">
                <tr id="vertical">
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Ceación</th>
                    <th colspan="2">Acciones</th>
                </tr>
            </table>
        </div>`;

    let data = document.getElementById("data");

    for (let index = 0; index < arrProductos.length; index++) {
        const element = arrProductos[index];

        // console.log(productos[index]);

        let tr = document.createElement('tr');

        let td = document.createElement('td');
        let content = document.createTextNode(element.nombre);
        td.appendChild(content);
        tr.appendChild(td);

        let td1 = document.createElement('td');
        let content1 = document.createTextNode(element.descripcion);
        td1.appendChild(content1);
        tr.appendChild(td1);

        
        let td2 = document.createElement('td');
        let content2 = document.createTextNode(`$ ${element.precio}`);
        td2.appendChild(content2);
        tr.appendChild(td2);

        let td5 = document.createElement('td');
        let content5 = document.createTextNode(element.fecha);
        td5.appendChild(content5);
        tr.appendChild(td5);

        let td3 = document.createElement('td');
        let boton = document.createElement('button');
        let contentBot = document.createTextNode('Editar');
        boton.appendChild(contentBot);
        boton.classList.add('boton-update');
        boton.setAttribute('onClick', `edit(${index})`);
        td3.appendChild(boton);
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        let boton1 = document.createElement('button');
        let contentBot1 = document.createTextNode('Borrar');
        boton1.appendChild(contentBot1);
        boton1.classList.add('boton-close');
        boton1.setAttribute("onClick", `borrar(${index})`);
        td4.appendChild(boton1);
        
        tr.appendChild(td4);
        data.appendChild(tr);
        setTimeout(function () {
            data.classList.add("wow");
            data.classList.add("bounceInUp");
            data.classList.add("animated");
            data.setAttribute("data-wow-delay", ".5s");
            data.setAttribute("data-wow-duration", ".5s");
        }, 1000 * index);
    }
    showCatalogo() ;
}
function edit(index) {
    clean();
    /* let botonCrear = document.getElementById("add");
    let botonCancelar = document.getElementById("cancel-add");
    botonCrear.style.display = "none"
    botonCancelar.style.display = "none" */
    let producto = arrProductos[index];
    // console.log(producto);
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('descripcion').value = producto.descripcion;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('foto').value = producto.foto;
    document.getElementById('categoria').value = producto.categoria;
    document.getElementById('stock').value = producto.stock;
    showModal(producto.nombre, index);

}


function showModal(x, index) {
    document.getElementById("but-duo").classList.remove("boton-nuevo");
    document.getElementById("but-duo").classList.remove("boton-update");
    // console.log(x);
    modal.style.display = "block";
    if (x != undefined) {
        document.getElementById("tituloModal").innerHTML = "Actualizar producto";
        document.getElementById("but-duo").innerHTML = "Actualizar";
        document.getElementById("but-duo").classList.add("boton-update");
        document.getElementById("but-duo").setAttribute("onclick", `update(${index} )`);

    } else {
        document.getElementById("tituloModal").innerHTML = "Nuevo producto";
        document.getElementById("but-duo").innerHTML = "Guardar";
        document.getElementById("but-duo").classList.add("boton-nuevo");
        document.getElementById("but-duo").setAttribute("onclick", "create()");

    }

}

function update(index) {
    // console.log(index);
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = parseInt(document.getElementById('precio').value);
    let foto = document.getElementById('foto').value;
    let categoria = document.getElementById('categoria').value;
    let stock = document.getElementById('stock').value;
    // console.log(categoria);
    let productNew = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        foto: foto,
        categoria: categoria,
        stock: stock
    }

    arrProductos[index] = productNew;

    read();
    clean();
    closeModal();
    Swal.fire(
        'Excelente!',
        'Producto actualizado correctamente!',
        'success'
    );
}

function borrar(element) {

    let producto = arrProductos[element];

    Swal.fire({
        title: `¿Seguro de borrar ${producto.nombre}`,
        showDenyButton: true,
        confirmButtonText: `Eliminar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Producto eliminado!', '', 'success');
            arrProductos.splice(element, 1);
            read();
        }
    })
}
function closeModal() {
    modal.style.display = "none";
    clean();
}


function clean() {
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('foto').value = '';
    document.getElementById('categoria').value = 'categoria';
    document.getElementById('stock').value = '';
}




/* ********************* */
/* ****** FECHA ******* */
/* ********************* */


function fecha() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "AM" : "PM";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    hora = hr + ":" + min + ":" + sec + " " + ap;

    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    dia = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
}

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.getElementById("date").innerHTML = date;

    setTimeout(function () { startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime();



/* *************+ */

let carrrito = document.getElementById("carrito"),
    cantidadSpan = document.getElementById("cantidad"),
    cantidad = 0,
    modalShopping = document.getElementById("shoppingCart"),
    shooppingProducts = [];

;

carrrito.style.display = "none";



function shoppingCart(i) {
    // console.log(i);

    let producto = arrProductos[i];
    
    
    /* let newProduct = { ...producto, piezas: cant }
    shooppingProducts.push(newProduct);
    let newProduct = { ...producto, piezas: cant } */
    shooppingProducts.push(producto);
  
    // console.table(shooppingProducts);
    
   
   /*  

    if (shooppingProducts.includes("producto.nombre") == false) {
        cant++
        let newProduct = {...producto, piezas : cant}
        
        
        console.log('La nueva colección de vegetales es: ');
    } else if (shooppingProducts.indexOf(producto.nombre) > -1) {
        console.log(producto.nombre + ' ya existe en la colección de verduras.');
    }
    */

    count();

    
}

function count() {
    cantidad++;
    // console.log(cantidad);
    if (cantidad >= 1) {
        cantidadSpan.innerHTML = `${cantidad}`;
        carrrito.style.display = "flex";
    }
}

function carrito() {
    readCart();
    modalShopping.style.display = "block";
}

function closeCarrito() {
    modalShopping.style.display = "none";

}

function readCart() {
    let totalPagar = 0;
    document.getElementById("listaProductos").innerHTML =`
    `;
    let contenido = document.getElementById("listaProductos");
    shooppingProducts.forEach((element) => {

        // console.log(element.nombre);

        let li = document.createElement("li");
        let caja1 = document.createElement("div");
        let caja2 = document.createElement("div");
        let caja3 = document.createElement("div");
        let caja4 = document.createElement("div");


        let nombre = document.createElement("h4");
        let contenidoN = document.createTextNode(element.nombre);
        nombre.appendChild(contenidoN);
        caja3.appendChild(nombre)

        let precio = document.createElement("h2");
        let contenidoP = document.createTextNode(element.precio);
        precio.appendChild(contenidoP);
        caja4.appendChild(precio)

        

        let img = document.createElement("img");
        
        img.setAttribute("src", element.foto);
        caja2.appendChild(img);
        caja1.classList.add("flex")
       
        caja2.classList.add("cart-img")
        caja1.appendChild(caja2)

        caja3.classList.add("cart-nombre")
        caja1.appendChild(caja3)

        caja4.classList.add("cart-precio")
        caja1.appendChild(caja4)

        totalPagar += element.precio;

       
        li.appendChild(caja1);
        contenido.appendChild(li);
        // console.log(totalPagar);
    });
    let totalShow = document.getElementById("total");
    totalShow.innerHTML = ` TOTAL A PAGAR : ${totalPagar}`;
   
  
}

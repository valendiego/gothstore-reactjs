const products = [
    {
        id: '1',
        name: 'Corset Merlina',
        price: 4500,
        category: 'Corsets',
        img: 'https://dcdn.mitiendanube.com/stores/003/091/950/products/corset-11-f3e0fcc351d4a99b0916857401923014-480-0.webp',
        stock: 8,
        description: 'Corset negro de cuerina, elastizado y reforzado por detrás para que se amolde cómodamente al cuerpo'
    },
    {
        id: '2',
        name: 'Falda Misa',
        price: 7400,
        category: 'Faldas',
        img: 'https://dcdn.mitiendanube.com/stores/003/091/950/products/screenshot_20230911-21544521-f6b030d23d5ece3a4c16944806961366-480-0.webp',
        stock: 9,
        description: 'Falda con cintura tipo corset, encaje y lazos. Cuenta con un cierre al costado para facilitar su colocación. Hecha con material tropical mecánico, se amolda al contorno de la cintura y tiene buen calce'
    },
    {
        id: '3',
        name: 'Medias Goth',
        price: 3700,
        category: 'Medias',
        img: 'https://dcdn.mitiendanube.com/stores/003/091/950/products/1bef958afd5ec2f3a8a6c02314e9fa7a-6eccb364a2bd88fa1417025599882659-480-0.webp',
        stock: 5,
        description: 'Medias importadas de diseño. Súper cómodas y de buena calidad, reforzadas'
    },
    {
        id: '4',
        name: 'Falda Dreampop',
        price: 7800,
        category: 'Faldas',
        img: 'https://dcdn.mitiendanube.com/stores/003/091/950/products/whatsapp-image-2023-07-19-at-10-53-21-am1-dd33f31cc4680321d316897760011906-480-0.webp',
        stock: 5,
        description: 'Falda de bengalina elastizada, se amolda al contorno de la cintura y tienen buen calce.'
    },
    {
        id: '5',
        name: 'Pantalón Parachute',
        price: 8100,
        category: 'Pantalones',
        img: 'https://dcdn.mitiendanube.com/stores/003/091/950/products/sin-titulo-112-58b60db6805617cf7c16828978883283-480-0.webp',
        stock: 7,
        description: 'Pantalón modelo parachute. Cómodo y suelto, estilo baggy/oversize y moderno. Se pueden regular con el cordón que se encuentra en la zona de la cadera/cintura.'
    },
    {
        id: '6',
        name: 'Corset Black',
        price: 4700,
        category: 'Corsets',
        img: 'https://dcdn.mitiendanube.com/stores/003/091/950/products/corset-black-739caa9206d4176f0b17012895024302-480-0.webp',
        stock: 4,
        description: 'Corset negro de cuerina, elastizado y reforzado por detrás para que se amolde cómodamente al cuerpo'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
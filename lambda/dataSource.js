export const createWelcomeDatasource = () => {
    return {
        "headlineTemplateData": {
            "type": "object",
            "objectId": "headlineSample",
            "properties": {
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
                            "size": "large"
                        }
                    ]
                },
                "textContent": {
                    "primaryText": {
                        "type": "PlainText",
                        "text": "Bienvenido APL Londres"
                    }
                },
                "logoUrl": "",
                "hintText": "intenta, \"dime sobre londres\""
            }
        }
    }
};



export const createErrorDatasource = () => {
    return {
        "headlineTemplateData": {
            "type": "object",
            "objectId": "headlineSample",
            "properties": {
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
                            "size": "large"
                        }
                    ]
                },
                "textContent": {
                    "primaryText": {
                        "type": "PlainText",
                        "text": "Lo siento, tuve problemas para hacer lo que pediste. Por favor intenta nuevamente."
                    }
                },
                "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
                "hintText": "Intenta de Nuevo"
            }
        }
    }
};

export const createHelpDatasource = () => {
    return {
        "headlineTemplateData": {
            "type": "object",
            "objectId": "headlineSample",
            "properties": {
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
                            "size": "large"
                        }
                    ]
                },
                "textContent": {
                    "primaryText": {
                        "type": "PlainText",
                        "text": "Ayuda!"
                    }
                },
                "logoUrl": "",
                "hintText": "intenta, \"Ayuda aplLondres\""
            }
        }
    }
};



export const createCancelDatasource = () => {
    return {
        "headlineTemplateData": {
            "type": "object",
            "objectId": "headlineSample",
            "properties": {
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
                            "size": "large"
                        }
                    ]
                },
                "textContent": {
                    "primaryText": {
                        "type": "PlainText",
                        "text": "¡Adiós!"
                    }
                },
                "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
                "hintText": "intente de nuevo"
            }
        }
    }
};

export const createDescriptionDatasource = () => {
    return {
        "videoPlayerTemplateData": {
            "type": "object",
            "properties": {
                "backgroundImage": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
                "displayFullscreen": false,
                "headerTitle": "Londres",
                "headerSubtitle": "",
                "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
                "videoControlType": "skip",
                "videoSources": [
                    "https://labarbada.store/videos/London.mp4"
                ],
                "sliderType": "determinate"
            }
        }
    };
};


export const createTouristPlacesDatasource = () => {
    return {
        "gridListData": {
            "type": "object",
            "objectId": "gridListSample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
                        "size": "small",
                        "widthPixels": 0,
                        "heightPixels": 0
                    },
                    {
                        "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                        "size": "large",
                        "widthPixels": 0,
                        "heightPixels": 0
                    }
                ]
            },
            "title": "Lugares Turisticos",
            "listItems": [
                {
                    "primaryText": "El Palacio de Buckingham",
                    "imageSource": "https://media.revistaad.es/photos/631ae2ee0fec8fa36d3e84d3/16:9/w_2560%2Cc_limit/GettyImages-100500944.jpg"
                },
                {
                    "primaryText": "El Big Ben y las Casas del Parlamento",
                    "imageSource": "https://previews.123rf.com/images/bloodua/bloodua1701/bloodua170104228/70712686-el-big-ben-las-casas-del-parlamento-y-el-puente-de-westminster-en-londres-en-un-hermoso-d%C3%ADa-de.jpg"
                },
                {
                    "primaryText": "La Torre de Londres",
                    "imageSource": "https://www.londres.es/f/reino-unido/londres/guia/torre-de-londres-m.jpg"
                },
                {
                    "primaryText": "El Puente de la Torre",
                    "imageSource": "https://loving-london.com/es/wp-content/uploads/2017/02/tower-bridge-170216103507001-1920x960.jpg"
                },
                {
                    "primaryText": "La Abadía de Westminster",
                    "imageSource": "https://res.cloudinary.com/dtljonz0f/image/upload/f_auto/q_auto/v1/gc-v1/london-pass/shutterstock_680652298%20(1)%20(1).jpg"
                },
                {
                    "primaryText": "Stamford Bridge",
                    "imageSource": "https://images2.minutemediacdn.com/image/upload/c_crop,w_7360,h_4140,x_0,y_458/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01h3vnk3hm6gpqtgw0rx.jpg"
                }
            ],
            "logoUrl": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg"
        }
    };
};

export const createComidaTipicaDatasource = () => {
    return {
        "simpleTextTemplateData": {
            "type": "object",
            "properties": {
                "backgroundImage": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
                "foregroundImageLocation": "left",
                "foregroundImageSource": "https://cdn-3.expansion.mx/dims4/default/76aee69/2147483647/strip/true/crop/1100x578+0+42/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fa9%2F83%2F8e15dcf449698e6080027e25cbf7%2Fru-p.jpg",
                "headerTitle": "Comida Típica",
                "headerSubtitle": "Londres",
                "hintText": "Intenta , \"Traje típico\"",
                "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
                "primaryText": "Fish and Chips: Pescado frito en una masa crujiente, servido con papas fritas y a menudo acompañado de puré de guisantes y salsa tártara.",
                "textAlignment": "start",
                "titleText": "Fish And Chips"
            }
        }
    };
};

export const createTrajeTipicoDatasource = () => {
    return {
        "simpleTextTemplateData": {
            "type": "object",
            "properties": {
                "backgroundImage": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
                "foregroundImageLocation": "top",
                "foregroundImageSource": "https://viajaresmaravilloso.wordpress.com/wp-content/uploads/2011/06/londres-tipico-02.jpg?w=640",
                "headerTitle": "Londres",
                "headerSubtitle": "Traje Típico",
                "hintText": "Intenta, \"Personajes sobresalientes\"",
                "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
                "primaryText": "En Londres, no existe un traje típico específico debido a la diversidad cultural de la ciudad y la falta de una identidad nacional específica como en otras regiones del Reino Unido, como Escocia con su kilt. Sin embargo, se pueden destacar algunos trajes históricos y de eventos tradicionales.",
                "textAlignment": "start",
                "titleText": "Traje Típico"
            }
        }
    };
};

export const createPersonajesSobresalientesDatasource = () => {
    return {
        "cardsLayoutTemplateData": {
            "type": "object",
            "properties": {
                "backgroundImage": "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
                "headerTitle": "Londres",
                "headerSubtitle": "",
                "headerAttributionImage": "",
                "primaryText": "Personajes Sobresalientes",
                "listItems": [
                    {
                        "primaryText": "William Shakespeare",
                        "secondaryText": "Dramaturgo y poeta",
                        "thumbnailImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/1200px-Shakespeare.jpg"
                    },
                    {
                        "primaryText": "Cole Palmer",
                        "secondaryText": "Futbolista profesional",
                        "thumbnailImage": "https://phantom-marca.unidadeditorial.es/f6f0b7b9b04f9502830a02facd9bbe74/resize/828/f/jpg/assets/multimedia/imagenes/2024/02/16/17080996634855.jpg"
                    },
                    {
                        "primaryText": "Isaac Newton",
                        "secondaryText": "Científico y matemático",
                        "thumbnailImage": "https://museovirtual.csic.es/salas/luz/img/Sir_Isaac_Newton_(1643-1727).jpg"
                    }
                ]
            }
        }
    };
};

export const createMusicDatasource = () => {
    return {
        "audioPlayerTemplateData": {
            "type": "object",
            "properties": {
                "audioControlType": "jump30",
                "audioSources": [
                    "https://labarbada.store/videos/audioAlexis.m4a"
                ],
                "backgroundImage": "https://i.ytimg.com/vi/mQER0A0ej0M/maxresdefault.jpg",
                "coverImageSource": "https://i.ytimg.com/vi/iW_-nr0_j_s/maxresdefault.jpg",
                "headerTitle": "Musica Londres",
                "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
                "primaryText": "Hey Jude",
                "secondaryText": "The Beatles",
                "sliderType": "determinate"
            }
        }
    };
};

import Alexa from 'ask-sdk-core';

import {
    createWelcomeDatasource,
    createHelpDatasource,
    createErrorDatasource,
    createCancelDatasource,
    createDescriptionDatasource,
    createTouristPlacesDatasource,
    createComidaTipicaDatasource,
    createTrajeTipicoDatasource,
    createPersonajesSobresalientesDatasource,
    createMusicDatasource
} from './dataSource.js';

const DOCUMENT_ID_WELCOME = "WelcomeAPL";
const DOCUMENT_ID_HELP = "HelpAPL";
const DOCUMENT_ID_ERROR = "ErrorAPL";
const DOCUMENT_ID_CANCEL = "CancelAndStopAPL";
const DOCUMENT_ID_DESCRIPTION = "homeApl";
const DOCUMENT_ID_TOURIST_PLACES = "lugaresTuristicosAPL";
const DOCUMENT_ID_COMIDA_TIPICA = "comidaTipicaAPL";
const DOCUMENT_ID_TRAJE_TIPICO = "trajeTipicoAPL";
const DOCUMENT_ID_PERSONAJES_SOBRESALIENTES = "PersonajesSobresalientesAPL";
const DOCUMENT_ID_MUSIC = "MusicLondonAPL";


const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    };
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a aplLondres. Puedes pedirme información sobre Londres como sus lugares turísticos, comida típica, traje típico, personajes sobresalientes, y música. ¿Sobre qué te gustaría saber más?';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_WELCOME, createWelcomeDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DescripcionCiudadIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescripcionCiudadIntent';
    },
    handle(handlerInput) {
        const ciudad = Alexa.getSlotValue(handlerInput.requestEnvelope, 'Ciudad');
        const speakOutput = ciudad.toLowerCase() === 'londres'
            ? 'Londres es la capital de Inglaterra y el Reino Unido, una ciudad vibrante y llena de historia.'
            : `Lo siento, no tengo información sobre ${ciudad}.`;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'] && ciudad.toLowerCase() === 'londres') {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_DESCRIPTION, createDescriptionDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const LugaresTuristicosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LugaresTuristicosIntent';
    },
    handle(handlerInput) {
        const ciudad = Alexa.getSlotValue(handlerInput.requestEnvelope, 'Ciudad');
        const speakOutput = ciudad.toLowerCase() === 'londres'
            ? 'Aquí hay algunos lugares turísticos famosos en Londres: El Palacio de Buckingham, El Big Ben y las Casas del Parlamento, La Torre de Londres, El Puente de la Torre, La Abadía de Westminster, y Stamford Bridge.'
            : `Lo siento, no tengo información sobre los lugares turísticos en ${ciudad}.`;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'] && ciudad.toLowerCase() === 'londres') {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_TOURIST_PLACES, createTouristPlacesDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ComidaTipicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComidaTipicaIntent';
    },
    handle(handlerInput) {
        const ciudad = Alexa.getSlotValue(handlerInput.requestEnvelope, 'Ciudad');
        const speakOutput = ciudad.toLowerCase() === 'londres'
            ? 'Fish and Chips: Pescado frito en una masa crujiente, servido con papas fritas y a menudo acompañado de puré de guisantes y salsa tártara.'
            : `Lo siento, no tengo información sobre la comida típica en ${ciudad}.`;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'] && ciudad.toLowerCase() === 'londres') {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_COMIDA_TIPICA, createComidaTipicaDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const TrajeTipicoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TrajeTipicoIntent';
    },
    handle(handlerInput) {
        const ciudad = Alexa.getSlotValue(handlerInput.requestEnvelope, 'Ciudad');
        const speakOutput = ciudad.toLowerCase() === 'londres'
            ? 'En Londres, no existe un traje típico específico debido a la diversidad cultural de la ciudad y la falta de una identidad nacional específica como en otras regiones del Reino Unido, como Escocia con su kilt. Sin embargo, se pueden destacar algunos trajes históricos y de eventos tradicionales.'
            : `Lo siento, no tengo información sobre el traje típico en ${ciudad}.`;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'] && ciudad.toLowerCase() === 'londres') {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_TRAJE_TIPICO, createTrajeTipicoDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PersonajesSobresalientesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PersonajesSobresalientesIntent';
    },
    handle(handlerInput) {
        const ciudad = Alexa.getSlotValue(handlerInput.requestEnvelope, 'Ciudad');
        const speakOutput = ciudad.toLowerCase() === 'londres'
            ? 'Aquí hay algunos personajes sobresalientes de Londres: William Shakespeare, Cole Palmer e Isaac Newton.'
            : `Lo siento, no tengo información sobre personajes sobresalientes en ${ciudad}.`;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'] && ciudad.toLowerCase() === 'londres') {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_PERSONAJES_SOBRESALIENTES, createPersonajesSobresalientesDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MusicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicaIntent';
    },
    handle(handlerInput) {
        const ciudad = Alexa.getSlotValue(handlerInput.requestEnvelope, 'Ciudad');
        const speakOutput = ciudad.toLowerCase() === 'londres'
            ? 'Aquí tienes una canción representativa de Londres: Hey Jude de The Beatles.'
            : `Lo siento, no tengo información sobre la música en ${ciudad}.`;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'] && ciudad.toLowerCase() === 'londres') {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_MUSIC, createMusicDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes pedirme información sobre Londres como sus lugares turísticos, comida típica, traje típico, personajes sobresalientes, y música. ¿Sobre qué te gustaría saber más?';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_HELP, createHelpDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós!';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_CANCEL, createCancelDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no entiendo esa solicitud. Puedes pedirme información sobre Londres como sus lugares turísticos, comida típica, traje típico, personajes sobresalientes, y música. ¿Sobre qué te gustaría saber más?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que pediste. Por favor intenta nuevamente.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_ERROR, createErrorDatasource());
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


export const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        DescripcionCiudadIntentHandler,
        LugaresTuristicosIntentHandler,
        ComidaTipicaIntentHandler,
        TrajeTipicoIntentHandler,
        PersonajesSobresalientesIntentHandler,
        MusicaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
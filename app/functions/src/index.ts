import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// Cloud Vision
// import * as vision from '@google-cloud/vision';
const vision = require('@google-cloud/vision');

// const visionClient = new vision.ImageAnnotatorClient();
const client = new vision.ImageAnnotatorClient();
// Dedicated bucket for cloud function invocation
const bucketName = 'ocr-2019-bb841.appspot.com';

export const imageTagger = functions.storage

.bucket(bucketName).object().onFinalize(async (object, _context) => {

    // File data
    const filePath = object.name || '';

    // Location of saved file in bucket
    const imageUri = `gs://${bucketName}/${filePath}`;

    const docId = filePath.split('.jpg')[0];

    const docRef = admin.firestore().collection('imagens').doc(docId);

    // Realiza a detecção do texto da imagem
    const results = await client.textDetection(imageUri);
    const retorno = results[0].textAnnotations;

    const palavras: any[] = [];
    retorno.forEach((element:any) => {
        palavras.push(element["description"]);
    });

    return docRef.set({ teste: palavras });


});
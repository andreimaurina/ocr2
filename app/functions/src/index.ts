import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// Cloud Vision
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

// Nome do bucket
const bucketName = 'ocr-2019-bb841.appspot.com';

export const imageTagger = functions.storage

.bucket(bucketName).object().onFinalize(async (object, _context) => {

    // File data
    const filePath = object.name || '';

    // Localização da imagem no Cloud Storage
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





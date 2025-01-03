import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';


export async function Readfile(filepath) {
    try {
        const filePath = filepath; //'C:/Users/Public/archivo.txt';
        const response = await window.electronAPI.invoke('readFile', filePath);
        return response || "archivo no encontrado";
    } catch (error) {
        console.error('Error al leer el archivo:', error);
    }
}
export async function handleWriteFile(dirPath, content) {
    try {
        //console.log(content);
        const response = await window.electronAPI.invoke('writeFile', dirPath, content);
      //  console.log(response);
    } catch (error) {
        console.error('Error al escribir el archivo:', error);
    }
}

export default function Database() {
    const [fileRContent, setFileRContent] = useState('');
    const [FileWContent, setFileWContent] = useState('');
    const [files, setFiles] = useState([]);
    const [filesLoaded, setFilesLoaded] = useState(false);
    var arraytesting = [
        ["Document1", { type: "cerca" }],
        ["Document2", { type: "lejos" }]
    ];

    async function handleReadDir() {
        try {
            const dirPath = 'C:/Users/Public';
            const response = await window.electronAPI.invoke('readDir', dirPath);
            //console.log(response);
            setFiles(response || []);
            setFilesLoaded(true);
        } catch (error) {
            console.error('Error al leer el directorio:', error);
        }
    }


    useEffect(() => {
        var response = handleReadDir();
        console.log(response);
    }, []);

    useEffect(() => {
        if (filesLoaded == true) {
            console.log(arraytesting);
            console.log(arraytesting.find((item) => item[0] === "Document1"));
            var element = arraytesting.find((item) => item[0] === "Document1");
            const clientesJsonFile = files.find((file) => file === 'customers.json');
            const stockfile = files.find((file) => file === 'stock.json');
            const documentsfile = files.find((file) => file === 'documents.json');
            const senddata = files.find((file) => file === 'senddata.json');
            const statisticsfile = files.find((file) => file === 'statistics.json');
            if (clientesJsonFile) {
                console.log('Found customers.json file"');
            } else {
                console.log('No se encontró el archivo "clientes.json".');
                console.log('No se encontró el archivo "clientes.json".');
                handleWriteFile('C:/Users/Public/customers.json', `[]`);
            }
            if (stockfile) {
                console.log('Found stock.json file"');
            } else {
                handleWriteFile('C:/Users/Public/stock.json', `[]`);
            }
            if (documentsfile) {
                console.log('Found documents.json file"');
            } else {
                handleWriteFile('C:/Users/Public/documents.json', `[]`);
            }
            if (senddata) {
                console.log("Found senddata.json");
            } else {
                handleWriteFile('C:/Users/Public/senddata.json', `{}`);
            }
        }
    }, [files]);
    console.log(files);
}
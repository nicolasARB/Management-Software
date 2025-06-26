import { useEffect, useState } from "react";
import logo from '../images/Logo1.png';
import whatsapp from '../images/whatsapp.png';
import { Readfile, handleWriteFile } from './Databases';


export default function Document() {
    const [DocumentDate, SetDate] = useState(null);
    const [WorkNumber, SetNumber] = useState('1');
    const [glassProps, SetProps] = useState({
        "numsobre": "", "fecha": "", "type": "", "nombre": "", "address": "", "documentid": "", "phone": "", "Id": "", "mail": "", "esf": "", "cil": "", "dip": "", "alt": "", "oi": "", "oicil": "", "od": "",
        "odcil": "", "armazon": "", "cristales": "", "dsc": "", "total": "", "sen": "", "saldo": "", "fechaprox": "", "pedidopara": "", "reparacion": ""
    });
    const [GetsentData, SetsentData] = useState({});
    const [DocumentData, SetDocumentData] = useState();
    const [isSobre, setIssobre] = useState(false);
    const [AllDocuments, SetAllDocuments] = useState("");
    var sobrenum;
    var currentinsobre = false;

    async function getalldocuments() {
        try {
            const response = await Readfile("C:/Users/Public/documents.json");
            const documents = JSON.parse(response);
            SetAllDocuments(documents);

            let maxSobre = 0;

            documents.forEach(doc => {
                const ns = parseInt(doc.numsobre);
                if (!isNaN(ns) && ns > maxSobre) {
                    maxSobre = ns;
                }
            });


            const nextSobre = maxSobre + 1;

            SetNumber(nextSobre.toString());
            sobrenum = nextSobre;

            console.log("Próximo número de sobre:", nextSobre);

        } catch (error) {
            console.error('Error loading documents:', error);
        }
    }
    async function getsobrenum() {

        try {
            const response = await Readfile("C:/Users/Public/documents.json");
            var Data
            if (response == []) {
                Data = [];
            } else {
                Data = JSON.parse(response);
                console.log(Data);
            }
            console.log(isSobre);
            console.log(currentinsobre);
            if (Data && Data.length !== undefined && isSobre === false && currentinsobre == false) {
                console.log("Longitud de DocumentData:", Data.length + 1);
                /*if (Data.hasOwnProperty("numsobre")) {
                    Data.numsobre = String(Data.length + 3);
                    sobrenum = String(Data.length + 3);
                }*/
            } else {
                if (Data.hasOwnProperty("numsobre")) {
                    Data.numsobre = "3";

                }
                console.log("Data es nulo o vacío.");
            }
            if (isSobre != true) {
                //  SetNumber(sobrenum);
            }
        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }
    }
    async function loadnewdata() {
        const updatedGlassProps = { ...glassProps };
        try {
            const response = await Readfile("C:/Users/Public/senddata.json");
            const parsedData = JSON.parse(response);
            SetsentData(parsedData);
            getsobrenum();
            // getalldocuments();
            const updatedGlassProps = { ...glassProps };
            for (const key in parsedData) {
                if (parsedData.hasOwnProperty(key)) {
                    if (updatedGlassProps.hasOwnProperty(key)) {
                        updatedGlassProps[key] = parsedData[key];
                    }
                }
            }
            console.log(parsedData);
            SetProps(updatedGlassProps);
            console.log(updatedGlassProps);
            console.log(glassProps);

        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }
    }
    useEffect(() => {
        const navbar = document.querySelector('#navbar');
        console.log("asd");
        if (navbar) {
            navbar.style.display = 'none';
        }
        console.log(glassProps);
        loadnewdata();
        getalldocuments();
        return () => {
            const navbar = document.querySelector('#navbar');
            if (navbar) {
                navbar.style.display = 'flex';
            }
        };

    }, []);

    useEffect(() => {
        var actualdate = new Date();
        var day = actualdate.getDate();
        var month = actualdate.getMonth() + 1;
        var year = actualdate.getFullYear();
        var date = day + "/" + month + "/" + year;
        SetProps({ ...glassProps, fecha: date })
        if (GetsentData.hasOwnProperty("issobre")) {
            if (GetsentData.issobre == true) {
                setIssobre(true);
                SetNumber(GetsentData.numsobre);
                currentinsobre = true;
                sobrenum = GetsentData.numsobre;
                console.log(GetsentData.numsobre);
                SetProps(prevGlassProps => ({
                    ...prevGlassProps,
                    fecha: GetsentData.fecha,
                    type: GetsentData.type,
                    esf: GetsentData.esf,
                    cil: GetsentData.cil,
                    dip: GetsentData.dip,
                    alt: GetsentData.alt,
                    oi: GetsentData.oi,
                    oicil: GetsentData.oicil,
                    od: GetsentData.od,
                    odcil: GetsentData.odcil,
                    armazon: GetsentData.armazon,
                    cristales: GetsentData.cristales,
                    dsc: GetsentData.dsc,
                    total: GetsentData.total,
                    sen: GetsentData.sen,
                    saldo: GetsentData.saldo,
                    fechaprox: GetsentData.fechaprox,
                    pedidopara: GetsentData.pedidopara
                }));
            }

        }
    }, [GetsentData])
    async function getdocumentsdata() {
        try {
            const response = await Readfile("C:/Users/Public/documents.json");
            var Data = [];
            if (response !== "[]") {
                Data = JSON.parse(response);
                console.log(Data);
            }
            if (isSobre == true) {
                console.log(Data);
                console.log(response);
                console.log(GetsentData.numsobre);
                console.log(WorkNumber);
                const updatedGlassProps = { ...glassProps };
                const updatedData = Data.map(item => {
                    if (item.numsobre === GetsentData.numsobre) {
                        for (const key in glassProps) {
                            if (item.hasOwnProperty(key)) {
                                item[key] = updatedGlassProps[key]

                            }
                        }
                    }
                    return item;
                });
                console.log(updatedData);
                SetDocumentData(updatedData);
            } else {
                SetDocumentData(Data);
            }

        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }
    }

    const [saveDocument, setSaveDocument] = useState();
    const Upload = async (ev) => {
        //console.log(saveDocument);
        try {
            handleWriteFile('C:/Users/Public/documents.json', `${saveDocument}`);
        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }

    };

    const Uploadtocustomer = async () => {
        try {
            const response = await Readfile("C:/Users/Public/customers.json");
            const customers = JSON.parse(response);

            const customerToUpdateIndex = customers.findIndex(customer =>
                customer.Id === GetsentData.Id
            );
            console.log(customerToUpdateIndex)
            if (customerToUpdateIndex !== -1) {
                const updatedCustomer = {
                    ...customers[customerToUpdateIndex],
                    documents: [...customers[customerToUpdateIndex].documents, sobrenum]
                };
                customers[customerToUpdateIndex] = updatedCustomer;
                console.log(updatedCustomer);
                await handleWriteFile("C:/Users/Public/customers.json", JSON.stringify(customers));

                console.log("Cliente actualizado:", updatedCustomer);
            } else {
                console.log("Cliente no encontrado.");
            }
        } catch (error) {
            console.error("Error al leer o escribir el archivo:", error);
        }
    };


    useEffect(() => {
        // Upload();
        var data = glassProps;
        var save = document.querySelector("#save")
        //  console.log(DocumentData);
        console.log("Guardando...");
        if (save.innerHTML == "guardar") {
            save.innerHTML = "guardando...";
            setTimeout(() => {
                save.innerHTML = "guardar";
            }, 1000);

            if (DocumentData && DocumentData.length !== undefined && isSobre === false) {
                console.log("Longitud de DocumentData:", DocumentData.length + 1);
                if (data.hasOwnProperty("numsobre")) {
                    data.numsobre = WorkNumber;
                    sobrenum = String(DocumentData.length + 1);
                    sobrenum = WorkNumber;
                    console.log(sobrenum);
                }
            } else {
                if (data.hasOwnProperty("numsobre") && isSobre === false) {
                    data.numsobre = "1";

                }
                console.log("DocumentData es nulo o vacío.");
            }

            if (isSobre == false) {
                Uploadtocustomer();
            }
            if (DocumentData && Array.isArray(DocumentData) && isSobre === false) {
                var newdocumentdata = DocumentData;
                newdocumentdata.push(data);
                console.log("NEW DATA")
                setSaveDocument(JSON.stringify(newdocumentdata));
                setIssobre(true);

            } else if (isSobre == true) {
                setSaveDocument(JSON.stringify(DocumentData));
            }
            else {
                console.log("DocumentData no es un array válido.");
            }
            // setIssobre(true);
        }

    }, [DocumentData]);
    useEffect(() => {
        console.log(WorkNumber);
    }, [WorkNumber]);
    useEffect(() => {
        if (saveDocument !== null && saveDocument !== undefined) {
            setIssobre(true);
            //console.log(saveDocument);
            Upload();
        }
    }, [saveDocument]);

    function Save() {
        console.log(isSobre);
        console.log(WorkNumber);
        console.log(sobrenum);
        getdocumentsdata();
        var save = document.querySelector("#save")

    }

    return (<div id="documentcontainer">

        <button id="imprimir" onClick={function () { window.print() }}>imprimir</button>
        <button id="save" onClick={Save}>guardar</button>
        <section id="header1">
            {/* <h1 className="d-inline px-4">Trabajo n°{WorkNumber}</h1>  datosp px-3 esf cil px-3 fs-3*/}
            <h1 className="d-inline  trf">Trabajo n° <input type="text" id="" className="inputs  numdetrb" value={WorkNumber} onChange={(e) => SetNumber(e.target.value)}></input></h1>
            <h1 className="d-inline  trf">Fecha: <input type="text" id="" className="inputs  numdetrb" value={glassProps.fecha} onChange={(e) => SetProps({ ...glassProps, fecha: e.target.value })}></input></h1>
            <p className=" datosp nomarginpadding">Nombre y apellido: <input type="text" id="" className="inputs" value={glassProps.nombre} onChange={(e) => SetProps({ ...glassProps, nombre: e.target.value })}></input></p>
            <p className=" datosp nomarginpadding">Domicilio: <input type="text" id="" className="inputs" value={glassProps.address} onChange={(e) => SetProps({ ...glassProps, address: e.target.value })}></input></p>
            <p className=" datosp nomarginpadding">Celular: <input type="text" id="" className="inputs" value={glassProps.phone} onChange={(e) => SetProps({ ...glassProps, phone: e.target.value })}></input></p>
            <div className="blackline"></div>
            <div className="d-flex flex-row justify-content-between " id="divtexts">
                <p className="esfcil nomarginpadding">Esf: <input type="text" className="inputs" id="esf" value={glassProps.esf} onChange={(e) => SetProps({ ...glassProps, esf: e.target.value })}></input></p>
                <p className="esfcil nomarginpadding">Cil: <input type="text" className="inputs" id="cil" value={glassProps.cil} onChange={(e) => SetProps({ ...glassProps, cil: e.target.value })}></input></p>
                <p className="esfcil nomarginpadding">DIP: <input type="text" className="inputs" id="dip" value={glassProps.dip} onChange={(e) => SetProps({ ...glassProps, dip: e.target.value })}></input></p>
                <p className="esfcil nomarginpadding">ALT: <input type="text" className="inputs" id="alt" value={glassProps.alt} onChange={(e) => SetProps({ ...glassProps, alt: e.target.value })}></input></p>
            </div>
            <p className="ps-3 font-size-base texts nomarginpadding">OD: <input type="text" className="inputs" id="od" value={glassProps.od} onChange={(e) => SetProps({ ...glassProps, od: e.target.value })}></input> <input type="text"
                className="inputs txtinp" id="odcil" value={glassProps.odcil} onChange={(e) => SetProps({ ...glassProps, odcil: e.target.value })}></input></p>
            <p className="ps-3 font-size-base texts nomarginpadding">OI: <input type="text" className="inputs" id="oi" value={glassProps.oi} onChange={(e) => SetProps({ ...glassProps, oi: e.target.value })}></input>
                <input type="text" className="inputs txtinp" id="oicil" value={glassProps.oicil} onChange={(e) => SetProps({ ...glassProps, oicil: e.target.value })}></input></p>
            {glassProps.type === "Lejos" || glassProps.type === "Cerca" ? (
                <p className="ps-3 font-size-base texts nomarginpadding">
                    Cristales:
                    <input
                        type="text"
                        className="inputs cristales"
                        id="cristales"
                        value={glassProps.cristales}
                        onChange={(e) => SetProps({ ...glassProps, cristales: e.target.value })}
                    />
                </p>
            ) : glassProps.type === "Reparacion" ? (
                <p className="ps-3 font-size-base texts nomarginpadding">
                    Reparación:
                    <input
                        type="text"
                        className="inputs cristales"
                        id="reparacion"
                        value={glassProps.reparacion}
                        onChange={(e) => SetProps({ ...glassProps, reparacion: e.target.value })}
                    />
                </p>
            ) : null}
            <p className="ps-3 font-size-base texts nomarginpadding">Armazón: <input type="text" className="inputs armazon" id="armazon" value={glassProps.armazon} onChange={(e) => SetProps({ ...glassProps, armazon: e.target.value })}></input></p>
            <div className="blackline"></div>
            <div className="desctotaldiv">
                <p className="dsctotal">Dsc: <input type="text" className="inputs inputs2" id="dssc" value={glassProps.dsc} onChange={(e) => SetProps({ ...glassProps, dsc: e.target.value })}></input></p>
                <p className="dsctotal">Total: <input type="text" id="total" className="inputs inputs2" value={glassProps.total} onChange={(e) => SetProps({ ...glassProps, total: e.target.value })}></input></p>
            </div>
            <div className="desctotaldiv">
                <p className="sesald">Seña: <input type="text" className="inputs inputs2" id="sen" value={glassProps.sen} onChange={(e) => SetProps({ ...glassProps, sen: e.target.value })}></input></p>
                <p className="sesald sal1">Saldo: <input type="text" className="inputs inputs2" id="sal" value={glassProps.saldo} onChange={(e) => SetProps({ ...glassProps, saldo: e.target.value })}></input></p>
            </div>

        </section>
        <p className="corte">
            ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </p>
        <section id="info">
            <div id="infodiv">
                <img id="infologo" src={logo}></img>
                <p>Av Federico Lacroze 3211.</p>
                <div className="margg">
                    <p>Lunes a Viernes</p>
                </div>
                <div className="margg">
                    <p >10hs a 13hs y 15hs a 19hs.</p>
                </div>
                {/*  <div className="margg">
                    <p >15hs a 19hs</p>
                </div>*/}
                <p>Sábados de 10hs a 14hs.</p>
                <div id="infodiv2"> <img src={whatsapp}></img> <p>11-6613-0262.</p></div>
            </div>

        </section>

        <section id="header2">
            <h1 className="d-inline trf">Trabajo n° <input type="text" id="" className="inputs  numdetrb" value={WorkNumber} readOnly></input></h1>
            <h1 className="d-inline trf">Fecha: {glassProps.fecha}</h1>
            <div className="desctotaldiv">
                <p className="dsctotal2 dssc">Dsc: <input type="text" className="inputs txtinp2 descx" value={glassProps.dsc}></input></p>
                <p className="dsctotal2 total">Total: <input type="text" className="inputs txtinp2 totalx" value={glassProps.total}></input></p>
            </div>
            <div className="desctotaldiv">
                <p className="sesald2 sen">Seña: <input type="text" className="inputs senax" value={glassProps.sen}></input></p>
                <p className="sesald2 sal">Saldo: <input type="text" className="inputs salx" value={glassProps.saldo}></input></p>
            </div>

            <p className="retiroyfechaprox pedidopara">Fecha aproximada de retiro: <input id="retiroaprox" type="text" className="inputs" value={glassProps.fechaprox} onChange={(e) => SetProps({ ...glassProps, fechaprox: e.target.value })}></input>
            </p>
        </section>
        <p className="corte" id="#corte2">
            ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </p>


    </div >
    )
}
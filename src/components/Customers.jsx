import { useState } from "react";
import { useEffect } from "react";
import { Readfile, handleWriteFile } from './Databases';
//import { CustomerContext } from './CustomerProvider';
export default function Customers() {
    const [CustomersData, setCustomerData] = useState();
    const [DocumentsData, setDocumentsData] = useState([]);
    const [CustomerDocuments, SetCustomerDocuments] = useState([]);
    const [CustomerBrowse, setCustomerbrowse] = useState([])
    const [mappedCustomers, setMappedCustomers] = useState([]);
    const [PageNumber, setPageNumber] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);


    const [SelectedCustomer, SetSelectedCustomer] = useState(null);
    const [selectedDocumentIndex, setSelectedDocumentIndex] = useState(null);
    const [NewCustomer, SetNewCustomer] = useState({ "nombre": "", "mail": "", "phone": "", "address": "", "documentid": "", "documents": [] });

    var CustomerName = document.querySelector("#CustomerName");
    var CustomerMail = document.querySelector("#CustomerMail");
    var CustomerPhone = document.querySelector("#CustomerPhone");
    var CustomerAddress = document.querySelector("#CustomerAddress");
    var CustomerDocument = document.querySelector("#CustomerDocument");
    var [SelectedDocument, SetSelectedDocument] = useState(null);
    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const OpenDocument = async (ev) => {
        if (SelectedCustomer != null) {
            var send = SelectedCustomer;
            console.log(ev.target);
            send.type = ev.target.innerHTML;
            send = JSON.stringify(send);
            console.log(SelectedDocument);
            if (SelectedDocument != null) {
                send = SelectedDocument;
                send.issobre = true;
                console.log("reach");
                console.log(send);
                send = JSON.stringify(send);
            }
            try {
                handleWriteFile('C:/Users/Public/senddata.json', `${send}`);
                await window.electronAPI.invoke('openDocumentWindow');
            } catch (error) {
                console.error('Error al leer el archivo:', error);
            }
        }
    };
    const openedit = async (ev) => {
        try {
            await window.electronAPI.invoke('openEditWindow');
        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }
    };

    const Opencustomerdoc = async (ev) => {
        if (SelectedDocument != null) {
            var send = SelectedCustomer;
            send = SelectedDocument;
            send.issobre = true;
            console.log("reach");
            console.log(send);
            send = JSON.stringify(send);

            try {
                handleWriteFile('C:/Users/Public/senddata.json', `${send}`);
                await window.electronAPI.invoke('openDocumentWindow');
            } catch (error) {
                console.error('Error al leer el archivo:', error);
            }
        }
    };

    async function loadnewdata() {
        var filedata;
        try {
            const response = await Readfile("C:/Users/Public/customers.json");
            filedata = JSON.parse(response);
        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }
        setCustomerData(filedata);
    }
    loadnewdata();

    function ViewCustomerData(data, ev) {
        console.log(data);
        SetSelectedDocument(null);
        setSelectedDocumentIndex(null);
        SetSelectedCustomer({
            "nombre": data.nombre, "mail": data.mail, "phone": data.phone, "address": data.address, "documentid": data.documentid, "documents": data.documents, "esf": "", "cil": "", "dip": "", "alt": "", "oi": "", "oicil": "", "od": "",
            "odcil": "", "armazon": "", "cristales": "", "dsc": "", "total": "", "sen": "", "saldo": "", "fechaprox": "", "pedidopara": ""
        });
        console.log(SelectedCustomer);
        CustomerName.style.display = "none";
        CustomerMail.style.display = "none";
        CustomerPhone.style.display = "none";
        CustomerAddress.style.display = "none";
        CustomerDocument.style.display = "none";
        if (data.hasOwnProperty('nombre')) {
            CustomerName.innerHTML = "Nombre: " + data.nombre;
            CustomerName.style.display = 'inline';
        }
        if (data.hasOwnProperty('mail')) {
            CustomerMail.innerHTML = "Email: " + data.mail;
            CustomerMail.style.display = 'inline';
        }
        if (data.hasOwnProperty('phone')) {
            CustomerPhone.innerHTML = "Celular: " + data.phone;
            CustomerPhone.style.display = 'inline';
        }
        if (data.hasOwnProperty('address')) {
            CustomerAddress.innerHTML = "Dirección: " + data.address;
            CustomerAddress.style.display = 'inline';
        }
        if (data.hasOwnProperty('documentid')) {
            CustomerDocument.innerHTML = "DNI: " + data.documentid;
            CustomerDocument.style.display = 'inline';
        }
        const matchingDocuments = DocumentsData.filter(doc => data.documents.includes(doc.numsobre));
        SetCustomerDocuments(matchingDocuments);

        /*  matchingDocuments.forEach(doc => {
              const documentElement = document.createElement("div");
              documentElement.innerText = `Document ${doc.numsobre}: ${doc.type}`;
              documentElement.addEventListener("click", () => {
                  // Handle clicking on a document
                  console.log(`Clicked on document ${doc.numsobre}`);
              });
              documentsDiv.appendChild(documentElement);
          });
  */
    }


    useEffect(() => {
        async function loadDocuments() {
            try {
                const response = await Readfile("C:/Users/Public/documents.json");
                const documents = JSON.parse(response);
                setDocumentsData(documents);
            } catch (error) {
                console.error('Error loading documents:', error);
            }
        }
        loadDocuments();
    }, []);

    function updateDocumentdata() {
        async function loadDocuments() {
            try {
                const response = await Readfile("C:/Users/Public/documents.json");
                const documents = JSON.parse(response);
                setDocumentsData(documents);
            } catch (error) {
                console.error('Error loading documents:', error);
            }
        }
        loadDocuments();
    }

    useEffect(() => {
        if (SelectedCustomer != null) {
            const matchingDocuments = DocumentsData.filter(doc => SelectedCustomer.documents.includes(doc.numsobre));
            SetCustomerDocuments(matchingDocuments);
            console.log("updating selected document.");
            if (SelectedDocument != null) {
                const updatedDocument = DocumentsData.find(doc => doc.numsobre === SelectedDocument.numsobre);
                SetSelectedDocument(updatedDocument);
            }
        }
        async function reloadcustomers() {
            var filedata;
            try {
                const response = await Readfile("C:/Users/Public/customers.json");
            } catch (error) {
                console.error('Error al leer el archivo:', error);
            }
            setCustomerData(filedata);
        }
        reloadcustomers();

    }, [DocumentsData])
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateDocumentdata();
            console.log("updating...");
        }, 500);
        return () => clearInterval(intervalId);
    }, []);


    function updatebrowser(ev) {
        const searchTerm = ev.target.value.toLowerCase();
        console.log(searchTerm);

        const filteredCustomers = CustomersData.filter((customer) => {
            const nombre = customer.nombre.toLowerCase();
            const phone = customer.phone ? customer.phone.toLowerCase() : "";
            const email = customer.email ? customer.email.toLowerCase() : "";
            const address = customer.address ? customer.address.toLowerCase() : "";

            return (
                nombre.includes(searchTerm) ||
                phone.includes(searchTerm) ||
                email.includes(searchTerm) ||
                address.includes(searchTerm)
            );
        });
        setCustomerbrowse(filteredCustomers);
        console.log(CustomerBrowse);
    }

    function Arrow(leftoright) {
        console.log(leftoright);
        if (leftoright == "left") {
            setPageNumber(PageNumber - 1);
            console.log(PageNumber)
        } else {
            setPageNumber(PageNumber + 1);
            console.log(PageNumber);
        }
    }

useEffect(() => {
    const startIndex = (PageNumber - 1) * 17;
    const endIndex = startIndex + 17;

    if (Array.isArray(CustomersData) && Array.isArray(CustomerBrowse)) {
        let sortedCustomers = [];

        if (CustomerBrowse.length === 0) {
            sortedCustomers = [...CustomersData];
        } else {
            sortedCustomers = [...CustomerBrowse];
        }

        sortedCustomers.sort((a, b) => {
            const maxA = a.documents.length > 0 ? Math.max(...a.documents) : 0;
            const maxB = b.documents.length > 0 ? Math.max(...b.documents) : 0;
            return maxB - maxA; 
        });

        setMappedCustomers(sortedCustomers.slice(startIndex, endIndex));
    }

    if (PageNumber < 1) {
        setPageNumber(1);
    }
}, [CustomersData, PageNumber, CustomerBrowse]);

    async function CreateNewCustomer() {
        console.log(NewCustomer);
        var filedata;
        try {
            const response = await Readfile("C:/Users/Public/customers.json");
            console.log(response);
            filedata = JSON.parse(response);
        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }
        var result = filedata.find((item) => item[0] === NewCustomer.mail || NewCustomer.documentid);
        console.log(result);
        if (result === null || result === undefined) {
            console.log("no se encontro");
            filedata.push(NewCustomer);
            console.log(filedata);
        } else {
            console.log("se encontro");
        }
        console.log(filedata);
        try {
            const updatedFileData = JSON.stringify(filedata);
            await handleWriteFile("C:/Users/Public/customers.json", updatedFileData);
            console.log("Archivo actualizado con el nuevo cliente.");
        } catch (error) {
            console.error('Error al escribir el archivo:', error);
        }
        loadnewdata();
    }

    const handleModal = () => {
        console.log(SelectedCustomer);
        if (SelectedCustomer != null) {
            setModalVisible(true);
        }
    };
    useEffect(() => {
        if (SelectedCustomer) {
            const updatedCustomerDocuments = DocumentsData.filter(doc => SelectedCustomer.documents.includes(doc.numsobre));
            SetCustomerDocuments(updatedCustomerDocuments);
    
            if (SelectedDocument) {
                const updatedSelectedDocument = DocumentsData.find(doc => doc.numsobre === SelectedDocument.numsobre);
                SetSelectedDocument(updatedSelectedDocument || null);
            }
        }
    }, [DocumentsData, SelectedCustomer, SelectedDocument]);


    function UpdateDocumentData(document, index) {
        console.log(document);
        SetSelectedDocument(document);
        setSelectedDocumentIndex(index);
    }


    return (
        <div style={{ width: '100' + '%', height: '100' + '%' }}>
            {modalVisible && (
                <div id="modal1" class="modal">
                    <form class="modal-content" action="/action_page.php">
                    <button id="closemodal" onClick={(ev) => { handleCloseModal(); }}>X</button>
                        <div class="container">
                            <h1>Crear sobre</h1>
                            <div class="clearfix">
                                <button type="button" id="buttoncerca" 
                                    onClick={(ev) => { handleCloseModal(); OpenDocument(ev); }}
                                    class="deletebtnstock bt buttonmodal">Cerca</button>
                                <button type="button" id="buttonlejos" 
                                    onClick={(ev) => { handleCloseModal(); OpenDocument(ev); }}
                                    class="cancelbtnstock bt buttonmodal">Lejos</button>
                                <button type="button" id="buttonlejos" 
                                    onClick={(ev) => { handleCloseModal(); OpenDocument(ev); }}
                                    class="cancelbtnstock bt buttonmodal">Reparacion</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}

            <input className="inline mt-3" type="textarea" id="browsersearch" placeholder="Buscar cliente" onChange={(ev) => updatebrowser(ev)}></input>
            <div className="container-fluid vh-75 mt-3 d-flex align-middle">
                <section className="h-100 customersections" id="Customers">
                    {mappedCustomers.length > 0 && mappedCustomers/*.reverse()*/.map((customer) => (
                        <div className="customer" onClick={(ev) => ViewCustomerData(customer, ev)}>
                            Cliente - {customer.nombre}, {customer.phone}
                        </div>
                    ))}
                </section>

                <section className="h-100 customersections" id="CustomerData">

                    <section id="customerdata">
                        <h2 className="text-center p-3">Datos personales</h2>
                        <div id="CustomerName" className="cusinline">Nombre:</div>
                        <div id="CustomerMail" className="cusinline" >Email:</div>
                        <div id="CustomerPhone" className="cusinline">Celular:</div>
                        <div id="CustomerAddress" className="cusinline">Dirección:</div>
                        <div id="CustomerDocument" className="cusinline">DNI:</div>
                    </section>

                    <section id="customerdocuments" className="h-50 w-100">
                        <h2 className="text-center p-3">Sobres</h2>
                        <section className="" id="documents">
                            {CustomerDocuments.length > 0 && CustomerDocuments.map((document, index) => (
                                <div
                                    className={`document ${selectedDocumentIndex === index ? "selectedocument" : ""}`}
                                    onClick={(ev) => UpdateDocumentData(document, index)}>
                                    Anteojo - {document.type} - Sobre nro {document.numsobre}
                                </div>
                            ))}
                        </section>

                    </section>
                    <button id="createdocument" onClick={handleModal}>crear sobre</button>
                    <button id="opendocument" onClick={Opencustomerdoc}>abrir</button>
                </section>
            </div>
            <div id="page">
                <div className="arrowbuttons" id="leftarrow" onClick={(ev) => Arrow("left")}> {'<'}   </div>
                <input className="inputcustomer" type="number" value={PageNumber}></input>
                <div className="arrowbuttons" id="rightarrow" onClick={(ev) => Arrow("right")}> {'>'} </div>

            </div>

            <footer className="position-relative bottom-0 w-auto mx-2" id="agregarclientes">
                <input
                    type="text"
                    value={NewCustomer.nombre}
                    placeholder="inserte nombre"
                    onChange={(e) => SetNewCustomer({ ...NewCustomer, nombre: e.target.value })}
                />
                <input
                    type="text"
                    value={NewCustomer.mail}
                    placeholder="Mail"
                    onChange={(e) => SetNewCustomer({ ...NewCustomer, mail: e.target.value })}
                />
                <input
                    type="text"
                    value={NewCustomer.phone}
                    placeholder="Telefono"
                    onChange={(e) => SetNewCustomer({ ...NewCustomer, phone: e.target.value })}
                />
                <input
                    type="text"
                    value={NewCustomer.address}
                    placeholder="Domicilio"
                    onChange={(e) => SetNewCustomer({ ...NewCustomer, address: e.target.value })}
                />
                <input
                    type="text"
                    value={NewCustomer.document}
                    placeholder="Documento"
                    onChange={(e) => SetNewCustomer({ ...NewCustomer, documentid: e.target.value })}
                />
                <button id="addcliente" onClick={CreateNewCustomer}>Añadir</button>
                <button id="edit" onClick={openedit} >Editar</button>
            </footer>


        </div >
    )
}
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

    const [CanEdit, SetEditable] = useState(false);

    const [DocumentToDelete, SetDocumentToDelete] = useState();
    const [DocumentToDeleteModal, SetDocumentToDeleteModal] = useState(false);

    const [CustomerEditModal, SetCustomerEditModal] = useState(false);

    const [SelectedCustomer, SetSelectedCustomer] = useState(null);
    const [selectedDocumentIndex, setSelectedDocumentIndex] = useState(null);
    const [NewCustomer, SetNewCustomer] = useState({ "nombre": "", "mail": "", "phone": "", "address": "", "documentid": "", "Id": "", "documents": [] });
    var [SelectedDocument, SetSelectedDocument] = useState(null);
    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const HandleDocumentToDelete = () => {
        SetDocumentToDeleteModal(false);
    };
    const HandleCustomerEdit = () => {
        SetCustomerEditModal(false);
    };
    const OpenDocument = async (ev) => {
        if (SelectedCustomer != null) {
            var send = SelectedCustomer;
            console.log(ev.target);
            send.type = ev.target.innerHTML;
            send = JSON.stringify(send);
            if (SelectedDocument != null) {
                send = SelectedDocument;
                send.issobre = false;
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
            send.Id = SelectedCustomer.Id;
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
            //      console.log(filedata);
        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }
        setCustomerData(filedata);
    }
    loadnewdata();

    function ViewCustomerData(data, ev) {
        SetSelectedDocument(null);
        setSelectedDocumentIndex(null);
        SetSelectedCustomer({
            "nombre": data.nombre, "mail": data.mail, "phone": data.phone, "address": data.address, "documentid": data.documentid, "documents": data.documents, "Id": data.Id, "esf": "", "cil": "", "dip": "", "alt": "", "oi": "", "oicil": "", "od": "",
            "odcil": "", "armazon": "", "cristales": "", "dsc": "", "total": "", "sen": "", "saldo": "", "fechaprox": "", "pedidopara": ""
        });
        console.log(SelectedCustomer);
        const matchingDocuments = DocumentsData.filter(doc => data.documents.includes(doc.numsobre));
        SetCustomerDocuments(matchingDocuments);
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

        if (!searchTerm) {
            if (CustomerBrowse.length !== 0) {
                setCustomerbrowse([]);
            }
            return;
        }

        const filteredCustomers = CustomersData.filter((customer) => {
            const nombre = customer.nombre.toLowerCase();
            const phone = customer.phone ? customer.phone.toLowerCase() : "";
            const email = customer.mail ? customer.mail.toLowerCase() : "";
            const address = customer.address ? customer.address.toLowerCase() : "";

            return (
                nombre.includes(searchTerm) ||
                phone.includes(searchTerm) ||
                email.includes(searchTerm) ||
                address.includes(searchTerm)
            );
        });

        // Comparar arrays (por ID, nombre, etc.)
        const areEqual =
            filteredCustomers.length === CustomerBrowse.length &&
            filteredCustomers.every((c, i) => c.Id === CustomerBrowse[i]?.Id);

        if (!areEqual) {
            setCustomerbrowse(filteredCustomers);
        }
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
        if (!Array.isArray(CustomersData)) return;

        const startIndex = (PageNumber - 1) * 17;
        const endIndex = startIndex + 17;

        let baseList = CustomerBrowse.length > 0 ? CustomerBrowse : CustomersData;

        // No uses .reverse() en el array original directamente porque lo muta
        const sorted = [...baseList].reverse();
        const newMapped = sorted.slice(startIndex, endIndex);

        // Comparar arrays por ID para evitar re-renders innecesarios
        const areEqual =
            newMapped.length === mappedCustomers.length &&
            newMapped.every((c, i) => c.Id === mappedCustomers[i]?.Id);

        if (!areEqual) {
            setMappedCustomers(newMapped);
        }

        if (PageNumber < 1) {
            setPageNumber(1);
        }
    }, [CustomersData, PageNumber, CustomerBrowse]);

    async function AsignarIdsClientesExistentes() {
        let filedata = [];
        try {
            const response = await Readfile("C:/Users/Public/customers.json");
            filedata = JSON.parse(response);
        } catch (error) {
            console.error("Error al leer el archivo:", error);
            return;
        }

        const yaTienenIds = filedata.every(cliente => cliente.Id !== undefined && cliente.Id !== null);
        if (yaTienenIds) {
            console.log("Todos los clientes ya tienen ID. No se actualiza nada.");
            return;
        }

        const filedataConIds = filedata.map((cliente, index) => ({
            ...cliente,
            Id: index + 1,
        }));

        try {
            const updatedFileData = JSON.stringify(filedataConIds, null, 2);
            await handleWriteFile("C:/Users/Public/customers.json", updatedFileData);
            console.log("IDs asignados correctamente a todos los clientes.");
        } catch (error) {
            console.error("Error al escribir el archivo:", error);
        }

        loadnewdata();
    }
async function AsignarIdsADocumentos() {
    let documentos = [];
    let clientes = [];

    try {
        const docData = await Readfile("C:/Users/Public/documents.json");
        documentos = JSON.parse(docData);
    } catch (error) {
        console.error("Error al leer el archivo de documentos:", error);
        return;
    }

    try {
        const clientData = await Readfile("C:/Users/Public/customers.json"); // Asegurate de que este sea el path correcto
      console.log(clientData);
        clientes = JSON.parse(clientData);
    } catch (error) {
        console.error("Error al leer el archivo de clientes:", error);
        return;
    }

    let cambios = false;

    const documentosActualizados = documentos.map(doc => {
        if (doc.Id !== undefined && doc.Id !== null) return doc;

        const cliente = clientes.find(c => c.phone === doc.phone);
        if (cliente) {
            cambios = true;
            return {
                ...doc,
                Id: cliente.Id,
            };
        }

        return doc;
    });

    if (!cambios) {
        console.log("No se encontraron documentos sin ID o sin coincidencias de teléfono.");
        return;
    }

    try {
        const updatedData = JSON.stringify(documentosActualizados, null, 2);
        await handleWriteFile("C:/Users/Public/documents.json", updatedData);
        console.log("IDs asignados correctamente a los documentos que no los tenían.");
    } catch (error) {
        console.error("Error al escribir el archivo actualizado:", error);
    }

    loadnewdata();
}
    useEffect(() => {
        AsignarIdsClientesExistentes();
 AsignarIdsADocumentos();
    }, []);

    async function CreateNewCustomer() {
        console.log(NewCustomer);
        let filedata = [];
        try {
            const response = await Readfile("C:/Users/Public/customers.json");
            filedata = JSON.parse(response);
            console.log("Clientes existentes:", filedata);
        } catch (error) {
            console.error("Error al leer el archivo:", error);
        }
        console.log(NewCustomer);
        const result = filedata.find(
            (item) => item.phone === NewCustomer.phone
        );
        console.log(result);
        if (!result) {
            console.log("Cliente nuevo. Añadiendo...");

            const maxId = filedata.reduce((max, curr) => Math.max(max, curr.Id || 0), 0);
            const newId = maxId + 1;

            const clienteConId = { ...NewCustomer, Id: newId };
            filedata.push(clienteConId);

            try {
                const updatedFileData = JSON.stringify(filedata, null, 2);
                await handleWriteFile("C:/Users/Public/customers.json", updatedFileData);
                console.log("Archivo actualizado con el nuevo cliente.");
            } catch (error) {
                console.error("Error al escribir el archivo:", error);
            }
        } else {
            console.log("Cliente ya existe. No se añadió.");
        }

        loadnewdata();
    }

    async function EditCustomer() {
        let filedata = [];
        try {
            const response = await Readfile("C:/Users/Public/customers.json");
            filedata = JSON.parse(response);
        } catch (error) {
            console.error("Error al leer el archivo:", error);
            return;
        }
        console.log(SelectedCustomer);
        const index = filedata.findIndex(cliente => cliente.Id === SelectedCustomer.Id);
        if (index === -1) {
            console.error("Cliente no encontrado para editar.");
            return;
        }

        filedata[index] = { ...SelectedCustomer };

        try {
            const updatedFileData = JSON.stringify(filedata, null, 2);
            await handleWriteFile("C:/Users/Public/customers.json", updatedFileData);
            console.log("Cliente actualizado correctamente.");
        } catch (error) {
            console.error("Error al guardar el archivo:", error);
        }

        loadnewdata();
    }

    async function remove(customerR) {
        try {
            const indexToRemove = DocumentsData.findIndex(item => item.numsobre === customerR.numsobre);

            if (indexToRemove === -1) {
                console.warn("Documento no encontrado en la lista.");
                return;
            }

            const updatedData = [...DocumentsData.slice(0, indexToRemove), ...DocumentsData.slice(indexToRemove + 1)];
            setDocumentsData(updatedData);
            var customerrsobre = Number(customerR.numsobre)
            console.log(customerrsobre);
            console.log(customerR.numsobre);
            const associatedCustomer = CustomersData.find(customer => customer.documents.includes(customerrsobre));

            if (associatedCustomer) {
                const updatedCustomer = {
                    ...associatedCustomer,
                    documents: associatedCustomer.documents.filter(docNum => docNum !== customerrsobre),
                };

                const customerIndex = CustomersData.findIndex(item => item.phone === associatedCustomer.phone);

                if (customerIndex !== -1) {
                    const updatedCustomersData = [
                        ...CustomersData.slice(0, customerIndex),
                        updatedCustomer,
                        ...CustomersData.slice(customerIndex + 1),
                    ];

                    setCustomerData(updatedCustomersData);
                    console.log(updatedCustomersData);
                    const updatedCustomersFileData = JSON.stringify(updatedCustomersData);
                    await handleWriteFile("C:/Users/Public/customers.json", updatedCustomersFileData);
                }
            }

            const updatedFileData = JSON.stringify(updatedData);
            await handleWriteFile("C:/Users/Public/documents.json", updatedFileData);
            console.log("Documento eliminado y archivo actualizado.");
        } catch (error) {
            console.error('Error al eliminar el Documento y escribir el archivo:', error);
        }

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
        SetSelectedDocument(document);
        setSelectedDocumentIndex(index);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetSelectedCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value,
        }));
    };

    const handleSelectCustomer = (customer) => {
        SetSelectedCustomer({ ...customer });
    };

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

            {DocumentToDeleteModal && (
                <div id="modal1" class="modal">
                    <form class="modal-content" action="/action_page.php">
                        <button id="closemodal" onClick={(ev) => { HandleDocumentToDelete(); }}>X</button>
                        <div class="container">
                            <h2>Seguro que queres eliminar este sobre?({DocumentToDelete.numsobre})</h2>
                            <div class="clearfix">
                                <button type="button" id="buttoncerca"
                                    onClick={(ev) => { HandleDocumentToDelete(); remove(DocumentToDelete); }}
                                    class="deletebtnstock bt buttonmodal">Aceptar</button>
                                <button type="button" id="buttonlejos"
                                    onClick={(ev) => { HandleDocumentToDelete(); }}
                                    class="cancelbtnstock bt buttonmodal">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}

            {CustomerEditModal && (
                <div id="modal1" class="modal">
                    <form class="modal-content" action="/action_page.php">
                        <button id="closemodal" onClick={(ev) => { HandleCustomerEdit(); }}>X</button>
                        <div class="container">
                            <h2>Seguro que queres editar este cliente?</h2>
                            <div class="clearfix">
                                <button type="button" id="buttoncerca"
                                    onClick={(ev) => { HandleCustomerEdit(); EditCustomer(); }}
                                    class="deletebtnstock bt buttonmodal">Aceptar</button>
                                <button type="button" id="buttonlejos"
                                    onClick={(ev) => { HandleCustomerEdit(); }}
                                    class="cancelbtnstock bt buttonmodal">Cancelar</button>
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
                        <h2 className="text-center p-1">Datos personales</h2>
                        {SelectedCustomer && (
                            <div>
                                <label>
                                    Nombre: 
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={SelectedCustomer.nombre || ""}
                                        onChange={handleInputChange}
                                        disabled={!CanEdit}
                                    />
                                </label>
                                <br />
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="mail"
                                        value={SelectedCustomer.mail || ""}
                                        onChange={handleInputChange}
                                        disabled={!CanEdit}
                                    />
                                </label>
                                <br />
                                <label>
                                    Teléfono:
                                    <input
                                        type="text"
                                        name="phone"
                                        value={SelectedCustomer.phone || ""}
                                        onChange={handleInputChange}
                                        disabled={!CanEdit}
                                    />
                                </label>
                                <br />
                                <label>
                                    Dirección:
                                    <input
                                        type="text"
                                        name="address"
                                        value={SelectedCustomer.address || ""}
                                        onChange={handleInputChange}
                                        disabled={!CanEdit}
                                    />
                                </label>
                                {CanEdit && (
                                    <button id="savecustomer" onClick={() => SetCustomerEditModal(true)}>Guardar</button>
                                )}

                            </div>
                        )}
                    </section>

                    <section id="customerdocuments" className="h-50 w-100">
                        <h2 className="text-center p-3">Sobres</h2>
                        <section className="" id="documents">
                            {CustomerDocuments.length > 0 && CustomerDocuments.map((document, index) => (
                                <div
                                    className={`document ${selectedDocumentIndex === index ? "selectedocument" : ""} documentincustomer`}
                                    onClick={(ev) => UpdateDocumentData(document, index)}
                                >
                                    <span>Anteojo - {document.type} - Sobre nro {document.numsobre}</span>
                                    {CanEdit && (
                                        <button
                                            className="deletestyle"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                SetDocumentToDelete(document);
                                                SetDocumentToDeleteModal(true);
                                                //  remove(document);
                                            }}
                                            style={{ color: "red" }}
                                        >
                                            X
                                        </button>
                                    )}
                                </div>

                            ))}
                        </section>

                    </section>
                    <div id="crearabrir">
                    <button id="createdocument" onClick={handleModal}>crear sobre</button>
                    <button id="opendocument" onClick={Opencustomerdoc}>abrir</button>
                </div>
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
                <button id="" onClick={() => SetEditable(!CanEdit)}>{CanEdit ? "Deshabilitar Edicion" : "Habilitar Edicion"}</button>
            </footer>


        </div >
    )
}
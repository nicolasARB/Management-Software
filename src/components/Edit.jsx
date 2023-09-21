import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Readfile, handleWriteFile } from './Databases';
export default function Edit() {
    const [PageNumber, setPageNumber] = useState(1);
    const [CustomersData, setCustomerData] = useState([]);
    const [CustomerBrowse, setCustomerbrowse] = useState([])
    const [mappedCustomers, setMappedCustomers] = useState([]);

    const [DocumentsData, setDocumentsData] = useState([]);
    const [DocumentsBrowse, setDocumentsbrowse] = useState([])
    const [mappedDocuments, setMappedDocuments] = useState([]);

    const [currentPage, setCurrentPage] = useState([]);
    async function loadNewData() {
        try {
            const response = await Readfile("C:/Users/Public/customers.json");
            const filedata = JSON.parse(response);
            setCustomerData(filedata);
        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }

        try {
            const response = await Readfile("C:/Users/Public/documents.json");
            const filedata = JSON.parse(response);
            setDocumentsData(filedata);
        }
        catch (error) { console.error('Error al leer el archivo:', error); }
    }

    useEffect(() => {
        loadNewData();
        setCurrentPage("customers");
        const navbar = document.querySelector('#navbar');
        if (navbar) {
            navbar.style.display = 'none';
        }
        return () => {
            const navbar = document.querySelector('#navbar');
            if (navbar) {
                navbar.style.display = 'flex';
            }
        };

    }, []);

    useEffect(() => {
        const startIndex = (PageNumber - 1) * 16;
        if (currentPage == "customers") {
            const endIndex = startIndex + 14;
            const Display = CustomerBrowse.length > 0 ? CustomerBrowse : CustomersData;
            const Slicecustomers = Display.slice(startIndex, endIndex);

            setMappedCustomers(Slicecustomers);
        }
        if (currentPage == "documents") {
            const endIndex = startIndex + 14;
            const Display = DocumentsBrowse.length > 0 ? DocumentsBrowse : DocumentsData;
            const Slicecustomers = Display.slice(startIndex, endIndex);

            setMappedDocuments(Slicecustomers);
        }
    }, [PageNumber, CustomerBrowse, CustomersData, currentPage, DocumentsData, DocumentsBrowse]);

    function updatebrowser(ev) {
        const searchTerm = ev.target.value.toLowerCase();
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
    }

    async function remove(customerR) {
        if (currentPage == "customers") {
            try {
                const indexToRemove = CustomersData.findIndex(item => item.phone === customerR.phone);

                if (indexToRemove === -1) {
                    console.warn("Cliente no encontrado en la lista.");
                    return;
                }

                const updatedData = [...CustomersData.slice(0, indexToRemove), ...CustomersData.slice(indexToRemove + 1)];

                setCustomerData(updatedData);

                const updatedFileData = JSON.stringify(updatedData);
                await handleWriteFile("C:/Users/Public/customers.json", updatedFileData);
                console.log("Cliente eliminado y archivo actualizado.");
            } catch (error) {
                console.error('Error al eliminar el cliente y escribir el archivo:', error);
            }
        } else {
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
    }
    function Arrow(leftoright) {
        if (leftoright === "left" && PageNumber > 1) {
            setPageNumber(PageNumber - 1);
        } else if (leftoright === "right") {
            setPageNumber(PageNumber + 1);
        }
    }
    return (
        <div style={{ width: '100' + '%', height: '100' + '%' }}>
            <nav class="nav flex-row" id="navbar" style={{ backgroundColor: '#FBC05D' }}>
                <Link to="/edit" class="nav-link active itemsnav" aria-current="page" onClick={() => setCurrentPage("customers")}>Clientes</Link>
                <Link to="/edit" class="nav-link itemsnav itemsnav" onClick={() => setCurrentPage("documents")}>Sobres</Link>
            </nav>
            <input className="inline mt-3" type="textarea" id="browsersearch" placeholder="Buscar cliente" onChange={(ev) => updatebrowser(ev)}></input>
            <section id="stock">
                <section id="stockdetails" className="d-flex flex-row ">
                    <div className="stockdetail">{currentPage === "customers" ? "Clientes" : "Sobre"}</div>
                    <div className="stockdetail">{currentPage === "customers" ? "Sobres" : "Cliente"}</div>
                    <div className="stockdetail">Eliminar</div>
                </section>
                <section id="stockproducts" className="d-flex flex-column editcustomers">
                    {currentPage === "customers"
                        ? mappedCustomers.reverse().map((customer) => (
                            <section className="producstk d-flex flex-row" >
                                <div className="stockstyle">{customer.nombre} {customer.phone}</div>
                                <div className="stockstyle" >{customer.documents.length}</div>
                                <button className="stockstyle" onClick={() => remove(customer)} style={{ color: "red" }}>X</button>
                            </section>
                        ))
                        : mappedDocuments.reverse().map((document) => (
                            <section className="producstk d-flex flex-row" >
                                <div className="stockstyle">Trabajo nro {document.numsobre}</div>
                                <div className="stockstyle" >{document.nombre} {document.phone}</div>
                                <button className="stockstyle" onClick={() => remove(document)} style={{ color: "red" }}>X</button>
                            </section>
                        ))
                    }
                </section>
                <div id="page" className="pageedit">
                    <div className="arrowbuttons" id="leftarrow" onClick={(ev) => Arrow("left")}> {'<'}   </div>
                    <input className="inputcustomer" type="number" value={PageNumber}></input>
                    <div className="arrowbuttons" id="rightarrow" onClick={(ev) => Arrow("right")}> {'>'} </div>
                </div>
            </section>
        </div>

    )
}
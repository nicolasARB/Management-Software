import { useEffect, useState } from "react";
import logo from "../images/logo5.png";
import {Readfile, handleWriteFile} from './Databases';
import "./Comprobante.css";

export default function Comprobante() {
  const [fechaActual, setFechaActual] = useState("");
      const [GetsentData, SetsentData] = useState({});
      const [Data, SetData] = useState({"nombre": "", "phone": "", "address": "", "mail": "", "id": "", "elements": {} })
      const [glassProps, SetProps] = useState({
              "numsobre": "", "fecha": "", "type": "", "nombre": "", "address": "", "documentid": "", "phone": "", "Id": "", "mail": "", "esf": "", "cil": "", "dip": "", "alt": "", "oi": "", "oicil": "", "od": "",
              "odcil": "", "armazon": "", "cristales": "", "dsc": "", "total": "", "sen": "", "saldo": "", "fechaprox": "", "pedidopara": "", "reparacion": ""
          });
  const [items, setItems] = useState(() =>
    Array.from({ length: 10 }, () => ({
      cantidad: "",
      descripcion: "",
      precio: "",
      bonif: "",
    }))
  );

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) navbar.style.display = "none";
    return () => {
      if (navbar) navbar.style.display = "flex";
    };
  }, []);

  useEffect(() => {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, "0");
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const anio = hoy.getFullYear();
    setFechaActual(`${dia}/${mes}/${anio}`);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

      async function loadnewdata() {
          try {
              const response = await Readfile("C:/Users/Public/senddata.json");
              const parsedData = JSON.parse(response);
              SetsentData(parsedData);
              const UpdatedData = { ...Data };
              for (const key in parsedData) {
                  if (parsedData.hasOwnProperty(key)) {
                      if (UpdatedData.hasOwnProperty(key)) {
                          UpdatedData[key] = parsedData[key];
                      }
                  }
              }
              console.log(parsedData);
              SetData(UpdatedData);
              console.log(UpdatedData);
              console.log(Data);
  
          } catch (error) {
              console.error('Error al leer el archivo:', error);
          }
      }
      useEffect(() => {
          loadnewdata();
      }, []);

  const Save = () => {

  }

  const calcularTotalFila = (item) => {
    const cantidad = parseFloat(item.cantidad);
    const precio = parseFloat(item.precio);
    const bonif = parseFloat(item.bonif);

    if (isNaN(cantidad) || isNaN(precio)) return 0;

    const subtotal = cantidad * precio;
    const descuento = !isNaN(bonif) ? subtotal * (bonif / 100) : 0;
    return subtotal - descuento;
  };

  const totalGeneral = items.reduce((acc, item) => acc + calcularTotalFila(item), 0);

  return (
    <>
      <div className="print-comprobante">
        <header className="comprobante-header">
          <img src={logo} alt="Logo" className="comprobante-logo" />
          <div className="empresa-datos">
            <p>Lacroze Av. 3211 - CABA</p>
            <p>11-6613-0262 | @risley.optica</p>
            <p>risleyoptica@gmail.com</p>
          </div>
          <div className="fecha-box">
            <span>Fecha:</span>
            <strong>{fechaActual}</strong>
          </div>
        </header>

<section className="cliente-info">
  <p><strong>Cliente:</strong> <span>{Data.nombre}</span></p>
  <p><strong>Teléfono:</strong> <span>{Data.phone}</span></p>
  <p><strong>Dirección:</strong> <span>{Data.address}</span></p>
</section>

        <table className="comprobante-tabla">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Descripción</th>
              <th>Precio Unitario</th>
              <th>% Bonif.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="number"
                    value={item.cantidad}
                    onChange={(e) => handleItemChange(index, "cantidad", e.target.value)}
                    min="0"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.descripcion}
                    onChange={(e) => handleItemChange(index, "descripcion", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.precio}
                    onChange={(e) => handleItemChange(index, "precio", e.target.value)}
                    min="0"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.bonif}
                    onChange={(e) => handleItemChange(index, "bonif", e.target.value)}
                    min="0"
                  />
                </td>
                <td>
                  {calcularTotalFila(item) > 0 ? `$${calcularTotalFila(item).toLocaleString("es-AR")}` : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="comprobante-footer">
          <p className="agradecimiento">¡Gracias por confiar en nosotros!</p>
          <div className="comprobante-total">
            <span>Total:</span>
            <strong>${totalGeneral.toLocaleString("es-AR")}</strong>
          </div>
        </footer>
      </div>

      <div className="print-button-wrapper">

        <button onClick={Save} className="print-button">Guardar</button>
        <button onClick={handlePrint} className="print-button">
          Imprimir Comprobante
        </button>
      </div>
    </>
  );
}

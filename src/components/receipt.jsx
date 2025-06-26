import { useEffect, useState } from "react";
import logo from "../images/logo5.png";
import "./Comprobante.css";

export default function Comprobante() {
  const [fechaActual, setFechaActual] = useState("");

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
          <p><strong>Cliente:</strong> Fernanda Contreras</p>
          <p><strong>Teléfono:</strong> _________________________________</p>
          <p><strong>Dirección:</strong> _________________________________</p>
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
            <tr>
              <td>1</td>
              <td>Armazón Diseño + Cristales Control Blue</td>
              <td>$71.000</td>
              <td>0%</td>
              <td>$71.000</td>
            </tr>
            {[...Array(10)].map((_, i) => (
              <tr key={i}>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="comprobante-footer">
          <p className="agradecimiento">¡Gracias por confiar en nosotros!</p>
          <div className="comprobante-total">
            <span>Total:</span>
            <strong>$71.000</strong>
          </div>
        </footer>
      </div>

      <div className="print-button-wrapper">
        <button onClick={handlePrint} className="print-button">
          Imprimir Comprobante
        </button>
      </div>
    </>
  );
}

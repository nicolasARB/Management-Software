import { useEffect } from "react";
import logo from "../images/logo2.jpeg";
import "./Comprobante.css";

export default function Comprobante() {
  useEffect(() => {
    const navbar = document.querySelector("#navbar");
    if (navbar) navbar.style.display = "none";
    return () => {
      if (navbar) navbar.style.display = "flex";
    };
  }, []);

  return (
    <div className="comprobante">
      <div className="header">
        <div className="logo-info">
          <img src={logo} alt="Logo" className="logo" />
          <div className="empresa-info">
            <strong className="titulo-comprobante">COMPROBANTE</strong>

            <div className="contactos-linea">
              <p>Dirección comercial: Lacroze Av. 3211.</p>
              <p>@risley.optica</p>
            </div>

            <div className="contactos-linea">
              <p>risleyoptica@gmail.com</p>
              <p>11-6613-0262</p>
            </div>
          </div>
        </div>

        <div className="fecha-absolute">
          <span className="fecha-label">FECHA</span>
          <div className="fecha-box">06</div>
          <div className="fecha-box">09</div>
          <div className="fecha-box">24</div>
        </div>
      </div>

      <div className="contacto">
        <div>
          <span>SEÑOR(ES)</span> <strong>FERNANDA CONTRERAS</strong>
        </div>
        <div>
          <span>TELÉFONO</span> ______________________________________
        </div>
        <div>
          <span>DIRECCIÓN</span> ______________________________________
        </div>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Precio Unit.</th>
            <th>%Bonif</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ARMAZON DISEÑO + CRISTALES CONTROL BLUE</td>
            <td>$71.000</td>
            <td></td>
            <td>$71.000</td>
          </tr>
          {Array.from({ length: 9 }).map((_, i) => (
            <tr key={i}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <div className="gracias">GRACIAS POR CONFIAR!</div>
        <div className="total-box">
          <span>TOTAL</span>
          <div>$71.000</div>
        </div>
      </div>
    </div>
  );
}

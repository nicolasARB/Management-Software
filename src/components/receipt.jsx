import React from 'react';
import './Comprobante.css'; // Asegurate de tener este archivo

export default function Comprobante() {
  return (
    <div className="comprobante">
      <div className="header">
        <div className="logo-info">
          {/* Reemplazá esta imagen por tu logo real */}
          <img src="/logo.png" alt="Logo" className="logo" />
          <div className="empresa-info">
            <strong>ÓPTICA RISLEY</strong>
            <p>Dirección comercial: Lacroze Av. 3211.</p>
            <p>risleyoptica@gmail.com</p>
          </div>
        </div>
        <div className="fecha-box">
          <span>FECHA</span>
          <div className="fecha-grid">
            <div>06</div>
            <div>09</div>
            <div>24</div>
          </div>
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
import React, { useRef } from 'react';
export default function Statistics() {
    const inputRefs = [useRef(null), useRef(null), useRef(null)];

    const handleInputChange = (index, value) => {
        inputRefs[index].current.style.width = value.length * 20 + 'px';
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div id="fechast">
                <input ref={inputRefs[0]} onChange={(e) => handleInputChange(0, e.target.value)} />
                <div>/</div>
                <input ref={inputRefs[1]} onChange={(e) => handleInputChange(1, e.target.value)} />
                <div>/</div>
                <input ref={inputRefs[2]} onChange={(e) => handleInputChange(2, e.target.value)} />
            </div>
            <section id="statsingresos">
                <section id="statsdetails" className="d-flex flex-row ">
                    <div className="statsdetail">Producto</div>
                    <div className="statsdetail">Precio</div>
                    <div className="statsstyle">Sobre/comprobante</div>
                </section>
                <section id="statsproducts" className="d-flex flex-column">
                    <section className="statelement d-flex flex-row">
                        <div className="statsstyle">Producto</div>
                        <div className="statsstyle">Precio</div>
                        <div className="statsstyle">Sobre/comprobante</div>
                    </section>
                    <section className="statelement d-flex flex-row">
                        <div className="statsstyle">Producto</div>
                        <div className="statsstyle">Precio</div>
                        <div className="statsstyle">Sobre/comprobante</div>
                    </section>
                </section>
            </section>

            <section id='setgastos'>
                <h1>GASTOS</h1>
                <section id='spentinput'>
                    <input id='spentname'></input>
                    <input id='spentprice'></input>
                    <input id='amount'></input>
                </section>
                <button>Agregar</button>
            </section>
        </div>
    );
}
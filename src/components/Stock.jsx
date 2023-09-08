export default function Stock() {

    return (<div style={{ width: '100' + '%', height: '100' + '%' }}>
        <input className="inline mt-3" type="textarea" id="browsersearch" placeholder="Buscar Stock" ></input>
        <section id="stock">
            <section id="stockdetails" className="d-flex flex-row ">
                <div className="stockdetail">Producto</div>
                <div className="stockdetail">Stock</div>
                <div className="stockdetail">Precio unitario</div>
            </section>
            <section id="stockproducts" className="d-flex flex-column">
                <section className="producstk d-flex flex-row">
                    <div className="stockstyle">Producto</div>
                    <div className="stockstyle">Stock</div>
                    <div className="stockstyle">Precio unitario</div>
                </section>
            </section>
        </section>
    </div>
    )
}
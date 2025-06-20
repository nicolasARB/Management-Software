import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Readfile, handleWriteFile } from './Databases';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// Datos de ejemplo para el gráfico
const dataExample = [
  { name: 'Ganancias', value: 400 },
  { name: 'Gastos', value: 300 }
];
const COLORS = ['#00C49F', '#FF8042'];

// Componentes reutilizables simples con estilos
const Card = ({ children, style }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '1rem',
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    ...style
  }}>
    {children}
  </div>
);

const Button = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      padding: '0.5rem 1rem',
      background: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background 0.3s'
    }}
    onMouseOver={e => e.currentTarget.style.background = '#0056b3'}
    onMouseOut={e => e.currentTarget.style.background = '#007bff'}
  >
    {children}
  </button>
);


export default function Statistics() {
  const today = new Date();
  const [DocumentsData, setDocumentsData] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ nombre: '', cantidad: '' });
  const [filters, setFilters] = useState({
    dia: today.getDate().toString(),
    mes: (today.getMonth() + 1).toString(),
    anio: today.getFullYear().toString()
  });

  const diaRef = useRef();
  const mesRef = useRef();
  const anioRef = useRef();

  const handleChange = (field, value) => {
    const numericValue = value.replace(/\D/g, '');
    setFilters(prev => ({ ...prev, [field]: numericValue }));

    const ref = field === 'dia' ? diaRef : field === 'mes' ? mesRef : anioRef;
    if (ref.current) {
      ref.current.style.width = `${Math.max(numericValue.length * 15, 50)}px`;
    }
  };
  useEffect(() => {
    handleChange('dia', filters.dia);
    handleChange('mes', filters.mes);
    handleChange('anio', filters.anio);
  }, []);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [DocumentsBrowse, SetDocumentsBrowse] = useState([]);
  const [paginatedDocuments, SetpaginatedDocuments] = useState([]);



  const getFilteredDocuments = useMemo(() => {
    return DocumentsData.filter(doc => {
      if (!doc.fecha) return false;

  const [docDia, docMes, docAnio] = doc.fecha.split('/');

return (
  (!filters.dia || parseInt(docDia) === parseInt(filters.dia)) &&
  (!filters.mes || parseInt(docMes) === parseInt(filters.mes)) &&
  (!filters.anio || docAnio === filters.anio)
);
    });
  }, [DocumentsData, filters]);

  const totalPages = useMemo(() => Math.ceil(getFilteredDocuments.length / itemsPerPage), [getFilteredDocuments]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sliced = getFilteredDocuments.slice(startIndex, endIndex);
    SetpaginatedDocuments(sliced);
  }, [getFilteredDocuments, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);


  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    async function loadDocuments() {
      try {
        const response = await Readfile("C:/Users/Public/documents.json");
        const documents = JSON.parse(response);
        setDocumentsData(documents);
        setCurrentPage(1);
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
        console.log(documents);
        setCurrentPage(1);

      } catch (error) {
        console.error('Error loading documents:', error);
      }
    }
    loadDocuments();
  }


  useEffect(() => {
    updateDocumentdata();
  }, [])

  const cleanNumberString = (str) => {
    if (!str) return "0";

    return str
      .replace(/\$/g, '')
      .replace(/\./g, '')
      .replace(/,/g, '.')
      .trim();
  };


  function formatCurrency(value) {
    return '$' + Number(value).toLocaleString('es-ES', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }

  const gananciasYGastos = useMemo(() => {
    const ganancias = getFilteredDocuments.reduce((acc, doc) => {
      const valorStr = doc.total || doc.saldo || "0";
      const valorLimpio = cleanNumberString(valorStr);
      const valor = parseFloat(valorLimpio);
      return acc + (isNaN(valor) ? 0 : valor);
    }, 0);

    const gastos = 10000;

    return [
      { name: 'Ganancias', value: ganancias },
      { name: 'Gastos', value: gastos }
    ];
  }, [getFilteredDocuments]);

  const getTitleFromFilters = () => {
    const dia = filters.dia?.trim();
    const mes = filters.mes?.trim();
    const anio = filters.anio?.trim();

    const meses = [
      '', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const nombreMes = meses[parseInt(mes)];

    if (dia && mes && anio) {
      return `${parseInt(dia)} de ${nombreMes} de ${anio}`;
    }
    if (mes && anio) {
      return `${nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)} de ${anio}`;
    }
    if (anio) {
      return `Año ${anio}`;
    }

    return 'Todas las ventas';
  };


  const loadExpenses = async () => {
    try {
      const response = await Readfile("C:/Users/Public/statistics.json");
      const saved = JSON.parse(response);
      setExpenses(saved);
    } catch (err) {
      console.warn('No se pudo leer statistics.json. Se iniciará vacío.');
      setExpenses([]);
    }
  };

  const saveExpense = async (gasto) => {
    const fecha = new Date();
    const formattedDate = `${fecha.getDate().toString().padStart(2, '0')}/${(fecha.getMonth() + 1).toString().padStart(2, '0')}/${fecha.getFullYear()}`;

    const nuevoGasto = {
      ...gasto,
      fecha: formattedDate
    };

    const actualizados = [...expenses, nuevoGasto];
    setExpenses(actualizados);
    await handleWriteFile("C:/Users/Public/statistics.json", JSON.stringify(actualizados, null, 2));
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleAddExpense = () => {
    if (!newExpense.nombre || !newExpense.cantidad) return;
    saveExpense({ nombre: newExpense.nombre, cantidad: parseFloat(newExpense.cantidad) });
    setNewExpense({ nombre: '', cantidad: '' });
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Filtros */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <input
          ref={diaRef}
          placeholder="Día"
          value={filters.dia}
          onChange={e => handleChange('dia', e.target.value)}
          style={{ width: '40px', padding: '0.3rem', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <div>/</div>
        <input
          ref={mesRef}
          placeholder="Mes"
          value={filters.mes}
          onChange={e => handleChange('mes', e.target.value)}
          style={{ width: '40px', padding: '0.3rem', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <div>/</div>
        <input
          ref={anioRef}
          placeholder="Año"
          value={filters.anio}
          onChange={e => handleChange('anio', e.target.value)}
          style={{ width: '80px', padding: '0.3rem', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <Button>Filtrar</Button>
      </div>


      {/* Contenido principal dividido en 2 columnas */}

      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{getTitleFromFilters()}</h1>
          {/* Columna izquierda: Ventas */}
          <div style={{ flex: 1 }}>
            <Card>
              <h3 style={{ marginBottom: '1rem' }}>Ventas</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {paginatedDocuments.map((doc) => (
                  <div
                    key={doc.numsobre}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span>{`Sobre #${doc.numsobre}`}</span>
                    <span>{doc.total || doc.saldo || '—'}</span>
                    <Button style={{ padding: '0.3rem 0.5rem' }}>Ver sobre</Button>
                  </div>
                ))}
              </div>
              {/* Paginación */}
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  ← Anterior
                </Button>
                <span style={{ alignSelf: 'center' }}>
                  Página {currentPage} de {totalPages}
                </span>
                <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  Siguiente →
                </Button>
              </div>
            </Card>

          </div>

        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center", flexDirection: "column" }}>


          <div style={{ display: 'flex', gap: '2rem', justifyContent: "center" }}>
            {/* Columna derecha: Gastos */}
            <div style={{ width: '80%' }}>
              <Card>
                <h3 style={{ marginBottom: '1rem' }}>Añadir Gasto</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <input
                    placeholder="Nombre"
                    value={newExpense.nombre}
                    onChange={e => setNewExpense(prev => ({ ...prev, nombre: e.target.value }))}
                    style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <input
                    placeholder="Costo"
                    type="number"
                    value={newExpense.cantidad}
                    onChange={e => setNewExpense(prev => ({ ...prev, cantidad: e.target.value }))}
                    style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <Button onClick={handleAddExpense}>Añadir</Button>
                </div>
              </Card>

              {/* Lista de gastos */}
              <Card style={{ marginTop: '1rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Gastos</h3>
                {expenses.length === 0 ? (
                  <p>No hay gastos añadidos aún.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {expenses.map((g, index) => (
                      <li key={index} style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 0' }}>
                        <span>{g.nombre} </span>
                        <span>${(g.cantidad)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          </div>

          <Card>
            <h3 style={{ marginBottom: '1rem' }}>Ganancias vs Gastos</h3>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={gananciasYGastos}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
                    animationDuration={700}
                    animationBegin={0}
                  >
                    {gananciasYGastos.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
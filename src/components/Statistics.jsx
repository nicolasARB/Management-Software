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

// Componente principal
export default function Statistics() {
  const today = new Date();
      const [DocumentsData, setDocumentsData] = useState([]);
  const [filters, setFilters] = useState({
    dia: today.getDate().toString(),
    mes: (today.getMonth() + 1).toString(),
    anio: today.getFullYear().toString()
  });

  const diaRef = useRef();
  const mesRef = useRef();
  const anioRef = useRef();

  const handleChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    const ref = field === 'dia' ? diaRef : field === 'mes' ? mesRef : anioRef;
    if (ref.current) {
      ref.current.style.width = `${Math.max(value.length * 15, 50)}px`;
    }
  };
  useEffect(() => {
    handleChange('dia', filters.dia);
    handleChange('mes', filters.mes);
    handleChange('anio', filters.anio);
  }, []);

const itemsPerPage = 5;
const [currentPage, setCurrentPage] = useState(1);

// IMPORTANTE: si DocumentsData viene de una API o filtro, usar useMemo para evitar recalcular todo
const paginatedDocuments = useMemo(() => {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return DocumentsData.slice(start, end);
}, [DocumentsData, currentPage]);

useEffect(() => {
  const maxPages = Math.ceil(DocumentsData.length / itemsPerPage);
  if (currentPage > maxPages) {
    setCurrentPage(maxPages); 
  }
}, [DocumentsData]);

const totalPages = Math.ceil(DocumentsData.length / itemsPerPage);

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
                
            } catch (error) {
                console.error('Error loading documents:', error);
            }
        }
        loadDocuments();
    }


    useEffect(() => {
    updateDocumentdata();
    }, [])

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
        {/* Columna izquierda: Ventas */}
        <div style={{ flex: 1 }}>
        <Card>
  <h3 style={{ marginBottom: '1rem' }}>Ventas</h3>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    {paginatedDocuments.map((doc) => (
      <div
        key={doc.Id}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <span>{doc.nombre || `Sobre #${doc.numsobre}`}</span>
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

        {/* Columna derecha: Gastos y Gráfico */}
        <div style={{ flex: 1 }}>
          <Card style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Gastos</h3>
            <ul style={{ paddingLeft: '1rem' }}>
              <li>Alquiler: $10.000</li>
            </ul>
          </Card>

          <Card>
            <h3 style={{ marginBottom: '1rem' }}>Ganancias vs Gastos</h3>
            <div style={{ width: '100%', height: 200 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={dataExample}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={700}
                    animationBegin={0}
                  >
                    {dataExample.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
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
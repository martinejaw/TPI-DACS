const prod = 'http://54.237.73.187:3000/';
const dev = 'http://localhost:8080';
const url = prod;

const cfg = {

  API_URL: url,
  VAL_URL: url+'/login',
  Recursos_URL: url+'/recurso',
  Consultas_URL: url+'/consulta',
  ConsultasSinResponder_URL: url+'/consulta/consultasinresponder',
  ConsultasRespondidas_URL: url+'/consulta/consultasrespondidas',
  Casos_URL: url+'/caso',
  Diagnostico_URL: url+'/consulta/diagnosticar',
  PartesMedicos_URL: url+'/partemedico',
  Pruebas_URL: url+'/prueba',
  Pedidos_URL: url+'/recurso/pedirRecursos',
  Medicos_URL: url+'/medico',
  
};

module.exports = cfg;

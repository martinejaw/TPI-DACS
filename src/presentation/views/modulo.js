const Vue = require('vue') 


module.exports = Vue;

<script language="javascript" src="/vue.js"></script>


<v-app><v-btn color="success">Success</v-btn></v-app>
<template><v-app>
  <v-btn color="success">Success</v-btn>
  <v-btn color="error">Error</v-btn>
  <v-btn color="warning">Warning</v-btn>
  <v-btn color="info">Info</v-btn>
 <v-app>
 </template>

 <v-col cols="2">
        <v-data-table: columns="gridColumns":data="grid"></v-data-table>
        <p>aaa</p>
      </v-col>
      <p>aaa</p>
    </v-row>
  </div>


gridColumns: ['id', 'nombre'],
grid: [{id: 1, nombre: "Jaun"},{id: 2, nombre: "Jorge"}],
const express = require('express');
const {Pool} = require('pg');



const pool = new Pool ({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'@Dd96leandro',
    database:'biblioteca'
})



module.exports = pool;
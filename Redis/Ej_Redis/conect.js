import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'value');

// Obtener el valor de una clave
const value = await client.get('key');

//Iterar sobre todas las claves e imprimir los valores
for await (const key of client.scanIterator()) {
    const valor = await client.get(key);
    console.log(key + "-> " + valor);
}

await client.disconnect();
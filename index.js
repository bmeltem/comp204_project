// Gerekli modülleri yükleyin
const express = require('express');
const mysql = require('mysql2');

// Express uygulamasını başlatın
const app = express();
const port = 3000;

// MySQL veritabanı bağlantısını oluşturun
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Veritabanı kullanıcı adınızı buraya yazın
  password: 'root', // Veritabanı şifrenizi buraya yazın
  database: 'inventory' // Kullanacağınız veritabanı adını buraya yazın
});

// Veritabanına bağlanın
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Basit bir GET isteği oluşturun
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ürünleri listeleyen bir API uç noktası oluşturun
app.get('/products', (req, res) => {
  let sql = 'SELECT * FROM Products';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});


// Uygulamayı belirli bir portta çalıştırın
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

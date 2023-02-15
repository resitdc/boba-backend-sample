app.get("/mahasiswa", (req, res) => {
  let query = "select mahasiswa.nim, mahasiswa.nama, jurusan.nama as nama_jurusan from mahasiswa left join jurusan on jurusan.id = mahasiswa.id_jurusan";
  connection.query(query, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        results: error 
      });
    } else {
      res.status(200).json({
        success: true,
        results: result 
      });
    }
  })
});

app.post("/mahasiswa", (req, res) => {
  let dataInputan = {
    nim: req.body.nim,
    nama: req.body.nama,
    tanggal_lahir: req.body.tanggal_lahir,
    id_jurusan: req.body.id_jurusan,
    foto: req.body.foto,
  }

  connection.query("insert into mahasiswa set ?", dataInputan, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        results: error 
      });
    } else {
      res.status(200).json({
        success: true,
        results: result 
      });
    }
  })
});

app.delete("/mahasiswa/:nim", (req, res) => {
  connection.query(`delete from mahasiswa where nim = '${req.params.nim}'`, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        results: error 
      });
    } else {
      res.status(200).json({
        success: true,
        results: result 
      });
    }
  })
});

app.put("/mahasiswa/:nim", (req, res) => {
  let dataInputan = {
    nama: req.body.nama,
    tanggal_lahir: req.body.tanggal_lahir,
    id_jurusan: req.body.id_jurusan,
    foto: req.body.foto,
  }

  connection.query(`update mahasiswa set ? where nim = '${req.params.nim}'`, dataInputan, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        results: error 
      });
    } else {
      res.status(200).json({
        success: true,
        results: result 
      });
    }
  })
});

app.get("/mahasiswa/:nim", (req, res) => {
  let query = `select mahasiswa.*, TIMESTAMPDIFF(YEAR, mahasiswa.tanggal_lahir, CURDATE()) as umur, jurusan.nama as nama_jurusan from mahasiswa left join jurusan on jurusan.id = mahasiswa.id_jurusan where nim = '${req.params.nim}'`;
  connection.query(query, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        results: error 
      });
    } else {
      res.status(200).json({
        success: true,
        results: result 
      });
    }
  })
});

app.get("/jurusan", (req, res) => {
  connection.query("select * from jurusan", (error, result) => {
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

app.post("/jurusan", (req, res) => {
  let dataInputan = {
    nama: req.body.nama
  }

  connection.query("insert into jurusan set ?", dataInputan, (error, result) => {
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

app.delete("/jurusan/:id", (req, res) => {
  connection.query(`delete from jurusan where id = '${req.params.id}'`, (error, result) => {
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

app.put("/jurusan/:id", (req, res) => {
  let dataInputan = {
    nama: req.body.nama
  }

  connection.query(`update jurusan set ? where id = '${req.params.id}'`, dataInputan, (error, result) => {
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
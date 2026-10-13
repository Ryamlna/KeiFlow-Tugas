import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning mb-4">
        <div className="container">
          <span className="navbar-brand"><b>KeiFlow</b></span>
          <div className="navbar-nav">
            <a className="nav-link active" href="/">Beranda</a>
            <a className="nav-link" href="/">Tambah</a>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5>Total Pengeluaran</h5>
                <p>Rp 150.000</p>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5>Riwayat Terbaru</h5>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>Keperluan</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>13/10/2026</td>
                      <td>Makan Siang</td>
                      <td>Rp 25.000</td>
                    </tr>
                    <tr>
                      <td>12/10/2026</td>
                      <td>Bensin Motor</td>
                      <td>Rp 30.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
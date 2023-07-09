import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import  './PullUp.css'

export default class PullUp extends Component {
  render() {
    return (
      <div className='pull'>
         <Link to={"/exercises"}>
          <button className='bi' onclick="history.go(-1);"> 
          <i className="bi bi-arrow-left"></i> 
          </button>
          </Link>

            <div className='pullgambar'>
                <img src={require('../../../assets/media/pullup2.jpg')} 
                alt='pullup'
                style={{ 
                    marginTop: '3%',
                    height: '65%', 
                    width: '45%' }}
                />
            </div>
            <br/>
            <div className='info'>
                <h4 clanssName='up'>
                    Pull-up adalah salah satu bentuk latihan kekuatan yang bertujuan
                    untuk mempertahankan <br/> dan meningkatkan massa otot 
                    Terutama otot lengan dan tubuh bagian atas.
                </h4>
                <br/>
                <p className='mft'>
                  Manfaat melakukan latihan pull up seperti <br/>
                  1. Melatih kekuatan otot tubuh <br/>
                  2. Meningkatkan kebugaran secara keseluruhan <br/>
                  3. Menjaga kesehatan mental <br/>
                </p>
                <br/>
                <p className='cara'>
                  Langkah-langkah pull-up untuk pemula seperti berikut ini : <br/> 
                  
                  1. Berdirilah di bawah pull bar dengan kedua kaki terbuka selebar bahu. <br/>
                  2. Lompat dan genggam pull bar dengan posisi telapak tangan menghadap ke depan. <br/>
                  3. Buka kedua lengan sedikit lebih lebar dari bahu dan <br/>
                     rentangan sepenuhnya dalam kondisi menggantung bebas. <br/>
                  4. Tekuk sedikit lutut Anda ke belakang,
                     lalu silangkan kedua pergelangan kaki <br/> untuk menjaga keseimbangan tubuh. <br/>
                  5. Tarik tubuh Anda dengan menekuk siku sambil membuang napas perlahan. <br/>
                  6. Pastikan dagu sejajar atau berada di atas palang, kemudian tahan sebentar. <br/>
                  7. Turunkan tubuh kembali ke posisi awal sambil menarik napas sampai kedua siku lurus. <br/>
                  8. Lakukan gerakan tanpa menyentuh lantai dan ulangi sesuai keperluan Anda. 
                </p>
            </div>
            
      </div>
    )
  }
}

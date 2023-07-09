import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {

    const navigate = useNavigate();

     const[formData, setFormData] = useState(
        {
            id: "",
            cardnumber : "",
            expireddate : "",
            cvv : ""
        }
    )

    const handleChange = (event) => { 
    const { name, value } = event.target; 
    setFormData((prevState) => ({ 
        ...prevState, 
        [name]: value, 
    })); 
  };

   const handleSubmit = async (event) => { 
    event.preventDefault(); 
    
    // Kirim nilai form ke komponen 
    console.log(formData); 
    try { 
        const response = await fetch('http://localhost:3001/paymen', { 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify(formData), 
        }); 
        const jsonData = await response.json(); 
        console.log(jsonData);
        
        // Arahkan pengguna ke halaman "exercises" setelah pembayaran selesai
       if (response.ok) { 
        navigate('/exercises'); }
        } catch (error) { 
            console.log(error); 
        } 
    }; 
  
  return (
    <div className='bli' style={{ marginTop : '5%', marginLeft : '33%' }}>
      <h1 className='bayar' style={{
        marginLeft : '15%', 
        fontFamily : 'roboto',
        fontWeight : '700'
        }}>
          Payment
      </h1>
      <br/>
    <form onSubmit={handleSubmit} key={formData.id}>
      <input
        type="text"
        name='cardnumber'
        value={formData.cardnumber}
        onChange={handleChange}
        placeholder="Card Number"
        required
        style={{ marginTop : '2%', width : '50%' }}
      />

      <br/>
      <input
        type="text"
        name='expireddate'
       value={formData.expireddate}
        onChange={handleChange}
        placeholder="Expired Date"
        required
        style={{ marginTop : '2%', width : '50%'}}
      />

      <br/>
      <input
        type="text"
        name='cvv'
        value={formData.cvv}
        onChange={handleChange}
        placeholder="CVV"
        required
        style={{ marginTop : '2%', width : '50%' }}
      />

      <br/>
      <button type="submit"
      style={{ marginTop : '2%', marginLeft : '40%' }}
      >
        Pay Now
      </button>
    </form>
    </div>
)
}
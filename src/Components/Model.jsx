import React, { useState } from 'react'
import Card from './Card'
import { useCartContext } from './Context/CardContext' 
function Model() {
  const{invoice, setInvoice, service,total, setservice} =useCartContext();
  const [isOpen , setOpen] = useState(false);
  function onClick (){
    setOpen(isOpen=>!isOpen)
  }
  const handlePay = (e) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_gya6abqDZ5NINZ",
      key_secret: "jqkjgTT2WXGxtaTsk4hVC4RW",
      amount:  1540.00,
      currency: "INR",
      name: "Articuno Coding LLP",
      description: " WE offer high end solutions for your business",
      handler: function (response) {
          alert(response.razorpay_payment_id);
        //Toast({ type: "success", msg: "Payment Successful🎉" });
     
      },
      prefill: {
        name: "vivek kumar",
        email: "adarsh@gmail.com",
        contact: "6398087779",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: '#7ad0a7',
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  
  return (
<>
  <div>
      <div  style={{ display: !isOpen ? "none" : "block" }}
        className="modal-container">
        <div id="mymodal" className="Modal">
        
          <form className="modal--content">
            <div className="modal-body">
              <div className='flex'>
              <div className="modal-title">Invoice Info</div>
              <button className='modal--btn' onClick={onClick} >close</button></div>
              <p>Your total bill would be :-</p>
              <p>{service}</p>
              <p>{total}</p>
              
            </div>
            <div className='flex'>
              <button className='modal--btn' onClick={onClick}  >Back</button>
              <button onClick={ handlePay} className='modal--btn'>
             PROCEED PAYMENT
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class = "mt-10 p-4 mr-20" >
    <button onClick={onClick} className='btn-modal'>Generate Invoice</button>
</div>
</>


  )
}

export default Model
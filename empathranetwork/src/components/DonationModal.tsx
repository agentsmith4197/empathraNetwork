import { useEffect, useState } from "react";
import "../styles/donationModal.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = "paypal" | "crypto" | "";

const DonationModal = ({ isOpen, onClose }: Props) => {

  const [amount,setAmount] = useState<number | "">("");
  const [method,setMethod] = useState<PaymentMethod>("");
  const [success,setSuccess] = useState(false);

  const quickAmounts = [50,100,500,1000];

  useEffect(()=>{

    const esc = (e: KeyboardEvent)=>{
      if(e.key === "Escape") onClose();
    };

    document.addEventListener("keydown",esc);

    return ()=>document.removeEventListener("keydown",esc);

  },[onClose]);

  if(!isOpen) return null;

  const handleDonate = ()=>{

    if(!amount){
      alert("Please enter donation amount");
      return;
    }

    if(!method){
      alert("Select a payment method");
      return;
    }

    console.log("Donation:",amount,"Method:",method);

    setSuccess(true);

  };

  if(success){

    return (

      <div className="donation-overlay">

        <div className="donation-modal success">

          <h2>🎉 Donation Successful</h2>

          <p>
            Thank you for donating <strong>${amount}</strong> via{" "}
            <strong>{method === "paypal" ? "PayPal" : "Crypto"}</strong>.
          </p>

          <button
            className="donate"
            onClick={()=>{
              setSuccess(false);
              setAmount("");
              setMethod("");
              onClose();
            }}
          >
            Close
          </button>

        </div>

      </div>

    );

  }

  return (

    <div
      className="donation-overlay"
      onClick={onClose}
    >

      <div
        className="donation-modal"
        onClick={(e)=>e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Support This Campaign</h2>

        <p>Your contribution helps this campaign grow.</p>


        {/* QUICK AMOUNTS */}

        <div className="quick-amounts">

          {quickAmounts.map(value => (

            <button
              key={value}
              onClick={()=>setAmount(value)}
            >
              ${value}
            </button>

          ))}

        </div>


        {/* AMOUNT INPUT */}

        <div className="amount-input">

          <span>$</span>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e)=>setAmount(Number(e.target.value))}
          />

        </div>


        {/* PAYMENT METHOD */}

        <div className="payment-methods">

          <p>Select Payment Method</p>

          <div className="methods">

            <button
              className={method === "paypal" ? "active" : ""}
              onClick={()=>setMethod("paypal")}
            >
              PayPal
            </button>

            <button
              className={method === "crypto" ? "active" : ""}
              onClick={()=>setMethod("crypto")}
            >
              Crypto
            </button>

          </div>

        </div>


        {/* ACTION BUTTONS */}

        <div className="donation-buttons">

          <button
            className="cancel"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="donate"
            onClick={handleDonate}
          >
            Donate Now
          </button>

        </div>

      </div>

    </div>

  );

};

export default DonationModal;
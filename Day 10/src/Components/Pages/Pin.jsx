import React, { useState } from "react";
import '../../Asserts/Pin.css';

const PinInput = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    let o = '';

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
    
        if (index < 3 && value) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
        o += parseInt(newOtp.join(''));
        setOtp(newOtp)

        if (index > 0 && !value) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }

        if(index===3){
            submit();
        }
        
    }
    
    

    function submit(){
        console.log(o);
    }

    return (
        <div className="pin">
            <h1>Enter 4-Digit Pin</h1>
            <div className="otp-bx">
                {otp.map((value, index) => (
                    <input
                        type="text"
                        maxLength={1}
                        className="space"
                        key={index}
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        id={`otp-input-${index}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default PinInput;

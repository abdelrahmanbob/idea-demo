import React, {useState, useEffect} from 'react';
import axios from 'axios';
import OfficeImg from '../assets/img-0.2.jpg';


function WhoAreWe() {
    const [paragraphText, setParagraphText] = useState('');
    const [subText, setSubText] = useState('');

    useEffect(()=>{
        const fetchText = async () => {
            try{
                const response = await axios.get("http://127.0.0.1:2000/api/whoarewe");
                setParagraphText(response.data.mainText);
                setSubText(response.data.subText);
            }catch (error) {
                console.log("Error Fetching the Paragraph", error);
            }
        };
    }, []);
  return (
    <div className="WhoAreWe container-fluid bg-light rounded-bottom-custom">
        <div className="row justify-content-center align-items-center py-5">
          <div className="WhoAreWeImg col-md-5 mb-4 mb-md-0">
            <img src={OfficeImg} className="img-fluid rounded" alt="Loading..." />
          </div>
          <div className="WhoAreWeContent col-md-5 text-center">
            <span className="WhoAreWeHeader display-4 font-weight-bold">Who are we?</span>
            <p className="WhoAreWeText lead my-4 text-md">
                {paragraphText ? paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }  
            </p>
            <p className="WhoAreWeSubText text-sm">
                {subText ? subText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }
            </p>
            <button className="WhoAreWeButton btn btn-primary btn-lg mt-3">View More</button>
          </div>
        </div>
      </div>
);
}

export default WhoAreWe;
import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Footer() {
  const { name, email, website, phone, bankAccount, bankName,clientName } =
    useContext(State);

  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">client name:</span> {clientName}
          </li>
          {/* <li>
            <span className="font-bold">Your email:</span> {email}
          </li> */}
          <li>
            <span className="font-bold">Phone number:</span> {phone}
          </li>
          {/* <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">Account holder:</span> {name}
          </li>
          <li>
            <span className="font-bold">Account number:</span> {bankAccount}
          </li> */}
          {/* <li>
            <span className="font-bold">Website:</span>{" "}
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li> */}
        </ul>
      </footer>

      <p className="text-center px-5 mt-8 text-xs ">
        Invoicer is built by{" "}
        <a
          
          target="_blank"
          href='#'
          className="underline"
        >
          Sojitra Kartik
        </a>
      </p>
      
      <p className='mt-10 text-center text-4xl align-center' style={{background: "linear-gradient(to right, #ff7e5f, #feb47b)", color: "white", padding: "20px", borderRadius: "10px"}}>
  Thank You For Visiting, Visit Again
</p>

    </>
  );
}

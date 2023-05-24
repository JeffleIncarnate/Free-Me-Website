import { useState } from "react";

export default function SignupClientForm() {
  let [number, setNumber] = useState(1);
  let [form1, setForm1] = useState("FRE__Main__Signup-Cons__Form1");
  let [form2, setForm2] = useState("FRE__Main__Signup-Cons__Form2");
  let [form3, setForm3] = useState("FRE__Main__Signup-Cons__Form3");
  let [form4, setForm4] = useState("FRE__Main__Signup-Cons__Form4");
  let [form5, setForm5] = useState("FRE__Main__Signup-Cons__Form5");
  let [form6, setForm6] = useState("FRE__Main__Signup-Cons__Form6");

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  let register = () => {};

  return (
    <>
      <main id="FRE__Main__Signup-Cons">
        <p>{number}/6</p>

        {(() => {
          if (number === 1) {
            return (
              <form
                className={`${form1}`}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <h2>Names</h2>
                <div className="FRE__Signup-Cons-Wrapper">
                  <label>
                    Firstname<span>*</span>
                  </label>
                  <input type="text" placeholder="Enter Firstname" />
                </div>

                <div className="FRE__Signup-Cons-Wrapper">
                  <label>
                    Surname<span>*</span>
                  </label>
                  <input type="text" placeholder="Enter Surname" />
                </div>

                <div>
                  <button
                    onClick={async () => {
                      setForm1((form1 += " FRE__Main__Signup-Cons__Out"));
                      await delay(1500);
                      setForm1((form1 = "FRE__Main__Signup-Cons__Form1"));
                      setNumber((number += 1));

                      setForm2((form2 += " FRE__Main__Signup-Cons__In"));
                      await delay(1500);
                      setForm2((form2 = "FRE__Main__Signup-Cons__Form2"));
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            );
          } else if (number === 2) {
            return (
              <>
                <form
                  className={`${form2}`}
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <h2>Info</h2>

                  <div className="FRE__Signup-Cons-Wrapper">
                    <label>
                      Date of Birth<span>*</span>
                    </label>
                    <input type="date" id="birthday" name="birthday" />
                  </div>

                  <div className="FRE__Signup-Cons-Wrapper">
                    <label>
                      Phone Number<span>*</span>
                    </label>
                    <input type="text" placeholder="Enter Phone Number" />
                  </div>

                  <div>
                    <button
                      onClick={async () => {
                        setForm2((form2 += " FRE__Main__Signup-Cons__OutRev"));
                        await delay(1500);
                        setForm2((form2 = "FRE__Main__Signup-Cons__Form2"));
                        setNumber((number -= 1));

                        setForm1((form1 += " FRE__Main__Signup-Cons__InRev"));
                        await delay(1500);
                        setForm1((form1 = "FRE__Main__Signup-Cons__Form1"));
                      }}
                    >
                      Previous
                    </button>
                    <button
                      onClick={async () => {
                        setForm2((form2 += " FRE__Main__Signup-Cons__Out"));
                        await delay(1500);
                        setForm2((form2 = "FRE__Main__Signup-Cons__Form2"));
                        setNumber((number += 1));

                        setForm3((form3 += " FRE__Main__Signup-Cons__In"));
                        await delay(1500);
                        setForm3((form3 = "FRE__Main__Signup-Cons__Form3"));
                      }}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </>
            );
          } else if (number === 3) {
            return (
              <form
                className={`${form3}`}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <h2>Contact</h2>

                <div className="FRE__Signup-Cons-Wrapper">
                  <label>
                    Email<span>*</span>
                  </label>
                  <input type="text" placeholder="Enter Email" />
                </div>

                <div className="FRE__Signup-Cons-Wrapper">
                  <label>
                    Address<span>*</span>
                  </label>
                  <input type="text" placeholder="Enter Address" />
                </div>

                <div>
                  <button
                    onClick={async () => {
                      setForm3((form3 += " FRE__Main__Signup-Cons__OutRev"));
                      await delay(1500);
                      setForm3((form3 = "FRE__Main__Signup-Cons__Form3"));
                      setNumber((number -= 1));

                      setForm2((form2 += " FRE__Main__Signup-Cons__InRev"));
                      await delay(1500);
                      setForm2((form2 = "FRE__Main__Signup-Cons__Form2"));
                    }}
                  >
                    Previous
                  </button>
                  <button
                    onClick={async () => {
                      setForm3((form3 += " FRE__Main__Signup-Cons__Out"));
                      await delay(1500);
                      setForm3((form3 = "FRE__Main__Signup-Cons__Form3"));
                      setNumber((number += 1));

                      setForm4((form4 += " FRE__Main__Signup-Cons__In"));
                      await delay(1500);
                      setForm4((form4 = "FRE__Main__Signup-Cons__Form4"));
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            );
          } else if (number === 4) {
            return (
              <form
                className={`${form4}`}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <h2>Business</h2>

                <div className="FRE__Signup-Cons-Wrapper">
                  <label>
                    NZBN Number<span>*</span>
                  </label>
                  <input type="text" placeholder="Enter NZBN Number" />
                </div>

                <div className="FRE__Signup-Cons-Wrapper">
                  <label>
                    GST Number<span>*</span>
                  </label>
                  <input type="number" placeholder="Enter GST Number" />
                </div>

                <div>
                  <button
                    onClick={async () => {
                      setForm4((form4 += " FRE__Main__Signup-Cons__OutRev"));
                      await delay(1500);
                      setForm4((form4 = "FRE__Main__Signup-Cons__Form4"));
                      setNumber((number -= 1));

                      setForm3((form3 += " FRE__Main__Signup-Cons__InRev"));
                      await delay(1500);
                      setForm3((form3 = "FRE__Main__Signup-Cons__Form3"));
                    }}
                  >
                    Previous
                  </button>
                  <button
                    onClick={async () => {
                      setForm4((form4 += " FRE__Main__Signup-Cons__Out"));
                      await delay(1500);
                      setForm4((form4 = "FRE__Main__Signup-Cons__Form4"));
                      setNumber((number += 1));

                      setForm5((form5 += " FRE__Main__Signup-Cons__In"));
                      await delay(1500);
                      setForm5((form5 = "FRE__Main__Signup-Cons__Form5"));
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            );
          } else if (number === 5) {
            return (
              <form
                className={`${form5}`}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <h2>Social Media</h2>

                <button>Linked In</button>
                <button>Facebook</button>

                <div>
                  <button
                    onClick={async () => {
                      setForm5((form5 += " FRE__Main__Signup-Cons__OutRev"));
                      await delay(1500);
                      setForm5((form5 = "FRE__Main__Signup-Cons__Form5"));
                      setNumber((number -= 1));

                      setForm4((form4 += " FRE__Main__Signup-Cons__InRev"));
                      await delay(1500);
                      setForm4((form4 = "FRE__Main__Signup-Cons__Form4"));
                    }}
                  >
                    Previous
                  </button>
                  <button
                    onClick={async () => {
                      setForm5((form5 += " FRE__Main__Signup-Cons__Out"));
                      await delay(1500);
                      setForm5((form5 = "FRE__Main__Signup-Cons__Form5"));
                      setNumber((number += 1));

                      setForm6((form6 += " FRE__Main__Signup-Cons__In"));
                      await delay(1500);
                      setForm6((form6 = "FRE__Main__Signup-Cons__Form6"));
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            );
          } else {
            return (
              <form
                className={`${form6}`}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <h2>T's & C's</h2>

                <div className="FRE__Signup-Cons-Wrapper">
                  <label>
                    Terms and Conditions<span>*</span>
                  </label>
                  <input type="checkbox" />
                </div>

                <div>
                  <button
                    onClick={async () => {
                      setForm6((form6 += " FRE__Main__Signup-Cons__OutRev"));
                      await delay(1500);
                      setForm6((form6 = "FRE__Main__Signup-Cons__Form6"));
                      setNumber((number -= 1));

                      setForm5((form5 += " FRE__Main__Signup-Cons__InRev"));
                      await delay(1500);
                      setForm5((form5 = "FRE__Main__Signup-Cons__Form5"));
                    }}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      register();
                    }}
                  >
                    Register
                  </button>
                </div>
              </form>
            );
          }
        })()}
      </main>
    </>
  );
}

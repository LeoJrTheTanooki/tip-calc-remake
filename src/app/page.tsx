"use client";

import { Button } from "flowbite-react/components/Button";
import { Card } from "flowbite-react/components/Card";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [billInput, setBillInput] = useState<number>(0);
  const [peopleInput, setPeopleInput] = useState<number>(0);
  const [selectedTip, setSelectedTip] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<string>("");
  const [total, setTotal] = useState<string>("");

  const [billInputValue, setBillInputValue] = useState<string>("");
  const [peopleInputValue, setPeopleInputValue] = useState<string>("");
  const [customTipInputValue, setCustomTipInputValue] = useState<string>("");

  const [billInputJsx, setBillInputJsx] = useState<HTMLInputElement>();
  const [peopleInputJsx, setPeopleInputJsx] = useState<HTMLInputElement>();
  const [customTipInputJsx, setCustomTipInputJsx] =
    useState<HTMLInputElement>();
  const [billError, setBillError] = useState<HTMLInputElement>();
  const [peopleError, setPeopleError] = useState<HTMLInputElement>();

  const [fiveTipBtn, setFiveTipBtn] = useState<HTMLInputElement>();
  const [tenTipBtn, setTenTipBtn] = useState<HTMLInputElement>();
  const [fifteenTipBtn, setFifteenTipBtn] = useState<HTMLInputElement>();
  const [twentyFiveTipBtn, setTwentyFiveTipBtn] = useState<HTMLInputElement>();
  const [fiftyTipBtn, setfiftyTipBtn] = useState<HTMLInputElement>();

  useEffect(() => {
    setFiveTipBtn(document.getElementById("fiveTipBtn") as HTMLInputElement);
    setTenTipBtn(document.getElementById("tenTipBtn") as HTMLInputElement);
    setFifteenTipBtn(
      document.getElementById("fifteenTipBtn") as HTMLInputElement
    );
    setTwentyFiveTipBtn(
      document.getElementById("twentyFiveTipBtn") as HTMLInputElement
    );
    setfiftyTipBtn(document.getElementById("fiftyTipBtn") as HTMLInputElement);

    setBillInputJsx(
      document.getElementById("billInputJsx") as HTMLInputElement
    );
    setPeopleInputJsx(
      document.getElementById("peopleInputJsx") as HTMLInputElement
    );
    setCustomTipInputJsx(
      document.getElementById("customTipInputJsx") as HTMLInputElement
    );

    setBillError(document.getElementById("billError") as HTMLInputElement);
    setPeopleError(document.getElementById("peopleError") as HTMLInputElement);
  }, []);

  useEffect(() => {
    if (selectedTip > 0) {
      customTipInputJsx?.classList.remove(
        "ring-red-600",
        "focus:ring-red-600",
        "ring-2"
      );
      customTipInputJsx?.classList.add("focus:ring-Scyan");
    }
    if (billInput < 1 || billInputValue == "0" || billInputJsx?.value == "0") {
      billInputJsx?.classList.add(
        "ring-red-600",
        "focus:ring-red-600",
        "ring-2"
      );
      billInputJsx?.classList.remove("focus:ring-Scyan");
      billError?.classList.remove("hidden");
    } else {
      billInputJsx?.classList.remove(
        "ring-red-600",
        "focus:ring-red-600",
        "ring-2"
      );
      billInputJsx?.classList.add("focus:ring-Scyan");
      billError?.classList.add("hidden");
    }
    if (
      // peopleInput < 1 ||
      peopleInputValue == "0" ||
      peopleInputJsx?.value == "0"
    ) {
      peopleInputJsx?.classList.add(
        "ring-red-600",
        "focus:ring-red-600",
        "ring-2"
      );
      peopleInputJsx?.classList.remove("focus:ring-Scyan");
      peopleError?.classList.remove("hidden");
    } else {
      peopleInputJsx?.classList.remove(
        "ring-red-600",
        "focus:ring-red-600",
        "ring-2"
      );
      peopleInputJsx?.classList.add("focus:ring-Scyan");
      peopleError?.classList.add("hidden");
    }
    handleCalc();
  }, [billInput, peopleInput, selectedTip]);

  const handleCalc = () => {
    let handleTip = (billInput * (selectedTip / 100)) / peopleInput;
    setTipAmount(handleTip.toFixed(2));
    let handleTotal = (handleTip * peopleInput + billInput) / peopleInput;
    setTotal(handleTotal.toFixed(2));
  };
  const handleTipClick = (tipBtn: any = null) => {
    let buttons = [
      fiveTipBtn,
      tenTipBtn,
      fifteenTipBtn,
      twentyFiveTipBtn,
      fiftyTipBtn,
    ];
    for (let i = 0; i < buttons.length; i++) {
      buttons[i]?.classList.remove("bg-Scyan", "text-VDcyan");
      buttons[i]?.classList.add("bg-VDcyan", "text-white");
    }

    tipBtn?.classList.add("bg-Scyan", "text-VDcyan");
    tipBtn?.classList.remove("bg-VDcyan", "text-white");
  };

  return (
    <>
      <div className="align-middle gap-14 grid w-full justify-center">
        <div className="grid justify-center pt-10">
          <img className="" src="/images/logo.svg" alt="" />
        </div>
        <Card className="text-DGcyan max-w-[1000px] text-sm rounded-2xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="grid gap-5">
              <div className="grid grid-cols-2">
                <div>Bill</div>
                <div id="billError" className="text-right text-red-600 hidden">
                  Can't be zero
                </div>
                <input
                  id="billInputJsx"
                  className="text-2xl col-span-2 text-VDcyan bg-VLGcyan text-right rounded-lg border-0 focus:ring-Scyan focus:ring-2"
                  type="text"
                  placeholder="0"
                  value={billInputValue}
                  onChange={(e) => {
                    setBillInput(parseFloat(e.target.value));
                    setBillInputValue(e.target.value);
                    if (
                      // billInput < 1
                      // ||
                      billInputValue == "0" ||
                      billInputJsx?.value == "0"
                    ) {
                      billInputJsx?.classList.add(
                        "ring-red-600",
                        "focus:ring-red-600",
                        "ring-2"
                      );
                      billInputJsx?.classList.remove("focus:ring-Scyan");
                      billError?.classList.remove("hidden");
                    } else {
                      billInputJsx?.classList.remove(
                        "ring-red-600",
                        "focus:ring-red-600",
                        "ring-2"
                      );
                      billInputJsx?.classList.add("focus:ring-Scyan");
                      billError?.classList.add("hidden");
                    }
                  }}
                  // Code borrowed from Ashur with permission
                  style={{
                    backgroundImage: "url(/images/icon-dollar.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 10px center",
                  }}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <p className="col-span-2 md:col-span-3">Select Tip %</p>
                <Button
                  className="bg-VDcyan enabled:hover:bg-[#9ee8dd] enabled:hover:text-VDcyan focus:enabled:bg-Scyan focus:enabled:text-VDcyan focus:ring-0 text-white"
                  id="fiveTipBtn"
                  onClick={() => {
                    setSelectedTip(5);
                    handleTipClick(fiveTipBtn);
                  }}
                >
                  <span className="text-2xl">5%</span>
                </Button>
                <Button
                  className="bg-VDcyan enabled:hover:bg-[#9ee8dd] enabled:hover:text-VDcyan focus:enabled:bg-Scyan focus:enabled:text-VDcyan focus:ring-0 text-white"
                  id="tenTipBtn"
                  onClick={() => {
                    setSelectedTip(10);
                    handleTipClick(tenTipBtn);
                  }}
                >
                  <span className="text-2xl">10% </span>
                </Button>
                <Button
                  className="bg-VDcyan enabled:hover:bg-[#9ee8dd] enabled:hover:text-VDcyan focus:enabled:bg-Scyan focus:enabled:text-VDcyan focus:ring-0 text-white"
                  id="fifteenTipBtn"
                  onClick={() => {
                    setSelectedTip(15);
                    handleTipClick(fifteenTipBtn);
                  }}
                >
                  <span className="text-2xl">15% </span>
                </Button>
                <Button
                  className="bg-VDcyan enabled:hover:bg-[#9ee8dd] enabled:hover:text-VDcyan focus:enabled:bg-Scyan focus:enabled:text-VDcyan focus:ring-0 text-white"
                  id="twentyFiveTipBtn"
                  onClick={() => {
                    setSelectedTip(25);
                    handleTipClick(twentyFiveTipBtn);
                  }}
                >
                  <span className="text-2xl">25% </span>
                </Button>
                <Button
                  className="bg-VDcyan enabled:hover:bg-[#9ee8dd] enabled:hover:text-VDcyan focus:enabled:bg-Scyan focus:enabled:text-VDcyan focus:ring-0 text-white"
                  id="fiftyTipBtn"
                  onClick={() => {
                    setSelectedTip(50);
                    handleTipClick(fiftyTipBtn);
                  }}
                >
                  <span className="text-2xl">50% </span>
                </Button>
                <input
                  id="customTipInputJsx"
                  type="text"
                  placeholder="Custom"
                  value={customTipInputValue}
                  className="text-2xl group relative flex items-stretch justify-center text-right font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none dark:focus:ring-cyan-800 rounded-lg bg-VLGcyan enabled:hover:text-VDcyan focus:enabled:text-VDcyan focus:ring-Scyan text-VDcyan focus:ring-2 border-0"
                  onChange={(e) => {
                    setSelectedTip(parseFloat(e.target.value));
                    setCustomTipInputValue(e.target.value);
                    handleTipClick();
                    if (
                      selectedTip < 1 ||
                      customTipInputValue == "0" ||
                      customTipInputJsx?.value == "0"
                    ) {
                      customTipInputJsx?.classList.add(
                        "ring-red-600",
                        "focus:ring-red-600",
                        "ring-2"
                      );
                      customTipInputJsx?.classList.remove("focus:ring-Scyan");
                    } else {
                      customTipInputJsx?.classList.remove(
                        "ring-red-600",
                        "focus:ring-red-600",
                        "ring-2"
                      );
                      customTipInputJsx?.classList.add("focus:ring-Scyan");
                    }
                  }}
                />
              </div>
              <div className="grid grid-cols-2">
                <div>Number of People</div>
                <div
                  id="peopleError"
                  className="text-right text-red-600 hidden"
                >
                  Can't be zero
                </div>

                <input
                  id="peopleInputJsx"
                  className="text-2xl col-span-2 text-VDcyan bg-VLGcyan text-right rounded-lg border-0 focus:ring-Scyan focus:ring-2"
                  type="text"
                  placeholder="0"
                  value={peopleInputValue}
                  onChange={(e) => {
                    setPeopleInput(parseFloat(e.target.value));
                    setPeopleInputValue(e.target.value);
                    if (
                      // peopleInput < 1 ||
                      peopleInputValue == "0" ||
                      peopleInputJsx?.value == "0"
                    ) {
                      peopleInputJsx?.classList.add(
                        "ring-red-600",
                        "focus:ring-red-600",
                        "ring-2"
                      );
                      peopleInputJsx?.classList.remove("focus:ring-Scyan");
                      peopleError?.classList.remove("hidden");
                    } else {
                      peopleInputJsx?.classList.remove(
                        "ring-red-600",
                        "focus:ring-red-600",
                        "ring-2"
                      );
                      peopleInputJsx?.classList.add("focus:ring-Scyan");
                      peopleError?.classList.add("hidden");
                    }
                  }}
                  // See bill input style
                  style={{
                    backgroundImage: "url(/images/icon-person.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 10px center",
                  }}
                />
              </div>
            </div>

            <div className="bg-VDcyan text-white grid grid-cols-2 p-8 pt-10 gap-y-5 rounded-2xl">
              <div>
                <p>Tip Amount</p>
                <p className="text-xs text-DGcyan">/ person</p>
              </div>
              <div className="text-2xl text-Scyan text-right">
                $
                {tipAmount && tipAmount !== "NaN" && tipAmount !== "Infinity"
                  ? tipAmount
                  : "0.00"}
              </div>
              <div>
                <p>Total</p>
                <p className="text-xs text-DGcyan">/ person</p>
              </div>
              <div className="text-2xl text-Scyan text-right">
                $
                {total && total !== "NaN" && total !== "Infinity"
                  ? total
                  : "0.00"}
              </div>
              <div className="col-span-2 flex items-end">
                <Button
                  disabled={
                    tipAmount && tipAmount !== "NaN" && tipAmount !== "Infinity"
                      ? false
                      : true
                  }
                  className="w-full bg-Scyan text-VDcyan disabled:bg-[#0d686d] enabled:hover:bg-[#9ee8dd] focus:ring-0"
                  onClick={() => {
                    setBillInput(0);
                    setPeopleInput(0);
                    setSelectedTip(0);
                    setBillInputValue("");
                    setPeopleInputValue("");
                    setCustomTipInputValue("");
                  }}
                >
                  RESET
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

import React, { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HookPracties() {

    const inputRef = useRef(null)
  const [posCountbtn, setPosCountbtn] = useState(0);

  const [TimeCount, setTimeCount] = useState(0);

  const [reducerCount, setReducerCount] = useReducer(reducerFun, {count:0})


  const onClickPos = () => {
    setPosCountbtn(posCountbtn + 1);
  };
  const onClickPosSub = () => {
    setPosCountbtn(posCountbtn - 1);
  };

  useEffect(()=>{
    setInterval(() => {
            setTimeCount(TimeCount);
    }, 0);
  })


  const ThemesContext = createContext("light");

  function ThemesContextFun (){
        const themes = useContext(ThemesContext);
        return(
            <span className="font-bold" > 
                {themes}
            </span>
        )
  }




  function reducerFun(reducerCount, action ){
    if(action.type === "increament"){
        return {count: reducerCount.count+1}
    }
    else if(action.type === "decrease"){
        return {count: reducerCount.count - 1}
    }
    else{
        return {count : String("not have")};
    }

  } 

  function focusInput(){
            console.log(inputRef.current.focus())
  }










  return (
    <>
        <section className="flex justify-center center text-center font-bold my-10">
            <Link to="/"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg> HomePage</Link>
        </section>

        {/* useState hook */}
      <section className="">
        <div className="container center text-center mt-10">
          <div className="text-xl font-bold">useState</div>
          <div className="flex justify-center center text-center">
            <ul className="list-disc text-start">
              <li>Manages state in a functional component.</li>
              <li>useState(0) initializes the count state to 0.</li>
              <li>setCount updates the state when called.</li>
            </ul>
          </div>
          <div className=" justify-center my-5 center text-center">
            <div className="pos">
              <div className="pos-img ">
                {/* <img src={PosImg} alt="" width={500} height={500} /> */}
              </div>
              <div>{posCountbtn > 0 ? posCountbtn : 0}</div>
              <div className="flex justify-center text-center gap-10">
                <div className="button">
                  {" "}
                  <button
                    className="bg-blue-600 hover:bg-blue-500  px-5 py-3 rounded-3xl"
                    onClick={onClickPos}
                  >
                    Add
                  </button>{" "}
                </div>
                <div className="button">
                  {" "}
                  <button
                    className="bg-blue-600 hover:bg-blue-500  px-5 py-3 rounded-3xl"
                    onClick={onClickPosSub}
                  >
                    sub
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* useEffort Hooks */}

        <section className="text-center my-10">
        <div className="text-xl font-bold">UseEffort</div>
                <div className="useEffort">
                    
                        this is useEffort set update in  side effects like data fetching, subscriptions, or DOM updates. <br />
                        Runs the effect on mount and cleans up when the component unmounts. <br />
                            times : {TimeCount}'s
                </div>
        </section>


        {/* useContext hook */}

        <section className="text-center">
        <div className="text-xl font-bold">useContext</div>
                <div>
                    current theme : {ThemesContextFun()}
                </div>
                <div>
                    useContext we have changed here <br />
                        <ThemesContext.Provider value="dark">
                           parant theme change here : <ThemesContextFun/>
                        </ThemesContext.Provider>
                </div>
        </section>

        {/* useReducer Hook */}
            <section className="text-center my-10">
        <div className="text-xl font-bold">useReducer</div>
                    <div>{reducerCount.count}</div>
                    <div className="flex justify-center gap-10 text-4xl">
                    <div className="bg-sky-500 hover:bg-sky-400  rounded-full" onClick={()=>setReducerCount({type:"increament"})}>+</div>
                    <div className="bg-sky-500 hover:bg-sky-400  rounded-full" onClick={()=>setReducerCount({type:"decrease"})}>-</div>
                    </div>
            </section>


            {/* useRef hook */}
            <section className="text-center my-10">
        <div className="text-xl font-bold">useRef</div>
                <div>
                    <input type="text" ref={inputRef} />
                    <button onClick={focusInput}>Click me</button>
                </div>
            </section>
            <section className="text-center my-10">  <div className="text-xl font-bold">useMemo</div>  
            
              <div>Optimizes performance by memoizing expensive calculations. <br /> Avoids recalculating compute unless number changes.</div>
             </section>
            <section className="text-center my-10">  <div className="text-xl font-bold">useCallBack</div> 
              <div>Memoizes callback functions to prevent unnecessary re-creation. <br /> Prevents unnecessary re-renders of Button by memoizing handleClick.</div>
              </section>
    </>
  );
}

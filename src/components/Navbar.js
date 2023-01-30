import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState(null);

  const toogle=(index)=>{
    if(selected===index){
        return setSelected(null)
        
    }
    setSelected(index)
    console.log(selected)
  }
  const accordionData = [
    {
      id: 1,
      head: "Accordion #1",
      ans: "Accordion #1   lorem saada sad akj sdfoiasd dsfopkpdo apsijdepj  oepwfjmdscm opwer0oew jc nsfopdj powjefpj xcm powej90w jwepojr we0j pjwe prjwej wper ",
    },
    {
      id: 2,
      head: "Accordion #2",
      ans: "Accordion #2 lorem saada sad akj sdfoiasd dsfopkpdo apsijdepj  oepwfjmdscm opwer0oew jc nsfopdj powjefpj xcm powej90w jwepojr we0j pjwe prjwej wper ",
    },
    {
      id: 3,
      head: "Accordion #3",
      ans: " Accordion #3 lorem saada sad akj sdfoiasd dsfopkpdo apsijdepj  oepwfjmdscm opwer0oew jc nsfopdj powjefpj xcm powej90w jwepojr we0j pjwe prjwej wper ",
    },
    {
      id: 4,
      head: "Accordion #4",
      ans: " Accordion #4 lorem saada sad akj sdfoiasd dsfopkpdo apsijdepj  oepwfjmdscm opwer0oew jc nsfopdj powjefpj xcm powej90w jwepojr we0j pjwe prjwej wper ",
    },
    {
      id: 5,
      head: "Accordion #5",
      ans: " Accordion #5 lorem saada sad akj sdfoiasd dsfopkpdo apsijdepj  oepwfjmdscm opwer0oew jc nsfopdj powjefpj xcm powej90w jwepojr we0j pjwe prjwej wper ",
    },
    {
      id: 6,
      head: "Accordion #6",
      ans: " Accordion #6 lorem saada sad akj sdfoiasd dsfopkpdo apsijdepj  oepwfjmdscm opwer0oew jc nsfopdj powjefpj xcm powej90w jwepojr we0j pjwe prjwej wper ",
    },
    {
      id: 7,
      head: "Accordion #7",
      ans: " Accordion #7 lorem saada sad akj sdfoiasd dsfopkpdo apsijdepj  oepwfjmdscm opwer0oew jc nsfopdj powjefpj xcm powej90w jwepojr we0j pjwe prjwej wper ",
    },
  ];
  return (
    <>
      {/* //copy from here */}
      {accordionData.map((curelem, index) => {
        return (
          <div
            className="bg-slate-200 w-[50%] border-slate-400 border-2  "
            key={index}
          >
            <h1 className="text-4xl p-4 flex justify-between">
              <span>{curelem.head}</span>{" "}
              <span>
                <button
                  className="bg-blue-500 p-2 rounded active:bg-green-500"
                  onClick={()=>toogle(index)}
                >
                  {selected===index ? "-" : "+"}
                </button>
              </span>
            </h1>
            <hr className="border border-slate-400" />
            {selected===index && <p className={` p-5 mt-5 `}>
              {curelem.ans}
            </p>}
          </div>
        );
      })}

      {/* //end copy from here */}
    </>
  );
};

export default Navbar;

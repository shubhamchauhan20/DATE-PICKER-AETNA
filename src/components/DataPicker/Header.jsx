import React from "react";
import { getNumberOfDaysInMonth, getSortedDays, range } from "../../utils";



const Header = () => {
    const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = React.useState(
        new Date().getFullYear()
    );
    // {console.log(new Date().getMonth())}

    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth((prev) => prev + 1);
        }else {
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1);
        }
    }
    const prevMonth = () => {
        if (currentMonth < 0) {
            setCurrentMonth((prev) => prev - 1);
        }else {
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1);
        }
    }

    const monthNames = [ //src-> constants->const.js
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <div className="justify-center">
            <div className="flex justify-center items-center mx-10">
                <ion-icon onClick={prevMonth} name="chevron-back-outline"></ion-icon>
                <h1 className="flex-1">
                    {monthNames[currentMonth]}-{currentYear}
                </h1>
                <ion-icon onClick={nextMonth} name="chevron-forward-outline"></ion-icon>
            </div>
            <div className="grid grid-cols-7">
                {getSortedDays().map((day) => (<div key={day} className="col-span-1"><p>{day}</p></div>))}
            </div>

            {/* <div className="grid grid-cols-7">
                {getSortedDAys().map((day) => (
                    <div key={day} className="col-span-1">
                        <p>{day}</p>
                    </div>
                ))}
            </div> */}


            <div className="grid grid-cols-7">
                {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map((day) => (
                    <div key={day} className="col-span-1">
                        <p>{day}</p>
                    </div>
                ))}
            </div>

            

        </div>
    );
};


export default Header;
// how i can use these two property "grid grid-cols-7" and "col-span-1" in these lower div so that it will look good on UI
//     < div >
//     { getSortedDAys()map((day) => (
//         <p>{day}</p>
//     ))}
// 				</div >

//     <div>
//         {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map((day) => (<p>{day}</p>))}
//     </div>



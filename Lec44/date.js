// let myDate = new Date();
// console.log(myDate);  // Results of this method is not readable
// console.log(myDate.toString()); // Converted date into string, result will be different (GMT Pakistan Standard)
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); // Local Time Zone
// console.log(myDate.toLocaleTimeString()); // local time only
// console.log(myDate.getHours());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let newDates = new Date(2025, 0, 19);
// console.log(newDates.toString()); // Month in JS, start's from 0.
// let newDates = new Date(2025, 0, 19, 6, 30); // Adding time also
// console.log(newDates.toLocaleString()); // Local time 2nd month with time, 

// let nndate = new Date("2025-01-19"); // This Date Format is yyyy,mm,dd it can be write yyyy-mm-dd also in quote
// console.log(nndate.toLocaleString());

// Time Stamp, will use for creating pole, and to check fast answer, etc
// let myTimeStamp = Date.now(); // date.now() is not a constructor thats why we didn't use "New"
// console.log(myTimeStamp); // it will results in mili-Seconds from 01-01-1970 (JS Starting date)
// console.log(nndate.getTime()); // time will taken from what you declared in Variable. which is nndate = "2025-01-19"

// // Convert time miliseconds into seconds by following methods
// console.log(myTimeStamp); // (normal milisconds)
// // console.log(myTimeStamp/1000); // it is wrong way it showing result in decimail so we do following 
// console.log(Math.round(myTimeStamp/1000)); // round value (neareast)
// console.log(Math.floor(myTimeStamp/1000)); // lower value round
// console.log(Math.ceil(myTimeStamp/1000)); // Upper value round

// Get Month or date or time from any date
// let Mydate2 = new Date();
// console.log(Mydate2.getTime()); // it will get time in miliSeconds
// console.log(Mydate2.getDate());// it will get date 
// console.log(Mydate2.getMinutes()); // it get minutes
// console.log(Mydate2.getDay()); // date start from Monday which is 1st Day ( results will be in numbers )

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Further customize date format use following
// Create a date object from a date string
// var date = new Date("2021-10-06"); // yyyy-mm-dd

// // Get year, month, and day part from the date
// var year = date.toLocaleString("default", { year: "numeric" });
// var month = date.toLocaleString("default", { month: "short" });
// var day = date.toLocaleString("default", { day: "2-digit" });

// // Generate custom date string
// var formattedDate = day + "-" + month + "-" + year;
// console.log(formattedDate);  // Prints: 06-Oct-2021

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// toString() : Sun May 07 2023 14:16:39
// toDateString() : Sun May 07 2023
// toTimeString() :14:19:03 GMT+0500 (Pakistan Standard Time)
// toLocaleString() : 5/7/2023, 2:20:24 PM
// toISOString() : 2023-05-07T09:21:22.167Z
// toUTCString() : Sun, 07 May 2023 09:24:48 GMT

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let date3= new Date("2024,02,19"); // yyyy-mm-dd format
let fulldate3 = date3.toLocaleString("default", { day: "2-digit", month: "short", year: "numeric" , timeZoneName: 'shortOffset'});
console.log(fulldate3);
console.log(typeof fulldate3);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
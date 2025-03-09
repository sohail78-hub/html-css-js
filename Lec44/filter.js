// Filter Function ( this Filter Mostly use in e-Commerce)
// It is Call back function

const books = [ 
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 1999},    
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 1989, edition: 2010},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven',genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011,edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
    {title: 'Book Ten', genre: 'Science', publish: 1985, edition: 2015},
    ];

    // Let find the book genere: Fiction and latest edition after 2010

    // const userBook = books.filter ( (bk) => bk.genre=='Fiction' && bk.edition <= 2010); // It is single line statement
    // console.log(userBook);

    // Let find the book publish before=1990 and latest edition after 2010
    // with scope

    let userBook = books.filter ( (bk) => {
        return bk.publish <= 1990 && bk.edition >= 2010;
    })
    
    // console.log(userBook);

    // ++++++++++++ Filter Example 2 ++++++++++++++++++++

    const newNums = [1,2,3,4,5,6,7,8,9,10];

    // let newNums2 = newNums.filter((num)=> {return num > 4});
    // or
    // let newNums2 = newNums.filter((nums)=> nums > 4);
    // console.log(newNums2);

    // ++++++++++ Lets find greater than 4 values from Array by forEach() method +++++++++

    let jogi = []; // Create new Variable for saving the values which fulfil the new crieteria

    newNums.forEach((nums) => { // iteration of forEach loop till the length of newNums,
        if (nums >= 4) {  // it will find equal & greater 4 values
            jogi.push(nums);  // pushing 4 and greater than value in jogi,
        }
        });
    console.log(jogi);
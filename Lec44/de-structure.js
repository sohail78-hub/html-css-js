const course = {
    coursename : "JavaScript",
    price: 999,
    courseInstructor: "Iqbal"
    
    }

    // console.log(course.courseInstructor);
    // To avoid long typing eg: object.properties like course.courseInstructor, we can do following

    // Destructure (shorting calling of any property)
    // let {courseInstructor} = course; //(it will be good when repeatedly use of any Property)
    // console.log(courseInstructor); // CourseInstructor is a property of Course Object

    // or if need to make short name of same property than use
    let {courseInstructor: Ustad} = course; // Ustad will replace courseInstructor
    console.log(Ustad);

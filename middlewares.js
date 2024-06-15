const authPage = (permissions) =>{
    return (req,res,next) =>{
        const userRole = req.body.role
        if(permissions.includes(userRole)){
            next()
        }
        else{
            return res.status(401).json("you don't have permission")
        }
    }
};

const authCourse = (req,res, next)=>{
    const courseNumber = parseInt(req.params.number);
    if(req.body.courses.includes(courseNumber)){
        next()
    } else{
        return res.status(401).json("you don't have access to the course")
    }
};

module.exports = {authPage, authCourse};

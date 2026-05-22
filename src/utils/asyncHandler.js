const asyncHandler = (requestHandler)=> {
    return async(req, res, next) => {
        try {
            await requestHandler(req, res, next)
        } catch (error) {
            next(error)
        }
    }

}


export {asyncHandler}


// const asyncHandler = () => {

// }
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => () => {}
/*
const asyncHandler = (fn)=> async () => {
    try{ 
        await fn()
    } catch(error){
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
   }
}
*/

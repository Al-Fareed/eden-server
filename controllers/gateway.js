export const phonePeContoller = async(req,res)=>{
    try {
        res.status(200).json({
            status:"OK",
            message:"Good try"
        })
    } catch (error) {
        res.status(400).json({
            message: "Bad request",
        })
        
    }
}
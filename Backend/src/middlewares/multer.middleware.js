import multer from "multer"

const storage=multer.diskStorage({
    destination: function(req,file,fun){
        fun(null,"./public/temp")
    },
    filename:function(req,file,fun){
        fun(null,file.originalname)
    }
})

export const upload =multer({storage})
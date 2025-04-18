const Multer = require("multer")
const path = require("path")

const storage = Multer.diskStorage({

    destination : (req,file,cb) =>{
        cb(null,"uploads/");
    },

    filename : (req,file,cb) =>{
        cb(null , Date.now() + "-" + file.originalname)
    }
})



// File filter for allowed extensions (optional)
  const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);
  
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
    }
  };
  


  // Multer middleware configuration
  const upload = Multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
  });


  module.exports = upload
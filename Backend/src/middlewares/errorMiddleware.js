

const errorHandling = (err, req, res, next) => {

    const handlingPart = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(handlingPart).json({
        success: false,
        message:err.message
    })
};

module.exports = errorHandling;
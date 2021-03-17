const FeedBack = require('../model/Feedback')

//@desc         GET all Feedback Detail
//@route        GET /api/v1/feedback
//@acces        Public

exports.getFeedbacks = async (req, res, next) => {
    const feedback = await FeedBack.find()
    res.status(200).json({
      feedback,
      success: true,
      msg: "Show all Details",
    });
  };
  
//@desc         GET all Feedback Detail
//@route        GET /api/v1/feedback/:id
//@acces        Public
  
exports.getFeedback = async (req, res, next) => {
  const feedback = await FeedBack.findById(req.params.id)  
  res.status(200).json({
        feedback,
        success: true,
        msg: "Feedback Detail of" + req.params.id,
      });
};
  
//@desc         POST Feedback Detail
//@route        POST /api/v1/feedback
//@acces        Private

exports.createFeedback = async (req, res, next) => {
  try {
    req.body,
    await FeedBack.create(req.body),
  } catch (e) {
    console.error(e)
  }
  
};
//@desc         PUT all Feedback Detail
//@route        PUT /api/v1/feedback/:id
//@acces        Private

exports.updateFeedback = async (req, res, next) => {
  let feedback = await FeedBack.findById(req.params.id)
  try {
    if (!feedback) {
      res.json({
        msg: "feedback details with this id not found"
      })
    } else {
      feedback= await FeedBack.findOneAndUpdate(
        {_id: req.params.id }, 
        req.body, 
        {
          new: true,
          runValidators: true,
        })
  
      res.status(200).json({
        feedback,
        success: true,
        msg: " Update Feedback Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e)
  }
  
};

//@desc         DELETE Feedback Detail
//@route        DELETE /api/v1/feedback/:id
//@acces        Private

exports.deleteFeedback = async (req, res, next) => {
let feedback = await FeedBack.findById(req.params.id)
  try {
    if (!feedback) {
      res.json({
        msg: "feedback details with this id not found"
      })
    } else {
      feedback= await FeedBack.remove({ _id: req.params.id })
      res.status(200).json({
        success: true,
        msg: "Delete Feedback Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e)
  }
  
};

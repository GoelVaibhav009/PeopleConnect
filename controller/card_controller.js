const companyDetails = require("../model/Company");
const socialDetails = require("../model/Social");
const contactDetails = require("../model/ContactUs");
const feedbackDetails = require("../model/Feedback");
const imagesDetails = require("../model/Images");
const templateDetails = require("../model/template");
const ecommerceDetails = require("../model/Ecommerce");
const paymentDetails = require("../model/payment");
const selectedTemplateDetails = require("../model/selectedTemplate");

exports.getCard = async (req, res, next) => {
    try {
        let CompanyDetails = await companyDetails.find({companyUrl:req.params.companyName}).lean()
        let SocialDetails = await socialDetails.find({userId: CompanyDetails[0].userId}).lean()
        let ContactDetails = await contactDetails.find({userId: CompanyDetails[0].userId}).lean()
        let FeedbackDetails = await feedbackDetails.find({companyId: CompanyDetails[0]._id}).lean()
        let ImagesDetails = await imagesDetails.find({userId: CompanyDetails[0].userId}).lean()
        let SelectedTemplated = await selectedTemplateDetails.find({userId: CompanyDetails[0].userId}).lean()
        let TemplateDetails = await templateDetails.find({_id: SelectedTemplated[0].TemplateId}).lean()
        let EcommerceDetails = await ecommerceDetails.find({userId: CompanyDetails[0].userId}).lean()
        let PaymentDetails = await paymentDetails.find({userId: CompanyDetails[0].userId}).lean()

        res.render(`templates/${TemplateDetails[0].name}`, {
            contactDetailsValue: ContactDetails[0],
            companyDetailsValue: CompanyDetails[0],
            socialDetailsValue: SocialDetails[0],
            feedbackDetailsValue: FeedbackDetails[0],
            imagesDetailsValue: ImagesDetails[0],
            ecommerceDetailsValue: EcommerceDetails[0],
            paymentDetailsValue: PaymentDetails[0]
        })

    } catch (e) {
        console.log(e)
    }
    

    // res.send(SelectedTemplated[0].TemplateId)
    // console.log(`template/${TemplateDetails[0].name}`)
    // res.send(`template/${TemplateDetails[0].name}`)
  };
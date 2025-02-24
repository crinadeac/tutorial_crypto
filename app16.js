//user input validation with Express and JOI - cu arrayObjects
//how to VALIDATE A NESTED OBJECT with an array of objects
const Joi = require('joi');
//const arrayString = ['banana','bacon','cheese'];
const arrayObjects = [{example:'example1'},{example:'example2'}];

const userInput = {personalInfo: {
    streetAddress: '123456789',
    city: 'ffdfdf',
    state: 'fg'
},
preferences: arrayObjects};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
});

const preferencesSchema = Joi.array().items(Joi.object().keys({
    example:Joi.string().required()
}));

const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

const validation = schema.validate(userInput);

if (validation.error) {   
        console.log("Validation Error:", validation.error.details);
    } else {
        console.log("Validated Data:", validation.value);
    }
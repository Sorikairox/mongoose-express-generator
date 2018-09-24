# mongoose-express-generator
Mongoose Models and Express Controllers generator which goes along mongoose REST utils functions from https://www.npmjs.com/package/mongoose-rest-utils
 
 Models generator and main /bin file are from https://github.com/DamienP33/express-mongoose-generator under MIT license, all credits for these parts go to Damien Perrier. All I did was change the model template to fit my own, and change some test.

It also create swagger documentation via comments for each controllers. Use https://www.npmjs.com/package/express-swagger-generator for generating the awesome documentation.

Willing to get awesomes Typescript classes from your model in no time ? Check my other package : https://www.npmjs.com/package/mongoose-to-typescript
## Installation
```bash
$ npm install -g mongoose-express-generator
```

## Usage
### Non-Interactive mode
Generates a Mongoose model, a REST controller and Express router :
```bash
$ mongoose-express-gen -m car -f carDoor:number,color -r
        create: ./models/cardModel.js
        create: ./routes/cardRoutes.js
        create: ./controllers/cardController.js
```

##### Options

  - `-m, --model <modelName>` - the model name.
  - `-f, --fields  <fields>` - the fields (name1:type,name2:type).
  - `-r, --rest` - enable generation REST.
  - `-t, --tree <tree>`        files tree generation grouped by (t)ype or by (m)odule

##### Available types
  - string
  - number
  - date
  - boolean
  - array
  - objectId

### Interactive mode

Generates a Mongoose model, a REST controller and Express router :
```bash
$ mongoose-gen
Model Name : car
Available types : string, number, date, boolean, array
Field Name (press <return> to stop adding fields) : door
Field Type [string] : number
Field Name (press <return> to stop adding fields) : color
Field Type [string] : 
Field Name (press <return> to stop adding fields) : owner
Field Type [string] : objectId
Reference (model name referred by the objectId field) : User
Field Name (press <return> to stop adding fields) : 
Generate Rest (yes/no) ? [yes] : 
Files tree generation grouped by Type or by Module (t/m) ? [t] : 
        create: ./models/carModel.js
        create: ./routes/carsRoutes.js
        create: ./controllers/carController.js
```

## Rendering
### Model
models/carModel.js :
```javascript
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var carSchema = new Schema({
	"color" : String,
	"door" : Number,
    "owner" : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('car', carSchema);
```

### Controller
controllers/carController.js :
```javascriptvar TestModel = require('../models/testModel.js');
             
             var express = require('express');
             var router = express.Router();
             const mongoose_utils = require("mongoose-rest-utils");
             
             /**
              * Create a new test
              * @route POST /test
              * @group test - Operations about test
              * @param {string} string.body
              * @returns {object} 200 - An array of Tests
              * @returns {Error}  default - Unexpected error
              */
             
             router.post("/", function (req, res) {
                 mongoose_utils.basicPost(req, res, TestModel);
             });
             
             /**
              * Modify test
              * @route PUT /test
              * @group test - Operations about test
              * @param {string} string.body
              * @returns {object} 200 - The newly modified test
              * @returns {Error}  default - Unexpected error
              */
             
             router.put("/", function (req, res) {
                 mongoose_utils.basicPut(req, res, TestModel);
             });
             
             
             
             /**
              * Get all Tests
              * @route GET /test
              * @group test - Operations about test
              * @param {string} string.query - (optional) get by string
              * @returns {object} 200 - An array of Tests
              * @returns {Error}  default - Unexpected error
              */
             
             
             router.get("/", function (req, res) {
                 mongoose_utils.basicGet(req, res, TestModel);
             });
             
             /**
              * Delete a test
              * @route DELETE /test/:id
              * @group test - Operations about test
              * @param {string} id.query.required
              * @returns {object} 200 - An array of Tests
              * @returns {Error}  default - Unexpected error
              */
             
             
             router.delete("/:id", function (req, res) {
                 mongoose_utils.basicDelete(req, res, TestModel);
             });
             
             module.exports = router;

```

### With files tree generation by module
```bash
Files tree generation grouped by Type or by Module (t/m) ? [t] : m
        create: ./car
        create: ./car/carModel.js
        create: ./car/carController.js
        create: ./car/carRoutes.js
```

You then only have to add router in app.js file and MongoDB connection whit Mongoose.
app.js :
```javascript
var routes = require('./controllers/index');
var cars = require('./controllers/carRoutes');
 ...

app.use('/', routes);
app.use('/cars', cars);
 ...
 
```

## Licence

Copyright (c) 2018 Thomas Cruveilher
Licensed under the [MIT license](LICENSE).

For everything that belongs to Damien Perrier : 

Copyright (c) 2017 Damien Perrier
Licensed under the [MIT license](LICENSE).

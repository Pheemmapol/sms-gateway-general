## APIs

`/api` to get all the information of APIs

**SMS**

- `/sms/now` : Send SMS to all of the input numbers

  Method : _POST_

  Body:
  | Field | Type | Description |
  | ------------- | ------------- |-----|
  |to|Array of strings|The recievers' phone number|
  |message|string| The content of the SMS|

  Example:

  Request Body

  ```
  {
  "to": [
    "1234567898"
  ],
  "message": "Hello World"
  }
  ```

  Successful Response

  ```
  {
   "success": true,
   "result": {
     "success": true,
     "code": 200,
     "message": "OK",
     "data": {
       "credit_usage": 1,
       "remaining_credit": 3815
       }
     }
   }
  ```

- `/sms/scheduled` : Send scheduled SMS to all of the input numbers

  Method : _POST_

  Body:
  | Field | Type | Description |
  | ------------- | ------------- |-----|
  |to|Array of strings|The recievers' phone number|
  |message|string| The content of the SMS|
  |scheduled_time|string| The scheduled time, using the format: yyyy-mm-dd hh:mm:ss|

  Example:

  Request Body

  ```
  {
    "to": [
      "123456789"
    ],
    "message": "Hello, World",
    "scheduled_time": "2023-06-12 11:24:00"
  }
  ```

  Successful Response

  ```
   {
    "success": true,
    "result": {
      "success": true,
      "code": 200,
      "message": "OK",
      "data": {
        "credit_usage": 1,
        "remaining_credit": 3815
        }
      }
    }
  ```
  
  ## .env
  To use the API, create a new file, ".env". Inside the file, add your own token key and name.
  For example: 
  ```
  THSMS_TOKEN_KEY = "INSERTYOURTOKENHERE"
  THSMS_SENDER_NAME = "INSERTYOURNAMEHERE"
  ```

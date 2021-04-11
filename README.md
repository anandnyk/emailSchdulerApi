# emailSchdulerApi

1) Remane the env.txt into .env
2) Fill the required details in the .env file(refer below for content of .env to be filled.)
    EMAIL_SERVICE = gmail
    EMAIL_ID = <email_id@gmail.com>
    EMAIL_PASS = <Email_Password>

    RECEIVER_EMAIL = <receiver_email@gmail.com>

    CRON_EXPRESSION = 1 * * * * *

    TABLE_NAME = email_Data

    DB_NAME = <Db_name>
    DB_USERNAME = <Db_username>
    DB_PASSWORD = <db_password>
    HOST = remotemysql.com
    DIALECT = mysql

    TIMESTAMP_FORMAT = YYYYMMDDHHmm
====================================================================
4) program entry point is index.js
5) For CRUD operation for email scheduling/re-scheduling etc REST api url can be found in router.js.

**Routes:-**
**GET**: http://localhost:3000/email/id=1

**POST**: http://localhost:3000/email
    headers:
      Content-Type: application/json
    body:
    {
        "id": 1,
        "receiver": "email@gmail.com",
        "sender": "email@gmail.com",
        "subject": "any subject",
        "body": "any content.",
        "status": "SCHEDULED",
        "scheduled_Time": "202104110125" // YYYYMMDDHHmm
    }
    
 **DELETE**: http://localhost:3000/email/id=1
 
 **PUT**: http://localhost:3000/email/id=1
    headers:
        Content-Type: application/json
    body:
    {
        "status": "SENT"
    }
 
=========================================================================


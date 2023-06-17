**Գրել ծրագիր որը GET/DELETE/POST API-ների միջոցով կանի հետևյալ գործողություները։**
1. /listUsers ֊ ցույց կտա բոլոր user-ներին
2. /addUser ֊ կավելացնի նոր user
3. /deleteUser/:id - կջնջի կոնկրետ user- ըստ իր ID֊ի

 
 
**POST API**  -  curl -X POST 'http://localhost:3000/add-user'

**DELETE API**  -   curl -X DELETE 'http://localhost:3001/deleteUser/4'

**PUT API**    -    curl -X PUT -d '{"name":"Mahesh", "password":"newpassword", "profession":"updated profession"}' -H "Content-Type: application/json" http://localhost:3001/updateUserData/1

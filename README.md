# UpLess



## Description

A platform dedicated to reduce waste where users can share their own extra or left over materials and search for others if they need it.



## User Stories

   404:
As an anon/user I can see a 404 page if I try to reach a page that does not exist so that, ups, it's my fault;

   Signup:
As an anon I can sign up in the platform so I can  gladly help the planet by sharing and reducing material waste;

   Login:
As a user I can login to the platform so I can  gladly help the planet by sharing and reducing material waste;

   Logout:
As a user I can logout from the platform so no one else can use it;

   Share Wastes:
As a user I can add my material wastes with other users so that I can share it with the community, and vice-versa.

   List of Shared Materials:
As a user I want to see the all the wasted material available so that I can look for one that i need.

   Search Materials:
As a user I really want to know how materials work and where I can put them to recycle.

   Send Messages:
As a user I can talk with others user so I can meet them to pick up my new old materials,



## Backlog

User Profile:
- sharing up cycling ideas;
- app explanation;
- search by shared material

Geo Location:
- In each material search, the user can see if other users need or want to share that material by geolocation;

Material Details:
- Comments;

  
# Client

## Routes
| Method   | Path                        | Component                          | Permissions     | Behavior                        | 
|----------|-----------------------------|------------------------------------|-----------------|---------------------------------|
| `get`    | `/`                         | HomePageComponent                  | public          | just promotional copy|
| `post`   | `/auth/signup`              | SignupPageComponent                | anon only       | signup form, link to login if user had already, navigate to userprofile after signup |
| `post`   | `/auth/login`               | LoginPageComponent                 | anon only       | login form, link to signup if user doesn't had already, navigate to userprofile after login |
| `post`   | `/auth/logout`              | n/a                                | user only       | navigate to homepage after logout, expire session |
| `get`    | `/profile/my-materials`     | ProfilePageComponent               | user only       | my details, my shared materials |
| `get`    | `/shared-materials`         | SharedMaterialsComponent           | public          | all materials shared |
| `get`    | `/add-material`             | AddMaterialToShareComponent        | user only       | goes to the form to creat new material to share, after created opens the material profile |
| `post`   | `/material:id`              | SharedMaterialsProfileComponent    | user only       | form to share a new material that the user wants to share, goes to the material profile when created |
| `put`    | `/material:id/edit`         | EditMaterialsComponent             | user only       | updates the material, goes to the material profile after |
| `delete` | `/materials/:id`            | n/a                                | user only       | delete material
| `get`    | `/messages`                 | MessageListComponent               | user only       | shows all conversations, where the user can select one, open  and answer them |
| `post`   | `/message`                  | ConversationComponent              | user only       | send or answers a message |
| `delete` | `/messages/:id`             | n/a                                | user only       | delete message
| `get`    | `/search-material`          | SearchMaterialCpmponent            | public          | form with families and types of materials |
| `post`   | `/search-material:id`       | MaterialAPIDetailComponent         | public          | the users selects a family and a type of material, it will go for the material page from the API |
| `get`    | `**`                        | NotFoundPageComponent              | public          |
|----------|-----------------------------|------------------------------------|-----------------|---------------------------------|



## Components

- LogoBar
- UserBar
  - material card
- Add Material
- Shared Material Detail
- Search Material
- Searched Material Detail
- Messages List
- Conversation 
- NavBar



## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Materials Service
  - material.list()
  - material.search(terms)
  - material.create(data)
  - material.detail(id)
  - material.remove(id)
- Materials API Service
  - material.list()
  - material.search(terms)
  - material.detail(id)
- Messages Service
  - message.list()
  - message.create(data)
  - message.remove(id)
  


# Server

## Models

User model

```
username - String // required & unique
email - String // required & unique
password - String // required
description - String
photo - file
materials - [Materials]

```

Materials model

```
name - String // required
description - String
amount - Number // required
price - Number
photo - file

```

Message model

```
userAID - ObjectID<User> // required
userBID - ObjectID<User> // required
messages - [Messages]

```



## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object

- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
    - profile-picture
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
  
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
  
- POST /auth/logout
  - body: (empty)
  - 204

- POST /user/me/my-materials
  - body:
    - name
    - amount
    - price
    - material-picture
  - validation
    - id is valid (404)
    - id exists (404)
  - add to my-meterials
  - updates user in session
  
- PUT /user/me/my-materials/materialId
  - body:
   - name
   - amount
   - price
   - material-picture
  - validation
  - id is valid (404)
  - id exists (404)
  - update to my-meterials 
  - updates user in session

- DELETE /user/me/my-material/:materialId
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from my-materials
  - updates user in session

- GET /material?terms=foo
  - use search criteria if terms provided
  - 200 with a material object

- POST /messages/:messageId
  - body:
    - userA
    - userB
    - message
  - validation
    - fields not empty
  - create message
  - 200  with array of messages

- DELETE /user/me/messages/:messageId
- validation
- id is valid (404)
- id exists (404)
- body: (empty - the user is already stored in the session)
- remove from messages
- updates user in messages

  

## Links




## Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board



## Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)

**API Endpoints:**

*HTML application*

### Root
- GET /
  - loads React web app

*JSON API*

### provider
* `GET /api/provider`
  * Fetches all providers
* `POST /api/provider`
  * Creates new provider
* `GET /api/provider/:providerId`
  * Fetches single existing provider profile
* `PATCH /api/provider/:providerId`
  * Allows provider to update their profile

### client [ BONUS ]
* `GET /api/client`
  * Fetches all clients
* `POST /api/client`
  * Creates new client
* `GET /api/client/:clientId`
  * Fetches single existing client profile
* `PATCH /api/u/client/:clientId`
  * Allows client to update their profile

### services 
* `GET /api/service/:id`    (click a service tab on Home page)
  * Fetches that service in all locations
* `POST /api/service`
  * Creates new service

### skills
* `GET /api/skills`
    * Fetches all the skills
* `POST /api/skills/:id`
    * Creates a new skills
* `DELETE /api/skills/:id`
    * Delete a single skill

### lessons
* `Get /api/lessons`
    * Fetches all the lessons
* `Get /api/lesons/:id`
    * Fetches a single lesson

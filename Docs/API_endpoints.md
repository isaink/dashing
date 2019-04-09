**API Endpoints:**

*HTML application*

### Root
- GET /
  - loads React web app


*JSON API*

### provider
* `GET /api/u/provider`
  * Fetches all providers
* `POST /api/u/provider`
  * Creates new provider
* `GET /api/u/provider/:providerId`
  * Fetches single existing provider profile
* `PATCH /api/u/provider/:providerId`
  * Allows provider to update their profile

### client
* `GET /api/u/client`
  * Fetches all clients
* `POST /api/u/client`
  * Creates new client
* `GET /api/u/client/:clientId`
  * Fetches single existing client profile
* `PATCH /api/u/client/:clientId`
  * Allows client to update their profile

### service
* `GET /api/service/:serviceId`    (click a service tab on Home page)
  * Fetches that service in all locations
* `POST /api/service`
  * Creates new service
* `DELETE /api/service`                      (?)
  * Deletes service no longer offered


###

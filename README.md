# Portfolio-API

My portfolio RESTful APIs.

## Authentication

This API need an access token.
Please contact me for requesting an access.

## Profile API

Uri: /profile
    field: String
    value: [String]

CRUD (GET, POST, PUT, DELETE)
- Get all profiles.
    HTTP GET /profile
- Get a specify profile.
    HTTP GET /profile/:profile_id
- Add a new profile.
    HTTP POST /profile
- Update a specify profile.
    HTTP PUT /profile/:profile_id
- Delete a specify profile.
    HTTP DELETE /profile/:profile_id

## Experience API

Uri: /exp
    title: String
    desc: String
    date: Date
    photo: [String]

CRUD (GET, POST, PUT, DELETE)
- Get all experiences.
    HTTP GET /exp
- Get a specify experience.
    HTTP GET /exp/:exp_id
- Add a new experience.
    HTTP POST /exp
- Update a specify experience.
    HTTP PUT /exp/:exp_id
- Delete a specify experience.
    HTTP DELETE /exp/:exp_id

## Work API

Uri: /work
    name: String
    desc: String
    photo: [String]
    tag: [String]

CRUD (GET, POST, PUT, DELETE)
- Get all works.

    HTTP GET /work

- Get a specify work.

    HTTP GET /work/:work_id
    
- Add a new work.

    HTTP POST /work

- Update a specify work.

    HTTP PUT /work/:work_id

- Delete a specify work.

    HTTP DELETE /work/:work_id

---
Owner: Aaron Cho
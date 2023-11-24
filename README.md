# therap-ai-FE

## Done by Michiel Van Eynde

### Installation
using the command ````npm install```` installs all required packages and sets up the Angular environment.

### Running Application
with ````ng serve```` the application will be hosted at: [localhost:4200](http://localhost:4200)

### Building Application
To create a production version of the application use ````ng build````. This will create a ```/dist``` folder where the compiled files are located and is ready to be hosted. 

### Encryption

In [encryption-service.service.ts](src/app/shared/encryption-service.service.ts) the encryption and decryption happens.
It uses 2 environment variables to generate the cipher text.

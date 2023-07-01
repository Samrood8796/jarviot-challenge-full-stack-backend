# jarviot-challenge-full-stack-backend
> jarviot-challenge-full-stack-backend is a backend code which is used to retrive google drive datas. I used oath2.0 and google drive api for getting user details from google 
  
##Table of Contents
- Technologies used
- Getting Started
- Features
- Contact
  
##Technologies used
- Node.js
- expres.js
- oath2.0
- google drive api
- Git for Version control
- mongoDB (mongoose)
  
##Feature
- - **Link Google Drive**:
  - `/auth/google` 
    - The user can able to connect to their Google Drive account and access their files.
    - `/auth/google/callback`
    - it will Save the Token in the Backend Database which i used mongoDB.
- **Getting the Analytics**:
-  `/analytics`
    - it retrieves data from the Google Drive account and display analytics such as file type, file size, and storage usage.
    - It also showing the links to files and risk counter 
- **Revoke Google Drive Access**:
-  `/revoke`
    - The user can able to revoke the Drive Access API if they no longer wish to use the application uisng th eend point`.
    
##Getting Started 
To get started you can simply clone this **jarviot-challenge-full-stack-backend** repository and install the dependencies.
```bash
git clone https://github.com/samrood8796/jarvio-challenge-full-stack-backend
cd jarvio-challenge-full-stack-backend
```
Install dependencies with this command:
```bash
npm install
```

Create a .env file in the root directory of your project. Add environment-specific variables specified in '.env.example' file in the root directory

Run the application with this command:
```bash
npm start
```

##Contact
Created by[@Samrood]([url](https://www.linkedin.com/in/samrood-a-93b148227/)https://www.linkedin.com/in/samrood-a-93b148227/)feel free to contact me!

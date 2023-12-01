Interaugh(Katamoi) Project Deployment and Setup guide

 


# **Project Setup Documentation**

 


## **Prerequisites**

 

Before you begin, ensure that you have the following installed on your machine:

 


        `o`   Node.js (version 18)


        `o`   Yarn (version 1.20 or higher)


        `o`  [ OpenZeppelin](https://defender.openzeppelin.com/) defender account

 


### **Install Dependencies**


        ·  	Navigate to the project directory and install the project dependencies using Yarn:

 

yarn

 


### **Code Generation**


        ·  	Run the code generation script to generate necessary files:

 

yarn codegen

 


### **Build the Project**


        ·  	Build the project to prepare it for deployment:

 

yarn build


### **Setup Env**

 

The local .env file should be present in the root directory. The envs will be shared privately to the client.

 


### **Creating Relayer**


        ·  	Setup the env with the following variables from ‎[OpenZeppelin](https://defender.openzeppelin.com/) defender

 

TEAM_API_KEY

TEAM_API_SECRET

 


        ·  	Run the following code for creating a relayer in defender:

 

 yarn create-relayer

 


### **Creating Autotask**


        ·  	Run the following code for creating a webhook url in your defender:

 

yarn create-autotask

 


### **Setup webhook**


        ·  	Copy the webhook url from the[ OpenZeppelin](https://defender.openzeppelin.com/) defender dashboard

 

 

Use the url in below env:

 

VITE_WEBHOOK_URL


### **Development Mode**


        ·  	Start the project in development mode:

 

yarn dev

 

 

_This command will start a local development server, and you can view the project by opening your browser and navigating to http://localhost:5173 (or a different port if specified)._

 


## **Setting up Interaugh on Vercel**

 


### **Prerequisites**

Before you begin, make sure you have the following installed:



* [Node.js](https://nodejs.org/) (version 18)
* [Vercel CLI](https://vercel.com/docs/cli) (installed globally)

 


### **Initialize a Git Repository (Optional)**

If your project is not already a Git repository, you can initialize one:

 

git init

 


### **Configure Vercel Deployment**


        ·   	Run the following command to link your Vercel account and configure deployment settings:

 

vercel login

 

Follow the prompts to log in and configure your project. Choose the default settings for a static site when prompted.

 


### **Deploy to Vercel**


        ·   	After configuring, deploy the Interaugh app to Vercel:

 

vercel --prod

 


### **Follow the prompts to deploy to production.**

 


### 
        ·   	**Access the Deployed App - **Once the deployment is successful, Vercel will provide you with a unique URL where your app is hosted. Access it in your browser to view your deployed app.

 


### **Redeploying**

** **


        ·   	After making changes to your app, redeploy it by running:

 

vercel --prod

 

_This basic setup guide should help you deploy Interaugh app to Vercel. Adjustments might be necessary based on your project's specific requirements. Be sure to refer to the official documentation for React Vite and Vercel for more in-depth information and customization options:_



* _[Vite Documentation](https://vitejs.dev/)_
* _[Vercel Documentation](https://vercel.com/docs)_

 

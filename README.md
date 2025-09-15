# VisitLogApp
Individual project in the Cloudbased Applications course for the .NET developer program at Teknikhögskolan Göteborg
A simple project meant to teach us how to use Azure through a visit log system where you write your name and store it in Azure

# Description
Uses HTML and Javascript to create a frontpage with a form you can send your name and email into. The frontend, hosted on Github pages 
then sends the form to an endpoint in Azure Functions+Azure Storage that in turn handles the POST request and timestamps and stores the object in a table in the Azure SQL Database,

# Getting Started
This project is created on Windows 11 and .NET 9 on VSCode. You need an Azure subscription(in my case Azure Student), nothing needs to be downloaded for the frontend but for the backend you need the Azure Resources and Azure Functions extensions that allow you connect to Azure from the IDE.

# Installation
To run this program you would need to download the Backend and deploy it(easily doable through the extension in VSCode) to your Azure function as well as download the frontend and either run it locally or hosted on something like Github Pages. Anything else is created in Azure and not downloaded.
You'd also need to set up your local.settings.json file with any cors settings or connection strings you need

# Author
Thobias Kristiansson @00thokri

# Acknowledgements
This project was built mainly through following these Microsofts Azure tutorials
https://learn.microsoft.com/en-us/azure/azure-functions/how-to-create-function-vs-code?pivots=programming-language-csharp
https://learn.microsoft.com/en-us/azure/azure-sql/database/free-offer?view=azuresql
https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-azure-sql-output?tabs=isolated-process%2Cnodejs-v4%2Cpython-v2&pivots=programming-language-csharp
https://learn.microsoft.com/en-us/azure/azure-functions/functions-add-output-binding-azure-sql-vs-code?pivots=programming-language-csharp

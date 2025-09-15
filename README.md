# VisitLogApp
Individual project in the Cloudbased Applications course for the .NET developer program at Teknikhögskolan Göteborg
A simple project meant to teach us how to use Azure through a visit log system where you write your name and store it in Azure

#Description
Using HTML and Javascript to create a frontpage with a form you can send your name and email into. The frontend, hosted on Github pages 
then sends the object to and endpoint in Azure Functions that in turn handles the POST request and timestamps and stores the object in a table in the Azure SQL Database

#Getting Started
This project is created on Windows 11 and .NET 9 on VSCode. You need an Azure subscription(in this case Azure Student), nothing needs to be downloaded for the frontend but for the backend you need the Azure Resources and Azure Functions extensions that allow you connect to Azure from the IDE

#Author
Thobias Kristiansson @00thokri

#Acknowledgements
This project was built mainly through following Microsofts Azure tutorials
https://learn.microsoft.com/en-us/azure/azure-sql/database/free-offer?view=azuresql
https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cfunctionsv2&pivots=programming-language-csharp

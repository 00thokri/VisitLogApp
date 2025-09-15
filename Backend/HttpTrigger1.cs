using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Extensions.Sql;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace VisitLog.Function;

public class VisitModel
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Email { get; set; }

    public string? Time { get; set; }
}

public class OutputType
{
    [SqlOutput("Visitor", connectionStringSetting: "SqlConnectionString")]
    public VisitModel Visitor { get; set; }
    public HttpResponseData HttpResponse { get; set; }
}

public class HttpTrigger1
{
    private readonly ILogger<HttpTrigger1> _logger;

    public HttpTrigger1(ILogger<HttpTrigger1> logger)
    {
        _logger = logger;
    }

    [Function("HttpTrigger1")]
    public static async Task<OutputType> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "PostFunction")]
            HttpRequestData req,
        FunctionContext executionContext
    )
    {
        var logger = executionContext.GetLogger("HttpTrigger1");
        logger.LogInformation("C# HTTP trigger function processed a request.");

        string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
        VisitModel visitor = JsonSerializer.Deserialize<VisitModel>(requestBody);
        DateTime currentTime = DateTime.Now;
        visitor.Time = currentTime.ToString("yyyy-MM-dd HH:mm:ss");

        return new OutputType()
        {
            Visitor = visitor,
            HttpResponse = req.CreateResponse(HttpStatusCode.Created),
        };
    }
}

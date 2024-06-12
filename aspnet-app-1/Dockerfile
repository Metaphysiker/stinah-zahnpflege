FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env

WORKDIR /App

COPY . ./

RUN dotnet restore

RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /App
COPY --from=build-env /App/out .

EXPOSE 80

ENTRYPOINT ["dotnet", "webapi.dll"]

FROM mcr.microsoft.com/dotnet/sdk:8.0 as integration-stage

WORKDIR /App
RUN mkdir /webapi
COPY --from=runtime /App /webapi
COPY webapi-integration-entrypoint-script.sh .

ENTRYPOINT ["sh", "webapi-integration-entrypoint-script.sh"]

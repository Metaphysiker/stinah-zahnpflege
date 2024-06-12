echo "Running development-entrypoint.sh"
#cd dotnet ef database update
#ls
#dotnet ef database update --project WebApi
dotnet ef migrations script --idempotent --output /migrations.sql
echo "Database updated"
dotnet WebApi.dll

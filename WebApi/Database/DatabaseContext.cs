using Microsoft.EntityFrameworkCore;

public class DatabaseContext : DbContext
{
    public DbSet<Horse> Horses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            var Username = Environment.GetEnvironmentVariable("POSTGRES_USER");
            var Password = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD");
            var Database = Environment.GetEnvironmentVariable("POSTGRES_DB");
            optionsBuilder.UseNpgsql($"Host=postgres;Username={Username};Password={Password};Database={Database}");
        }
}

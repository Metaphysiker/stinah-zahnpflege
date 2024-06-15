using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApi.Migrations
{
    /// <inheritdoc />
    public partial class RemoveBeschlagen : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Beschlagen",
                table: "Horses");

            migrationBuilder.DropColumn(
                name: "BirthYear",
                table: "Horses");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Beschlagen",
                table: "Horses",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "BirthYear",
                table: "Horses",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}

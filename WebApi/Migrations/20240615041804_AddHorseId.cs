using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApi.Migrations
{
    /// <inheritdoc />
    public partial class AddHorseId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "HorseId",
                table: "Horses",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Horses_HorseId",
                table: "Horses",
                column: "HorseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Horses_Horses_HorseId",
                table: "Horses",
                column: "HorseId",
                principalTable: "Horses",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Horses_Horses_HorseId",
                table: "Horses");

            migrationBuilder.DropIndex(
                name: "IX_Horses_HorseId",
                table: "Horses");

            migrationBuilder.DropColumn(
                name: "HorseId",
                table: "Horses");
        }
    }
}
